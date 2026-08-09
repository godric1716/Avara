import { RACES } from "./races.js";
import { BACKGROUNDS } from "./backgrounds.js";

export { RACES, BACKGROUNDS };

/* Races and backgrounds share one URL space — /peoples/<slug> — because they
   share one home. That's only safe while every slug is unique across both,
   which validateEntries() is here to guarantee when the next batch lands. */
export const ALL_ENTRIES = [...RACES, ...BACKGROUNDS];

export function getEntry(slug) {
  return ALL_ENTRIES.find((e) => e.slug === slug) || null;
}

export function entriesOfKind(kind) {
  return ALL_ENTRIES.filter((e) => e.kind === kind);
}

/* Run by the test script rather than at import time — a malformed entry
   should fail a check that names the problem, not crash the whole site on a
   page nobody was even visiting. */
export function validateEntries() {
  const problems = [];
  const seen = new Set();

  for (const e of ALL_ENTRIES) {
    const label = e.name || e.slug || "(unnamed entry)";

    if (!e.slug) problems.push(`${label}: missing slug`);
    else if (!/^[a-z0-9-]+$/.test(e.slug)) {
      problems.push(`${label}: slug "${e.slug}" must be lowercase letters, numbers and hyphens`);
    }
    if (seen.has(e.slug)) problems.push(`duplicate slug "${e.slug}" — races and backgrounds share one URL space`);
    seen.add(e.slug);

    if (!["race", "background"].includes(e.kind)) {
      problems.push(`${label}: kind must be "race" or "background", got ${JSON.stringify(e.kind)}`);
    }
    if (!e.name) problems.push(`${e.slug}: missing name`);
    if (!Array.isArray(e.intro) || e.intro.length === 0) {
      problems.push(`${label}: needs at least one intro paragraph`);
    }
    if (e.tint && !/^#[0-9a-f]{6}$/i.test(e.tint)) {
      problems.push(`${label}: tint "${e.tint}" is not a 6-digit hex colour`);
    }

    if (e.kind === "race") {
      if (!Array.isArray(e.traits) || e.traits.length === 0) {
        problems.push(`${label}: a race needs traits`);
      }
      for (const t of e.traits || []) {
        if (!t.name || !t.desc) problems.push(`${label}: a trait is missing a name or description`);
      }
      for (const s of e.sections || []) {
        if (!s.title) problems.push(`${label}: a section is missing its title`);
        if (!Array.isArray(s.body) || s.body.length === 0) {
          problems.push(`${label}: section "${s.title}" has no body`);
        }
      }
    }

    if (e.kind === "background") {
      if (!e.skills) problems.push(`${label}: a background needs skill proficiencies`);
      if (!e.equipment) problems.push(`${label}: a background needs equipment`);
      if (!e.feature?.name || !e.feature?.desc) {
        problems.push(`${label}: a background needs a named feature with a description`);
      }
      /* The d6 tables are rolled at the table, so a short one is a real bug —
         a player rolling a 5 on a four-entry list gets nothing. */
      if ((e.personality || []).length !== 6) {
        problems.push(`${label}: personality traits should be 6 (a d6 table), got ${(e.personality || []).length}`);
      }
      for (const [field, want] of [["ideals", 4], ["bonds", 4], ["flaws", 4]]) {
        if ((e[field] || []).length !== want) {
          problems.push(`${label}: ${field} should be ${want}, got ${(e[field] || []).length}`);
        }
      }
      for (const i of e.ideals || []) {
        if (!i.text || !i.alignment) problems.push(`${label}: an ideal is missing text or alignment`);
      }
    }
  }

  return problems;
}
