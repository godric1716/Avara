/* Creates the page view log. Safe to re-run.

   Keyed by email rather than user id, because the question being answered is
   "how many times has each email visited" — and because a visit history that
   vanishes when an account is removed is a worse answer than one that
   survives it. */

import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

await pool.query(`
  create table if not exists page_view (
    id        bigserial primary key,
    email     text not null,
    path      text not null,
    viewed_at timestamptz not null default now()
  );

  -- The two questions the stats page asks: per-person totals, and recent
  -- activity across everyone.
  create index if not exists page_view_email_idx on page_view (email, viewed_at desc);
  create index if not exists page_view_time_idx  on page_view (viewed_at desc);
`);

const { rows } = await pool.query(
  "select count(*)::int n, min(viewed_at) first, max(viewed_at) last from page_view"
);
console.log("page_view ready —", rows[0].n, "rows");
if (rows[0].n > 0) {
  console.log("  spanning", rows[0].first.toISOString().slice(0, 16), "→", rows[0].last.toISOString().slice(0, 16));
}

await pool.end();
