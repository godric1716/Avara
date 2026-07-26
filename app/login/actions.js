"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signRole } from "../../lib/siteAuth";

export async function login(formData) {
  const password = String(formData.get("password") || "");
  const fromRaw = String(formData.get("from") || "/");
  const from = fromRaw.startsWith("/") ? fromRaw : "/";

  const secret = process.env.AVARA_AUTH_SECRET;
  const dmPassword = process.env.AVARA_DM_PASSWORD;
  const playerPassword = process.env.AVARA_PLAYER_PASSWORD;

  let role = null;
  if (dmPassword && password === dmPassword) role = "dm";
  else if (playerPassword && password === playerPassword) role = "player";

  if (!role || !secret) {
    redirect(`/login?error=1&from=${encodeURIComponent(from)}`);
  }

  const store = await cookies();
  store.set("avara_role", await signRole(role, secret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 90,
    path: "/",
  });

  redirect(from);
}
