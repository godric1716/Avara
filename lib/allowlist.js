import { pool } from "./db.js";

/* Who is allowed to sign in.

   Two sources, on purpose:

   AVARA_ALLOWED_EMAILS is the bootstrap. It exists so the DM can always get
   in even if the database is empty, unreachable, or has just been migrated —
   losing access to your own approval queue would be unrecoverable through
   the UI.

   The access_request table is everything after that: a player signs in, the
   attempt is recorded, the DM approves, and they're in. No redeploy, no
   environment variable, no silent failure of the kind that locked Ice out. */

function parseList(raw) {
  return new Set(
    String(raw || "")
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );
}

export function allowedEmails() {
  return parseList(process.env.AVARA_ALLOWED_EMAILS);
}

export function isAllowedByEnv(email) {
  if (!email) return false;
  return allowedEmails().has(String(email).trim().toLowerCase());
}

const norm = (e) => String(e || "").trim().toLowerCase();

/* Approved members are cached briefly. proxy.js re-checks access on every
   request, and without this that's a database round trip per navigation. Ten
   seconds is short enough that revoking someone still takes effect while
   they're looking at the page. */
let cache = { at: 0, set: new Set() };
const CACHE_MS = 10_000;

async function approvedSet() {
  if (Date.now() - cache.at < CACHE_MS) return cache.set;
  try {
    const { rows } = await pool.query(
      "select email from access_request where status = 'approved'"
    );
    cache = { at: Date.now(), set: new Set(rows.map((r) => norm(r.email))) };
  } catch {
    /* Database unreachable. Fall back to the env list rather than locking
       everyone out — including the DM, who would then have no way to fix it. */
    cache = { at: Date.now(), set: new Set() };
  }
  return cache.set;
}

function invalidate() {
  cache = { at: 0, set: new Set() };
}

export async function isAllowed(email) {
  if (!email) return false;
  if (isAllowedByEnv(email)) return true;
  return (await approvedSet()).has(norm(email));
}

/* Who sees the DM-only pages — /npcs and /world, which carry spoilers.

   Deliberately env-only and never database-backed: promoting someone to DM
   must not be possible through a web form, including by the DM's own account
   being compromised. Also fails closed. */
export function isDm(email) {
  if (!email) return false;
  return parseList(process.env.AVARA_DM_EMAILS).has(norm(email));
}

/* Records a sign-in attempt from someone not yet approved.

   Never overwrites a decision: a denied person retrying does not quietly
   reset themselves to pending, or "deny" would only ever last until they
   clicked the button again. */
export async function recordAccessRequest(email, name) {
  const e = norm(email);
  if (!e) return;
  try {
    await pool.query(
      `insert into access_request (email, name, status, requested_at)
            values ($1, $2, 'pending', now())
       on conflict (email) do update
              set name = coalesce(excluded.name, access_request.name),
                  requested_at = now()
            where access_request.status = 'pending'`,
      [e, name || null]
    );
  } catch {
    /* A failure here must not turn into a successful sign-in. The caller
       rejects regardless of whether this row was written. */
  }
}

export async function listAccessRequests() {
  const { rows } = await pool.query(
    `select email, name, status, requested_at, decided_at, decided_by
       from access_request
      order by case status when 'pending' then 0 else 1 end,
               requested_at desc`
  );
  return rows.map((r) => ({
    email: r.email,
    name: r.name || "",
    status: r.status,
    requestedAt: r.requested_at?.toISOString() || null,
    decidedAt: r.decided_at?.toISOString() || null,
    decidedBy: r.decided_by || "",
  }));
}

export async function decideAccessRequest(email, status, decidedBy) {
  if (!["approved", "denied", "pending"].includes(status)) {
    throw new Error("Unknown decision.");
  }
  const e = norm(email);
  await pool.query(
    `insert into access_request (email, status, requested_at, decided_at, decided_by)
          values ($1, $2, now(), now(), $3)
     on conflict (email) do update
            set status = excluded.status,
                decided_at = now(),
                decided_by = excluded.decided_by`,
    [e, status, decidedBy || null]
  );
  // Otherwise an approval takes up to CACHE_MS to work, which reads as broken.
  invalidate();
}

export async function removeAccessRequest(email) {
  await pool.query("delete from access_request where email = $1", [norm(email)]);
  invalidate();
}
