import { SUBCLASSES } from "../../varra/data/subclasses.js";

/* The ten standard 5e classes the Varra Aeterna sourcebook covers.

   Deliberately barebones. These carry a hit die, a primary ability and saves
   — the things the sheet actually computes with — and nothing else. The base
   class features aren't transcribed because every table already knows what a
   Rogue does, and copying the SRD in would be a large amount of text nobody
   reads on a sheet.

   What they do carry in full is the subclass, derived from the sourcebook
   data rather than retyped, so editing a Rhovian subclass updates the page
   and the sheet together. */

const CLASS_BASICS = {
  Barbarian: { hitDie: 12, abil: "str", saves: "STR, CON", eyebrow: "Primal Path" },
  Cleric: { hitDie: 8, abil: "wis", saves: "WIS, CHA", eyebrow: "Divine Domain" },
  Druid: { hitDie: 8, abil: "wis", saves: "INT, WIS", eyebrow: "Druid Circle" },
  Fighter: { hitDie: 10, abil: "str", saves: "STR, CON", eyebrow: "Martial Archetype" },
  Paladin: { hitDie: 10, abil: "str", saves: "WIS, CHA", eyebrow: "Sacred Oath" },
  Ranger: { hitDie: 10, abil: "dex", saves: "STR, DEX", eyebrow: "Ranger Archetype" },
  Rogue: { hitDie: 8, abil: "dex", saves: "DEX, INT", eyebrow: "Roguish Archetype" },
  Sorcerer: { hitDie: 6, abil: "cha", saves: "CON, CHA", eyebrow: "Sorcerous Origin" },
  Warlock: { hitDie: 8, abil: "cha", saves: "WIS, CHA", eyebrow: "Otherworldly Patron" },
  Wizard: { hitDie: 6, abil: "int", saves: "INT, WIS", eyebrow: "Arcane Tradition" },
};

/* A stable sheet id per class — "rogue", "fighter" — kept separate from the
   Avara class ids so a character can never be ambiguous about which book its
   class came from. */
const idFor = (name) => name.toLowerCase();

function subclassesFor(className) {
  const out = {};
  for (const s of SUBCLASSES.filter((x) => x.dndClass === className)) {
    out[s.slug] = {
      label: s.name,
      colTitle: `${s.name} — ${s.typeLabel}`,
      title: s.tagline,
      /* Passed through with their bullets and tables intact; FeatureColumn
         renders those when present. */
      features: s.features,
      spells: s.spells,
      invocations: s.invocations,
      support: s.support,
      tenets: s.tenets,
      varraSlug: s.slug,
    };
  }
  return out;
}

export const STANDARD_CLASSES = Object.fromEntries(
  Object.entries(CLASS_BASICS).map(([name, basics]) => [
    idFor(name),
    {
      hitDie: basics.hitDie,
      label: name,
      eyebrow: basics.eyebrow,
      primaryAbil: basics.abil,
      saves: basics.saves,
      standard: true,
      /* No resourceLabel: these classes track Rage, Ki, sorcery points and
         spell slots in ways the sheet doesn't model, and inventing a single
         pool for all ten would be worse than showing none. The sheet omits
         the tracker entirely rather than showing an empty one. */
      subclassLabel: basics.eyebrow,
      subclasses: subclassesFor(name),
      generalFeatures: [],
      generalFeats: [],
      sharedItems: [],
    },
  ])
);

export const STANDARD_ORDER = Object.keys(CLASS_BASICS).map(idFor);
