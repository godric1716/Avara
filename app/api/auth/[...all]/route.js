import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "../../../../lib/auth";

/* Every auth endpoint lives under this one catch-all: the Google redirect,
   the callback at /api/auth/callback/google, session reads, and sign-out. */
export const { GET, POST } = toNextJsHandler(auth);
