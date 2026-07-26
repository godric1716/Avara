/* Material that lives only in the source PDFs — quick reference, level
   progression, and the roleplay sidebars. Features, feats and magic items are
   NOT duplicated here: the document page reads those from the character
   sheet's data so the two can never disagree. */

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
};

export function getDocument(slug) {
  return DOCUMENTS[slug] || null;
}
