import "server-only";
import { headers } from "next/headers";
import { auth } from "./auth.js";
import { pool } from "./db.js";
import { isAllowed, isDm } from "./allowlist.js";

/* All character reads and writes go through this file, and every one of them
   starts by resolving the caller from their session cookie.

   proxy.js already redirects signed-out visitors, but Next's own docs are
   explicit that the proxy is an optimistic check and not an authorization
   layer — a matcher edit can silently stop covering a route with no build
   error. So nothing here trusts that it ran. */

export async function currentUser() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;
  // Re-checked against the allowlist rather than trusted from sign-up, so
  // revoking someone takes effect on their very next request.
  if (!user?.email || !(await isAllowed(user.email))) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name || user.email,
    image: user.image || "",
    dm: isDm(user.email),
  };
}

async function requireUser() {
  const user = await currentUser();
  if (!user) throw new Error("You need to be signed in.");
  return user;
}

/* The single authorization rule for this feature: it's yours, or you're the
   DM. Written once so a new caller can't accidentally invent a weaker one. */
function canReach(user, ownerId) {
  return ownerId === user.id || user.dm;
}

function rowToCharacter(row) {
  return {
    ...row.data,
    id: row.id,
    updatedAt: Number(row.updated_at_ms),
    version: Number(row.version),
    ownerId: row.owner_id,
    ownerName: row.owner_name || "",
    updatedByName: row.updated_by_name || "",
    // Only meaningful to the DM, who is the only one who sees other people's.
    mine: undefined,
  };
}

const SELECT = `
  select c.id,
         c.owner_id,
         c.data,
         c.version,
         extract(epoch from c.updated_at) * 1000 as updated_at_ms,
         o.name  as owner_name,
         e.name  as updated_by_name
    from character_sheet c
    join "user" o on o.id = c.owner_id
    left join "user" e on e.id = c.updated_by_id
`;

/* A player sees their own. The DM sees everyone's, newest first, which is
   what makes the DM view possible without a second query path. */
export async function listCharacters() {
  const user = await requireUser();
  const { rows } = user.dm
    ? await pool.query(`${SELECT} order by o.name, c.updated_at desc`)
    : await pool.query(`${SELECT} where c.owner_id = $1 order by c.updated_at desc`, [
        user.id,
      ]);
  return rows.map((r) => ({ ...rowToCharacter(r), mine: r.owner_id === user.id }));
}

export async function getCharacter(id) {
  const user = await requireUser();
  const { rows } = await pool.query(`${SELECT} where c.id = $1`, [id]);
  const row = rows[0];
  /* A character you may not reach reports as missing rather than forbidden.
     "Forbidden" would confirm that id exists and belongs to someone. */
  if (!row || !canReach(user, row.owner_id)) return null;
  return { ...rowToCharacter(row), mine: row.owner_id === user.id };
}

/* Upsert. A character keeps the id the roster already gave it, so the same
   character can be saved from a phone and a laptop without forking.

   The owner is only set on insert — `owner_id` is never overwritten — so a DM
   editing a player's sheet can't accidentally take ownership of it. */
export async function saveCharacter(id, data, expectedVersion = null) {
  const user = await requireUser();

  const existing = await pool.query(
    "select owner_id, version from character_sheet where id = $1",
    [id]
  );
  if (existing.rows[0] && !canReach(user, existing.rows[0].owner_id)) {
    throw new Error("That character isn't yours.");
  }

  // Strip fields that belong to the row, not the sheet, so they can't be
  // spoofed by whatever the client happens to send.
  const clean = { ...data };
  for (const k of ["ownerId", "ownerName", "updatedByName", "mine", "version"]) {
    delete clean[k];
  }

  if (!existing.rows[0]) {
    const { rows } = await pool.query(
      `insert into character_sheet (id, owner_id, data, updated_by_id)
            values ($1, $2, $3, $2)
       on conflict (id) do nothing
        returning version`,
      [id, user.id, clean]
    );
    // A race inserted it first; fall through and treat it as an update.
    if (rows[0]) return { ok: true, version: Number(rows[0].version) };
  }

  /* The write only lands if the row is still at the version this edit was
     based on. Someone else saving in between bumps it, the update matches
     nothing, and their work is left intact instead of being overwritten. */
  const { rows } = await pool.query(
    `update character_sheet
        set data = $3,
            updated_at = now(),
            updated_by_id = $2,
            version = version + 1
      where id = $1
        and ($4::bigint is null or version = $4)
     returning version`,
    [id, user.id, clean, expectedVersion]
  );

  if (rows[0]) return { ok: true, version: Number(rows[0].version) };

  // No row updated and the character exists — somebody got there first.
  const current = await getCharacter(id);
  return { ok: false, conflict: true, server: current };
}

export async function deleteCharacter(id) {
  const user = await requireUser();
  const { rows } = await pool.query(
    "select owner_id from character_sheet where id = $1",
    [id]
  );
  if (!rows[0]) return false;
  if (!canReach(user, rows[0].owner_id)) throw new Error("That character isn't yours.");
  await pool.query("delete from character_sheet where id = $1", [id]);
  return true;
}

/* First sign-in migration: push whatever is already in this browser up to the
   server. Only inserts — an id that already exists on the server is left
   alone, so signing in on a second device can never overwrite newer work with
   a stale local copy. */
export async function uploadLocalCharacters(characters) {
  const user = await requireUser();
  if (!Array.isArray(characters) || characters.length === 0) return 0;

  let added = 0;
  for (const c of characters.slice(0, 50)) {
    if (!c || typeof c.id !== "string" || !c.id) continue;
    const clean = { ...c };
    delete clean.ownerId;
    delete clean.ownerName;
    delete clean.updatedByName;
    delete clean.mine;
    const { rowCount } = await pool.query(
      `insert into character_sheet (id, owner_id, data, updated_by_id)
            values ($1, $2, $3, $2)
       on conflict (id) do nothing`,
      [c.id, user.id, clean]
    );
    added += rowCount;
  }
  return added;
}
