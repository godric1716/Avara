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

  {
    slug: "resonant",
    id: "resonant",
    name: "Resonant",
    eyebrow: "Elemental Harmony",
    quote:
      "Bend Earth, Water, Fire, and Air in balance — or break that balance and pay the price.",
    intro: [
      "A Wisdom-based full caster who draws on all four classical elements at once, channeling techniques through a Harmony Pool rather than spell slots. Unlike a bending master locked to one discipline, every Resonant has access to Earth, Water, Fire, and Air from 1st level — the real constraint is balance, not access.",
      "Four Harmony Tracks record what you have been leaning on. Keep them level and you are Flowing, and everything hits harder. Let one run away from the others and you are Imbalanced: the dominant element turns on you, and the one you have been neglecting locks shut entirely.",
    ],
    hitDie: "d8",
    primaryAbility: "Wisdom",
    saves: "Wisdom, Charisma",
    armor: "None",
    resource: "Harmony Points",
    resourceNote:
      "A single shared pool for all four elements — not four separate ones. That is what gives the class its bite: there is no way to main-line a favourite element for free, so every spend is also a balance decision.",
    recovery: "Refills on a long rest",
    detail: {
      label: "The Four Harmony Tracks",
      text: "Earth, Water, Fire, Air — each 0 to 5, tracked with tally marks. Casting raises that element's track by 1 regardless of tier or cost, and they reset only at the end of combat, never on a rest.",
    },
    subclassLabel: "Nation Path",
    subclassPlural: "Nation Paths",
    subclasses: [
      {
        name: "The Ascendant",
        title: "Fire",
        quote: "The flame burns through you first, and you let it.",
        blurb:
          "Nova and sustain through controlled self-harm. Overdraw lets you pay hit points for damage on any cast, and Volatile Equilibrium turns the class's own Imbalance warning into an advantage.",
      },
      {
        name: "The Steadfast",
        title: "Earth",
        quote: "A mountain doesn't forget a single season it's weathered.",
        blurb:
          "Tank and battlefield controller. Your tracks stop resetting at the end of combat, and Stoneguide lets you redirect an incoming hit away from an ally — or onto yourself, with resistance.",
      },
      {
        name: "The Tidecaller",
        title: "Water",
        quote: "The tide leaves a pull behind in everything it touches.",
        blurb:
          "Controller and debuffer with a scaling healer's kit. Undertow Marks accumulate on anything that fails a save against your Water, and can be spent to push a later save DC higher.",
      },
      {
        name: "The Untethered",
        title: "Air",
        quote: "A current doesn't carry just one leaf.",
        blurb:
          "Support built on a free standing bond. Movement itself adjusts your balance, and Skybound Bond threads a current through everyone close enough to catch it.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Balance States",
        cost: "Passive",
        desc: "Flowing when all four tracks sit within 1 of each other. Imbalanced when any track runs 3 or more above another — the highest element backlashes, the lowest locks.",
      },
      {
        lvl: 6,
        name: "Avatar State",
        cost: "Reaction",
        desc: "When all four tracks reach 3 or higher at once, spike them all to 5 for three rounds of empowered, discounted casting. Afterward every track crashes to zero and you take a level of exhaustion.",
      },
      {
        lvl: 20,
        name: "True Avatar",
        cost: "Capstone",
        desc: "Enter Avatar State with no track prerequisite, and hold it until you choose to let go.",
      },
    ],
  },

  {
    slug: "sangreal",
    id: "sangreal",
    name: "Sangreal",
    eyebrow: "Of the True Blood",
    quote:
      "There were never two vampires. There were five hungers wearing one face.",
    intro: [
      "Before Aalise Bathory ever claimed the title of Sang Éternel, there was only the Progenitor — a nameless first predator whose blood, when it finally split among those it turned, did not carry over cleanly. It fractured into five different answers to the same unbearable question: how do you go on living as something that isn't human anymore?",
      "Those five answers became the Bloodlines. Every Sangreal carries one fragment of the Progenitor's fractured nature, whether they know its origin or not — which gives Avara's vampires two independent axes. The Sang Perdu to Sang Éternel hierarchy measures age and power. Bloodline measures nature, regardless of how old or powerful you become.",
    ],
    hitDie: "d8",
    primaryAbility: "Dexterity (attacks), Charisma (Blood Sorcery)",
    saves: "Dexterity, Charisma",
    armor: "Light armor",
    resource: "Hunger",
    resourceNote:
      "One small pool that recharges on a short rest, and everything in the class spends from it. You regain Hunger by landing a critical hit or dropping a creature — feeding the loop rather than waiting on it.",
    recovery: "Recharges on a short rest",
    detail: {
      label: "Bloodstarved",
      text: "If spending Hunger on The Bite drops you to zero, you are Bloodstarved until you rest — disadvantage on all saving throws. One clean flag, not a formula. The Bite has no upper limit beyond what you're holding, so the decision to empty yourself is always available.",
    },
    closer:
      "You do not decide to feed. You decide, for one more moment, not to.",
    subclassLabel: "Bloodline",
    subclassPlural: "Bloodlines",
    subclasses: [
      {
        name: "Hollow Crown",
        title: "Aalise Bathory's own line",
        quote: "Bait the hit, punish the attacker, shrug off what lands.",
        blurb:
          "Aggressive protection. Compulsion reaches further when it's an ally being targeted, and every failed save against it either bleeds the attacker or feeds you. Any PC who takes it is either a scion Aalise has acknowledged — or a branch of her bloodline she doesn't yet know exists.",
      },
      {
        name: "Red Hunt",
        title: "Turned, not born",
        quote: "Chase, chain, never stop moving.",
        blurb:
          "Momentum that pays for itself. Blood Rush refunds itself on a kill, and Twin Fangs carries you from one target straight into the next.",
      },
      {
        name: "Weeping Veil",
        title: "Bonds over domination",
        quote: "Feeding your ally is what protects them.",
        blurb:
          "Every point of healing you take splashes onto the nearest ally automatically, and a named Bonded creature can take half your damage — their choice, not yours.",
      },
      {
        name: "Ashen Court",
        title: "Centuries of accumulated knowledge",
        quote: "Precision that doesn't miss and doesn't care what resists it.",
        blurb:
          "The Bite cuts straight through necrotic resistance, a Studied target hands advantage to your whole party, and once a rest an attack simply hits.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "The Bite",
        cost: "1+ Hunger",
        desc: "On any hit, spend as much Hunger as you're holding — 2d8 necrotic per point, rising to 3d8 at 10th. No upper limit, which is what makes emptying yourself a real option.",
      },
      {
        lvl: 9,
        name: "Compulsion",
        cost: "1 Hunger",
        desc: "Reaction: an enemy within 10 feet saves or its attack redirects to a target of your choice, within that effect's own range.",
      },
      {
        lvl: 20,
        name: "The Undying Feast",
        cost: "Capstone",
        desc: "For one minute everything except The Bite costs nothing — so every point you generate pours into The Bite instead of being split four ways.",
      },
    ],
  },

  {
    slug: "unbroken",
    id: "unbroken",
    name: "The Unbroken",
    eyebrow: "A Wound, and Then a Wolf",
    quote:
      "You do not choose the wolf. You bleed, and it decides you're ready.",
    intro: [
      "Where a Sangreal is made — turned, chosen, handed the Progenitor's fractured blood on purpose — the Unbroken are made by nothing so deliberate. A wolf is not sired. A wolf is revealed, usually at the worst possible moment: a blade that should have killed you, a wound that should have ended the fight, and instead of dying you simply changed.",
      "So there is no elegant origin myth here, no first wolf whose blood split five ways. There is only the same fact repeated across centuries and across bloodlines that have nothing to do with each other: enough pain, in the right person, reveals something that was always underneath. The Packs that formed afterward didn't organize around shared blood. They organized around shared answers to the same violence.",
      "The Bathory Pack — Aalise's own circle of bound wolves — sits at the center of most of what Avara has written down about the Unbroken, not because they invented the condition but because they were the first to survive it long enough to write anything at all.",
    ],
    hitDie: "d12",
    primaryAbility: "Strength, Constitution",
    saves: "Strength, Constitution",
    armor: "Light armor, medium armor, shields",
    resource: "Bloodlust",
    resourceNote:
      "The only pool in Avara with no ceiling. While transformed, damage dealt and damage taken both generate Bloodlust at their full value — symmetric on purpose — and you spend it to reduce incoming damage as it lands, no action required.",
    recovery: "Resets when the encounter ends",
    detail: {
      label: "The Threshold",
      text: "Drop to half your maximum HP or below and you transform — automatically, free, no action spent, no choice offered. Everything the class does is built on the far side of that line, which makes the first half of your health a resource like any other.",
    },
    closer:
      "Nothing in this class ever heals you. The pack keeps you standing; your own hands don't.",
    subclassLabel: "Tank Pack",
    subclassPlural: "Tank Packs",
    subclasses: [
      {
        name: "Ironback",
        title: "Pure mitigation",
        quote: "The wall that doesn't move, and doesn't explain why.",
        blurb:
          "No punishment, no redirect — just a hit cap. Stone Wall spends Bloodlust automatically to hold any single blow under a percentage of your maximum HP, and that ceiling keeps tightening as you level. The pack watches you take blow after blow and simply not fall.",
      },
      {
        name: "Bloodfang",
        title: "Retaliation",
        quote: "Every hit that lands on you is a mistake the attacker keeps paying for.",
        blurb:
          "Bloodlust spent on defense comes back out as necrotic damage, and the wound doesn't close clean — it ticks again the following turn unless someone heals it. By 15th, anything that has bled you once attacks you at disadvantage for the rest of the fight.",
      },
      {
        name: "Warden's Circle",
        title: "Redirect",
        quote: "It doesn't matter what you were already doing. The wolf moves anyway.",
        blurb:
          "You get between the party and the thing trying to kill them, physically and repeatedly. Stand Between costs no Bloodlust to trigger, and from 8th it stops costing your reaction at all when the blow would have killed someone.",
      },
      {
        name: "Vaela's Line",
        title: "The odd sibling",
        quote: "The hybrid made literal, not just borrowed.",
        blurb:
          "The newest and strangest Pack, traced back to Vaela herself — proof that the wolf's revelation and the vampire's turning were never as incompatible as either side likes to claim. Control and speed pulled from vampire blood, layered over a body that still refuses to heal itself.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Bloodlust",
        cost: "The whole system",
        desc: "Spend it 1-for-1 to reduce damage the instant it would land. At 14th each point stops two, and there is never a maximum — what you're holding is only ever what the fight has given you.",
      },
      {
        lvl: 10,
        name: "Provoke the Change",
        cost: "1/short rest",
        desc: "Bonus action to spend your own health down to exactly half, triggering the Threshold deliberately. Because you chose it, you bank double the HP spent as Bloodlust and hit for an extra 1d8 for the rest of the transformation.",
      },
      {
        lvl: 20,
        name: "The Unbroken Pack",
        cost: "Capstone",
        desc: "Once per long rest, redirect a killing blow aimed at an ally within 30 feet onto yourself — and then reduce it with Bloodlust as normal. You never heal, but you can always be the one who bleeds instead of them.",
      },
    ],
  },

  {
    slug: "paragon",
    id: "paragon",
    name: "The Paragon",
    eyebrow: "Genetic Potential",
    quote:
      "The power is the easy part. It arrives whether you asked for it or not. Everything after that is a decision you keep making.",
    intro: [
      "Some are born with it. Most find out the way anyone finds out anything important — badly, suddenly, in a moment where there was no time to be careful. A wall comes down and doesn't land on you. A blade stops an inch short and you don't know why. Something that was always in you answers a question you didn't ask.",
      "Magic in Avara is old, dangerous, and tightly bound to bloodlines, pacts, and places of power — vampires, fae courts, wolves, witches, the works. A Paragon doesn't fit any of those boxes. Genetic Potential is something stranger: a power that simply is, awakened in an ordinary person rather than inherited through a known lineage or granted by a patron.",
      "Nobody has a name for what a Paragon is when one first appears — not witch, not blessed, not cursed — so the world reaches for the nearest story it has and calls them a hero, a monster, or a miracle, depending on who's watching and what they just did with their powers. That ambiguity is the heart of the class: a Paragon has to choose to be a hero. Nothing about the power itself makes that choice for them.",
    ],
    hitDie: "d10",
    primaryAbility: "Strength or Dexterity",
    saves: "Strength, Constitution",
    armor: "Light armor, medium armor, shields",
    resource: "Genetic Potential",
    resourceNote:
      "The only pool in Avara that scales off an ability score rather than a table: your Paragon level plus your Constitution modifier. It grows every single level, so the question is never whether you can afford a Gene, only how much of yourself you're willing to spend at once.",
    recovery: "Refills on a long rest",
    detail: {
      label: "A second life",
      text: "Alone among Avara's classes, a Paragon starts with a costume and a set of common clothes for the name people already know them by. The class assumes there is someone you were before this, and someone you still have to be at dinner.",
    },
    closer:
      "Every feat this class offers is a moment rather than a mechanic. Not Today. Never Give Up. Everyone's Hero. Read that list and you can see what the class thinks it is about — and what it thinks you'll have to keep deciding.",
    subclassLabel: "Hero Archetype",
    subclassPlural: "Hero Archetypes",
    subclasses: [
      {
        name: "Streak",
        title: "The speedster",
        quote: "By the time it matters, you were already there.",
        blurb:
          "Momentum given weight. Every twenty feet you cover banks a die you can spend on a hit, so standing still is the only real way to run dry. At 9th you take an extra turn outright, and at 15th you leave something behind that soaks the attacks meant for you.",
      },
      {
        name: "The Web",
        title: "The web-slinger",
        quote: "You don't have to hit them. You have to hold them still.",
        blurb:
          "Battlefield puppetry rather than force. Your hits stack Webbing that slows a target until clearing it costs them a whole action, and your reactions belong to other people — hauling an ally out of a hazard, making an attack miss that was never aimed at you.",
      },
      {
        name: "The Weave",
        title: "The telepath",
        quote: "Their body is not the part that's fighting you.",
        blurb:
          "The only Archetype that fights entirely at range. Mind Blast makes every attack a 60-foot psychic strike, and Fracture leaves a mind rolling a die each turn to see whether it gets to act at all. By 15th you stop leaving that to chance and simply tell it what to do.",
      },
      {
        name: "The Brick",
        title: "The strongman",
        quote: "It stops being a fight the moment you get hold of them.",
        blurb:
          "A bruiser and grappler in one. You grab things far larger than you, hurt them for holding still, and heal off a share of the damage you deal doing it. By 15th there's no size you can't take hold of and nothing that can move you while you're holding it.",
      },
      {
        name: "The Tempest",
        title: "The elemental",
        quote: "Fire, cold, or lightning — decided once, at the beginning.",
        blurb:
          "Choose your element at creation and never again. All three share the same damage maths; what changes is what your Mark does when it goes off. Cold freezes them in place, Lightning jumps to whoever's nearest, and Fire punishes anything that stood still to take it.",
      },
    ],
    signature: [
      {
        lvl: 1,
        name: "Powered Strike",
        cost: "At-will",
        desc: "Your basic attack, and unusually it scales on its own: 1d6 plus your modifier and your proficiency bonus, growing to 1d12 by 17th. Every Archetype reshapes what it means — the Weave fires it 60 feet, the Tempest sets it alight, the Brick grabs hold with it.",
      },
      {
        lvl: 7,
        name: "Adaptive Instinct",
        cost: "Automatic",
        desc: "Anything that hurts you twice in one fight stops working as well the second time. No action, no roll, no choice — your body simply learns, mid-encounter.",
      },
      {
        lvl: 20,
        name: "Apex Potential",
        cost: "Capstone",
        desc: "Two ability scores rise by 2, past the usual ceiling to a maximum of 24, and once a day you fire two Genes off in the same action for nothing at all.",
      },
    ],
  },
];

/* Source documents hosted under /public/documents. `size` is shown on the
   download so nobody opens a 1 MB file on phone data by accident. */
export const CLASS_DOCUMENTS = {
  "death-knight": [{ label: "Death Knight class document", file: "death-knight.pdf", size: "77 KB" }],
  "undying-sovereign": [
    { label: "Undying Sovereign class document", file: "undying-sovereign.pdf", size: "31 KB" },
  ],
  mirrorwarden: [{ label: "Mirrorwarden class document", file: "mirrorwarden.pdf", size: "155 KB" }],
  devourer: [{ label: "Devourer class document", file: "devourer.pdf", size: "55 KB" }],
  fablekeeper: [
    { label: "Fablekeeper class document", file: "fablekeeper.docx", size: "58 KB", kind: "DOCX" },
    { label: "Fablekeeper Pokédex", file: "fablekeeper-pokedex.pdf", size: "1.0 MB" },
  ],
  resonant: [{ label: "Resonant class document", file: "resonant.pdf", size: "83 KB" }],
  sangreal: [{ label: "Sangreal class document", file: "sangreal.pdf", size: "105 KB" }],
  unbroken: [{ label: "Unbroken class document", file: "unbroken.pdf", size: "106 KB" }],
  paragon: [{ label: "Paragon class document", file: "paragon.pdf", size: "29 KB" }],
};

export function getClass(slug) {
  return CLASSES.find((c) => c.slug === slug);
}

export function getDocuments(slug) {
  return CLASS_DOCUMENTS[slug] || [];
}
