import { SUBCLASSES } from "./subclasses.js";
import { VARRA_RACES } from "./races.js";
import { VARRA_BACKGROUNDS } from "./backgrounds.js";
import { VARRA_ITEMS, VARRA_FEATS } from "./gear.js";

export { SUBCLASSES, VARRA_RACES, VARRA_BACKGROUNDS, VARRA_ITEMS, VARRA_FEATS };

/* One expansion, one palette. Every page in this section uses these two
   colours rather than a colour per entry — ten subclass accents that clashed
   with neither each other nor the nine class accents already on the site was
   never going to work, and a sourcebook should read as one book.

   Porphyry over gold, deliberately: gold measured 38 from the Undying
   Sovereign's accent, close enough that the whole expansion would have read
   as that class's colour. Porphyry sits 87 from its nearest neighbour, and
   was the stone reserved for Rhovian emperors. Gold survives as the
   secondary, used only for rules and numerals where the quantity is small
   enough that the proximity doesn't register. */
export const VARRA_ACCENT = "#8c4a5f";
export const VARRA_GOLD = "#c8a24a";

/* Subclasses, races and backgrounds share /varra/<slug>. Items and feats
   don't get their own pages — they're reference lists, shown in full on the
   section index. */
export const VARRA_ENTRIES = [
  ...SUBCLASSES,
  ...VARRA_RACES,
  ...VARRA_BACKGROUNDS,
];

export function getVarraEntry(slug) {
  return VARRA_ENTRIES.find((e) => e.slug === slug) || null;
}

export function varraOfKind(kind) {
  return VARRA_ENTRIES.filter((e) => e.kind === kind);
}

/* The classes this book covers. Kept explicit rather than derived so the
   three it doesn't cover — Bard, Monk, Artificer — are visible as a gap
   rather than something you'd only notice by counting. */
export const COVERED_CLASSES = SUBCLASSES.map((s) => s.dndClass);
export const UNCOVERED_CLASSES = ["Bard", "Monk", "Artificer"];

export function validateVarra() {
  const problems = [];
  const seen = new Set();

  for (const e of VARRA_ENTRIES) {
    const label = e.name || e.slug || "(unnamed)";
    if (!e.slug) problems.push(`${label}: missing slug`);
    else if (!/^[a-z0-9-]+$/.test(e.slug)) {
      problems.push(`${label}: slug "${e.slug}" must be lowercase, numbers and hyphens`);
    }
    if (seen.has(e.slug)) problems.push(`duplicate slug "${e.slug}" — this section shares one URL space`);
    seen.add(e.slug);

    if (!["subclass", "race", "background"].includes(e.kind)) {
      problems.push(`${label}: unexpected kind ${JSON.stringify(e.kind)}`);
    }
    if (!Array.isArray(e.intro) || e.intro.length === 0) {
      problems.push(`${label}: needs at least one intro paragraph`);
    }

    if (e.kind === "subclass") {
      if (!e.dndClass) problems.push(`${label}: missing dndClass`);
      if (!e.typeLabel) problems.push(`${label}: missing typeLabel`);
      if (!Array.isArray(e.features) || e.features.length === 0) {
        problems.push(`${label}: a subclass needs features`);
      }
      /* Every level named in the progression table must have at least one
         feature written up, or the table promises something the page can't
         show. */
      for (const row of e.levels || []) {
        if (!(e.features || []).some((f) => f.lvl === row.lvl)) {
          problems.push(`${label}: level ${row.lvl} is in the table but has no feature entry`);
        }
      }
      for (const f of e.features || []) {
        if (!f.name || !f.desc) problems.push(`${label}: a feature is missing a name or description`);
        if (!(e.levels || []).some((r) => r.lvl === f.lvl)) {
          problems.push(`${label}: feature "${f.name}" is at level ${f.lvl}, which the table doesn't list`);
        }
      }
    }

    if (e.kind === "race" && (!Array.isArray(e.traits) || e.traits.length === 0)) {
      problems.push(`${label}: a race needs traits`);
    }

    if (e.kind === "background") {
      if (!e.skills) problems.push(`${label}: a background needs skills`);
      if (!e.feature?.name || !e.feature?.desc) {
        problems.push(`${label}: a background needs a named feature`);
      }
    }
  }

  /* Items and feats are pinned to the sheet's Loadout by name, so a
     collision there would make two different things indistinguishable. */
  const gearNames = [...VARRA_ITEMS, ...VARRA_FEATS].map((g) => g.name);
  const gearDupes = gearNames.filter((n, i) => gearNames.indexOf(n) !== i);
  if (gearDupes.length) problems.push(`duplicate item/feat names: ${gearDupes.join(", ")}`);

  for (const g of [...VARRA_ITEMS, ...VARRA_FEATS]) {
    if (!g.name || !g.desc) problems.push(`gear entry ${g.slug || "(unnamed)"} is missing a name or description`);
  }

  const classes = SUBCLASSES.map((s) => s.dndClass);
  const classDupes = classes.filter((c, i) => classes.indexOf(c) !== i);
  if (classDupes.length) {
    problems.push(`two subclasses for the same class: ${classDupes.join(", ")}`);
  }

  return problems;
}
