/* Imports SRD weapons and armor into a local JSON file for the character
   sheet's attack and inventory sections. Same source and licence as the
   compendium importer (SRD 5.1, CC-BY-4.0).
   Run with: npm run import:equipment */

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://www.dnd5eapi.co";
const OUT = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "app",
  "sheet",
  "data",
  "equipment.json"
);

async function getJSON(path) {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error(`${res.status} ${path}`);
  return res.json();
}

async function pool(items, size, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
        if (idx % 20 === 0) process.stdout.write(".");
      }
    })
  );
  return out;
}

async function main() {
  console.log("Fetching SRD equipment…");
  const list = await getJSON("/api/2014/equipment");

  const all = await pool(list.results, 10, async (e) => {
    const d = await getJSON(e.url);
    const cat = d.equipment_category?.index;
    if (cat !== "weapon" && cat !== "armor") return null;

    if (cat === "weapon") {
      return {
        kind: "weapon",
        index: d.index,
        name: d.name,
        category: d.weapon_category,           // Simple / Martial
        range: d.weapon_range,                 // Melee / Ranged
        damageDice: d.damage?.damage_dice || "",
        damageType: d.damage?.damage_type?.name || "",
        properties: (d.properties || []).map((p) => p.name),
        rangeNormal: d.range?.normal ?? null,
        rangeLong: d.range?.long ?? null,
        weight: d.weight ?? null,
        cost: d.cost ? `${d.cost.quantity} ${d.cost.unit}` : "",
      };
    }

    return {
      kind: "armor",
      index: d.index,
      name: d.name,
      category: d.armor_category,              // Light / Medium / Heavy / Shield
      baseAC: d.armor_class?.base ?? null,
      dexBonus: !!d.armor_class?.dex_bonus,
      maxDexBonus: d.armor_class?.max_bonus ?? null,
      strMinimum: d.str_minimum || 0,
      stealthDisadvantage: !!d.stealth_disadvantage,
      weight: d.weight ?? null,
      cost: d.cost ? `${d.cost.quantity} ${d.cost.unit}` : "",
    };
  });

  const entries = all.filter(Boolean).sort((a, b) => a.name.localeCompare(b.name));
  const weapons = entries.filter((e) => e.kind === "weapon");
  const armor = entries.filter((e) => e.kind === "armor");

  console.log(`\n  ${weapons.length} weapons, ${armor.length} armor`);

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(
    OUT,
    JSON.stringify(
      {
        fetchedAt: new Date().toISOString().slice(0, 10),
        license: "CC-BY-4.0",
        attribution:
          "Contains material from the System Reference Document 5.1 by Wizards of the Coast LLC, available under the Creative Commons Attribution 4.0 International License.",
        weapons,
        armor,
      },
      null,
      1
    )
  );
  console.log(`Wrote ${entries.length} entries to ${OUT}`);
}

main().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
