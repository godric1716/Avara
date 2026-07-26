/* Imports the openly-licensed SRD into a local JSON file so the compendium
   has no runtime network dependency.

   Sources (both CC-BY-4.0):
     SRD 5.2 (2024) — feats
     SRD 5.1 (2014) — magic items
   Run with: npm run import:srd
*/

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://www.dnd5eapi.co";
const OUT = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "app",
  "compendium",
  "data",
  "srd.json"
);

async function getJSON(path) {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error(`${res.status} ${path}`);
  return res.json();
}

/* The API needs one request per entry for descriptions; keep a small pool so
   we don't hammer a free service. */
async function pool(items, size, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
        if (idx % 40 === 0) process.stdout.write(".");
      }
    })
  );
  return out;
}

function text(desc) {
  if (!desc) return "";
  return Array.isArray(desc) ? desc.join("\n\n") : String(desc);
}

async function main() {
  console.log("Fetching SRD 5.2 feats…");
  const featList = await getJSON("/api/2024/feats");
  const feats = await pool(featList.results, 8, async (f) => {
    const d = await getJSON(f.url);
    return {
      id: `srd-feat-${d.index}`,
      name: d.name,
      kind: "feat",
      source: "SRD 5.2",
      meta: [d.category, d.prerequisites?.length ? "Has prerequisites" : null]
        .filter(Boolean)
        .join(" · "),
      desc: text(d.desc),
    };
  });
  console.log(`\n  ${feats.length} feats`);

  console.log("Fetching SRD 5.1 magic items…");
  const itemList = await getJSON("/api/2014/magic-items");
  const items = await pool(itemList.results, 10, async (it) => {
    const d = await getJSON(it.url);
    return {
      id: `srd-item-${d.index}`,
      name: d.name,
      kind: "item",
      source: "SRD 5.1",
      meta: d.rarity?.name || d.equipment_category?.name || "",
      desc: text(d.desc),
    };
  });
  console.log(`\n  ${items.length} magic items`);

  const payload = {
    fetchedAt: new Date().toISOString().slice(0, 10),
    license: "CC-BY-4.0",
    attribution:
      "Contains material from the System Reference Document 5.1 and 5.2 by Wizards of the Coast LLC, available under the Creative Commons Attribution 4.0 International License.",
    entries: [...feats, ...items].sort((a, b) => a.name.localeCompare(b.name)),
  };

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(payload, null, 1));
  console.log(`Wrote ${payload.entries.length} entries to ${OUT}`);
}

main().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
