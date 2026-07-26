/* Drawn from the Avara documents in Drive — the Bullet Timeline, the Session
   Master Runbook, and the five class documents. Nothing here is invented.

   `facts` are things the sources state. `open` lists what they leave unsaid.
   `conflict` flags where two documents disagree, usually because a figure was
   revised between campaigns. */

export const ERAS = [
  { key: "creation", label: "Creation" },
  { key: "first", label: "First Era · Age of Heroes" },
  { key: "present", label: "The Present" },
  { key: "classes", label: "From the Class Documents" },
];

export const NPCS = [
  /* ---------------- Creation ---------------- */
  {
    id: "avara-goddess",
    name: "Avara",
    epithet: "The Dragon Goddess of Life and Light",
    era: "creation",
    affiliation: "Creation · The Light",
    status: "Established",
    summary:
      "The Dragon Goddess who is the concept of Life and Light, locked in eternal war with Azalagor. She created the material plane and the planet that took her name — and then lost both her name and her freedom sealing the last Dragonlord.",
    facts: [
      "Her endless battles with Azalagor across the nothingness created the astral sea.",
      "She was the first to create a physical plane — the material plane, and the world later named for her.",
      "The first clash between her and Azalagor gave birth to the Seelie and Unseelie courts.",
      "Sealing Vorlag in the leyline cost her physical body and two sacrifices: her name, which no one can ever remember, and her freedom — she remains behind the light lattice that keeps gods from the mortal plane.",
    ],
    open: [
      "Does anything of her still act in the world from behind the lattice?",
      "Could her name be recovered, and what would that mean?",
    ],
  },
  {
    id: "azalagor",
    name: "Azalagor",
    epithet: "The Dragon God of the Void",
    era: "creation",
    affiliation: "Creation · The Void",
    status: "Established",
    summary:
      "The Dragon God who is the concept of the Void, and Avara's eternal opponent. He followed her into physical creation, and their first battle birthed the mirrored fae worlds.",
    facts: [
      "Dragons are the children and splinters of his and Avara's elemental energies.",
      "He followed Avara into physical creation rather than preceding her.",
      "The Unseelie court exists because of their first battle.",
    ],
    open: [
      "Is he still active, and is the Devourer's cosmic dark connected to him?",
      "Does he have vessels or servants the way Avara has none?",
    ],
  },

  /* ---------------- First Era ---------------- */
  {
    id: "loki",
    name: "Loki",
    epithet: "The one pulling strings",
    era: "first",
    affiliation: "First Era · The Unseelie Court",
    status: "Established",
    summary:
      "The architect behind both Dragon Wars. Where every other Dragonlord was sealed by the Dragonknights, Loki hid in the Unseelie court and the Abyss and spent the peace engineering their release.",
    facts: [
      "He appeared as Thor, the Giant Demigod of lightning, to massacre the Shadar-kai clan in the Halls of Tarkin — the opening move of his plan.",
      "That massacre was to reach the Unseelie court where the Vampire Dragonlord and his Vampiric Silver dragon were sealed. He succeeded in releasing them.",
      "He left one elf alive by accident: Fenir.",
      "He whisked Omplyia away to the Seelie court, costing her five years.",
      "He was sealed into a living vessel — a sun elf who turned from his god after learning the truth.",
      "His last act before defeat was fully releasing Vorlag in Fardeep.",
    ],
    open: [
      "Is the vessel holding him still alive, and where does the Syndicate keep it?",
      "Was he acting for himself, for Azalagor, or for something else?",
    ],
  },
  {
    id: "vorlag",
    name: "Vorlag",
    epithet: "The final Dragonlord, the First Lich",
    era: "first",
    affiliation: "First Era · Fardeep",
    status: "Established",
    summary:
      "The last of the Dragonlords and the first lich. Sealing him cost Avara her body, her name, and her presence in the world — and centuries later he was still sitting on the throne of Fardeep wearing a dead prince's face.",
    facts: [
      "He was the first king of Fardeep hundreds of years ago; his family line continued to rule after his undeath.",
      "Sealing him in the leyline ended the First Dragon War and cost Avara her physical body.",
      "The disease that killed King Thune of Fardeep — and Olympia — is connected to him.",
      "After Thune's death he took the throne disguised as Thune's son.",
      "He was defeated after a two-month siege and sealed inside the real prince of Fardeep, who became his vessel.",
    ],
    open: [
      "The Syndicate moves the vessels every 50 years — where are they now?",
      "Is the disease still spreading, and is it still his?",
    ],
  },
  {
    id: "vampire-dragonlord",
    name: "The Vampire Dragonlord",
    epithet: "Defeated twice",
    era: "first",
    affiliation: "First Era · Eva's Pass",
    status: "Established",
    summary:
      "A Dragonlord sealed in the Unseelie court and released by Loki, who returned to his former seat of power at Eva's Pass and made the campaign against him deeply personal for Kyda.",
    facts: [
      "He was first defeated by Eva, daughter of Thor and Kyda's ancestor, with the help of Bree the Dragonknight.",
      "Eva's Pass was his seat of power before that defeat.",
      "He tormented Kyda through the arc: killing her aunt and father, turning her mother so the party had to kill her, and turning both her sisters.",
      "One sister was cured; the other remained a vampire and founded the second bloodhunter order with Fenir.",
      "He killed one of the legendary Dragonknights and their dragon during the siege of Eva's Pass.",
      "The party twisted his own ritual to make him and his dragon mortal, then killed him on the ground beside his dragon's body.",
    ],
    open: [
      "What was his name?",
      "Does the vampiric bloodhunter order still exist, and who leads it now?",
    ],
  },
  {
    id: "maeve",
    name: "Maeve",
    epithet: "Queen of the Unseelie Court",
    era: "first",
    affiliation: "First Era · The Unseelie Court",
    status: "Established",
    summary:
      "The Queen of the Unseelie fae — a collector figure described as extremely evil, who traded with the party for a prize: a metal dragon and its metal rider.",
    facts: [
      "The party made a deal to deliver her the Silent King and his metal dragon.",
      "The chase after the Silent King ended in her personal throne room.",
      "She is characterised as a collector.",
    ],
    open: [
      "What does she do with what she collects?",
      "Is the deal still binding on anyone, and does she consider it complete?",
    ],
  },
  {
    id: "lolth",
    name: "Lolth",
    epithet: "The imprisoned goddess",
    era: "first",
    affiliation: "First Era · The Underdark",
    status: "Established",
    summary:
      "The drow goddess, reimagined — imprisoned by her twin brother, the god of the sun elves, and slowly driven insane by the confinement. Her faith carries a role that destroys whoever holds it.",
    facts: [
      "Her twin brother is the god of the sun elves, the species that later became high and wood elves.",
      "The Speaker of Spiders is a drow bound to her by ritual, able to hear her voice and tasked with finding her. Madness is the only fate a Speaker knows.",
      "Each new Speaker must hunt and kill the former Speaker to complete the ritual.",
      "The party broke her out of her prison. She then bound her seat of power in the Underdark to layers of the Abyss, with Chandara's help.",
    ],
    open: [
      "Free and still insane — what has she done since?",
      "What happened between her and her brother?",
    ],
  },
  {
    id: "silent-king",
    name: "The Silent King",
    epithet: "Rider of the metal dragon",
    era: "first",
    affiliation: "First Era · The Southern Tip",
    status: "Established",
    summary:
      "A Dragonrider building a massive metal army out of the fallen foes he faced, pushing an undead-metal horde north toward Fardeep. Traded to Maeve as a prize.",
    facts: [
      "He rode a metal dragon and built his army from the bodies of those he defeated.",
      "He operated from the far southern tip of the continent.",
      "The party fought a brutal campaign against him at Drakewarden Reach.",
      "He was run down across three different planes, ending in Maeve's throne room.",
    ],
    open: [
      "What was he before the metal?",
      "Does any part of his army remain in the south?",
    ],
  },
  {
    id: "aalis-vampire-queen",
    name: "Aalis",
    epithet: "The Vampire Queen from a far off land",
    era: "first",
    classId: "deathknight",
    affiliation: "First Era · Ally of the Riders",
    status: "Conflicted",
    conflict:
      "Almost certainly the same figure as Aalise Bathory in the Death Knight document — the spelling differs and the two sources describe different stages of her. The timeline has her as a foreign ally with a lich contact; the class document has her as the maker of the Death Knights and head of a coven. Which came first is unresolved.",
    summary:
      "A Vampire Queen the party enlisted during the campaign against the Silent King. She brought a lich contact who returned Olympia from the dead, and she helped seal Loki into a living vessel.",
    facts: [
      "She came from a far off land — not native to the continent the campaign took place on.",
      "She has a lich contact capable of raising the dead.",
      "She helped seal Loki into a sun elf vessel.",
      "She was recruited as an ally, not fought as an enemy.",
    ],
    open: [
      "Is she the same person as Aalise Bathory, and if so, which document is current?",
      "Did the Death Knights exist yet at this point in the timeline?",
      "Who is the lich contact?",
    ],
  },
  {
    id: "fenir",
    name: "Fenir",
    epithet: "The one Loki left alive",
    era: "first",
    affiliation: "First Era · Dragonrider",
    status: "Established",
    summary:
      "The sole survivor of the Shadar-kai massacre in the Halls of Tarkin. He crawled toward the forge deep in the halls — built on one of the strongest leylines — and found the egg that hatched Baldur.",
    facts: [
      "His clan were the first Unseelie-court species to cross into the mortal plane, and founded the first bloodhunter order.",
      "Loki left him alive by accident.",
      "Baldur is a red dragon with a phoenix-like appearance.",
      "He founded the second bloodhunter order — a vampiric subclass — with one of Kyda's turned sisters.",
      "He married Olympia, who was later killed in the changeling wars; he remarried Kyda's sister and settled in the Halls of Tarkin.",
    ],
    open: ["Do either bloodhunter order still operate in the present day?"],
  },
  {
    id: "kyda",
    name: "Kyda",
    epithet: "Of Eva's Pass",
    era: "first",
    affiliation: "First Era · Dragonrider",
    status: "Established",
    summary:
      "Captain of the guard and descendant of Eva, who defeated the Vampire Dragonlord in the First Era. She found Atticus while saving a child from a burning cart during an ambush.",
    facts: [
      "Atticus is a gold dragon, massive even as a hatchling.",
      "Her family line runs back to Eva, daughter of Thor.",
      "The Vampire Dragonlord killed her aunt and father and turned her mother and both sisters.",
      "She married Chandara and spends her days hunting primals and the massive creatures appearing more and more often.",
    ],
    open: [
      "Why are primals and massive creatures appearing more frequently?",
    ],
  },
  {
    id: "chandara",
    name: "Chandara",
    epithet: "Speaker of Spiders",
    era: "first",
    affiliation: "First Era · Den of Mizzrym",
    status: "Established",
    summary:
      "Chosen by Lolth as Speaker in the same moment her elder sister — the previous Speaker — was driven mad and turned into a drider. She spent five years on a drow drug that silences the voice rather than face that fate.",
    facts: [
      "Her family is the Den of Mizzrym, the strongest and wealthiest drow house.",
      "A Speaker's first task is to hunt and kill the former Speaker. Hers would have been her sister.",
      "She found Maeri's egg during a job taken to pay for the drug.",
      "Maeri is a hulking black dragon. Once Chandara quit the drug she learned Maeri had a voice she simply could not hear through it.",
      "She became Den Mother after her mother fell at the battle of Fardeep, and married Kyda.",
    ],
    open: ["Did she ever have to kill her sister?"],
  },
  {
    id: "olympia",
    name: "Olympia",
    epithet: "Of Drakewarden Reach",
    era: "first",
    affiliation: "First Era · Dragonrider",
    status: "Established",
    summary:
      "A changeling from a loving, ordinary family whose life was interrupted twice — once by a shipwreck that led her to Aquilor's egg, and once by Loki, who stole five years from her.",
    facts: [
      "Aquilor is a fae dragon.",
      "Loki appeared the moment the dragon hatched and took her to the Seelie court, where she spent five years trying to return.",
      "She fell sick with the unknown disease connected to Vorlag, and it killed her. The party brought her back with Aalis's lich contact.",
      "She married Fenir, then was killed in the changeling wars in the Seelie court.",
    ],
    open: [
      "What are the changeling wars, and are they still being fought?",
      "She died twice — did the second death take differently?",
    ],
  },

  /* ---------------- Present ---------------- */
  {
    id: "balvorr",
    name: "Balvorr Moltenhide",
    epithet: "The Ember Tyrant",
    era: "present",
    affiliation: "Present · The Black Maw",
    status: "Established",
    summary:
      "A twelve-foot half fire giant born to poverty outside Fenris, who tore his own chains apart leading a revolt and became a folk hero before the city ever learned his name.",
    facts: [
      "Chaotic Good barbarian. Ashen-grey skin veined with glowing ember; 12 feet, 1400 lbs.",
      "Stoic — speaks only when necessary, but carries a deep sense of justice.",
      "He became head of his family young and took responsibility for them as if they were his children.",
      "He earned the title The Ember Tyrant emerging from the rubble of his revolt, having made his first weapon — a whip — from his own broken chains.",
      "At 20 he was recruited into the gang that became the Black Maw.",
    ],
    open: [
      "What happened to the family he raised?",
      "Where does he stand with the Maw now, after the betrayal?",
    ],
  },
  {
    id: "aurakhet",
    name: "Aurakhet",
    epithet: "The Black Iron of the Red Sands",
    era: "present",
    affiliation: "Present · Ra Reborn",
    status: "Established",
    summary:
      "Born to the leader of a rebellion and raised a freedom fighter. She is secretly the reborn god of Ra — this world's god of sun, freedom, and hope — and does not know it.",
    facts: [
      "Changeling descent lets her take others' skin and voice.",
      "She does not know she is Ra, nor that her fate is tied to Kor.",
      "Her current title was earned as a freedom fighter; she will be known as Ra, the Golden Pharaoh.",
      "She is romantically bonded to Amaris through some fae magic neither has explored — she is afraid of losing another lover.",
      "She sees Balvorr as a fellow freedom fighter and values his decisiveness.",
    ],
    open: [
      "How and when does she learn what she is?",
      "What exactly ties her fate to Kor?",
    ],
  },
  {
    id: "amaris",
    name: "Amaris",
    epithet: "Chosen of the god of life",
    era: "present",
    affiliation: "Present · The Next Balance",
    status: "Fragmentary",
    summary:
      "Newly chosen by the god of life to become the next goddess of balance, the previous one having died. She accepted the mission in a vision during a near-death experience in the echoing well.",
    facts: [
      "One of only two characters currently aware of their own destined godhood.",
      "Bonded to Aurakhet through unexplored fae magic.",
      "The previous goddess of balance is dead — the seat is vacant.",
    ],
    open: [
      "Who was the last goddess of balance, and how did she die?",
      "What is the echoing well?",
    ],
  },
  {
    id: "nero",
    name: "Nero",
    epithet: "Prince of Hell",
    era: "present",
    affiliation: "Present · Divine Destiny",
    status: "Fragmentary",
    summary:
      "One of the party marked for godhood, and one of only two who currently know it.",
    facts: [
      "Named as Prince of Hell among the divine plans for the party.",
      "Aware of his own destiny, unlike most of the others.",
    ],
    open: [
      "Prince of which hell, and does Fenris connect to it?",
      "What does he intend to do about it?",
    ],
  },
  {
    id: "black-maw",
    name: "The Black Maw",
    epithet: "The crew that was betrayed",
    era: "present",
    affiliation: "Present · Fenris",
    status: "Established",
    summary:
      "A gang of thieves, misfits and outcasts who protected each other in a city where protection had to be taken. Half of them are dead, betrayed from inside by Balvorr's own mentor.",
    facts: [
      "Standing members include Oran Falk the Shield, Sylvara \"Silk\" Kaelrin the Phantom, Rennick Voss the Architect, Mira Ashenhall the Flame, Kaiden \"Echo\" Thorne the Voice, Lysa Greaves the Ghost, Edrin \"Grit\" Fallow the Anchor, Rhea Draven the Healer, Taron \"Wisp\" Olin the Courier and Kalen Myre the Shadow.",
      "Gundri, a kid working the docks, sells them information on Fenris trading routes.",
      "Varren \"The Old Wolf\" Kaelen — Balvorr's own mentor — betrayed the crew to the city guard.",
      "Raeven, Korrin, Damaris, Taran, Selena and Joric all died in the traps that betrayal set. Balvorr was captured.",
    ],
    open: [
      "Where is Varren now?",
      "Mira appears elsewhere as a broken vessel — how did she get there?",
    ],
  },

  /* ---------------- From the class documents ---------------- */
  {
    id: "aalise-bathory",
    name: "Aalise Bathory",
    epithet: "The one who made them",
    era: "classes",
    classId: "deathknight",
    affiliation: "Death Knight · The Coven",
    status: "Conflicted",
    conflict:
      "Appears in the timeline as \"Aalis,\" a Vampire Queen from a far off land who allied with the first-era Dragonriders. That entry says nothing about Death Knights or a coven; this one says nothing about the Dragonriders.",
    quote:
      "She didn't kill them. Killing them would have wasted what they were. She took everything they had been and pressed it into a new shape — the shape of her need.",
    summary:
      "The vampire who created the Death Knights. She did not recruit them — she unmade them and put them back together with her covenant holding them in place.",
    facts: [
      "All three covenants come from her. She gave the Blood her hunger literally — they feed as she feeds.",
      "The first Frost Knights carry the cold she exhaled on her last breath.",
      "She considers the Unholy closest to what she fears becoming: something that consumes without thought and spreads without purpose.",
      "Her coven calls a Frost Knight lost to the cold \"gone under\" — not entirely affectionately.",
      "Her Knights were made solitary. The hunger was designed to isolate them.",
      "She is privately proud of Blood Knights who learn to share the feed.",
    ],
    detailLabel: "Things she made",
    detail: [
      {
        label: "Covenant's Edge",
        text: "The blade she uses as a standard — not the one she carries, but the one she made first. She has given it out eleven times.",
      },
      {
        label: "The First Grave",
        text: "An iron box of grave-dirt from the first grave she ever dug herself. She doesn't remember whose it was.",
      },
      {
        label: "The Court's Invitation",
        text: "Blank letters she sends to Knights she expects to be seen in places she cannot go herself.",
      },
      {
        label: "Vanguard of the Coven",
        text: "She was dissatisfied with every version of this armor for six years. On the seventh attempt she stopped correcting the armorer and started correcting the metal.",
      },
    ],
    open: [
      "Is she Aalis from the timeline, and if so which version is current?",
      "How large is the coven, and who else in it has a name?",
      "Whose grave was the first one?",
    ],
  },
  {
    id: "nyxbloom",
    name: "Nyxbloom",
    epithet: "Who made a thing with her hands",
    era: "classes",
    classId: "devourer",
    affiliation: "Devourer · Voidreaper",
    status: "Fragmentary",
    quote:
      "What they are to someone else is a set of powerful blades. What they are to her is the only thing she made with her hands after the fall.",
    summary:
      "A Voidreaper who forged the paired tonfa scythes Aphelion and Perihelion from cooled astral material. The documents treat her as known without ever explaining who she is.",
    facts: [
      "She forged Aphelion and Perihelion — obsidian-black scythes with nebulae visible in the metal.",
      "They are the only thing she made with her hands after \"the fall,\" an event referenced but never described.",
      "She is associated with the Voidreaper path.",
    ],
    open: [
      "What was the fall? It is referenced as though the reader already knows.",
      "What did she make before it, and why did she stop?",
    ],
  },
  {
    id: "astral-mystic",
    name: "The Astral Mystic",
    epithet: "Who taught the second way",
    era: "classes",
    classId: "devourer",
    affiliation: "Devourer · Stellar Pantheon",
    status: "Unnamed",
    summary:
      "An unnamed mystic of the Stellar Pantheon who pulled the first Voidreapers back from the edge of their own soul-hunger and taught them to turn the cosmic dark outward as starlight.",
    facts: [
      "Trained the Voidreapers in the star-temples of the Astral Sea.",
      "Most Devourers let the void hollow them; this figure taught the opposite.",
      "Has no name in any document — referred to only by role.",
    ],
    open: [
      "Does this figure have a name, or is the anonymity the point?",
      "Is the Stellar Pantheon related to Avara and Azalagor, or separate?",
    ],
  },
  {
    id: "the-inheritance",
    name: "The Death-Transcending Sorcerer",
    epithet: "Whose techniques are inherited",
    era: "classes",
    classId: "sovereign",
    affiliation: "Undying Sovereign",
    status: "Unnamed",
    quote: "A lich who died before the dying.",
    summary:
      "The ancient sorcerer whose fragmented soul-power every Undying Sovereign carries. The inheritance tolerates no divided loyalty because it came from a soul that knew none.",
    facts: [
      "Their techniques come from multiple sources — the geometry of Severance, the timing of the Lagging Strike, the soulfire of Grave Flash.",
      "A Sovereign's partial domain crystallizes into the Sovereign's Tomb as their soul grows into the inheritance.",
      "The inheritance shatters permanently if a Sovereign takes levels in another class.",
    ],
    open: [
      "Is this Vorlag, the first lich? Both are ancient, death-transcending, and predate the present age.",
      "How is a vessel chosen?",
    ],
  },
  {
    id: "the-fractured",
    name: "The Fractured",
    epithet: "A second self",
    era: "classes",
    classId: "mirrorwarden",
    affiliation: "Mirrorwarden",
    status: "Established",
    quote:
      "It is not a tool. It is a second self — companion, vault, and weapon. It shatters so you can detonate. It reforms so you can fight again.",
    summary:
      "Not one character but a kind of being: shattered mirror spirits bonded one to a Mirrorwarden, manifesting as towering figures of fractured glass with eyes of silver light.",
    facts: [
      "The externalized weight of everything its Mirrorwarden has witnessed and absorbed.",
      "It cannot be charmed, frightened or controlled, and obeys only its bonded warden.",
      "Every Reflection and Mirror Slot lives inside it; at 0 HP those are inaccessible.",
      "It grows with its warden — Large, then Huge at 10th, Gargantuan at 20th.",
    ],
    open: [
      "Where do they come from, and is there an original mirror?",
      "The glass shows worlds that should not exist — are those real places?",
      "Are they connected to the Vaelindor, who emerge from shattered mirrors themselves?",
    ],
  },
];
