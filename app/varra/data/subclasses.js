/* Varra Aeterna — the ten Rhovian subclasses.

   `features` carries the rules text and `levels` the progression table, kept
   separate because the table lists a level's features by name while the
   feature entries carry the full text — and several levels grant more than
   one feature.

   `bullets` is optional per feature: some are a paragraph, some are a named
   list of sub-abilities. Both shapes appear in the source, so both are here
   rather than forcing everything into prose. */

export const SUBCLASSES = [
  {
    slug: "sicarius",
    kind: "subclass",
    dndClass: "Rogue",
    typeLabel: "Roguish Archetype",
    name: "The Sicarius",
    tagline: "They killed at noon, surrounded by witnesses who saw nothing",
    quote:
      "The Sicarii did not kill in shadows. They killed at noon, in the forum, surrounded by witnesses who saw nothing.",
    intro: [
      "The Sicarii were real. In the volatile decades of the late Rhovian Republic, they moved through forums, temples and markets with curved blades — sicae — hidden beneath their cloaks. They struck officials in broad daylight, then folded back into the crowd before the body finished falling.",
      "A Sicarius does not wait for the moment when everyone looks away. They are the moment everyone looks away — a familiar face, a concealed blade, and the half-second of inattention that is all a trained assassin ever needs.",
    ],
    levels: [
      { lvl: 3, feature: "The Sica, Mark of the Eagle" },
      { lvl: 9, feature: "Leap of Faith" },
      { lvl: 13, feature: "Brotherhood" },
      { lvl: 17, feature: "Assassin of the Forum" },
    ],
    features: [
      {
        lvl: 3,
        name: "The Sica",
        desc: "The blade was made to disappear until the moment it was needed. The sica is a short curved blade — a dagger: light, finesse, 1d4 piercing — with three special properties.",
        bullets: [
          { name: "Concealable", desc: "Conceal it as a bonus action. Detecting it requires a Perception check contested by your Sleight of Hand, even while you are being searched." },
          { name: "Instant Draw", desc: "Drawing or stowing it costs no action." },
          { name: "Unseen Edge", desc: "When you attack with a concealed sica against a creature that hasn't seen you draw it — the first round of combat, while disguised, or while violence isn't expected — apply Sneak Attack without needing an adjacent ally or advantage. You can't use it if you have disadvantage. It resets when the target loses sight of you after you re-conceal as a bonus action." },
        ],
      },
      {
        lvl: 3,
        name: "Mark of the Eagle",
        desc: "You read posture, breath, and the direction of a gaze. Bonus action: mark one creature within 60 feet. One mark at a time, lasting 1 hour.",
        bullets: [
          { name: "Tracked", desc: "You always know the marked target's exact location within 120 feet, ignoring invisibility and hiding." },
          { name: "Read", desc: "Advantage on Insight and Perception checks against the marked target." },
          { name: "Marked for Death", desc: "When you deal Sneak Attack damage to the marked target, deal an additional 1d6 piercing." },
        ],
      },
      {
        lvl: 9,
        name: "Leap of Faith",
        desc: "The drop that kills other people is the Sicarius's exit route.",
        bullets: [
          { name: "Unbroken Fall", desc: "Ignore all damage from falls of 60 feet or fewer." },
          { name: "Diving Strike", desc: "When you fall 15+ feet as part of your movement and land within 5 feet of a creature, make one melee attack against them as a free action." },
          { name: "Vanishing Landing", desc: "Landing in a space with half cover — a crowd of 3 or more, dense foliage, deep water, soft material — you may immediately attempt to Hide, even if you were observed before the fall." },
        ],
      },
      {
        lvl: 13,
        name: "Brotherhood",
        desc: "Across the city, trained killers owe you their loyalty. When you signal, they answer. Once per long rest as a bonus action, choose a creature affected by your Mark of the Eagle within 60 feet. A Brotherhood assassin strikes: that creature makes a DEX save (DC 8 + proficiency bonus + DEX modifier), taking your Sneak Attack dice in piercing damage on a failure, half on a success. This does not consume your Sneak Attack for the turn.",
      },
      {
        lvl: 17,
        name: "Assassin of the Forum",
        desc: "You do not blend into the crowd. You are the crowd.",
        bullets: [
          { name: "Ghost in the Crowd", desc: "While 3 or more non-hostile creatures are within 20 feet, use Cunning Action to Hide even without cover and even while observed. Outside combat, only 1 non-hostile creature is required." },
          { name: "Perfect Strike", desc: "When you use Unseen Edge and hit, you may maximise your Sneak Attack dice rather than rolling them." },
        ],
      },
    ],
    support: {
      title: "Gladius of the Tribune",
      desc: "The Uncommon shortsword in this book lets you maximise one Sneak Attack die rather than rolling it — see Magic Items.",
    },
  },

  {
    slug: "genius-loci",
    kind: "subclass",
    dndClass: "Druid",
    typeLabel: "Druid Circle",
    name: "Circle of the Genius Loci",
    tagline: "The grove does not stop healing when you turn away",
    quote: "The grove does not patch wounds. It grows them closed.",
    intro: [
      "The Rhovians understood that sacred places are not merely locations — they are presences. Every grove, spring and crossroads had its genius loci: the spirit of the place.",
      "A druid of this circle does not tend a grove. They become one, extending it outward into their companions. The forest does not stop healing when the druid turns away.",
    ],
    levels: [
      { lvl: 2, feature: "Bonus Spells, Living Grove (Root Seal, Grove's Mantle)" },
      { lvl: 6, feature: "Verdant Surge" },
      { lvl: 10, feature: "Genius Loci Form" },
      { lvl: 14, feature: "Genius Loci Manifest" },
    ],
    spells: [
      { lvl: 3, list: "Bless, Aid" },
      { lvl: 5, list: "Aura of Vitality, Mass Healing Word" },
      { lvl: 7, list: "Aura of Life, Death Ward" },
      { lvl: 9, list: "Dawn, Raise Dead" },
    ],
    features: [
      {
        lvl: 2,
        name: "Living Grove",
        desc: "The grove chooses who belongs to it. You are the mechanism of that choice. At the end of a long rest, designate up to your Wisdom modifier in creatures as Grove-Bound; plant growth manifests painlessly on them until your next long rest.",
        bullets: [
          { name: "Root Seal", desc: "When you cast a healing spell of 1st level or higher on a Grove-Bound creature, they gain a Root Seal: at the start of each of their turns they regain hit points equal to your Wisdom modifier, for a number of turns equal to the slot level used. Only one seal per creature — a new one replaces the old." },
          { name: "Grove's Mantle", desc: "When you cast a healing spell on a Grove-Bound creature, simultaneously grant a different Grove-Bound creature within 60 feet temporary hit points equal to your Wisdom modifier. No additional action required." },
        ],
      },
      {
        lvl: 6,
        name: "Verdant Surge",
        desc: "The grove does not wait to be asked. When a Grove-Bound creature within 60 feet takes damage, use your reaction to surge their growth: they gain temporary hit points equal to your Wisdom modifier + proficiency bonus. If the damage came from a melee attack, the attacker makes a Strength save (DC 8 + proficiency bonus + WIS modifier) or is restrained until the end of their next turn. Usable your proficiency bonus per long rest.",
      },
      {
        lvl: 10,
        name: "Genius Loci Form",
        desc: "You shed the pretence of a body and become, for a time, the place itself. When you use Wild Shape you may instead enter Genius Loci Form for one Wild Shape use. It lasts 10 minutes and ends if you choose to move.",
        bullets: [
          { name: "Rooted", desc: "You cannot move willingly, and you are immune to forced movement and to being knocked prone." },
          { name: "Concentrated", desc: "Advantage on Constitution saves to maintain concentration." },
          { name: "Eternal Bloom", desc: "Root Seals on Grove-Bound creatures within 60 feet do not tick down while you remain in form, and Root Seals applied while the form is active heal double your Wisdom modifier per tick." },
          { name: "Full Mantle", desc: "Grove's Mantle applies to every Grove-Bound creature within 60 feet on each healing cast, not just one additional target." },
        ],
      },
      {
        lvl: 14,
        name: "Genius Loci Manifest",
        desc: "The grove will not let them fall.",
        bullets: [
          { name: "Grove's Embrace", desc: "When a Grove-Bound creature within 60 feet drops to 0 hit points, use your reaction to instantly restore them to 1. They do not fall unconscious. Usable your Wisdom modifier per long rest." },
          { name: "Bloom", desc: "Once per long rest as an action, every Grove-Bound creature within 60 feet regains hit points equal to your druid level + Wisdom modifier, gains temporary hit points equal to twice your Wisdom modifier, and is affected by Bless for 1 minute with no concentration." },
        ],
      },
    ],
  },

  {
    slug: "triumphator",
    kind: "subclass",
    dndClass: "Fighter",
    typeLabel: "Martial Archetype",
    name: "The Triumphator",
    tagline: "Throw the standard into the enemy line, then charge toward it",
    quote: "March into the fray. The banner calls them home.",
    intro: [
      "The Rhovian triumph was a declaration: that the general who walked that road had bent the world to Rhovum's will.",
      "The Triumphator does not wait for the war to end to be celebrated. They throw their standard into the heart of the enemy line and charge toward it, dragging the battle's gravity with them.",
    ],
    levels: [
      { lvl: 3, feature: "The Vexillum, Dragon Strike" },
      { lvl: 7, feature: "Golden Aegis" },
      { lvl: 10, feature: "Triumphal March" },
      { lvl: 15, feature: "Relentless Advance" },
      { lvl: 18, feature: "Cataclysm" },
    ],
    features: [
      {
        lvl: 3,
        name: "The Vexillum",
        desc: "Your cohort battle standard, thrown into the ground as a tactical anchor.",
        bullets: [
          { name: "Plant the Standard", desc: "Bonus action: hurl the Vexillum to an unoccupied space within 60 feet. While planted, allies within 10 feet gain +1 to attack rolls and cannot be frightened. Retrieve it as a free object interaction when you enter its space. A hostile creature must use an action and succeed on a Strength check (DC 8 + proficiency bonus + STR modifier) to pull it out." },
          { name: "Advance on the Standard", desc: "Bonus action: move up to 30 feet directly toward the Vexillum without provoking opportunity attacks. This does not replace your regular movement." },
        ],
      },
      {
        lvl: 3,
        name: "Dragon Strike",
        desc: "Once per turn, the charge becomes a weapon. When you move at least 10 feet in a straight line before making a melee weapon attack, that attack deals an extra 1d8 damage and the target makes a Strength save (DC 8 + proficiency bonus + STR modifier) or is knocked prone. Advancing on the Standard counts as your required movement.",
      },
      {
        lvl: 7,
        name: "Golden Aegis",
        desc: "You raise your weapon and the line holds. Bonus action: you gain temporary hit points equal to 5 + your fighter level, allies of your choice within 15 feet gain temporary hit points equal to 5 + half your fighter level, and enemies within 15 feet make a Strength save or have their speed reduced by 10 feet until the start of your next turn. Usable your proficiency bonus per long rest.",
      },
      {
        lvl: 10,
        name: "Triumphal March",
        desc: "Victory in the moment feeds the next advance. When you or an ally within 30 feet reduces an enemy to 0 hit points, use your reaction: all allies within 30 feet gain temporary hit points equal to your proficiency bonus and may immediately move up to 10 feet without provoking opportunity attacks. Usable your proficiency bonus per long rest.",
      },
      {
        lvl: 15,
        name: "Relentless Advance",
        desc: "Every feature deepens. Nothing is replaced.",
        bullets: [
          { name: "Dragon Strike: Line Assault", desc: "Dragon Strike now affects every creature in a 5-foot line between your starting point and your target. Each makes the Strength save or is knocked prone." },
          { name: "Free Standard", desc: "Planting the Vexillum becomes a free object interaction once per turn — no bonus action required." },
          { name: "Charge and Strike", desc: "When you Advance on the Standard, make one melee attack on arriving within 5 feet of it as part of that bonus action. It qualifies for Dragon Strike automatically." },
        ],
      },
      {
        lvl: 18,
        name: "Cataclysm",
        desc: "Once per long rest, as an action. No one escapes. Move up to 30 feet toward a creature you can see without provoking opportunity attacks. On reaching an adjacent space, a ring of palisades erupts in a 10-foot radius around you and the target — 10 feet tall, impassable without flying or burrowing, each 5-foot section having 20 hit points, immunity to poison and psychic damage, and resistance to nonmagical physical damage. The target makes a Strength save (DC 8 + proficiency bonus + STR modifier) or is stunned until the end of your next turn. The palisades last 1 minute, until you fall unconscious, or until you end them with no action.",
      },
    ],
    support: {
      title: "Formation Fighting — custom Fighting Style",
      desc: "While at least one ally is within 5 feet of you, gain +1 AC and advantage on saving throws against being frightened. You are not a lone warrior. You are a line.",
    },
  },

  {
    slug: "venator",
    kind: "subclass",
    dndClass: "Ranger",
    typeLabel: "Ranger Archetype",
    name: "The Venator",
    tagline: "A clean thrust was acceptable. A messy struggle was not",
    quote: "The kill is not the point. The performance is.",
    intro: [
      "The venatores hunted exotic beasts in the Rhovian arena — lions from the south, bears from the northern forests, crocodiles from distant rivers. They fought with nets and spears and were expected not merely to kill but to do so with style.",
      "The crowd wanted a performance. A clean thrust was acceptable. A messy struggle was not.",
    ],
    levels: [
      { lvl: 3, feature: "Hunter's Net, Showkill" },
      { lvl: 7, feature: "Called Shot" },
      { lvl: 11, feature: "Trophy Capture" },
      { lvl: 15, feature: "Grand Venation" },
    ],
    features: [
      {
        lvl: 3,
        name: "Hunter's Net",
        desc: "The standard net is a novelty. Yours is a threat. You gain proficiency with nets and tridents. Your nets have a range of 15/30 rather than 5/15, their escape DC becomes 8 + proficiency bonus + DEX modifier rather than a flat 10, and you can throw a net as a bonus action once per turn rather than as an action. You can craft one net during a short rest and carry up to three.",
      },
      {
        lvl: 3,
        name: "Showkill",
        desc: "The crowd demands a performance. When you hit a creature that is restrained, paralysed or grappled with a weapon attack, deal extra damage: 1d6 + your Wisdom modifier at 3rd–6th level, 2d6 + WIS at 7th–10th, 3d6 + WIS at 11th–14th, and 4d6 + WIS from 15th.",
        table: {
          head: ["Ranger Level", "Extra Damage"],
          rows: [
            ["3rd–6th", "1d6 + WIS modifier"],
            ["7th–10th", "2d6 + WIS modifier"],
            ["11th–14th", "3d6 + WIS modifier"],
            ["15th+", "4d6 + WIS modifier"],
          ],
        },
      },
      {
        lvl: 7,
        name: "Called Shot",
        desc: "You place shots to control, not just to damage. Once per turn when a ranged weapon attack hits, declare a Called Shot with no extra action. Usable your Wisdom modifier per short rest.",
        bullets: [
          { name: "Hamstring", desc: "The target's speed is halved until the start of your next turn." },
          { name: "Disarm", desc: "Strength save (DC 8 + proficiency bonus + DEX modifier) or drop one held item." },
          { name: "Suppress", desc: "The target cannot take reactions until the start of your next turn." },
        ],
      },
      {
        lvl: 11,
        name: "Trophy Capture",
        desc: "A kill proves skill. A live capture proves mastery. When you reduce a Beast or Monstrosity of CR no higher than your proficiency bonus − 2 to 0 hit points, you may spend 1 minute binding it. It becomes your Captive for 24 hours: acting on your initiative after your turn, obeying simple verbal commands, and friendly to you and your allies. After 24 hours it regains its normal disposition and leaves. One Captive at a time, and dealing damage to your Captive immediately makes it hostile.",
      },
      {
        lvl: 15,
        name: "Grand Venation",
        desc: "Once per long rest, as an action. Every trap, every net, every called shot has been building toward this. Make one ranged weapon attack with advantage against a target within normal range. On a hit the attack deals maximum damage and the target makes a Strength save (DC 8 + proficiency bonus + DEX modifier) or is restrained for 1 minute — only a creature other than the target can spend an action to free them. If the target was already restrained they are instead stunned until the end of your next turn and your Showkill dice are rolled twice. On a miss, Grand Venation is not expended.",
      },
    ],
    support: {
      title: "Hunter's Mark variant",
      desc: "When you apply Hunter's Mark, the marked target also cannot benefit from the Disengage action. You've identified the prey. They don't get to run cleanly.",
    },
  },

  {
    slug: "burning-throne",
    kind: "subclass",
    dndClass: "Paladin",
    typeLabel: "Sacred Oath",
    name: "Oath of the Burning Throne",
    tagline: "You are worshipping a man who borrowed his divinity from a devil",
    quote: "I freeze them. I burn them. They cannot run.",
    intro: [
      "Two patrons together describe the complete shape of imperial conquest. Emperor Naeron — the self-declared divine emperor, who in his descent into madness swore himself to a devil sharing a corrupted form of his own name, Nero — embodies authority made absolute. Balvor, called Mars by the Rhovians, embodies purposeful destruction: cities razed on policy, fields scorched on strategy.",
      "This oath is not broken. It was chosen. You are not worshipping a god — you are worshipping a man who borrowed his divinity from a devil, and the devil is still in there.",
    ],
    tenets: [
      { name: "Conquer or submit", desc: "Everything before you has two fates. Decide which." },
      { name: "Fire is discipline made visible", desc: "Chaos burns recklessly. These flames are purposeful." },
      { name: "The Emperor's word is the war-god's action", desc: "Authority does not negotiate. It commands, and the fire follows." },
      { name: "The throne burns, but it does not fall", desc: "You may consume everything around you. You may not break." },
    ],
    levels: [
      { lvl: 3, feature: "Oath Spells, Conqueror's Smite, Channel Divinity" },
      { lvl: 7, feature: "Aura of Dominion" },
      { lvl: 15, feature: "Scorched Earth" },
      { lvl: 20, feature: "Avatar of Imperial Fire" },
    ],
    spells: [
      { lvl: 3, list: "Command, Burning Hands" },
      { lvl: 5, list: "Hold Person, Scorching Ray" },
      { lvl: 9, list: "Fear, Fireball" },
      { lvl: 13, list: "Dominate Beast, Wall of Fire" },
      { lvl: 17, list: "Dominate Person, Immolation" },
    ],
    features: [
      {
        lvl: 3,
        name: "Conqueror's Smite",
        desc: "The light of Balvor is not mercy. It is the fire of legions advancing. Your Divine Smite deals fire damage instead of radiant, and when you smite a creature that is frightened, restrained or paralysed the smite deals one additional fire damage die.",
      },
      {
        lvl: 3,
        name: "Channel Divinity",
        desc: "Two patrons. Two weapons.",
        bullets: [
          { name: "Imperial Command", desc: "Action: cast Command without a spell slot, targeting all creatures of your choice within 30 feet simultaneously — the same command word, individual saves. Creatures that fail are also frightened of you until the end of their next turn." },
          { name: "Martian Conflagration", desc: "Action: choose a point within 60 feet. A 10-foot radius, 40-foot tall column of sacred fire erupts there. Dexterity save against your spell save DC — failure takes 3d8 fire and 3d8 radiant damage, success takes half. Creatures that fail the Dexterity save also make a Wisdom save or are frightened until the end of your next turn." },
        ],
      },
      {
        lvl: 7,
        name: "Aura of Dominion",
        desc: "The flames know their own. They burn everything else. While you are conscious, a 10-foot aura — 30 feet at 18th level.",
        bullets: [
          { name: "For allies", desc: "Resistance to fire damage, and they cannot be frightened." },
          { name: "For enemies", desc: "Hostile creatures starting their turn in the aura take fire damage equal to your Charisma modifier + proficiency bonus. Hostile creatures frightened of you cannot willingly move while in the aura." },
        ],
      },
      {
        lvl: 15,
        name: "Scorched Earth",
        desc: "The ground itself becomes a weapon.",
        bullets: [
          { name: "Burning Ground", desc: "Once per short rest as an action, a 20-foot radius zone erupts within 120 feet for 1 minute with no concentration: difficult terrain, 2d8 fire damage to hostile creatures starting their turn there, and frightened creatures within cannot move or Dash." },
          { name: "Relentless Flame", desc: "Bonus action: move an active Burning Ground up to 30 feet to a new centre within 120 feet. The fire follows your will." },
        ],
      },
      {
        lvl: 20,
        name: "Avatar of Imperial Fire",
        desc: "Once per long rest, as an action, for 1 minute.",
        bullets: [
          { name: "Immunity", desc: "You are immune to fire damage." },
          { name: "Burning Strikes", desc: "Weapon attacks deal an extra 2d6 fire damage." },
          { name: "Perfect Smite", desc: "All Divine Smite dice deal maximum value." },
          { name: "Imperial Aura", desc: "Aura damage doubles and applies even to creatures immune to the frightened condition." },
          { name: "Mass Terror", desc: "Hostile creatures starting their turn in the aura make a Wisdom save or are frightened until the start of your next turn. Frightened creatures in the aura cannot take any action other than the Attack action." },
          { name: "Imperial Dominion", desc: "Once during the Avatar's duration, as a bonus action, one creature within 60 feet makes a Wisdom save or falls under Dominate Monster for the remainder of the Avatar, with no concentration." },
        ],
      },
    ],
    support: {
      title: "Lay on Hands variant",
      desc: "Your pool spends two ways. Restore is standard healing at 1 hit point per point spent. Ignite costs 10 points as a bonus action: one creature within 30 feet takes 3d6 fire damage and is set ablaze, taking 1d6 fire at the start of each of their turns until extinguished.",
    },
  },

  {
    slug: "lupa",
    kind: "subclass",
    dndClass: "Sorcerer",
    typeLabel: "Sorcerous Origin",
    name: "Bloodline of the Lupa",
    tagline: "A melee caster — the magic and the violence are the same thing",
    quote: "The she-wolf did not offer comfort. She offered survival.",
    intro: [
      "The founding myth of Rhovum doesn't begin with gods or kings — it begins with an animal who made a choice.",
      "The Lupa sorcerer is a melee caster. Their spells are not thrown from a safe distance; they are delivered through a strike, pressed into flesh at the point of contact. The magic and the violence are the same thing.",
    ],
    levels: [
      { lvl: 1, feature: "Wolf's Blood" },
      { lvl: 3, feature: "Lupa Metamagic" },
      { lvl: 6, feature: "Lupa's Fury" },
      { lvl: 14, feature: "Greater Spell Fang" },
      { lvl: 18, feature: "Lupa's Form" },
    ],
    features: [
      {
        lvl: 1,
        name: "Wolf's Blood",
        desc: "The bloodline sits just below the skin. It surfaces when you fight.",
        bullets: [
          { name: "Natural Armor", desc: "Your AC is 13 + your Dexterity modifier. No armor required." },
          { name: "Unarmed Strikes", desc: "1d6 piercing, using Dexterity for attack rolls and adding your Charisma modifier to damage." },
          { name: "Spell Fang", desc: "When you cast a Touch spell or a cantrip requiring a spell attack roll, deliver it through an unarmed strike. The strike roll replaces the spell attack roll. On a hit, both the strike damage and the spell effect apply; on a miss, both are lost." },
        ],
      },
      {
        lvl: 3,
        name: "Lupa Metamagic",
        desc: "The bloodline doesn't follow the rules other sorcerers were taught. When you gain Metamagic, these options are added to your available choices.",
        bullets: [
          { name: "Rending Spell (2 SP)", desc: "The spell ignores the target's resistance to its damage type, and treats immunity as resistance." },
          { name: "Blood Price (2 SP)", desc: "Cast the spell as if using a slot one level higher. You take 2d6 necrotic damage that cannot be prevented or reduced. Stackable." },
          { name: "Wolf's Instinct (1 SP)", desc: "When a creature within 5 feet attacks you, spend 1 sorcery point as a reaction to cast a cantrip against them before their attack resolves. A hit gives them disadvantage on the incoming attack." },
        ],
      },
      {
        lvl: 6,
        name: "Lupa's Fury",
        desc: "Wolves don't take one bite.",
        bullets: [
          { name: "Extra Attack", desc: "Attack twice when you take the Attack action. One attack per turn can be replaced with a Spell Fang delivery." },
          { name: "Pack Bond", desc: "While a creature is grappled by you, your Spell Fang attacks against it have advantage, and so do your allies' attacks against it." },
          { name: "Primal Survival", desc: "Once per long rest when damage would reduce you to 0 hit points, spend 3 sorcery points as a reaction to drop to 1 instead. If you have no points, this triggers once for free." },
        ],
      },
      {
        lvl: 14,
        name: "Greater Spell Fang",
        desc: "The jaw closes on something larger now. Spell Fang works for any spell requiring a single spell attack roll, not only Touch spells and cantrips. Your unarmed strikes scale to 2d6 + your Charisma modifier. On a Spell Fang hit the target makes a Strength save against your spell save DC or is grappled by you — once per turn, no action required.",
      },
      {
        lvl: 18,
        name: "Lupa's Form",
        desc: "Once per long rest, as a bonus action, for 1 minute. This is what the bloodline was building toward. You gain 30 temporary hit points and your unarmed strikes scale to 3d6 + your Charisma modifier. You can cast a levelled spell as your action and make unarmed strikes as your bonus action in the same turn, overriding the standard two-spells restriction. Creatures that take damage from your spells or strikes make a Wisdom save against your spell save DC or are frightened of you until the start of your next turn.",
      },
    ],
  },

  {
    slug: "path-of-the-arena",
    kind: "subclass",
    dndClass: "Barbarian",
    typeLabel: "Primal Path",
    name: "Path of the Arena",
    tagline: "You picked a school because it was what you survived learning",
    quote:
      "The Rhovian arena didn't produce soldiers. It produced performers who happened to kill people.",
    intro: [
      "Gladiators trained in schools, each teaching a different philosophy of violence. The Retiarius used space and restraint. The Secutor pressed the advantage. The Murmillo broke through anything in front of them.",
      "You didn't pick a style because it suited your personality. You picked it because it was what you survived learning.",
    ],
    levels: [
      { lvl: 3, feature: "Gladiatorial Stances, Blood Sport" },
      { lvl: 6, feature: "Crowd's Favor" },
      { lvl: 10, feature: "Veteran of the Sands" },
      { lvl: 14, feature: "Champion of the Arena" },
    ],
    features: [
      {
        lvl: 3,
        name: "Gladiatorial Stances",
        desc: "Choose your school when you enter Rage. Switch as a bonus action while raging.",
        bullets: [
          { name: "Retiarius — net and trident", desc: "Your reach extends 5 feet. On a hit, make a grapple attempt as a bonus action. Creatures grappled by you have their speed reduced to 0." },
          { name: "Secutor — sword and shield", desc: "+2 AC while raging. As a reaction when hit in melee, make one attack against the attacker. +1d6 damage on your first hit each turn." },
          { name: "Murmillo — heavy offensive", desc: "+1d6 damage on all attacks. Critical hits knock the target prone. You cannot be grappled or restrained in this stance." },
        ],
      },
      {
        lvl: 3,
        name: "Blood Sport",
        desc: "The crowd feeds you. When you reduce a creature to 0 hit points while raging, gain temporary hit points equal to your Constitution modifier + proficiency bonus.",
      },
      {
        lvl: 6,
        name: "Crowd's Favor",
        desc: "You've learned to make being hit look like a choice. While raging, when you take damage, use your reaction to reduce it by your proficiency bonus + Charisma modifier. Once per rage, when reduced to half hit points or below, switch stances as a free action and regain hit points equal to your barbarian level.",
      },
      {
        lvl: 10,
        name: "Veteran of the Sands",
        desc: "Every school opens up once you've bled enough to know how they really work.",
        bullets: [
          { name: "Retiarius", desc: "The grapple on a hit is automatic — no bonus action required." },
          { name: "Secutor", desc: "The AC bonus increases to +3, and the reaction attack is made with advantage." },
          { name: "Murmillo", desc: "Bonus damage increases to 2d6, and critical hits also stun the target until the end of their next turn." },
        ],
      },
      {
        lvl: 14,
        name: "Champion of the Arena",
        desc: "Once per long rest while raging, for 1 minute. The crowd stops breathing. Damage that would drop you to 0 hit points drops you to 1 instead, once per turn. Enemies within 30 feet have disadvantage on attacks against anyone except you. When you drop a creature to 0 hit points, all enemies within 30 feet make a Wisdom save (DC 8 + proficiency bonus + CHA modifier) or are frightened until the start of your next turn.",
      },
    ],
  },

  {
    slug: "augur",
    kind: "subclass",
    dndClass: "Cleric",
    typeLabel: "Divine Domain",
    name: "Domain of the Augur",
    tagline: "Someone had to read the world before the world acted",
    quote: "The Rhovians built nothing without reading the signs first.",
    intro: [
      "Battles, marriages, trade routes — all consulted the omens. The augur's role was practical: someone had to read the world before the world acted.",
      "The fact that it worked is a separate question from why.",
    ],
    levels: [
      { lvl: 1, feature: "Augur's Eye" },
      { lvl: 2, feature: "Channel Divinity: Read the Signs, Ill Omen" },
      { lvl: 6, feature: "Haruspex" },
      { lvl: 8, feature: "Divine Strike" },
      { lvl: 17, feature: "Seer of Fates" },
    ],
    spells: [
      { lvl: 3, list: "Detect Magic, Augury" },
      { lvl: 5, list: "Clairvoyance, Speak with Dead" },
      { lvl: 7, list: "Arcane Eye, Divination" },
      { lvl: 9, list: "Commune, Scrying" },
    ],
    features: [
      {
        lvl: 1,
        name: "Augur's Eye",
        desc: "You read what other people walk past without seeing. Add your Wisdom modifier to initiative rolls. During a short or long rest, spend 10 minutes performing augury to learn one of: the approximate number of combat encounters ahead (none, few, many); whether any creature within 1 mile intends harm toward the party; or a vague symbolic vision of a significant threat, at the DM's discretion.",
      },
      {
        lvl: 2,
        name: "Channel Divinity",
        desc: "You saw this coming. You warned them.",
        bullets: [
          { name: "Read the Signs", desc: "Action. For 10 minutes you cannot be surprised, you know the number and general direction of all creatures within 60 feet, and once before it ends you can use your reaction to give disadvantage to an incoming attack against you or an ally." },
          { name: "Ill Omen", desc: "Action. Mark one creature within 60 feet for 1 minute: it has disadvantage on saving throws, its first critical hit becomes a normal hit, and when it dies you perform an instant augury at no time cost." },
        ],
      },
      {
        lvl: 6,
        name: "Haruspex",
        desc: "Every death is legible if you know what to look for. When a creature within 60 feet dies, use your reaction and choose one: all allies within 30 feet gain advantage on their next attack roll; the next save any creature within 60 feet makes before the end of your next turn has disadvantage; or you briefly glimpse one significant memory of the creature.",
      },
      {
        lvl: 8,
        name: "Divine Strike",
        desc: "You read death. You also deal it. Once per turn when you hit with a weapon attack, deal an additional 1d8 necrotic damage, increasing to 2d8 at 14th level.",
      },
      {
        lvl: 17,
        name: "Seer of Fates",
        desc: "You have read enough endings to know how to avoid yours. Cast Foresight once per long rest without a spell slot. Once per long rest, automatically succeed on one death saving throw. You always know when a creature within 60 feet is actively concealing information or lying — not what the truth is, only that concealment is happening.",
      },
    ],
  },

  {
    slug: "lares",
    kind: "subclass",
    dndClass: "Wizard",
    typeLabel: "Arcane Tradition",
    name: "Tradition of the Lares",
    tagline: "Your territory is wherever your spells reach",
    quote:
      "The Lares don't live in a place. They live in your magic. Your territory is wherever your spells reach.",
    intro: [
      "The Rhovians kept minor spirits — Lares — tied to the household and threshold. The Tradition of the Lares doesn't bind spirits to a building. It binds them to a practice.",
      "Cast a Web and the Lares flow in. Cast Hunger of Hadar and they inhabit the dark. Your zone spells were already good. The Lares make them personal.",
    ],
    levels: [
      { lvl: 2, feature: "Household Spirits, Living Territory" },
      { lvl: 6, feature: "Warded Boundary" },
      { lvl: 10, feature: "Penates" },
      { lvl: 14, feature: "Genius Loci" },
    ],
    features: [
      {
        lvl: 2,
        name: "Household Spirits",
        desc: "The spirits have always been here. You've learned to invite them. Find Familiar is always prepared and doesn't count against your prepared spells. Your familiars are Lares — translucent minor spirits taking any Tiny form. You can maintain a number of Lares equal to half your Intelligence modifier rounded up, minimum 1.",
      },
      {
        lvl: 2,
        name: "Living Territory",
        desc: "Wherever a spell claims space, the Lares follow. When you cast a spell that creates a persistent area of effect lasting at least 1 round, that area becomes your Active Territory for the spell's duration. One territory at a time — a new one ends the old. While it exists, creatures within it grant you advantage on Perception and Investigation checks, your spell attack rolls against creatures inside have advantage, and hostile creatures within have their speed reduced by 10 feet.",
      },
      {
        lvl: 6,
        name: "Warded Boundary",
        desc: "The Lares know who belongs inside and who doesn't. When you establish Active Territory, ward its perimeter as a bonus action. Choose one effect that triggers for the first creature to enter from outside. One ward at a time. Alarm is also always prepared, and lasts permanently when cast outside this feature.",
        bullets: [
          { name: "Alarm Ward", desc: "You instantly know their location and appearance, including if they are invisible." },
          { name: "Repulsion Ward", desc: "2d8 force damage and pushed 5 feet; a Strength save halves the damage and prevents the push." },
          { name: "Binding Ward", desc: "Their speed is reduced to 0 until the end of their next turn." },
        ],
      },
      {
        lvl: 10,
        name: "Penates",
        desc: "Your bond with the spirits has become something the uninvited can feel. Once per short rest when you establish Active Territory, Empower it. While empowered: the speed reduction increases to 20 feet, hostile creatures starting their turn in the territory take 1d6 force damage, your spell save DC increases by 2 within it, and you can see through any Lar's eyes as a bonus action.",
      },
      {
        lvl: 14,
        name: "Genius Loci",
        desc: "You are more spirit than scholar now.",
        bullets: [
          { name: "Protective Ancestor", desc: "Reaction when you or an ally within the territory takes damage: one Lar destroys itself, absorbing up to 3d10 + your Intelligence modifier damage. The Lar reforms after 24 hours." },
          { name: "Banishment of the Unwelcome", desc: "Once per long rest as a reaction when a hostile creature enters the territory, they make a Charisma save against your spell save DC or are returned to the point they entered from and cannot willingly re-enter for 1 minute." },
        ],
      },
    ],
    support: {
      title: "Always-prepared spells",
      desc: "Find Familiar, Alarm, Web, Slow, Evard's Black Tentacles, Hunger of Hadar and Entangle are always prepared and don't count against your totals. Each creates an area the Lares can inhabit.",
    },
  },

  {
    slug: "divus",
    kind: "subclass",
    dndClass: "Warlock",
    typeLabel: "Otherworldly Patron",
    name: "The Divus",
    tagline: "A dead man whose divinity was decided by committee",
    quote:
      "Your patron was declared a god by a political body. Whether that declaration means anything is a question your power does not answer.",
    intro: [
      "The Rhovians voted on whether dead emperors were divine. Most were. Your patron is a dead man whose divinity was decided by committee, whose miracles were written by loyal historians — and whose power flows to you regardless.",
      "The Divus grants authority: the specific, social, terrifying kind that makes a room go quiet and do what it's told.",
    ],
    levels: [
      { lvl: 1, feature: "Expanded Spells, Edicts, Divine Presence" },
      { lvl: 6, feature: "Triumphal Authority" },
      { lvl: 10, feature: "Imperial Decree" },
      { lvl: 14, feature: "Apotheosis" },
    ],
    spells: [
      { lvl: 1, list: "Command, Charm Person" },
      { lvl: 2, list: "Suggestion, Crown of Madness" },
      { lvl: 3, list: "Hypnotic Pattern, Fear" },
      { lvl: 4, list: "Compulsion, Dominate Beast" },
      { lvl: 5, list: "Dominate Person, Geas" },
    ],
    features: [
      {
        lvl: 1,
        name: "Edicts and Divine Presence",
        desc: "The emperor's word is not a request.",
        bullets: [
          { name: "Edicts", desc: "Once per short rest, cast Command without expending a spell slot." },
          { name: "Divine Presence", desc: "Creatures that fail a save against your spells have disadvantage on the first attack roll and saving throw they make before the start of your next turn." },
        ],
      },
      {
        lvl: 6,
        name: "Triumphal Authority",
        desc: "Emperors don't address individuals. They address rooms.",
        bullets: [
          { name: "Crowd Control", desc: "When you cast a spell that charms or frightens a creature, affect one additional creature within range at no additional cost." },
          { name: "False Divinity", desc: "Once per long rest as an action, for 1 minute: you appear divine to magical detection, have advantage on Persuasion and Intimidation, and creatures that fail a Wisdom save against your spell save DC believe you are a deity until contradicted." },
        ],
      },
      {
        lvl: 10,
        name: "Imperial Decree",
        desc: "One command. Every room. Edicts now targets all creatures of your choice within 30 feet simultaneously — the same command word, individual saves. Divine Presence now applies to all saving throws a creature makes before the start of your next turn, not just the first.",
      },
      {
        lvl: 14,
        name: "Apotheosis",
        desc: "Whether your patron is truly divine stops mattering when you are.",
        bullets: [
          { name: "Acclaim", desc: "While you maintain a charm or fear effect on a creature they are Acclaimed — if an attack would hit you and an Acclaimed creature is within 5 feet of the attacker, the Acclaimed creature interposes and takes the damage instead." },
          { name: "The Deification", desc: "Once per long rest as an action, for 1 minute: you float 5 feet off the ground, charm and compel spells automatically succeed against creatures of CR up to half your warlock level, you heal for half the damage any creature within 60 feet takes, and you are immune to being charmed, frightened or compelled." },
        ],
      },
    ],
    invocations: [
      { name: "Tribune's Voice", req: "5th level", desc: "Edicts is usable twice per short rest." },
      { name: "Bread and Circuses", desc: "Exclude a number of creatures equal to your Charisma modifier from your area spells." },
      { name: "Praetorian Guard", desc: "Cast Shield once per short rest without a slot." },
      { name: "Voice of the Mob", req: "requires Eldritch Blast", desc: "Eldritch Blast pushes 10 feet and deafens." },
      { name: "Lapidary of the Divine", req: "9th level", desc: "Cast Glyph of Warding once per long rest without a slot." },
      { name: "Triumphal Procession", desc: "Creatures that recently failed saves against you cannot take opportunity attacks against you." },
      { name: "Immortal Reputation", desc: "Cast Disguise Self at will, as an idealised luminous version of yourself." },
    ],
  },
];
