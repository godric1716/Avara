"use server";

import { revalidatePath } from "next/cache";
import { currentUser } from "../../lib/characters";
import { decideAccessRequest, removeAccessRequest, isDm } from "../../lib/allowlist";

/* Every action re-checks DM status from the session. The page already refuses
   non-DMs, but a server action is a public endpoint — anyone who knows its
   name can call it, so the page having rendered proves nothing. */
async function requireDm() {
  const user = await currentUser();
  if (!user || !user.dm) throw new Error("Not allowed.");
  return user;
}

export async function approve(email) {
  const dm = await requireDm();
  /* Guard against approving a DM address through the web form. isDm is
     env-only by design; this makes sure approval can't be used as a back
     door to that list either. */
  if (isDm(email) && email !== dm.email) {
    throw new Error("DM access is configured in the environment, not here.");
  }
  await decideAccessRequest(email, "approved", dm.email);
  revalidatePath("/players");
  return { ok: true };
}

export async function deny(email) {
  const dm = await requireDm();
  await decideAccessRequest(email, "denied", dm.email);
  revalidatePath("/players");
  return { ok: true };
}

export async function forget(email) {
  await requireDm();
  await removeAccessRequest(email);
  revalidatePath("/players");
  return { ok: true };
}
