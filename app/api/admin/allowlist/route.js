import { NextResponse } from "next/server";
import { currentUser } from "../../../../lib/characters";
import { isAllowed, isDm, allowedEmails } from "../../../../lib/allowlist";

/* Vercel marks the allowlist variables "Sensitive", so their values can't be
   read back from the dashboard or `vercel env pull`. That left no way to tell
   a failed write from a rejected player — both look identical from outside.

   This answers the one question that matters, for the DM only:
     /api/admin/allowlist              -> how many addresses are configured
     /api/admin/allowlist?email=x@y.z  -> would that address get in

   It never returns the list itself, so it can't be used to enumerate the
   table even if the gate above it were somehow bypassed. */
export async function GET(request) {
  const user = await currentUser();
  // Not 403: a non-DM shouldn't learn this route exists.
  if (!user || !user.dm) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const email = request.nextUrl.searchParams.get("email");
  const counts = {
    allowedCount: allowedEmails().size,
    dmCount: [...allowedEmails()].filter((e) => isDm(e)).length,
  };

  if (!email) return NextResponse.json(counts);

  return NextResponse.json({
    ...counts,
    email,
    canSignIn: isAllowed(email),
    isDm: isDm(email),
  });
}
