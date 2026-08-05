"use server";

import {
  currentUser,
  listCharacters,
  saveCharacter,
  deleteCharacter,
  uploadLocalCharacters,
} from "../../lib/characters";

/* The client's whole surface for talking to the server about characters.

   Every one of these re-derives the caller from their session inside
   lib/characters — none of them take a user id as an argument. That's
   deliberate: an action that accepted "whose characters?" from the browser
   would be a way to read someone else's by guessing. */

export async function whoAmI() {
  const user = await currentUser();
  if (!user) return null;
  // Email is deliberately not returned — the client only needs to know who
  // you are and whether you're the DM.
  return { id: user.id, name: user.name, image: user.image, dm: user.dm };
}

export async function fetchCharacters() {
  try {
    return { ok: true, characters: await listCharacters() };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

/* Returns { ok, version } on success, or { conflict: true, server } when the
   character changed underneath this edit — the client decides which wins. */
export async function pushCharacter(id, data, expectedVersion = null) {
  try {
    return await saveCharacter(id, data, expectedVersion);
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

export async function removeCharacter(id) {
  try {
    return { ok: await deleteCharacter(id) };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

export async function importLocal(characters) {
  try {
    return { ok: true, added: await uploadLocalCharacters(characters) };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
