/* Material that lives only in the source documents — quick reference, level
   progression, and the sidebars. Features, feats and magic items are NOT
   duplicated here: the document page reads those from the character sheet's
   data so the two can never disagree.

   Numeric progression columns are derived from the sheet arrays rather than
   transcribed. Text extracted from the source PDFs had those columns shifted a
   row and reordered, which would have put wrong numbers in a rules reference. */

import {
  MIRROR_POINTS_MAX,
  MIRROR_SLOTS_MAX,
  REFLECTION_SLOTS_MAX,
} from "../../../sheet/data/mirrorwarden";
import { DEVOURER_SPELL_SLOTS } from "../../../sheet/data/devourer";

const PB = (lv) => `+${2 + Math.floor((lv - 1) / 4)}`;

const MIRRORWARDEN_FEATURES = [
  "The Fractured, Mirror Imprint, Unarmored Defense",
  "Shatter Pulse, Reflect Resistance, Charge Generation",
  "Mirror Path, Mirror Vault",
  "Ability Score Improvement",
  "Extra Attack, Fractured Ascendance, Ability Imprint",
  "Mirror Path Feature",
  "Mirrored Soul",
  "Ability Score Improvement",
  "Prismatic Reflection",
  "Mirror Path Feature, Fractured: Greater Form",
  "Splintered Echo",
  "Ability Score Improvement",
  "Deeper Imprint, Third Mirror Slot",
  "Mirror Path Feature",
  "Shattering Resolve",
  "Ability Score Improvement",
  "Mirror Absolute",
  "Cascading Reflection",
  "Ability Score Improvement",
  "Fractured: True Form, Endless Reflection",
];

const DEVOURER_FEATURES = [
  "Bound Pair, Void-Touched",
  "Spellcasting, Soul Fragments, Reap",
  "Hero Path, Void Metamorphosis (3 uses)",
  "Ability Score Improvement",
  "Extra Attack",
  "Voidstride",
  "Hero Path Feature",
  "Ability Score Improvement",
  "Void Sense",
  "Collapsing Star",
  "Sustained Form",
  "Ability Score Improvement",
  "Hollow Step",
  "Glaive Storm",
  "Hero Path Feature",
  "Ability Score Improvement",
  "Greater Metamorphosis (6 uses)",
  "Hero Path Capstone",
  "Ability Score Improvement",
  "The First Devourer (Unlimited)",
];

const SLOT_LABEL = (row) =>
  row.some((n) => n > 0) ? row.filter((n) => n > 0).join(" / ") : "—";

export const DOCUMENTS = {
  "death-knight": {
    quickReference: [
      { label: "Hit Die", value: "d12 per Death Knight level" },
      { label: "Primary", value: "Constitution — attack, damage, and all class features" },
      { label: "Saves", value: "Constitution, Charisma" },
      { label: "Armor", value: "All armor, shields" },
      { label: "Weapons", value: "Simple and martial weapons" },
      {
        label: "Skills",
        value:
          "Choose 2: Athletics, History, Insight, Intimidation, Medicine, Perception, Religion",
      },
      { label: "Resource", value: "Grave Seals — one pool, builds during combat, resets after" },
      { label: "Path", value: "Chosen at Level 1: Blood, Frost, or Unholy" },
      { label: "Save DC", value: "8 + proficiency bonus + CON modifier" },
    ],

    equipment: {
      items: [
        "A martial melee weapon of your choice (or two, if your Covenant permits)",
        "A shield",
        "Chain mail",
        "An explorer's pack",
      ],
      capstone: {
        name: "A death token",
        text: "A physical remnant of the moment you were unmade: a tooth, a lock of hair, a finger bone. It is yours. It is also hers.",
      },
    },

    /* Lvl · PB · Base Features · Covenant · Seals Max */
    progression: [
      [1, "+2", "Death's Mark, Unhallowed Body", "Path Identity", "—"],
      [2, "+2", "Grave Seals", "Covenant Strike", "CON+4"],
      [3, "+2", "Death Grip", "Covenant Feature", "CON+4"],
      [4, "+2", "ASI", "—", "CON+4"],
      [5, "+3", "Extra Attack", "—", "CON+6"],
      [6, "+3", "Death and Decay", "Covenant Feature", "CON+6"],
      [7, "+3", "—", "Covenant Feature", "CON+6"],
      [8, "+3", "ASI", "—", "CON+6"],
      [9, "+4", "Dark Presence", "—", "CON+8"],
      [10, "+4", "—", "Covenant Feature", "CON+8"],
      [11, "+4", "Anti-Magic Shell", "—", "CON+8"],
      [12, "+4", "ASI", "—", "CON+8"],
      [13, "+5", "—", "Covenant Feature", "CON+10"],
      [14, "+5", "Lichborne", "—", "CON+10"],
      [15, "+5", "—", "Covenant Feature", "CON+10"],
      [16, "+5", "ASI", "—", "CON+10"],
      [17, "+6", "Soul Reaper, Final Mark", "—", "CON+12"],
      [18, "+6", "—", "Covenant Capstone", "CON+12"],
      [19, "+6", "ASI", "—", "CON+12"],
      [20, "+6", "Death's Apotheosis", "—", "CON+12"],
    ],
    progressionHead: ["Lv", "PB", "Base Features", "Covenant", "Seals Max"],

    /* Keyed to the subclass ids in the sheet data. */
    roleplay: {
      blood: [
        {
          title: "The feed is not always combat",
          text: "Crimson Hunger doesn't require a hostile target. You may drain from a willing creature as a separate 1-minute action outside combat, dealing 1d4 necrotic (not dangerous to a healthy adult) and counting fully toward your daily Thirst requirement.\n\nThe mark shows. A creature fed from this way carries a faint cold mark for 24 hours — invisible to most, but visible to other Death Knights and anything with Aalise's blood in it. It reads as this one is known to one of mine.\n\nSuppression as choice. Refusing to drain from a hostile creature deals no extra damage and grants no HP — but some Blood Knights hold to a code: I won't let any part of you become part of me.",
        },
        {
          title: "What Vampiric Embrace means to the coven",
          text: "Most of Aalise's Knights were made solitary; the hunger was meant to isolate. A Blood Knight who can share the feed is doing something the coven doesn't expect — read by some as a quiet rebellion, by others as a maturation Aalise is privately proud of. Other coven members may react to a character with Vampiric Embrace differently depending on their relationship to her. Use this as a hook whenever it's useful, not a mechanical trigger.",
        },
        {
          title: "What the weapon is",
          text: "The Dancing Rune Weapon isn't a simple copy in Avara's lore — it's a second mark, a piece of Aalise's gift split off and given temporary independence. Some Blood Knights name theirs. Some refuse to, on principle — naming it would mean acknowledging it as separate. If your character has a complicated relationship with what Aalise made them into, this is a good moment to play that out: every time you use it, briefly, there are two of you.",
        },
      ],
      frost: [
        {
          title: "What the cold means",
          text: "A Frost Knight is cold to the touch, always, and people notice. Some find it unsettling; creatures that themselves run cold — or things that have spent a long time somewhere lightless — find it familiar, even comforting. Their breath doesn't fog in warm air the way a living person's does in cold air — it's the reverse. In humid rooms, a faint mist sometimes follows them.",
        },
        {
          title: "Becoming the coldest thing in the room",
          text: "When Pillar of Frost activates, ambient sound changes. Frost spreads visibly across the floor, walls, anything nearby. Other creatures' breath becomes visible even if it wasn't before. In Aalise's coven, a Frost Knight in this state is sometimes called gone under — not entirely affectionate. Other Death Knights give them a wide berth, not from fear exactly, but because being near it feels like standing too close to a held breath.",
        },
      ],
      unholy: [
        {
          title: "Who the Risen was",
          text: "The Risen is built from a corpse, not summoned from nowhere — in Avara, that means it was someone. The Risen remembers fragments — not enough to be a person again, but enough that it sometimes does things its former self would have. Some Unholy Knights name their Risen after who it was, if known. Some deliberately don't — naming it would mean acknowledging the person is still in there, somewhere. Coven attitudes vary: some see the Risen as a mercy, others find the practice grim even by coven standards.",
        },
        {
          title: "Commanding a crowd",
          text: "At Level 10, an Unholy Knight can plausibly direct 5+ undead in a single combat. Most groups find it works best if the player describes the army's actions in broad strokes (\"the skeletons converge on the wounded one, my Risen holds the door\") rather than rolling for each individually beyond what's mechanically required. In Avara's lore, other coven members may start referring to an Unholy Knight by title — the Hand, the Procession — names that describe the army rather than the person leading it.",
        },
      ],
    },

    closing: {
      title: "Grave Seals — the engine",
      text: "One pool. It builds while the violence continues and empties when it stops. A Death Knight who ends a fight with Seals in hand has left damage on the table; a Death Knight who spends everything and survives has played it exactly right.",
    },
  },

  /* =================== Undying Sovereign =================== */
  "undying-sovereign": {
    quickReference: [
      { label: "Hit Die", value: "d10 per Sovereign level" },
      { label: "Primary", value: "Intelligence" },
      { label: "Saves", value: "Constitution, Intelligence" },
      { label: "Armor", value: "None — see Deathless Frame" },
      { label: "Weapons", value: "Simple weapons" },
      {
        label: "Skills",
        value:
          "Choose 3: Arcana, Athletics, History, Insight, Intimidation, Investigation, Medicine, Perception, Stealth",
      },
      { label: "Resource", value: "Malice — one pool, no slot levels" },
      { label: "Save DC", value: "8 + proficiency bonus + INT modifier" },
    ],
    progressionHead: ["Lv", "PB", "Malice Bonus", "Features"],
    progression: [
      [1, "+2", "Base: 2+Int", "Deathless Frame, The Inherited Arsenal"],
      [2, "+2", "+Prof bonus", "Sovereign's Oath, Declared Oaths, Counterflow"],
      [3, "+2", "—", "Reliquary Feature, Lagging Strike"],
      [4, "+2", "—", "Ability Score Improvement"],
      [5, "+3", "—", "Extra Attack, Rend"],
      [6, "+3", "—", "Eyes of the Hollow Soul, Grave Flash"],
      [7, "+3", "—", "Reliquary Feature"],
      [8, "+3", "—", "Ability Score Improvement, Deathless Grace"],
      [9, "+4", "—", "Deathless Resolve"],
      [10, "+4", "—", "Crowned Will, The Pale Dominion"],
      [11, "+4", "—", "Adaptation, Sovereign's Edge (1d6)"],
      [12, "+4", "—", "Ability Score Improvement"],
      [13, "+5", "—", "Reliquary Feature"],
      [14, "+5", "—", "Contempt for the Weak"],
      [15, "+5", "+Int mod", "The Full Inheritance"],
      [16, "+5", "—", "Ability Score Improvement"],
      [17, "+6", "—", "Sovereign's Edge (1d8), The Sovereign's Tomb"],
      [18, "+6", "—", "Reliquary Feature"],
      [19, "+6", "—", "Ability Score Improvement"],
      [20, "+6", "—", "The Undying King"],
    ],
    note: "The Malice Bonus column shows Crown Boon additions only. Your base maximum is always (2 × class level) + Intelligence modifier on top of anything shown.",
    roleplay: {
      throne: [
        {
          kind: "Design Note",
          title: "The cost is the commitment",
          text: "Sovereign's Ground costs no Malice — the cost is standing still. Inescapable Domain's reaction competes with Deathless Grace and Deathless Resolve, so choosing between punishing a fleeing enemy and surviving a hit is the intended tension of this Reliquary.",
        },
      ],
      vessels: [
        {
          kind: "Design Note",
          title: "The most durable thing at the table",
          text: "Combined with Adaptation, Vessel's Constitution, Blood Aegis and Carved Vessel reduction, a 20th-level Twenty Vessels player is among the most durable creatures in 5e at the same tier. That is the intended power expression — not damage, but refusing to fall.",
        },
      ],
      pyre: [
        {
          kind: "Design Note",
          title: "Three kinds of investment every turn",
          text: "One Malice seeds a Grave Flame for future payoff. Three into the charge means your next hit is enormous. Holding the charge another turn to max it is the patient play. You are choosing between three different investments on every bonus action.",
        },
      ],
    },
    closing: {
      title: "Malice — the engine",
      text: "There are no slot levels and no recharge schedules. The decision every turn is whether this moment is worth spending.",
    },
  },

  /* =================== Mirrorwarden =================== */
  mirrorwarden: {
    quickReference: [
      { label: "Hit Die", value: "d8 per Mirrorwarden level" },
      { label: "Primary", value: "Charisma" },
      { label: "Saves", value: "Constitution, Charisma" },
      { label: "Armor", value: "Light armor, shields" },
      {
        label: "Weapons",
        value: "Simple weapons, finesse martial weapons, hand crossbows",
      },
      { label: "Tools", value: "Glassblower's tools" },
      {
        label: "Skills",
        value:
          "Choose 2: Arcana, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion",
      },
      { label: "Save DC", value: "8 + proficiency bonus + CHA modifier" },
    ],
    equipment: {
      items: [
        "A martial finesse weapon, or two simple weapons",
        "Leather armor, or two hand crossbows and 40 bolts",
        "An explorer's pack",
        "Glassblower's tools",
      ],
      capstone: {
        name: "A hand mirror",
        text: "Your spellcasting focus. Every reflection you have ever kept lives on the other side of it.",
      },
    },
    progressionHead: ["Lv", "PB", "Features", "Points", "Mirror", "Reflection"],
    progression: MIRRORWARDEN_FEATURES.map((f, i) => [
      i + 1,
      PB(i + 1),
      f,
      MIRROR_POINTS_MAX[i],
      MIRROR_SLOTS_MAX[i],
      REFLECTION_SLOTS_MAX[i],
    ]),
    note: "Reflection Slots clear at the end of combat. Mirror Slots persist until you consciously overwrite them.",
    roleplay: {
      fractal: [
        {
          title: "You cannot hit what is already somewhere else",
          text: "An afterimage stands where you were, carrying your AC and a single hit point. Anything that cannot see through illusions goes for it first. Hit something, and the mirror scatters.",
        },
      ],
      bastion: [
        {
          title: "You want through? Get through me first",
          text: "Threat is a thing you assign — to yourself or to the Fractured. Below half health your posture shifts on its own into absorption, and the damage you take starts becoming Mirror Points. Breaking a Bastion feeds it.",
        },
      ],
      silverlight: [
        {
          title: "Stand near it. The glass remembers you.",
          text: "The aura moves with the Fractured, not with you. Positioning it is the central skill expression of this path — the mirror does not hoard what it holds.",
        },
      ],
    },
    closing: {
      title: "The Vault",
      text: "Everything you have ever imprinted lives inside the Fractured. When it falls, so does your arsenal — which is the class's real tension. Keeping it alive is keeping your spellbook open.",
    },
  },

  /* =================== Devourer =================== */
  devourer: {
    quickReference: [
      { label: "Hit Die", value: "d10 per Devourer level" },
      { label: "Primary", value: "Charisma — the binding of souls" },
      { label: "Saves", value: "Charisma, Wisdom" },
      { label: "Armor", value: "Light, medium" },
      {
        label: "Weapons",
        value:
          "Simple, glaives, halberds, scimitars, shortswords, warglaives, tonfa scythes",
      },
      { label: "Spellcasting", value: "Charisma-based half-caster" },
      { label: "Resource", value: "Soul Fragments — level + CHA modifier cap" },
      { label: "Save DC", value: "8 + proficiency bonus + CHA modifier" },
    ],
    equipment: {
      capstone: {
        name: "Warglaive and Tonfa Scythe",
        text: "Two exotic forms the class trains with, both martial and both proficient from level one. A warglaive can be hurled 20/60 feet and called back as part of the same attack. Paired tonfa scythes grant +1 AC from the parrying perpendicular grip.",
      },
      items: [],
    },
    progressionHead: ["Lv", "PB", "Features", "SF Cap", "Spell Slots"],
    progression: DEVOURER_FEATURES.map((f, i) => [
      i + 1,
      PB(i + 1),
      f,
      i === 0 ? "—" : `${i + 1}+CHA`,
      SLOT_LABEL(DEVOURER_SPELL_SLOTS[i]),
    ]),
    note: "Soul Fragments start at zero after every long rest and fill only through combat. Spell slot columns run 1st through 5th level.",
    roleplay: {
      voidreaper: [
        {
          title: "Where they were cuts, what they cut mends",
          text: "Most Devourers descend into the void and let it hollow them. Voidreapers learned to do the opposite, taught the second way by an astral mystic of the Stellar Pantheon who pulled them back from the edge of their own soul-hunger. The same beam that severs an enemy's soul mends a friend's wound.",
        },
      ],
      annihilator: [
        {
          title: "A job description, not a metaphor",
          text: "Where the Voidreaper bends the void inward to mend, the Annihilator multiplies it outward to break. They are mid-range glaive-storms with falling stars at their heels, dropping literal pieces of the cosmic dark on battlefields and walking through the aftermath.",
        },
      ],
      voidscarred: [
        {
          title: "Pain is just unspent power",
          text: "A Void-Scarred stood at the edge of the abyss, looked back, and decided to be the wall between it and everyone else. Their flesh hardens with cosmic scars — wounds that never closed but hum with stored void-pressure. They demand attention from anything that walks the battlefield with them, and the battlefield obeys.",
        },
      ],
    },
    closing: {
      title: "You do not master the void",
      text: "The void does not master you. You walk together. Neither of you is full.",
    },
  },

  /* =================== Fablekeeper =================== */
  fablekeeper: {
    quickReference: [
      { label: "Hit Die", value: "d8 per Fablekeeper level" },
      { label: "Primary", value: "Wisdom" },
      { label: "Saves", value: "Wisdom, Constitution" },
      { label: "Armor", value: "Light armor" },
      { label: "Weapons", value: "Simple weapons" },
      { label: "Tools", value: "Herbalist's Kit" },
      {
        label: "Skills",
        value:
          "Choose 4: Animal Handling, Athletics, Insight, Investigation, Medicine, Nature, Perception, Persuasion, Survival",
      },
      { label: "Resource", value: "Ink — refills on a short rest" },
    ],
    equipment: {
      items: [
        "Leather armor",
        "Two daggers, or one simple weapon of your choice",
        "The Witch's Bag — an enchanted satchel smelling faintly of hearthsmoke and wildflower, holding your daily concoctions",
        "Your Starter Companion, chosen from the Starter Lines",
      ],
      capstone: {
        name: "The Fablekeeper's Tome",
        text: "An illustrated bestiary that serves as your companion summoning focus. Each companion's story lives on its own illustrated pages. To summon a companion, you open to their page. The Tome cannot be destroyed by mundane means.",
      },
    },
    progressionHead: ["Lv", "PB", "Class Features"],
    progression: [
      [1, "+2", "Fablekeeper's Tome, Witch's Bag, Starter Companion"],
      [2, "+2", "Dramatic Ink, Trained Eye"],
      [3, "+2", "Subclass Feature, Second Companion"],
      [4, "+2", "Ability Score Improvement"],
      [5, "+3", "First Evolution, Instinctive Command"],
      [6, "+3", "Subclass Feature"],
      [7, "+3", "Third Companion, Type Sense"],
      [8, "+3", "Ability Score Improvement"],
      [9, "+4", "Subclass Feature, Unbreakable Chapter"],
      [10, "+4", "Final Evolution, Expanded Tome"],
      [11, "+4", "Resonant Chapter (Mega Evolution), Subclass Feature"],
      [12, "+4", "Ability Score Improvement, Fourth Companion"],
      [13, "+5", "Rewrite the Scene, Improved Inspire the Chapter"],
      [14, "+5", "Subclass Feature, Ink Surge"],
      [15, "+5", "Perfected Chapter"],
      [16, "+5", "Ability Score Improvement"],
      [17, "+6", "Master Narrator"],
      [18, "+6", "Subclass Feature"],
      [19, "+6", "Ability Score Improvement"],
      [20, "+6", "Legendary Chapter"],
    ],
    note: "Catch milestones fall at levels 3, 7 and 12. Evolution thresholds at 5 and 10 are universal — every companion in your Tome evolves at the same time.",
    /* The Fablekeeper document annotates itself with designer's commentary
       rather than in-world roleplay notes. */
    asidesGeneral: [
      {
        kind: "Design Note",
        title: "Constitution as the second save",
        text: "The Fablekeeper is a battery. Their resource pool powers their companions. When they take a hit, they need to stay on their feet. Wisdom governs the Ink pool, Trained Eye, Type Sense, the Witch's Bag save DC, and Inspire the Chapter — heavily rewarding primary stat investment.",
      },
      {
        kind: "Design Note",
        title: "Base actions are always free",
        text: "Ink is what separates good from extraordinary. A Fablekeeper who has spent all their Ink still contributes meaningfully every turn — they just lose the ability to author exceptional moments. This sidesteps the dead-turn problem that has plagued every companion class in 5e history.",
      },
      {
        kind: "Design Note",
        title: "Why evolution is universal",
        text: "Every companion you own evolves at the same time. This removes the feel-bad of a freshly caught companion being weaker than your veteran roster, and ties the whole party's narrative to the same character moments. Catching a companion after level 5 means they enter your Tome already at their evolved stage.",
      },
      {
        kind: "Design Note",
        title: "The Tome is narratively robust",
        text: "Framing summoning as opening a page gives the action a tangible, whimsical texture. The destruction clause exists to prevent a single bad Sleight of Hand check from destroying the class. The Tome is the Fablekeeper.",
      },
    ],
    closing: {
      title: "Ink — the engine",
      text: "They are not warriors. They are authors. And in their hands, the story always has one more turn.",
    },
  },
};

export function getDocument(slug) {
  return DOCUMENTS[slug] || null;
}
