/* Creates the access request table and seeds it from AVARA_ALLOWED_EMAILS, so
   the players already approved by hand don't have to ask again.
   Safe to re-run. */

import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

await pool.query(`
  create table if not exists access_request (
    -- Email is the key rather than a user id: a request exists before there
    -- is any user, and refusing one must not create an account.
    email        text primary key,
    name         text,
    status       text not null default 'pending'
                 check (status in ('pending','approved','denied')),
    requested_at timestamptz not null default now(),
    decided_at   timestamptz,
    decided_by   text
  );

  create index if not exists access_request_status_idx
    on access_request (status, requested_at desc);
`);

/* Seed the env allowlist as approved. The env list keeps working regardless —
   it's the bootstrap — but seeding means the DM sees the whole table in one
   place instead of half in a variable and half in the database. */
const seed = String(process.env.AVARA_ALLOWED_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

for (const email of seed) {
  await pool.query(
    `insert into access_request (email, status, requested_at, decided_at, decided_by)
          values ($1, 'approved', now(), now(), 'seeded from AVARA_ALLOWED_EMAILS')
     on conflict (email) do nothing`,
    [email]
  );
}

const { rows } = await pool.query(
  "select status, count(*)::int n from access_request group by status order by status"
);
console.log("access_request seeded:");
for (const r of rows) console.log(`  ${r.status.padEnd(9)} ${r.n}`);
console.log(`  (seeded ${seed.length} from the env allowlist)`);

await pool.end();
