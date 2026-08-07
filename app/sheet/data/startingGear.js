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

  /* The document's own starting equipment, one reading of it per Archetype:
     "a martial weapon, or a simple weapon and a shield, or two simple
     weapons", plus a costume, civilian clothes for a secret identity, and an
     explorer's pack. Armor is light or medium — never heavy.

     The secret identity is the document's, not invented here, and it is the
     only kit on the site that equips a character with a second life. */
  paragon: {
    bySubclass: {
      streak: {
        label: "Streak's Kit",
        note: "Two simple weapons and light armor — nothing that slows you down.",
        armor: "studded-leather-armor",
        shield: false,
        weapons: ["dagger", "dagger"],
        items: [
          "Explorer's pack",
          "A costume built for wind resistance, and boots twice resoled already",
          "Common clothes for the name people know you by",
          "5d4 × 10 gp in starting currency",
        ],
      },
      web: {
        label: "The Web's Kit",
        note: "Two simple weapons and light armor. The line isn't equipment — it's you.",
        armor: "leather-armor",
        shield: false,
        weapons: ["quarterstaff", "dagger"],
        items: [
          "Explorer's pack",
          "A masked costume, mended more often than it's washed",
          "Common clothes for the name people know you by",
          "5d4 × 10 gp in starting currency",
        ],
      },
      weave: {
        label: "The Weave's Kit",
        note: "A simple weapon and a shield — Mind Blast already reaches 60 feet without either.",
        armor: "leather-armor",
        shield: true,
        weapons: ["quarterstaff"],
        items: [
          "Explorer's pack",
          "A hood and half-mask, because eye contact is a liability now",
          "Common clothes for the name people know you by",
          "5d4 × 10 gp in starting currency",
        ],
      },
      brick: {
        label: "The Brick's Kit",
        note: "A martial weapon and medium armor, for the days something needs hitting with more than hands.",
        armor: "chain-shirt",
        shield: false,
        weapons: ["maul"],
        items: [
          "Explorer's pack",
          "A costume cut generously, because they never last",
          "Common clothes for the name people know you by",
          "5d4 × 10 gp in starting currency",
        ],
      },
      tempest: {
        label: "The Tempest's Kit",
        note: "A martial weapon and medium armor, packed for whatever you set off.",
        armor: "scale-mail",
        shield: false,
        weapons: ["greatsword"],
        items: [
          "Explorer's pack",
          "A costume scorched, frosted, or scarred at the cuffs, depending",
          "Common clothes for the name people know you by",
          "5d4 × 10 gp in starting currency",
        ],
      },
    },
  },

  /* Medium armor and shields are proficiencies the document grants, but the
     kit stops at hide: Thick Hide is +2 AC in Beast-Form and the document
     says outright that it makes a shield not worth the slot, so leading a new
     player into buying one would be leading them wrong. */
  unbroken: {
    label: "Pack Kit",
    note: "Built to the document's proficiencies — it lists no starting equipment of its own.",
    armor: "hide-armor",
    shield: false,
    weapons: ["greataxe", "handaxe"],
    items: [
      "Explorer's pack",
      "The scar from the wound that revealed you — not equipment, but you'll be asked about it",
      "A pack token: a tooth, a strip of hide, a knot of another wolf's hair",
      "Bandages, far more than one person needs",
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
