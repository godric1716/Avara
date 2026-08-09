/* The backgrounds of Avara.

   Unlike races, backgrounds agree on their shape — every one of them has
   proficiencies, equipment, a feature, and the four d6 tables. So this is a
   fixed schema, with `languages` and `tools` optional because the first five
   already split on which of the two they grant.

   Ideals carry their alignment separately rather than baked into the text,
   so the page can render it as a tag instead of a parenthetical. */

export const BACKGROUNDS = [
  {
    slug: "fenris-survivor",
    kind: "background",
    name: "Fenris Survivor",
    tagline: "You were there for the third morning",
    tint: "#d98a6a",
    intro: [
      "You were there for the third morning. One million, six hundred and forty-seven thousand, eight hundred and ninety people didn't wake up to it.",
      "You did — ash in your lungs, hands raw, and a number in your head that never fully goes away. Whatever you're doing now, some part of you is still standing in the Ashfall District deciding what to do next.",
    ],
    skills: "Survival, and your choice of Medicine or Insight",
    languages: "One of your choice",
    equipment:
      "A piece of fire-scarred rubble kept as a memento, a set of traveller's clothes, and a belt pouch containing 10 gp",
    feature: {
      name: "Third Morning",
      desc: "You know exactly what it looks like to keep functioning past the point your body was built for, and so do the people who survived alongside you. When you tell someone what happened at Fenris, they don't doubt you — survivors of catastrophe on that scale aren't questioned. You have advantage on Persuasion checks made specifically to convince someone that a disaster or atrocity is real and as serious as you say, and you can generally find free food or shelter from anyone sympathetic to what Fenris went through.",
    },
    personality: [
      "I count things without meaning to — footsteps, coins, the dead.",
      "I don't flinch at things that should make me flinch. I already used that up.",
      "I check on people after the fact, quietly, even strangers, just to know they're alright.",
      "I have a hard time trusting anything described as \"under control.\"",
      "I go still and count to five before I let myself react to bad news.",
      "I keep something small and burned in my pocket. I don't explain why.",
    ],
    ideals: [
      { text: "Weight. Every choice costs something. Pretending otherwise is how disasters happen.", alignment: "Lawful" },
      { text: "After. It's not about preventing every catastrophe — it's about being someone worth having around once it's over.", alignment: "Good" },
      { text: "No Softening. People deserve the truth of what happened, not a gentler version.", alignment: "Neutral" },
      { text: "Survival Isn't Guilt. I refuse to apologise for being one of the ones who lived.", alignment: "Chaotic" },
    ],
    bonds: [
      "Someone pulled me out of the rubble. I owe them a debt I can't repay in coin.",
      "I'm still looking for someone I lost in the collapse — or their body, or the truth of what happened to them.",
      "The Ashfall District, or whatever's left of wherever I'm from, is still home no matter how far I go.",
      "I made a promise to someone dying in the wreckage. I intend to keep it.",
    ],
    flaws: [
      "I measure every future disaster against Fenris, and nothing else ever seems as urgent as it should.",
      "I have trouble stopping once I start helping — even past the point of my own safety.",
      "I'm quietly convinced something on this scale is going to happen again, and it colours every decision I make.",
      "I resent people who talk about Fenris like a story instead of a number.",
    ],
  },

  {
    slug: "the-lost-ones",
    kind: "background",
    name: "The Lost Ones",
    tagline: "Raised by whoever was left",
    tint: "#c9a86a",
    intro: [
      "Every closed-off pocket that made it through the second era had children nobody came back for. You were one of them — raised by whoever was left, fed by whoever could spare it, taught to read a room before you could read a page.",
      "You don't have a hometown so much as a network of people who used to be exactly where you are now.",
    ],
    skills: "Stealth, and your choice of Survival or Persuasion",
    tools: "Thieves' tools or a gaming set of your choice",
    equipment:
      "A set of worn traveller's clothes, a small keepsake from whoever half-raised you, a set of thieves' tools or your chosen gaming set, and 5 gp",
    feature: {
      name: "Family Not by Blood",
      desc: "You can find and be found. In nearly any surviving pocket of civilisation there's an informal network of former orphans, streetkids and lost ones who look out for each other — not an organisation, just a habit that outlived the chaos that created it. You can typically locate someone willing to pass along a message, point you toward safety, or spot you a meal, provided you can find where the Lost Ones of that pocket tend to gather.",
    },
    personality: [
      "I share food automatically, without thinking about it, even when I shouldn't.",
      "I case every room for exits before I do anything else in it.",
      "I call people \"family\" fast and mean it more than they expect.",
      "I hoard small, useless things because once, having nothing was the whole problem.",
      "I trust actions completely and promises not at all.",
      "I go quiet around anyone who reminds me of an adult who let me down.",
    ],
    ideals: [
      { text: "Found Family. Blood doesn't make people your family. Showing up does.", alignment: "Good" },
      { text: "Nobody Comes. You look out for yourself first, because in the end that's who's there.", alignment: "Evil" },
      { text: "The Network. The web of Lost Ones matters more than any one pocket's borders or politics.", alignment: "Neutral" },
      { text: "Never Again. No kid should end up where I started. I'll bend rules to stop it.", alignment: "Chaotic" },
    ],
    bonds: [
      "Someone in my old pocket took a beating meant for me once. I've never stopped owing them.",
      "I still send word back, when I can, to let my old network know I'm alive.",
      "I'm looking for a sibling — not by blood — who I lost track of after we scattered.",
      "There's a pocket, gone now, that I'd give almost anything to have seen survive.",
    ],
    flaws: [
      "I steal out of habit, even when I don't need to and it isn't smart.",
      "I have a hard time believing anyone helps without an angle.",
      "I'll break a real commitment to help a Lost One I barely know.",
      "I still flinch at authority figures, fair or not.",
    ],
  },

  {
    slug: "agent-of-the-unseen-veil",
    kind: "background",
    name: "Agent of the Unseen Veil",
    tagline: "Someone has to notice before the body count does",
    tint: "#9b8cf0",
    intro: [
      "The Unseen Veil doesn't advertise. You know it exists because it recruited you, trained you, or hunted someone you loved — and now you carry its mark whether you wanted it or not.",
      "Third era's supernatural threats don't announce themselves either, and someone has to be the one who notices before the body count does.",
    ],
    skills: "Investigation, and your choice of Religion or Arcana",
    tools:
      "One type of artisan's tools related to hunting or ward-crafting — silversmith's tools, alchemist's supplies, and the like",
    equipment:
      "A concealed Unseen Veil seal, a set of silvered manacles or similar containment tool, a traveller's cloak, and 15 gp",
    feature: {
      name: "Sanctioned Hunter",
      desc: "The Veil seal you carry opens doors most people never see — safehouses, informants, and quiet favours owed by those who know what the organisation does. It also closes others: Veiled communities that catch sight of it treat you as a threat first and a person second, regardless of your actual intentions toward them.",
    },
    personality: [
      "I catalogue everything — behaviours, tells, weaknesses — out of professional habit.",
      "I'm unnervingly calm around things that terrify most people.",
      "I test people I've just met, subtly, to see what they really are.",
      "I have a ritual I perform before entering unfamiliar territory. I won't skip it.",
      "I talk about Veiled creatures the way a hunter talks about prey — even the ones I respect.",
      "I keep meticulous notes I'd rather die than let anyone else read.",
    ],
    ideals: [
      { text: "The Line. Some things cross a line no circumstance excuses. I hold that line.", alignment: "Lawful" },
      { text: "Necessary Evil. The Veil does ugly work so other people don't have to. I've made peace with that.", alignment: "Evil" },
      { text: "Not All Monsters. The Veil paints with too broad a brush. I judge individuals, not species.", alignment: "Good" },
      { text: "My Own Hunt. I use the Veil's resources for my own reasons, and I don't apologise for it.", alignment: "Chaotic" },
    ],
    bonds: [
      "My mentor in the Veil died on a hunt I walked away from. I owe that debt to someone.",
      "There's a Veiled creature I was supposed to kill and didn't. That decision follows me.",
      "The Veil saved someone I love from something monstrous. I'll never leave the order over it.",
      "I'm quietly building a case against how the Veil operates, from the inside.",
    ],
    flaws: [
      "I see threats in Veiled creatures that aren't actually there.",
      "I've hidden things from the Veil that would get people I care about hunted.",
      "I have a genuinely hard time trusting anyone who isn't also a hunter.",
      "My professional detachment isn't as complete as I pretend it is.",
    ],
  },

  {
    slug: "veiled-touched",
    kind: "background",
    name: "Veiled-Touched",
    tagline: "You grew up next to them",
    tint: "#57d69a",
    intro: [
      "You didn't grow up hiding from monsters. You grew up next to them — in a village under a witches' coven's protection, or in the shadow of a vampire lord's realm.",
      "Close enough to know the difference between the stories people tell about the Veiled and the actual people living behind them.",
    ],
    skills: "Insight, and your choice of Persuasion or Deception",
    languages:
      "One language associated with a Veiled community — Necril, Sylvan, or similar; work with your DM",
    equipment:
      "A protective charm or token from your home community, a set of traveller's clothes, and 10 gp",
    feature: {
      name: "Old Neighbours",
      desc: "Veiled creatures and communities you approach in good faith are inclined to give you the benefit of the doubt before anyone else — you carry yourself like someone raised around them rather than someone hunting them, and that reads clearly to those with the senses to notice. This doesn't grant automatic trust, but it reliably earns you a conversation where an outsider might get a confrontation instead.",
    },
    personality: [
      "I forget that most people find Veiled creatures frightening until I see their reaction.",
      "I correct people, reflexively, when they get Veiled customs or etiquette wrong.",
      "I'm fiercely protective of the community that raised me, even from people who mean well.",
      "I read a room for the same tells my neighbours taught me to watch for — and it works on anyone.",
      "I keep odd hours, on old habit, that don't match however I'm currently living.",
      "I'm unfailingly polite to things other people would run from.",
    ],
    ideals: [
      { text: "Neither Monster Nor Saint. Everyone, Veiled or not, deserves to be judged as an individual.", alignment: "Good" },
      { text: "The Old Ways. My home community's customs are worth defending, even against a changing world.", alignment: "Lawful" },
      { text: "Between Worlds. I belong to both sides and neither, and I like it that way.", alignment: "Chaotic" },
      { text: "Useful Distance. I keep one foot in each world because it's advantageous, not sentimental.", alignment: "Neutral" },
    ],
    bonds: [
      "The coven or lord who protected my home community is owed a debt I intend to pay.",
      "I have a Veiled friend from home I still write to, when I can get word through.",
      "My home community's safety depends on secrecy I've sworn to protect.",
      "Someone from outside my community once tried to burn it down. I haven't forgotten their face.",
    ],
    flaws: [
      "I underestimate how dangerous some Veiled creatures actually are, out of old familiarity.",
      "I have little patience for people who fear the Veiled reflexively, and it shows.",
      "I'll lie to protect my home community's secrets, even to people who deserve the truth.",
      "I trust Veiled strangers faster than I trust ordinary people, which isn't always earned.",
    ],
  },

  {
    slug: "island-hopper",
    kind: "background",
    name: "Island Hopper",
    tagline: "Normal changes every time the coastline does",
    tint: "#6ed3d9",
    intro: [
      "The Era of Convergence turned the map into a thousand small worlds, and you decided the only sane response was to see as many of them as you could.",
      "You've bartered passage on a dozen different ships, slept in a dozen different customs, and learned that \"normal\" changes completely every time the coastline does.",
    ],
    skills: "Survival, and your choice of Nature or Perception",
    tools: "Navigator's tools or water vehicles",
    equipment:
      "A well-worn traveller's journal full of half-finished sketches and notes, a set of traveller's clothes suited for sea travel, and 10 gp",
    feature: {
      name: "Chart of a Hundred Shores",
      desc: "Between the routes you've sailed, the sailors you've bartered with, and the sheer number of islands and pockets you've passed through, you can usually get a rough sense of direction and distance to the nearest known settlement even in unfamiliar waters. You can typically talk your way onto a ship's crew or cargo hold for cheap — or free, if you're willing to work the passage.",
    },
    personality: [
      "I compare literally everything to somewhere else I've been.",
      "I strike up conversations with strangers immediately, out of pure habit.",
      "I've picked up a dozen small customs from a dozen places and mix them without noticing.",
      "I get restless fast if I stay anywhere longer than a couple of weeks.",
      "I collect one small object from every place I visit — no exceptions.",
      "I tell stories in a way that makes even boring days sound like adventures.",
    ],
    ideals: [
      { text: "The Whole Map. The Convergence made the world huge again. I intend to see all of it.", alignment: "Chaotic" },
      { text: "Bridges, Not Borders. Every pocket I visit, I try to leave a little more connected to the next.", alignment: "Good" },
      { text: "Profit in Passage. I know things and places other people don't. That's worth something.", alignment: "Neutral" },
      { text: "Nowhere Is Home. Roots are a liability. I keep moving on principle.", alignment: "Neutral" },
    ],
    bonds: [
      "There's one island or pocket I never finished exploring, and it nags at me.",
      "A captain who took me on as crew when I had nothing gets my loyalty for life.",
      "I'm searching for a place I heard about once and haven't been able to find again.",
      "Someone I travelled with is still out there somewhere, and I intend to cross paths again.",
    ],
    flaws: [
      "I romanticise places I've barely spent any real time in.",
      "I have a bad habit of leaving right when things start to matter.",
      "I'll take a risky passage or shortcut just because it's a route I haven't tried.",
      "I've told the same exaggerated story about myself in enough ports that I'm not sure what's true any more.",
    ],
  },
];
