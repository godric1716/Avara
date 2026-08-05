"use client";

import { createAuthClient } from "better-auth/react";

/* No baseURL: the client talks to the same origin it was served from, so this
   works on localhost and on Vercel without knowing which one it is. */
export const authClient = createAuthClient();

export const { signIn, signOut, useSession } = authClient;
