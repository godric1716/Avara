/* Starting kits per class, and per Nation Path for the Resonant.

   Weapons and armor reference indices from equipment.json (plus the homebrew
   warglaive and tonfa scythe). Everything in `items` is flavour and carries
   no mechanics — it lands in the inventory list as plain text.

   Where a class document states its own starting equipment, that's what's
   here. Where it only gives proficiencies — the Sovereign, Resonant and
   Sangreal — the kit is built to fit those proficiencies and the class's
   stated fantasy, and is a suggestion rather than rules text. */

const KITS = {
  deathknight: {
    label: "Covenant Kit",
    note: "The document's own starting equipment, down to the death token.",
    armor: "chain-mail",
    shield: true,
    weapons: ["battleaxe"],
    items: [
      "Explorer's pack",
      "A death token — a tooth, a lock of hair, a finger bone. It is yours. It is also hers.",
      "Grave-dirt in a stoppered vial",
    ],
  },

  sovereign: {
    label: "Vessel's Kit",
    note: "No armor by design — Deathless Frame sets your AC instead.",
    armor: null,
    shield: false,
    weapons: ["quarterstaff", "dagger"],
    items: [
      "Explorer's pack",
      "A reliquary vessel — the container the inheritance arrived in",
      "Funerary wrappings, kept folded",
      "A crown fragment, too small to wear",
    ],
  },

  mirrorwarden: {
    label: "Warden's Kit",
    note: "The document's own starting equipment. The hand mirror is your focus.",
    armor: "leather-armor",
    shield: false,
    weapons: ["rapier", "crossbow-hand"],
    items: [
      "Explorer's pack",
      "A hand mirror — your spellcasting focus",
      "Glassblower's tools",
      "40 crossbow bolts",
      "A pouch of mirror shards that never quite match the room",
    ],
  },

  devourer: {
    label: "Void-Touched Kit",
    note: "Paired warglaives, the class's own weapon form — bond them at your next rest.",
    armor: "studded-leather-armor",
    shield: false,
    weapons: ["warglaive", "warglaive"],
    items: [
      "Explorer's pack",
      "An obsidian focus",
      "A creature trophy — something you took the soul out of",
      "Star-charts of a sky nobody else recognises",
    ],
  },

  fablekeeper: {
    label: "Author's Kit",
    note: "The document's own starting equipment. The Tome cannot be destroyed by mundane means.",
    armor: "leather-armor",
    shield: false,
    weapons: ["dagger", "dagger"],
    items: [
      "The Fablekeeper's Tome — your companion summoning focus",
      "The Witch's Bag — smells faintly of hearthsmoke and wildflower",
      "Herbalist's kit",
      "Ink, and more pens than anyone needs",
    ],
  },

  sangreal: {
    label: "Sangreal's Kit",
    note: "Built to the document's proficiencies — it lists none of its own.",
    armor: "leather-armor",
    shield: false,
    weapons: ["rapier", "crossbow-hand"],
    items: [
      "Explorer's pack",
      "A signet marked with your Bloodline",
      "A sealed vial of blood, not yours",
      "Something from the life you had before the turning",
    ],
  },

  /* The Resonant's document names four foci — carved stone, water vial, ember
     case, wind chime — one per element, so each Nation Path gets its own kit
     built around its focus. Simple weapons only; no armor proficiency. */
  resonant: {
    bySubclass: {
      ascendant: {
        label: "Ascendant Kit — Fire",
        note: "Fire. The burn goes through you first, so pack for it.",
        armor: null,
        shield: false,
        weapons: ["quarterstaff", "handaxe"],
        items: [
          "Explorer's pack",
          "An ember case — your elemental focus, never quite cold",
          "Tinder, flint, and far too many spare wicks",
          "Burn salve, used more often than you admit",
        ],
      },
      steadfast: {
        label: "Steadfast Kit — Earth",
        note: "Earth. Built to stand still and make that a problem for everyone else.",
        armor: null,
        shield: false,
        weapons: ["greatclub", "javelin"],
        items: [
          "Explorer's pack",
          "A carved stone — your elemental focus, worn smooth at one edge",
          "A climber's kit",
          "A palmful of earth from where you were trained",
        ],
      },
      tidecaller: {
        label: "Tidecaller Kit — Water",
        note: "Water. Control first, and a healer's kit layered on top.",
        armor: null,
        shield: false,
        weapons: ["spear", "dagger"],
        items: [
          "Explorer's pack",
          "A water vial — your elemental focus, sealed and never still",
          "Healer's kit",
          "A tide-table for a coast you may never see again",
        ],
      },
      untethered: {
        label: "Untethered Kit — Air",
        note: "Air. Everything light enough to keep moving with.",
        armor: null,
        shield: false,
        weapons: ["sling", "quarterstaff"],
        items: [
          "Explorer's pack",
          "A wind chime — your elemental focus, audible before you are",
          "50 ft of silk rope",
          "A glider-cloth, folded to the size of a fist",
        ],
      },
    },
  },
};

export function startingKit(classId, subclassKey) {
  const entry = KITS[classId];
  if (!entry) return null;
  if (entry.bySubclass) return entry.bySubclass[subclassKey] || null;
  return entry;
}

/* Every index a kit references must exist in the weapon/armor tables. A typo
   would otherwise surface as a raw slug like "hand-crossbow" in the UI —
   which is exactly how that one was caught. */
export function validateKits(weaponIndexes, armorIndexes) {
  const problems = [];
  const check = (kit, label) => {
    if (kit.armor && !armorIndexes.includes(kit.armor)) {
      problems.push(`${label}: unknown armor "${kit.armor}"`);
    }
    for (const w of kit.weapons) {
      if (!weaponIndexes.includes(w)) problems.push(`${label}: unknown weapon "${w}"`);
    }
  };
  for (const [id, entry] of Object.entries(KITS)) {
    if (entry.bySubclass) {
      for (const [sub, kit] of Object.entries(entry.bySubclass)) check(kit, `${id}/${sub}`);
    } else {
      check(entry, id);
    }
  }
  return problems;
}
