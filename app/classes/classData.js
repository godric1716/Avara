export const CLASSES = [
  {
    slug: "death-knight",
    id: "deathknight",
    name: "Death Knight",
    eyebrow: "Covenant of the Unbroken",
    resource: "Grave Seals",
    primaryAbility: "Constitution",
    recovery: "Resets when combat ends",
    intro:
      "A frontline undead warrior who banks Grave Seals in combat and spends them on runic strikes. Where most martials pace themselves across a day, the Death Knight's economy lives entirely inside the fight — seals build as blood is spilled and vanish the moment it stops.",
    subclassLabel: "Covenant",
    subclassPlural: "Covenants",
    subclasses: [
      {
        name: "Blood",
        title: "Crimson Hunger",
        blurb:
          "Sustain through drain. Melee hits siphon necrotic damage back as healing, and the covenant carries a Thirst clock — feed regularly or accumulate penalties.",
      },
      {
        name: "Frost",
        title: "The Cold Held Still",
        blurb:
          "Control and mitigation. Slows, freezes, and damage reduction, trading Blood's raw sustain for board control.",
      },
      {
        name: "Unholy",
        title: "The Risen Court",
        blurb:
          "Command the dead. Disease, decay, and summoned servants that fight alongside you and multiply your seal generation.",
      },
    ],
    signature: [
      {
        lvl: 2,
        name: "Crimson Strike",
        cost: "3 Seals",
        desc: "Bonus-action melee attack that heals you for the full damage dealt and marks the target for harvest.",
      },
      {
        lvl: 10,
        name: "Dancing Rune Weapon",
        cost: "8 Seals",
        desc: "A spectral copy of your weapon fights beside you for a minute, mirroring your strikes and generating seals on every hit.",
      },
      {
        lvl: 20,
        name: "Death's Apotheosis",
        cost: "Capstone",
        desc: "Seals reset to your Constitution modifier instead of zero, and effects requiring undead or living both apply to you.",
      },
    ],
  },
  {
    slug: "undying-sovereign",
    id: "sovereign",
    name: "Undying Sovereign",
    eyebrow: "A Vessel of Inherited Power",
    resource: "Malice",
    primaryAbility: "Intelligence",
    recovery: "Refills on a rest",
    intro:
      "A ruler who outlived their own death and kept the crown. Malice accumulates as a deep pool spent on dominion effects, and each Reliquary decides what exactly survived the transition — the throne, the vessels, or the pyre.",
    subclassLabel: "Reliquary",
    subclassPlural: "Reliquaries",
    subclasses: [
      {
        name: "Carved Throne",
        title: "Reliquary of the Carved Throne",
        blurb:
          "Zone control. The Sovereign's Tomb aura widens to 60 feet, and those who fail against your dominion are restrained where they stand.",
      },
      {
        name: "Twenty Vessels",
        title: "Reliquary of Twenty Vessels",
        blurb:
          "Endurance. Bonus maximum HP that scales retroactively with every level, plus poison resistance and immunity to the poisoned condition.",
      },
      {
        name: "Grave Pyre",
        title: "Reliquary of the Grave Pyre",
        blurb:
          "Damage reduction. Resistance to all physical damage magical or not, and a once-per-round reduction scaling with proficiency.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Sovereign's Tomb",
        cost: "Aura",
        desc: "A standing zone of dominion centered on you — the anchor every Reliquary builds its identity around.",
      },
      {
        lvl: 2,
        name: "Malice",
        cost: "Resource",
        desc: "Scales at twice your level plus Intelligence, growing again with proficiency and a second Intelligence bump at 15th.",
      },
    ],
  },
  {
    slug: "mirrorwarden",
    id: "mirrorwarden",
    name: "Mirrorwarden",
    eyebrow: "Bonded to the Fractured",
    resource: "Mirror Points",
    primaryAbility: "Charisma",
    recovery: "Refills on a rest",
    intro:
      "A caster bound to a mirror spirit called the Fractured. It acts on its own initiative, stores your Reflection and Mirror Slots inside itself, and can be reformed at cost when it shatters — making the bond itself the class's central resource.",
    subclassLabel: "Mirror Path",
    subclassPlural: "Mirror Paths",
    subclasses: [
      {
        name: "Fractal",
        title: "Path of the Fractal",
        blurb:
          "Multiplication. Split the bond into more reflections and more angles of attack.",
      },
      {
        name: "Bastion",
        title: "Path of the Bastion",
        blurb:
          "Protection. The Fractured becomes a shield first, interposing itself and absorbing what comes for you.",
      },
      {
        name: "Silver Light",
        title: "Path of the Silver Light",
        blurb:
          "A 15-foot luminous aura granting allies +1 AC, free movement inside it, and temporary HP equal to your Charisma modifier.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "The Fractured",
        cost: "Bond",
        desc: "Summon or dismiss as a bonus action. It acts right after you, grants advantage on Perception, and holds all your slots inside the Vault.",
      },
      {
        lvl: 1,
        name: "Shattering Surge",
        cost: "Hit Dice",
        desc: "Spend Hit Dice to convert them directly into Mirror Points — the class's pressure valve when the pool runs dry.",
      },
    ],
  },
  {
    slug: "devourer",
    id: "devourer",
    name: "Devourer",
    eyebrow: "Voidreaper · Annihilator · Void-Scarred",
    resource: "Soul Fragments",
    primaryAbility: "Charisma",
    recovery: "Empties on a long rest",
    intro:
      "A Charisma-based half-caster whose resource cannot be rested into existence. Soul Fragments start every long rest at zero and fill only through combat, feeding a Meta transformation that has to be earned inside the fight that needs it.",
    subclassLabel: "Hero Path",
    subclassPlural: "Hero Paths",
    subclasses: [
      {
        name: "Voidreaper",
        title: "Voidreaper",
        blurb:
          "Bound weapons. A ritual binds up to two melee weapons, after which Charisma replaces Strength and Dexterity for attack and damage.",
      },
      {
        name: "Annihilator",
        title: "Annihilator",
        blurb:
          "Sustained transformation. Meta duration extends to 15 rounds with temporary HP each turn and cheaper extensions.",
      },
      {
        name: "Void-Scarred",
        title: "Void-Scarred",
        blurb:
          "Necrotic resistance, 60 feet of darkvision, and Deep Speech — the path that has been changed most by what it touched.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Soul Fragments",
        cost: "Resource",
        desc: "Maximum equals level plus Charisma. Starts at zero each long rest and fills only through combat.",
      },
      {
        lvl: 1,
        name: "Spellcasting",
        cost: "Half-caster",
        desc: "Charisma-based, with prepared spells equal to your Charisma modifier plus half your Devourer level.",
      },
      {
        lvl: 7,
        name: "Void Sense",
        cost: "Passive",
        desc: "Blindsight to 10 feet and awareness of any souled creature within 30 feet, through walls and darkness.",
      },
    ],
  },
  {
    slug: "fablekeeper",
    id: "fablekeeper",
    name: "Fablekeeper",
    eyebrow: "Every Creature Has a Story",
    resource: "Ink",
    primaryAbility: "Wisdom",
    recovery: "Refills on a short rest",
    intro:
      "A companion class built around a Tome of bonded creatures. Ink pays to enhance what your active companion does, and a roster of four — plus a permanent fifth slot for a Legendary, if one is ever inscribed — turns every fight into a question of who is on the field.",
    subclassLabel: "Subclass",
    subclassPlural: "Subclasses",
    subclasses: [
      {
        name: "Bonded Pair",
        title: "Bonded Pair",
        blurb:
          "Fight beside your Starter. Within 5 feet its Basic Action is automatically Enhanced at no Ink cost, plus medium armor and martial weapons.",
      },
      {
        name: "Type Specialist",
        title: "Type Specialist",
        blurb:
          "Swear a permanent damage type. Companions sharing it pierce resistance to it for free and deal bonus damage of that type.",
      },
      {
        name: "Item Master",
        title: "Item Master",
        blurb:
          "Tend becomes a bonus action and your daily Witch's Bag uses increase by your proficiency bonus.",
      },
      {
        name: "Tactician",
        title: "Tactician",
        blurb:
          "You cannot be surprised and always know every creature's initiative count; your companion's hits set up allies within 60 feet.",
      },
      {
        name: "Ace Trainer",
        title: "Ace Trainer",
        blurb:
          "Switching stops costing your bonus action once per turn, and every switch builds Rotation Momentum.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "The Tome",
        cost: "Bond",
        desc: "Your roster of inscribed companions, each with its own stages and a Mega form unlocked at higher levels.",
      },
      {
        lvl: 1,
        name: "Ink",
        cost: "Resource",
        desc: "Spent to Enhance a companion's actions, refilling on a short rest.",
      },
    ],
  },
];

export function getClass(slug) {
  return CLASSES.find((c) => c.slug === slug);
}
