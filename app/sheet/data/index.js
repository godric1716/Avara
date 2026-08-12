import { CLASS_DEATHKNIGHT } from "./deathknight";
import { CLASS_SOVEREIGN } from "./sovereign";
import { CLASS_MIRRORWARDEN } from "./mirrorwarden";
import { CLASS_DEVOURER } from "./devourer";
import { CLASS_FABLEKEEPER } from "./fablekeeper";
import { CLASS_RESONANT } from "./resonant";
import { CLASS_SANGREAL } from "./sangreal";
import { CLASS_UNBROKEN } from "./unbroken";
import { CLASS_PARAGON } from "./paragon";
import { STANDARD_CLASSES, STANDARD_ORDER } from "./standard";

export { mod, fmt, profBonus, fixedHitPoints } from "./helpers";

/* Sheet class id -> chapter page slug, so the sheet can link into the lore. */
export const CLASS_SLUGS = {
  deathknight: "death-knight",
  sovereign: "undying-sovereign",
  mirrorwarden: "mirrorwarden",
  devourer: "devourer",
  fablekeeper: "fablekeeper",
  resonant: "resonant",
  sangreal: "sangreal",
  unbroken: "unbroken",
  paragon: "paragon",
};

export const CLASS_DATA = {
  deathknight: CLASS_DEATHKNIGHT,
  sovereign: CLASS_SOVEREIGN,
  mirrorwarden: CLASS_MIRRORWARDEN,
  devourer: CLASS_DEVOURER,
  fablekeeper: CLASS_FABLEKEEPER,
  resonant: CLASS_RESONANT,
  sangreal: CLASS_SANGREAL,
  unbroken: CLASS_UNBROKEN,
  paragon: CLASS_PARAGON,
  /* The ten standard classes the Varra sourcebook covers. Barebones by
     design — see standard.js. */
  ...STANDARD_CLASSES,
};

export { STANDARD_ORDER };

export const CLASS_ORDER = [
  "deathknight",
  "sovereign",
  "mirrorwarden",
  "devourer",
  "fablekeeper",
  "resonant",
  "sangreal",
  "unbroken",
  "paragon",
];

export const ABILITIES = [
  { key: "str", label: "STR" },
  { key: "dex", label: "DEX" },
  { key: "con", label: "CON" },
  { key: "int", label: "INT" },
  { key: "wis", label: "WIS" },
  { key: "cha", label: "CHA" },
];

export function firstSubclassKey(classId) {
  const keys = Object.keys(CLASS_DATA[classId].subclasses || {});
  return keys.length ? keys[0] : null;
}
