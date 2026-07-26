import { CLASS_DATA, CLASS_ORDER, CLASS_SLUGS } from "../../sheet/data";
import srd from "./srd.json";

/* Homebrew entries are derived from the same data the character sheet uses,
   so the compendium can never fall out of step with the sheet. */
function homebrewEntries() {
  const out = [];

  for (const classId of CLASS_ORDER) {
    const cls = CLASS_DATA[classId];

    const push = (entry, kind, scope) => {
      out.push({
        id: `hb-${classId}-${kind}-${slug(entry.name)}-${slug(scope)}`,
        name: entry.name,
        kind,
        source: "Homebrew",
        classId,
        className: cls.label,
        scope,
        meta: entry.meta || "",
        desc: entry.desc || "",
      });
    };

    for (const f of cls.generalFeats || []) push(f, "feat", cls.label);
    for (const i of cls.sharedItems || []) push(i, "item", cls.label);

    for (const [subKey, sub] of Object.entries(cls.subclasses || {})) {
      const scope = sub.colTitle || sub.label || subKey;
      for (const f of sub.feats || []) push(f, "feat", scope);
      for (const i of sub.items || []) push(i, "item", scope);
    }
  }

  // The same item can be shared by several subclasses of a class; keep one.
  const seen = new Set();
  return out.filter((e) => {
    const key = `${e.classId}-${e.kind}-${e.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const HOMEBREW = homebrewEntries();

export const SRD_META = {
  fetchedAt: srd.fetchedAt,
  license: srd.license,
  attribution: srd.attribution,
};

export const ENTRIES = [...HOMEBREW, ...srd.entries].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const SOURCES = ["Homebrew", "SRD 5.2", "SRD 5.1"];
export const KINDS = [
  { key: "feat", label: "Feats" },
  { key: "item", label: "Items" },
];

export const CLASS_FILTERS = CLASS_ORDER.map((id) => ({
  id,
  label: CLASS_DATA[id].label,
  slug: CLASS_SLUGS[id],
})).filter((c) => HOMEBREW.some((e) => e.classId === c.id));
