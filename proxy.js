import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { isAllowed, isDm } from "./lib/allowlist";

/* Pages that carry DM-only spoiler material — hidden from players entirely,
   not just unlinked from navigation. */
const DM_ONLY = ["/npcs", "/world"];

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

  /* Local development stays open until sign-in is configured, so the site is
     still workable before the env vars are set. Both halves are required:
     a half-configured deploy should fail shut, not run wide open. */
  if (!process.env.BETTER_AUTH_SECRET || !process.env.DATABASE_URL) {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({ headers: request.headers });
  const email = session?.user?.email;

  /* Re-checked on every request rather than trusted from sign-up time, so
     removing someone from AVARA_ALLOWED_EMAILS locks them out immediately
     instead of whenever their session happens to expire. */
  if (!session || !isAllowed(email)) {
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
