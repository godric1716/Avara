import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { Pool } from "pg";
import { isAllowed } from "./allowlist";

/* One connection pool per process. Next re-evaluates modules on every hot
   reload in development, so the pool is cached on globalThis — without this,
   an afternoon of editing opens pool after pool until Neon starts refusing
   connections. */
const globalForPool = globalThis;
const pool =
  globalForPool.__avaraPool ||
  new Pool({ connectionString: process.env.DATABASE_URL });
if (!globalForPool.__avaraPool) globalForPool.__avaraPool = pool;

export { pool };

/* Google is only wired up once both halves of the credential exist. A provider
   configured with `undefined` fails at request time with an error that points
   at Google rather than at the real cause, which is a missing env var. */
const socialProviders =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
      }
    : {};

export const auth = betterAuth({
  database: pool,
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  socialProviders,

  // Google sign-in only. No passwords means no password to store, leak, or
  // reset — the whole reason this was the recommended option.
  emailAndPassword: { enabled: false },

  databaseHooks: {
    user: {
      create: {
        /* The gate. Runs before a row is ever written, so a Google account
           that isn't on the list never becomes a user at all — there is no
           orphaned account left behind to clean up or to sign in later. */
        before: async (user) => {
          if (!isAllowed(user.email)) {
            throw new APIError("FORBIDDEN", {
              message: "That Google account isn't on the Avara player list.",
            });
          }
          return { data: user };
        },
      },
    },
  },
});
