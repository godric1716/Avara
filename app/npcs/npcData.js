/* Everything here is drawn from the class documents in Drive — no invented
   lore. `facts` are things the sources actually state; `open` lists the
   questions those sources raise but never answer, so the master document has
   somewhere obvious to start. */

export const NPCS = [
  {
    id: "aalise-bathory",
    name: "Aalise Bathory",
    epithet: "The one who made them",
    classId: "deathknight",
    affiliation: "Death Knight · The Coven",
    status: "Established",
    quote:
      "She didn't kill them. Killing them would have wasted what they were. She took everything they had been and pressed it into a new shape — the shape of her need.",
    summary:
      "The vampire who created the Death Knights. She did not recruit them — she unmade them and put them back together with her covenant holding them in place. Every Death Knight in Avara carries her mark in the framework of their bones.",
    facts: [
      "All three covenants come from her. She gave the Blood her hunger literally, not metaphorically — they feed as she feeds.",
      "The first Frost Knights carry the cold she exhaled on her last breath.",
      "Of the three, she considers the Unholy closest to what she fears becoming: something that consumes without thought and spreads without purpose.",
      "She runs a coven. Its members refer to a Frost Knight lost to the cold as \"gone under\" — not entirely affectionately.",
      "Her Knights were made solitary. The hunger was designed to isolate them.",
      "She is privately proud of Blood Knights who learn to share the feed, which the coven reads as either quiet rebellion or maturation.",
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
      "Where is she now, and does she hold court anywhere the party could reach?",
      "How large is the coven, and who else in it has a name?",
      "What is she afraid of becoming — and is something already pushing her toward it?",
      "Whose grave was the first one?",
    ],
  },

  {
    id: "nyxbloom",
    name: "Nyxbloom",
    epithet: "Who made a thing with her hands",
    classId: "devourer",
    affiliation: "Devourer · Voidreaper",
    status: "Fragmentary",
    quote:
      "What they are to someone else is a set of powerful blades. What they are to her is the only thing she made with her hands after the fall.",
    summary:
      "A Voidreaper who forged the paired tonfa scythes Aphelion and Perihelion from cooled astral material. The documents treat her as known — the blades are named for her without explanation — but say almost nothing else about who she is.",
    facts: [
      "She forged Aphelion and Perihelion, obsidian-black scythes with nebulae visible in the metal.",
      "The blades are the only thing she made with her hands after \"the fall\" — an event the class documents reference but never describe.",
      "She is associated with the Voidreaper path, the Devourers who turned the void outward as starlight rather than letting it hollow them.",
    ],
    detail: [],
    open: [
      "What was the fall? It is referenced as though the reader already knows.",
      "What did she make before it, and why did she stop?",
      "Is she still alive, and is she connected to the astral mystic who taught the Voidreapers?",
    ],
  },

  {
    id: "astral-mystic",
    name: "The Astral Mystic",
    epithet: "Who taught the second way",
    classId: "devourer",
    affiliation: "Devourer · Stellar Pantheon",
    status: "Unnamed",
    quote: "Where they were cuts, what they cut mends.",
    summary:
      "An unnamed mystic of the Stellar Pantheon who pulled the first Voidreapers back from the edge of their own soul-hunger and taught them to turn the cutting edge of the cosmic dark outward as starlight.",
    facts: [
      "Trained the Voidreapers in the star-temples of the Astral Sea.",
      "Most Devourers descend into the void and let it hollow them; this figure taught the opposite.",
      "Has no name in any current document — referred to only by role.",
    ],
    detail: [],
    open: [
      "Does this figure have a name, or is anonymity the point?",
      "What is the Stellar Pantheon, and does it have a presence in Avara proper?",
      "Are the star-temples of the Astral Sea reachable?",
    ],
  },

  {
    id: "the-inheritance",
    name: "The Death-Transcending Sorcerer",
    epithet: "Whose techniques are inherited",
    classId: "sovereign",
    affiliation: "Undying Sovereign",
    status: "Unnamed",
    quote: "A lich who died before the dying.",
    summary:
      "The ancient sorcerer whose fragmented soul-power every Undying Sovereign carries. Sovereigns are vessels for an inheritance — the techniques cooperate only with a singular host, because they came from a soul that knew no divided loyalties.",
    facts: [
      "Their techniques come from multiple sources: the slashing geometry of Severance and Rend, the rotational timing of the Lagging Strike, the soulfire of Grave Flash.",
      "A Sovereign's partial domain crystallizes into the Sovereign's Tomb as their soul grows into the inheritance.",
      "The inheritance shatters permanently if a Sovereign takes levels in another class — it tolerates no divided loyalty.",
      "The three Reliquaries are traditions for directing that inherited power, not separate origins.",
    ],
    detail: [],
    open: [
      "Who were they, and is any part of them still aware inside the inheritance?",
      "How does a vessel get chosen — is it deliberate, hereditary, or accidental?",
      "Can two Sovereigns exist at once, and what happens if they meet?",
    ],
  },

  {
    id: "the-fractured",
    name: "The Fractured",
    epithet: "A second self",
    classId: "mirrorwarden",
    affiliation: "Mirrorwarden",
    status: "Established",
    quote:
      "It is not a tool. It is a second self — companion, vault, and weapon. It shatters so you can detonate. It reforms so you can fight again.",
    summary:
      "Not one character but a kind of being: shattered mirror spirits of immense, volatile power, each bonded to a single Mirrorwarden. A Fractured manifests as a towering figure of fractured glass with eyes of silver light, showing distorted glimpses of worlds that should not exist.",
    facts: [
      "It is not truly alive, yet more than a construct — the externalized weight of everything its Mirrorwarden has witnessed and absorbed.",
      "It cannot be charmed, frightened, or controlled, and obeys only its bonded Mirrorwarden.",
      "Every Reflection and Mirror Slot a Mirrorwarden holds lives inside it. At 0 HP those are inaccessible.",
      "It grows with its warden — Large at first, Huge at 10th level, Gargantuan at 20th.",
    ],
    detail: [],
    open: [
      "Where do they come from, and is there a first or original mirror?",
      "Do they have any existence before bonding, or between wardens?",
      "The glass shows worlds that should not exist — are those real places?",
    ],
  },
];

export const STATUS_ORDER = ["Established", "Fragmentary", "Unnamed"];
