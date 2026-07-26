/* Signs a role ("player" | "dm") into a cookie value using HMAC-SHA256, so a
   visitor can't just set `avara_role=dm` in devtools to see DM-only pages.
   This is a shared-passphrase gate for a private table, not a real account
   system — there is one secret per role, not one per person. */

const encoder = new TextEncoder();

function bufToHex(buf) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return bufToHex(sig);
}

export async function signRole(role, secret) {
  return `${role}.${await hmac(secret, role)}`;
}

export async function verifyRoleToken(token, secret) {
  if (!token || !secret) return null;
  const dot = token.indexOf(".");
  if (dot < 0) return null;
  const role = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = await hmac(secret, role);
  return sig === expected ? role : null;
}
