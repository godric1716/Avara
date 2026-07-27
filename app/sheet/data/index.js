import { CLASS_DEATHKNIGHT } from "./deathknight";
import { CLASS_SOVEREIGN } from "./sovereign";
import { CLASS_MIRRORWARDEN } from "./mirrorwarden";
import { CLASS_DEVOURER } from "./devourer";
import { CLASS_FABLEKEEPER } from "./fablekeeper";
import { CLASS_RESONANT } from "./resonant";
import { CLASS_SANGREAL } from "./sangreal";

export { mod, fmt, profBonus } from "./helpers";

/* Sheet class id -> chapter page slug, so the sheet can link into the lore. */
export const CLASS_SLUGS = {
  deathknight: "death-knight",
  sovereign: "undying-sovereign",
  mirrorwarden: "mirrorwarden",
  devourer: "devourer",
  fablekeeper: "fablekeeper",
  resonant: "resonant",
  sangreal: "sangreal",
};

export const CLASS_DATA = {
  deathknight: CLASS_DEATHKNIGHT,
  sovereign: CLASS_SOVEREIGN,
  mirrorwarden: CLASS_MIRRORWARDEN,
  devourer: CLASS_DEVOURER,
  fablekeeper: CLASS_FABLEKEEPER,
  resonant: CLASS_RESONANT,
  sangreal: CLASS_SANGREAL,
};

export const CLASS_ORDER = [
  "deathknight",
  "sovereign",
  "mirrorwarden",
  "devourer",
  "fablekeeper",
  "resonant",
  "sangreal",
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
