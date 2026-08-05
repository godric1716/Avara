import { betterAuth } from "better-auth";
import { APIError } from "better-auth/api";
import { pool } from "./db.js";
import { isAllowed, recordAccessRequest } from "./allowlist.js";

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
          if (await isAllowed(user.email)) return { data: user };

          /* Not on the list: log the attempt for the DM to approve, then
             still refuse. Recording rather than admitting means a stranger
             signing in leaves a row the DM can deny — not a user account,
             a session, or any access to the site. */
          await recordAccessRequest(user.email, user.name);
          throw new APIError("FORBIDDEN", {
            message:
              "Your request has been sent to the DM. You'll be able to sign in once it's approved.",
          });
        },
      },
    },
  },
});
