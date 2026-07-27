"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CLASS_DATA, firstSubclassKey } from "./data";
import { defaultSlots } from "./Companions";

const STORAGE_KEY = "avara-character-v1";

export function defaultCharacter() {
  return {
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
  };
}

/* Anything loaded from storage is untrusted — an older shape, a hand-edited
   value, or a class that no longer exists. Rebuild it against the defaults. */
function sanitize(raw) {
  const base = defaultCharacter();
  if (!raw || typeof raw !== "object") return base;

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

function isPlainObject(v) {
  return !!v && typeof v === "object" && !Array.isArray(v);
}

function clampInt(v, min, max, fallback) {
  const n = parseInt(v, 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

export function useCharacter() {
  const [character, setCharacter] = useState(defaultCharacter);
  // Rendered markup must match the server on first paint, so storage is read
  // in an effect rather than during initial state.
  const [loaded, setLoaded] = useState(false);
  const saveTimer = useRef(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCharacter(sanitize(JSON.parse(raw)));
    } catch {
      /* corrupt or unavailable storage — fall back to defaults */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
      } catch {
        /* quota or private mode — the sheet still works in memory */
      }
    }, 250);
    return () => clearTimeout(saveTimer.current);
  }, [character, loaded]);

  const update = useCallback((patch) => {
    setCharacter((c) => ({ ...c, ...patch }));
  }, []);

  const setAbility = useCallback((key, value) => {
    setCharacter((c) => ({ ...c, abilities: { ...c.abilities, [key]: value } }));
  }, []);

  // Switching class invalidates the subclass and every class-scoped tracker.
  const setClass = useCallback((classId) => {
    setCharacter((c) => ({
      ...c,
      classId,
      subclass: firstSubclassKey(classId),
      resource: 0,
      tags: {},
      counters: {},
      spellsPrepared: {},
      spellSlotsUsed: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    }));
  }, []);

  const toggleIn = useCallback((bucket, key) => {
    setCharacter((c) => {
      const next = { ...c[bucket] };
      if (next[key]) delete next[key];
      else next[key] = true;
      return { ...c, [bucket]: next };
    });
  }, []);

  const reset = useCallback(() => setCharacter(defaultCharacter()), []);

  return { character, loaded, update, setAbility, setClass, toggleIn, reset };
}
