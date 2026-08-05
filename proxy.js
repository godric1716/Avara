import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { isAllowed, isDm } from "./lib/allowlist";

/* Pages that carry DM-only spoiler material — hidden from players entirely,
   not just unlinked from navigation. */
const DM_ONLY = ["/npcs", "/world", "/players", "/api/admin"];

/* Paths that must stay reachable without a session, or nobody could ever get
   one. /api/auth is the whole sign-in flow, Google's callback included —
   gating it would redirect the callback to the login page and loop forever. */
const PUBLIC = ["/login", "/api/auth"];

function matches(pathname, list) {
  return list.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (matches(pathname, PUBLIC)) return NextResponse.next();

  /* Opening the gate has to be an explicit decision, never an inference from
     a missing variable.

     The previous version of this file turned the gate off when its secret was
     absent, so a deploy that lost one env var served the DM's spoiler pages
     to anyone — silently, with no error anywhere. A misconfigured deploy must
     fail shut. AVARA_AUTH_DISABLED exists for working on the site offline and
     is the only way through. */
  if (process.env.AVARA_AUTH_DISABLED === "1") return NextResponse.next();

  const session = await auth.api.getSession({ headers: request.headers });
  const email = session?.user?.email;

  /* Re-checked on every request rather than trusted from sign-up time, so
     removing someone from AVARA_ALLOWED_EMAILS locks them out immediately
     instead of whenever their session happens to expire. */
  if (!session || !(await isAllowed(email))) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.search = "";
    url.searchParams.set("from", pathname);
    if (session) url.searchParams.set("error", "denied");
    return NextResponse.redirect(url);
  }

  if (matches(pathname, DM_ONLY) && !isDm(email)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
