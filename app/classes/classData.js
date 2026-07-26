/* Flavor text, epigraphs, and quick-reference stats are transcribed from the
   class source documents in Drive. Mechanical blurbs summarize those docs. */

export const CLASSES = [
  {
    slug: "death-knight",
    id: "deathknight",
    name: "Death Knight",
    eyebrow: "Covenant of the Unbroken",
    quote:
      "She didn't kill them. Killing them would have wasted what they were. She took everything they had been and pressed it into a new shape — the shape of her need.",
    intro: [
      "The first Death Knights in Avara did not seek power. They were remade. Aalise Bathory pressed her mark into the framework of their bones — took what they had been, unmade it, and put it back together with something else holding it in place.",
      "A Death Knight is a weapon with memory. They carry Aalise's covenant in their flesh: the hunger of the Blood, the cold inevitability of Frost, the spreading hunger of the Unholy. Power builds during a fight through Grave Seals — a single resource that grows as violence continues and resets only once the fight is truly over.",
    ],
    hitDie: "d12",
    primaryAbility: "Constitution",
    saves: "Constitution, Charisma",
    armor: "All armor, shields",
    resource: "Grave Seals",
    resourceNote:
      "One pool. It builds during combat and resets after — a Death Knight paces nothing across a day, only across a fight.",
    detail: {
      label: "A death token",
      text: "A physical remnant of the moment you were unmade: a tooth, a lock of hair, a finger bone. It is yours. It is also hers.",
    },
    recovery: "Resets when combat ends",
    subclassLabel: "Covenant",
    subclassPlural: "Covenants",
    subclasses: [
      {
        name: "Blood",
        title: "The Hungering",
        quote:
          "These are Aalise's most personal instruments. She gave them her hunger — not metaphorically, but literally.",
        blurb:
          "Of the three paths, Blood Knights are the ones you could mistake for her own children. They carry the mark as she carries it — in the blood, in the hunger, in the way they heal faster the more they take.",
      },
      {
        name: "Frost",
        title: "The Unfeeling",
        quote:
          "They don't kill from hunger. They kill from inevitability.",
        blurb:
          "At sufficient cold, all resistance fails. Joints stop. Metal contracts. Bone becomes brittle. The Frost Knight doesn't fight faster — they fight with the precision of something that has already decided how this ends.",
      },
      {
        name: "Unholy",
        title: "The Undying",
        quote:
          "Vampirism is a disease. It spreads. Unholy Knights weaponized this truth.",
        blurb:
          "They don't just carry death — they distribute it. They raise what they kill, infect what they wound, command what dies near them. An Unholy Knight at their peak is not a warrior fighting one. They are a commander running a war.",
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
        desc: "Not a simple copy in Avara's lore — a second mark, a piece of Aalise's gift split off and given temporary independence. Every time you use it, briefly, there are two of you.",
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
    quote: "A vessel of inherited cursed power. A lich who died before the dying.",
    intro: [
      "The Undying Sovereign is a vessel — a living body that carries the fragmented soul-power of an ancient, death-transcending sorcerer. You have inherited techniques from multiple sources: the invisible slashing geometry of Severance and Rend, the rotational body-timing of the Lagging Strike, the explosive soulfire of Grave Flash, and a partial domain that crystallizes into the Sovereign's Tomb as your soul grows into its inheritance.",
      "You are not a spellcaster. You are not a martial fighter. You are something older than both.",
    ],
    hitDie: "d10",
    primaryAbility: "Intelligence",
    saves: "Constitution, Intelligence",
    armor: "None — see Deathless Frame",
    resource: "Malice",
    resourceNote:
      "It is not mana, not ki, not spell slots. It is the ambient energy of a death-touched, fractured soul pressed into the shape of power — and it is the only resource you have. The decision every turn is whether this moment is worth spending.",
    recovery: "Refills on a rest",
    subclassLabel: "Reliquary",
    subclassPlural: "Reliquaries",
    subclasses: [
      {
        name: "Carved Throne",
        title: "Plant yourself. Make the battlefield yours.",
        quote: "Your territory reports to you.",
        blurb:
          "You commit to a piece of ground and turn it into a demiplane of punishment. Moving through your space hurts. Trying to leave gets punished. Your domain is not a spell slot or a limited resource — it is a posture, a vow of stillness that the power inside you rewards with total territorial control.",
      },
      {
        name: "Twenty Vessels",
        title: "You are a wall. You do not die. You outlast.",
        quote: "Your body is half-dead and it knows it.",
        blurb:
          "You are not the fastest or the most explosive option in any given combat. You are the one still standing when everything else has fallen. Your blood hardens into ablative layers. Your body accrues resistance after resistance.",
      },
      {
        name: "Grave Pyre",
        title: "Seed it. Charge it. Detonate everything.",
        quote: "Your body is the furnace. Fire does not frighten it.",
        blurb:
          "You seed black flame across targets, compress it inside yourself over multiple turns, and release it in a detonation that ends fights. The Grave Pyre is about patience and payoff: two or three turns of careful setup followed by one turn that the table will remember.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Severance",
        cost: "0 Malice",
        desc: "Your baseline strike, Intelligence-based at melee or 30 feet. Every other technique is a decision about whether this moment is worth spending more.",
      },
      {
        lvl: 9,
        name: "Deathless Resolve",
        cost: "3 Malice",
        desc: "Reduced to 0 hit points, you drop to 1 instead. The lich does not die on someone else's schedule.",
      },
      {
        lvl: 20,
        name: "The Undying King",
        cost: "Crown Boon",
        desc: "Death has stopped asking your permission. The Tomb returns on a short rest, and surviving a killing blow refills your Malice entirely.",
      },
    ],
  },

  {
    slug: "mirrorwarden",
    id: "mirrorwarden",
    name: "Mirrorwarden",
    eyebrow: "Bonded to the Fractured",
    quote: "What you cast at me, I keep. What I keep, I return tenfold.",
    intro: [
      "Mirrorwardens are bonded to a Fractured — a shattered mirror spirit of immense, volatile power. Where other casters study spellbooks and commune with divine forces, a Mirrorwarden builds their power through observation. They watch. They absorb. They reflect.",
      "Their magic comes not from within but from everywhere — drawn from enemies who underestimate them, copied from allies mid-combat, stolen from legendary creatures. Every spell witnessed is a resource. Every failed attack is an opportunity. The longer a Mirrorwarden survives, the more dangerous they become.",
    ],
    hitDie: "d8",
    primaryAbility: "Charisma",
    saves: "Constitution, Charisma",
    armor: "Light armor, shields",
    resource: "Mirror Points",
    resourceNote:
      "Points accrue from being targeted and from the Fractured landing blows — the class is paid for surviving attention.",
    detail: {
      label: "The Fractured",
      text: "It is not a tool. It is a second self — companion, vault, and weapon. It shatters so you can detonate. It reforms so you can fight again.",
    },
    recovery: "Refills on a rest",
    subclassLabel: "Mirror Path",
    subclassPlural: "Mirror Paths",
    subclasses: [
      {
        name: "Path of the Fractal",
        title: "You cannot hit what is already somewhere else.",
        quote: "Hit something. The mirror scatters.",
        blurb:
          "Teleport in short steps and leave afterimages standing where you were. Stored slots ricochet outward, scattering shards to targets you never aimed at.",
      },
      {
        name: "Path of the Bastion",
        title: "You want through? Get through me first.",
        quote: "While your HP is above half, your surface reflects what strikes it.",
        blurb:
          "Designate who holds threat — you or the Fractured — and punish anything that looks elsewhere. Below half health your posture shifts automatically into absorption, converting damage taken into Mirror Points.",
      },
      {
        name: "Path of the Silver Light",
        title: "Stand near it. The glass remembers you.",
        quote: "The mirror does not hoard what it holds.",
        blurb:
          "The Fractured radiates a 15-foot aura granting allies +1 AC, free movement, and temporary HP each turn. Positioning that aura is the central skill expression of this path.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Mirror Imprint",
        cost: "Reaction",
        desc: "When a creature within 60 feet casts a spell, make a Persuasion check to keep it. Success fills a Reflection Slot you can cast from later.",
      },
      {
        lvl: 1,
        name: "Shattering Surge",
        cost: "Hit Dice",
        desc: "After the Fractured detonates, spend any number of Hit Dice and convert them straight into Mirror Points.",
      },
      {
        lvl: 20,
        name: "Endless Reflection",
        cost: "Capstone",
        desc: "Regain 3 Mirror Points at the start of each turn. The mirror never goes dark. The loop never ends.",
      },
    ],
  },

  {
    slug: "devourer",
    id: "devourer",
    name: "Devourer",
    eyebrow: "A Road That Walks Beside Death",
    quote:
      "They turned from the fel fire and looked into the dark between stars. The void was hungry. So were they.",
    intro: [
      "There is a road that walks beside death. Most who travel it die. A few become demon hunters — those who consume the fel of their enemies to fight the demons that hunt them. The Devourer is what waits at the end of a different road.",
      "A Devourer hunts souls. They carry no patron, no oath, no divine spark. The cosmic dark is not a master but a partner — a quiet engine humming behind their ribs. They strike from middle distance with paired void-touched glaives or scythes, mobile as wind and patient as starlight. They drop falling stars on battlefields and walk through the wounds they make.",
    ],
    hitDie: "d10",
    primaryAbility: "Charisma",
    saves: "Charisma, Wisdom",
    armor: "Light, medium",
    resource: "Soul Fragments",
    resourceNote:
      "You start every long rest at zero. The pool fills only through combat — the Devourer cannot rest its power into existence, only earn it inside the fight that needs it.",
    recovery: "Empties on a long rest",
    closer:
      "You do not master the void. The void does not master you. You walk together. Neither of you is full.",
    subclassLabel: "Hero Path",
    subclassPlural: "Hero Paths",
    subclasses: [
      {
        name: "Voidreaper",
        title: "The Devourer who refused the hollow road.",
        quote: "Where they were cuts, what they cut mends.",
        blurb:
          "Most Devourers descend into the void and let it hollow them. Voidreapers learned to do the opposite, taught the second way by an astral mystic who pulled them back from the edge of their own soul-hunger. The same beam that severs an enemy's soul mends a friend's wound.",
      },
      {
        name: "Annihilator",
        title: "Planet-crushing spellcaster, as a job description.",
        quote: "They looked at it as a job description, not a metaphor.",
        blurb:
          "Where the Voidreaper bends the void inward to mend, the Annihilator multiplies it outward to break. They are mid-range glaive-storms with falling stars at their heels, dropping literal pieces of the cosmic dark on battlefields and walking through the aftermath.",
      },
      {
        name: "Void-Scarred",
        title: "They learned that pain is just unspent power.",
        quote: "Wounds that never closed, but hum with stored void-pressure.",
        blurb:
          "Where the Annihilator throws the void outward, the Void-Scarred swallows it. A Void-Scarred stood at the edge of the abyss, looked back, and decided to be the wall between it and everyone else. They demand attention from anything that walks the battlefield with them, and the battlefield obeys.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Bound Pair",
        cost: "Ritual",
        desc: "A ten-minute ritual bonds up to two melee weapons. Charisma replaces Strength and Dexterity for attack and damage, and they count as magical.",
      },
      {
        lvl: 3,
        name: "Void Metamorphosis",
        cost: "3 Fragments",
        desc: "Transform: hovering flight, psychic resistance, and bonus necrotic on every bound weapon hit. Spending Fragments extends it — stop spending and it ends.",
      },
      {
        lvl: 10,
        name: "Collapsing Star",
        cost: "4 Fragments",
        desc: "Call down a shard of cosmic dark that lasts as long as your transformation — and detonates automatically the moment it ends.",
      },
    ],
  },

  {
    slug: "fablekeeper",
    id: "fablekeeper",
    name: "Fablekeeper",
    eyebrow: "Every Creature Has a Story",
    quote:
      "Every creature in the Tome has a story. Your job is to make sure it has a good one.",
    intro: [
      "The world is full of wild things, half-seen things, things that exist between the waking world and the illustrated page. A Fablekeeper knows them by name. They carry a leather-bound Tome whose pages breathe — each illustrated story a living bond with a creature that answers the call of an opened page. They are commanders and caretakers, battlefield strategists and wandering naturalists, equally at home applying a moonwater tincture to a wounded ally as they are directing a thunderstrike from sixty feet away.",
      "They are not warriors. They are authors. And in their hands, the story always has one more turn.",
    ],
    hitDie: "d8",
    primaryAbility: "Wisdom",
    saves: "Wisdom, Constitution",
    armor: "Light armor",
    resource: "Ink",
    resourceNote:
      "Wisdom governs the pool, and the pool powers your companions. The Fablekeeper is a battery — when they take a hit, they need to stay on their feet.",
    detail: {
      label: "The Fablekeeper's Tome",
      text: "An illustrated bestiary that serves as your companion summoning focus. Each companion's story lives on its own illustrated pages. To summon a companion, you open to their page. The Tome cannot be destroyed by mundane means.",
    },
    recovery: "Refills on a short rest",
    subclassLabel: "Subclass",
    subclassPlural: "Subclasses",
    subclasses: [
      {
        name: "Bonded Pair",
        title: "Fight beside your Starter.",
        blurb:
          "Within 5 feet of your active Starter, its Basic Action is automatically Enhanced at no Ink cost. Comes with medium armor and martial weapons — the Fablekeeper who stands in the line.",
      },
      {
        name: "Type Specialist",
        title: "Swear a damage type. Keep it.",
        blurb:
          "Choose one damage type, permanently. Companions sharing it pierce resistance to it for free and always, and deal bonus damage of that type.",
      },
      {
        name: "Item Master",
        title: "The bag is never empty.",
        blurb:
          "Tend becomes a bonus action instead of an action, and your daily Witch's Bag uses increase by your proficiency bonus.",
      },
      {
        name: "Tactician",
        title: "You already know how the round goes.",
        blurb:
          "You cannot be surprised and always know every creature's initiative count. Whenever your companion hits, an ally within 60 feet who can see or hear you gets set up.",
      },
      {
        name: "Ace Trainer",
        title: "Rotation is the weapon.",
        blurb:
          "Switching stops costing your bonus action once per turn, and every switch adds a stack of Rotation Momentum that applies immediately.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "The Tome",
        cost: "Focus",
        desc: "Your roster of inscribed companions, each with its own evolution stages and a Mega form unlocked at higher levels.",
      },
      {
        lvl: 1,
        name: "Ink",
        cost: "Resource",
        desc: "Spent to Enhance a companion's actions. Wisdom sets the pool; a short rest refills it.",
      },
    ],
  },
];

export function getClass(slug) {
  return CLASSES.find((c) => c.slug === slug);
}
