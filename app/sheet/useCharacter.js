"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CLASS_DATA, firstSubclassKey } from "./data";
import { defaultSlots } from "./Companions";
import {
  fetchCharacters,
  pushCharacter,
  removeCharacter,
  importLocal,
} from "./actions";

const STORAGE_KEY = "avara-roster-v2";

/* The single-character key this replaced. It is read once to migrate and then
   left in place, never written and never cleared — it holds the only copy of
   whatever someone built before the roster existed, so it stays put as a
   manual fallback if a migration ever goes wrong. */
const LEGACY_KEY = "avara-character-v1";

function newId() {
  try {
    return crypto.randomUUID();
  } catch {
    // Older browsers, and any non-secure origin, where randomUUID is missing.
    return `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
  }
}

export function defaultCharacter() {
  return {
    /* Empty on purpose: the first render has to match the server's, so no id
       is minted until storage is read in an effect. */
    id: "",
    updatedAt: 0,
    name: "",
    level: 1,
    classId: "deathknight",
    subclass: firstSubclassKey("deathknight"),
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    hpCur: "",
    hpMax: "",
    ac: "",
    speed: "",
    resource: 0,
    tags: {},
    counters: {},
    feats: {},
    items: {},
    notes: "",
    fkSlots: defaultSlots(),
    fkActive: null,
    spellsPrepared: {},
    spellSlotsUsed: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    attacks: [],
    inventory: [],
    armorIndex: null,
    shieldEquipped: false,
    techniquesKnown: {},
    harmonyTracks: { Fire: 0, Earth: 0, Water: 0, Air: 0 },
    portrait: "",
  };
}

export function newCharacter() {
  return { ...defaultCharacter(), id: newId(), updatedAt: Date.now() };
}

/* Anything loaded from storage is untrusted — an older shape, a hand-edited
   value, or a class that no longer exists. Rebuild it against the defaults. */
function sanitize(raw) {
  const base = defaultCharacter();
  if (!raw || typeof raw !== "object") return { ...base, id: newId() };

  const classId = CLASS_DATA[raw.classId] ? raw.classId : base.classId;
  const subs = CLASS_DATA[classId].subclasses || {};
  const subclass = raw.subclass && subs[raw.subclass] ? raw.subclass : firstSubclassKey(classId);

  const level = clampInt(raw.level, 1, 20, 1);
  const abilities = { ...base.abilities };
  if (raw.abilities && typeof raw.abilities === "object") {
    for (const k of Object.keys(abilities)) {
      abilities[k] = clampInt(raw.abilities[k], 1, 30, 10);
    }
  }

  return {
    ...base,
    ...raw,
    // A character with no id can't be addressed by the roster at all, so one
    // is minted rather than dropping the character.
    id: typeof raw.id === "string" && raw.id ? raw.id : newId(),
    updatedAt: Number.isFinite(raw.updatedAt) ? raw.updatedAt : Date.now(),
    classId,
    subclass,
    level,
    abilities,
    resource: clampInt(raw.resource, 0, 999, 0),
    tags: isPlainObject(raw.tags) ? raw.tags : {},
    counters: isPlainObject(raw.counters) ? raw.counters : {},
    feats: isPlainObject(raw.feats) ? raw.feats : {},
    items: isPlainObject(raw.items) ? raw.items : {},
    notes: typeof raw.notes === "string" ? raw.notes : "",
    name: typeof raw.name === "string" ? raw.name : "",
    // Merge onto defaults so a slot added later doesn't come back undefined.
    fkSlots: { ...base.fkSlots, ...(isPlainObject(raw.fkSlots) ? raw.fkSlots : {}) },
    fkActive: typeof raw.fkActive === "string" ? raw.fkActive : null,
    spellsPrepared: isPlainObject(raw.spellsPrepared) ? raw.spellsPrepared : {},
    // Equipment is carried across a class change — a battleaxe is still a
    // battleaxe — unlike the class-scoped trackers reset in setClass.
    attacks: Array.isArray(raw.attacks) ? raw.attacks : [],
    inventory: Array.isArray(raw.inventory) ? raw.inventory : [],
    armorIndex: typeof raw.armorIndex === "string" ? raw.armorIndex : null,
    shieldEquipped: !!raw.shieldEquipped,
    techniquesKnown: isPlainObject(raw.techniquesKnown) ? raw.techniquesKnown : {},
    /* Only ever an inline image we encoded ourselves. Storage is editable by
       hand, so anything else — a remote URL, a javascript: scheme — is
       dropped rather than handed to an <img src>. */
    portrait:
      typeof raw.portrait === "string" && /^data:image\/(png|jpeg|webp|gif);base64,/.test(raw.portrait)
        ? raw.portrait
        : "",
    harmonyTracks: {
      ...base.harmonyTracks,
      ...(isPlainObject(raw.harmonyTracks)
        ? Object.fromEntries(
            Object.entries(raw.harmonyTracks).map(([el, n]) => [el, clampInt(n, 0, 5, 0)])
          )
        : {}),
    },
    spellSlotsUsed: {
      ...base.spellSlotsUsed,
      ...(isPlainObject(raw.spellSlotsUsed)
        ? Object.fromEntries(
            Object.entries(raw.spellSlotsUsed).map(([lvl, n]) => [lvl, clampInt(n, 0, 20, 0)])
          )
        : {}),
    },
  };
}

/* Reads the roster, falling back to the pre-roster single character, and
   finally to one empty sheet. Always returns at least one character so the
   rest of the sheet never has to handle an empty roster. */
function loadRoster() {
  let characters = [];
  let activeId = "";

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.characters)) {
        characters = parsed.characters.map(sanitize);
        activeId = typeof parsed.activeId === "string" ? parsed.activeId : "";
      }
    }
  } catch {
    /* corrupt or unavailable storage — fall through to the legacy key */
  }

  if (characters.length === 0) {
    try {
      const legacy = window.localStorage.getItem(LEGACY_KEY);
      if (legacy) characters = [sanitize(JSON.parse(legacy))];
    } catch {
      /* nothing salvageable — a fresh sheet is the honest outcome */
    }
  }

  if (characters.length === 0) characters = [newCharacter()];
  if (!characters.some((c) => c.id === activeId)) activeId = characters[0].id;

  return { characters, activeId };
}

/* Combines what this browser has with what the server has.

   Where both know a character, the newer `updatedAt` wins — that's the whole
   reason every edit stamps it. Where only one side knows it, it's kept:
   a character that exists only locally hasn't uploaded yet, and one that
   exists only on the server was made on another device. Nothing is dropped
   just for being unfamiliar to one side. */
function mergeRosters(local, server) {
  const byId = new Map();
  for (const c of local) byId.set(c.id, c);

  for (const s of server) {
    const mine = byId.get(s.id);
    const clean = sanitize(s);
    if (!mine || (clean.updatedAt || 0) >= (mine.updatedAt || 0)) {
      byId.set(s.id, { ...clean, ownerName: s.ownerName, updatedByName: s.updatedByName, mine: s.mine });
    } else {
      // Local copy is newer; keep it but carry the server's ownership labels.
      byId.set(s.id, { ...mine, ownerName: s.ownerName, updatedByName: s.updatedByName, mine: s.mine });
    }
  }

  return [...byId.values()].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
}

function isPlainObject(v) {
  return !!v && typeof v === "object" && !Array.isArray(v);
}

function clampInt(v, min, max, fallback) {
  const n = parseInt(v, 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

export function useCharacter() {
  const [roster, setRoster] = useState(() => ({
    characters: [defaultCharacter()],
    activeId: "",
  }));
  // Rendered markup must match the server on first paint, so storage is read
  // in an effect rather than during initial state.
  const [loaded, setLoaded] = useState(false);
  /* "local"   — signed out, or the server hasn't answered yet
     "syncing" — a push is in flight
     "synced"  — the server has everything
     "error"   — the last push failed; localStorage still has the work */
  const [syncState, setSyncState] = useState("local");
  const saveTimer = useRef(null);
  const pushTimer = useRef(null);
  const pendingIds = useRef(new Set());

  /* Load order matters. Local storage is read first and rendered immediately
     so the sheet is usable offline and on a slow connection, then the server
     is merged in on top once it answers. */
  useEffect(() => {
    const local = loadRoster();
    setRoster(local);
    setLoaded(true);

    let cancelled = false;
    (async () => {
      try {
        // Push anything this browser has that the server has never seen.
        // importLocal only inserts, so this can't clobber another device.
        await importLocal(local.characters);
        const res = await fetchCharacters();
        if (cancelled || !res.ok) return;

        setRoster((r) => {
          const merged = mergeRosters(r.characters, res.characters);
          const activeId = merged.some((c) => c.id === r.activeId)
            ? r.activeId
            : merged[0]?.id || "";
          return { characters: merged, activeId };
        });
        setSyncState("synced");
      } catch {
        /* Signed out, offline, or the action failed. The sheet keeps working
           against localStorage — this is a sync feature, not a dependency. */
        if (!cancelled) setSyncState("local");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ version: 2, ...roster })
        );
      } catch {
        /* quota or private mode — the sheet still works in memory */
      }
    }, 250);
    return () => clearTimeout(saveTimer.current);
  }, [roster, loaded]);

  /* Server pushes are debounced harder than the local save. Typing a name is
     a keystroke a character, and each one is a round trip otherwise. */
  useEffect(() => {
    if (!loaded || syncState === "local") return;
    clearTimeout(pushTimer.current);
    pushTimer.current = setTimeout(async () => {
      const ids = [...pendingIds.current];
      pendingIds.current.clear();
      if (ids.length === 0) return;
      setSyncState("syncing");
      try {
        for (const id of ids) {
          const c = roster.characters.find((x) => x.id === id);
          if (c) await pushCharacter(id, c);
        }
        setSyncState("synced");
      } catch {
        setSyncState("error");
      }
    }, 1200);
    return () => clearTimeout(pushTimer.current);
  }, [roster, loaded, syncState]);

  const character = useMemo(
    () =>
      roster.characters.find((c) => c.id === roster.activeId) ||
      roster.characters[0],
    [roster]
  );

  /* The summary the picker renders — only what a player needs to tell two
     sheets apart. */
  const rosterSummary = useMemo(
    () =>
      roster.characters.map((c) => ({
        id: c.id,
        name: c.name,
        level: c.level,
        classId: c.classId,
        classLabel: CLASS_DATA[c.classId]?.label || "",
        portrait: c.portrait,
        isActive: c.id === character.id,
      })),
    [roster.characters, character.id]
  );

  /* Every edit funnels through here so `updatedAt` can never drift from the
     data — Part 4 will use it to decide which side of a sync is newer. */
  const patchActive = useCallback((fn) => {
    setRoster((r) => {
      const idx = r.characters.findIndex((c) => c.id === r.activeId);
      const i = idx < 0 ? 0 : idx;
      const next = r.characters.slice();
      next[i] = { ...fn(next[i]), updatedAt: Date.now() };
      // Queue this one for the next push rather than sending the whole
      // roster — an edit to one character shouldn't rewrite the other four.
      pendingIds.current.add(next[i].id);
      return { ...r, characters: next };
    });
  }, []);

  const update = useCallback(
    (patch) => patchActive((c) => ({ ...c, ...patch })),
    [patchActive]
  );

  const setAbility = useCallback(
    (key, value) =>
      patchActive((c) => ({ ...c, abilities: { ...c.abilities, [key]: value } })),
    [patchActive]
  );

  // Switching class invalidates the subclass and every class-scoped tracker.
  const setClass = useCallback(
    (classId) =>
      patchActive((c) => ({
        ...c,
        classId,
        subclass: firstSubclassKey(classId),
        resource: 0,
        tags: {},
        counters: {},
        spellsPrepared: {},
        spellSlotsUsed: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        techniquesKnown: {},
        harmonyTracks: { Fire: 0, Earth: 0, Water: 0, Air: 0 },
      })),
    [patchActive]
  );

  const toggleIn = useCallback(
    (bucket, key) =>
      patchActive((c) => {
        const next = { ...c[bucket] };
        if (next[key]) delete next[key];
        else next[key] = true;
        return { ...c, [bucket]: next };
      }),
    [patchActive]
  );

  // Blanks the active sheet in place. The id survives so this stays a reset
  // rather than a silent delete-and-replace.
  const reset = useCallback(
    () => patchActive((c) => ({ ...defaultCharacter(), id: c.id })),
    [patchActive]
  );

  const selectCharacter = useCallback((id) => {
    setRoster((r) =>
      r.characters.some((c) => c.id === id) ? { ...r, activeId: id } : r
    );
  }, []);

  const createCharacter = useCallback(() => {
    const fresh = newCharacter();
    pendingIds.current.add(fresh.id);
    setRoster((r) => ({
      characters: [...r.characters, fresh],
      activeId: fresh.id,
    }));
  }, []);

  const duplicateCharacter = useCallback((id) => {
    setRoster((r) => {
      const source = r.characters.find((c) => c.id === id);
      if (!source) return r;
      const copy = {
        ...source,
        id: newId(),
        updatedAt: Date.now(),
        name: source.name ? `${source.name} (copy)` : "",
      };
      // Placed beside its original rather than at the end, so a duplicate made
      // to try a different build sits next to the one it came from.
      const at = r.characters.findIndex((c) => c.id === id) + 1;
      const characters = r.characters.slice();
      characters.splice(at, 0, copy);
      pendingIds.current.add(copy.id);
      return { characters, activeId: copy.id };
    });
  }, []);

  const deleteCharacter = useCallback((id) => {
    /* Deliberately not awaited. The row is gone from the UI immediately; if
       the server call fails the character reappears on the next load, which
       is the safer way round for something that can't be undone. */
    pendingIds.current.delete(id);
    removeCharacter(id).catch(() => {});
    setRoster((r) => {
      const at = r.characters.findIndex((c) => c.id === id);
      if (at < 0) return r;
      const characters = r.characters.filter((c) => c.id !== id);
      // The roster is never empty: deleting the last sheet leaves a blank one
      // rather than a page with nothing to render.
      if (characters.length === 0) {
        const fresh = newCharacter();
        return { characters: [fresh], activeId: fresh.id };
      }
      const activeId =
        r.activeId === id
          ? characters[Math.min(at, characters.length - 1)].id
          : r.activeId;
      return { characters, activeId };
    });
  }, []);

  return {
    character,
    roster: rosterSummary,
    loaded,
    syncState,
    update,
    setAbility,
    setClass,
    toggleIn,
    reset,
    selectCharacter,
    createCharacter,
    duplicateCharacter,
    deleteCharacter,
  };
}
