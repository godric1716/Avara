import { Pool } from "pg";

/* One connection pool per process, in its own module.

   It used to live in lib/auth.js, but the allowlist now reads approved
   members from the database and lib/auth.js imports the allowlist — putting
   the pool in either one makes them import each other in a circle. */
const globalForPool = globalThis;

export const pool =
  globalForPool.__avaraPool ||
  new Pool({ connectionString: process.env.DATABASE_URL });

if (!globalForPool.__avaraPool) globalForPool.__avaraPool = pool;
