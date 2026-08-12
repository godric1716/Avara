/* The seven Rhovian backgrounds.

   Note the shape difference from Peoples & Paths: these carry no
   personality / ideal / bond / flaw tables — the sourcebook doesn't give
   them. Anything rendering a background has to treat those tables as
   optional rather than assuming every background has all four. */

export const VARRA_BACKGROUNDS = [
  {
    slug: "miles-emeritus",
    kind: "background",
    source: "varra",
    name: "Miles Emeritus",
    latin: "Legionary Veteran",
    tagline: "Discipline, scars, and a way of reading strangers",
    intro: [
      "The legion gave you discipline, scars, and a way of reading strangers that has nothing to do with kindness.",
    ],
    skills: "Athletics, Intimidation",
    tools: "Land vehicles",
    languages: "One of your choice",
    equipment:
      "A battered shield bearing a faded unit insignia, traveller's clothes, a letter of honourable discharge, and 15 gp",
    feature: {
      name: "The Eagle's Shadow",
      desc: "Military personnel, veterans and soldiers of Rhovian-aligned factions grant you basic hospitality and share local military intelligence without requiring explanation.",
    },
  },
  {
    slug: "liber-harenae",
    kind: "background",
    source: "varra",
    name: "Liber Harenae",
    latin: "Arena Survivor",
    tagline: "You're out now. Mostly",
    intro: ["You're out now. Mostly."],
    skills: "Performance, Athletics",
    tools: "One gaming set",
    languages: "One exotic language, learned from a fellow fighter",
    equipment:
      "A gladiator's practice weapon, a leather cord with a betting token someone once wagered on you, and 10 gp",
    feature: {
      name: "Reading the Crowd",
      desc: "After 1 minute observing a group of 20 or more people, you know their general mood and what kind of display would shift it.",
    },
  },
  {
    slug: "discipulus-haruspicis",
    kind: "background",
    source: "varra",
    name: "Discipulus Haruspicis",
    latin: "Haruspex's Apprentice",
    tagline: "You kept the knowledge and the habit of watching everything",
    intro: [
      "Your master is dead or gone. You kept the knowledge and the habit of watching everything.",
    ],
    skills: "Insight, Religion",
    tools: "Herbalism kit",
    languages: "One of your choice",
    equipment: "Small bone reading tools, a journal of omen-records, robes, and 8 gp",
    feature: {
      name: "Signs and Portents",
      desc: "After 10 minutes observing an environment before entering a new location, ask the DM one yes/no question about what the party is about to face. The answer is honest, but may be symbolic.",
    },
  },
  {
    slug: "natus-senatoris",
    kind: "background",
    source: "varra",
    name: "Natus Senatoris",
    latin: "Senator's Child",
    tagline: "You know how Rhovian power actually works",
    intro: [
      "You grew up watching your father end careers with a sentence. You know how Rhovian power actually works.",
    ],
    skills: "History, Persuasion",
    tools: "Calligrapher's supplies",
    languages: "One of your choice",
    equipment: "Fine clothes, a family signet ring, a letter of introduction, and 25 gp",
    feature: {
      name: "Inherited Name",
      desc: "Your family name carries weight in any settlement with a Rhovian political presence. Officials see you within 24 hours, and merchants offer a 10% discount.",
    },
  },
  {
    slug: "liberti",
    kind: "background",
    source: "varra",
    name: "Liberti",
    latin: "Freed Person",
    tagline: "The world didn't change — just your legal category in it",
    intro: [
      "You were property once. The world didn't change — just your legal category in it.",
    ],
    skills: "Deception, Sleight of Hand",
    tools: "Forgery kit",
    languages: "One of your choice",
    equipment:
      "Papers of manumission, nondescript clothing for multiple social contexts, and 12 gp",
    feature: {
      name: "Between Worlds",
      desc: "You pass as a servant in noble spaces and as staff in official ones without being questioned, unless someone actively investigates. You have advantage on Deception checks to maintain a false social status.",
    },
  },
  {
    slug: "peregrinus",
    kind: "background",
    source: "varra",
    name: "Peregrinus",
    latin: "Conquered Person",
    tagline: "You learned their language, their customs, and exactly what to hide",
    intro: [
      "You come from somewhere Rhovum marched through — you learned their language, their customs, and exactly what to hide.",
    ],
    skills: "Insight, Stealth",
    tools: "One artisan's tool from your homeland",
    languages: "The Rhovian tongue, plus one homeland language",
    equipment: "A memento from before the conquest, traveller's clothes, and 10 gp",
    feature: {
      name: "Neither Here Nor There",
      desc: "You move through Rhovian settlements without being documented or remarked upon. Once per settlement you can find the network of other conquered peoples — they share what they know without requiring your name.",
    },
  },
  {
    slug: "vaela-sibyllae",
    kind: "background",
    source: "varra",
    name: "Vaela Sibyllae",
    latin: "Sibyl's Chosen",
    tagline: "You were given to the sacred fire as a child",
    intro: [
      "You were given to the sacred fire as a child. The fire gave you something back.",
    ],
    skills: "Religion, Insight",
    tools: "Calligrapher's supplies",
    languages: "Two of your choice",
    equipment:
      "White robes, a clay tablet inscribed with an omen only you understand, and 10 gp",
    feature: {
      name: "Keeper of the Flame",
      desc: "You have standing access to any temple or sacred site in Rhovian-aligned settlements. Once per long rest you can request sanctuary — no Rhovian-aligned religious institution will permit violence on its grounds while you are within it.",
    },
  },
];
