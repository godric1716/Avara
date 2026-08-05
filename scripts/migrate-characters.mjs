/* Creates the character storage table. Safe to re-run — everything is
   IF NOT EXISTS.

   Deliberately named character_sheet, not character: CHARACTER is a reserved
   word in Postgres (it's a built-in type), so a table called that needs
   quoting in every single query forever. One rename now avoids that. */

import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const SQL = `
create table if not exists character_sheet (
  id            text primary key,
  owner_id      text not null references "user"(id) on delete cascade,
  data          jsonb not null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  -- Who last wrote to it. Null means nobody has since the column existed.
  -- Set null on delete so removing a DM never deletes a player's character.
  updated_by_id text references "user"(id) on delete set null
);

-- Every listing is "the characters belonging to this person", so this is the
-- one index that matters.
create index if not exists character_sheet_owner_idx
  on character_sheet (owner_id, updated_at desc);
`;

const rows = await pool.query(SQL).then(
  () =>
    pool.query(`
      select column_name, data_type, is_nullable
      from information_schema.columns
      where table_name = 'character_sheet'
      order by ordinal_position
    `)
);

console.log("character_sheet:");
for (const r of rows.rows) {
  console.log(
    `  ${r.column_name.padEnd(14)} ${r.data_type}${r.is_nullable === "NO" ? " not null" : ""}`
  );
}

await pool.end();
