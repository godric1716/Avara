import { NextResponse } from "next/server";
import { verifyRoleToken } from "./lib/siteAuth";

/* Pages that carry DM-only spoiler material — hidden from the player role
   entirely, not just unlinked from navigation. */
const DM_ONLY = ["/npcs", "/world"];

function isDmOnly(pathname) {
  return DM_ONLY.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/login") {
    return NextResponse.next();
  }

  const secret = process.env.AVARA_AUTH_SECRET;

  // No secret configured — gate is off. This keeps local development and
  // preview builds open until the three env vars are set on the real deploy.
  if (!secret) {
    return NextResponse.next();
  }

  const token = request.cookies.get("avara_role")?.value;
  const role = await verifyRoleToken(token, secret);

  if (!role) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (isDmOnly(pathname) && role !== "dm") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.delete("from");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
