/* Rhovian magic items and feats.

   Both use the {name, meta, desc} shape the character sheet's CheckList
   already renders, so they can be pinned to the Loadout alongside the
   homebrew classes' own items without a new component.

   The feats are deliberately general — the sourcebook states they are not
   locked to any class or subclass, so nothing here carries a class gate. */

export const VARRA_ITEMS = [
  {
    slug: "pilum-of-the-legion",
    name: "Pilum of the Legion",
    meta: "Rare · Weapon (javelin)",
    flavour: "Engineered to bend on impact, fouling enemy shields.",
    desc: "+1 to attack and damage, with a range of 30/120. On a hit against a creature with a shield, that shield's AC bonus is reduced to 0 until the start of their next turn.",
  },
  {
    slug: "aquila-standard",
    name: "Aquila Standard",
    meta: "Rare · Wondrous item",
    flavour: "The golden eagle of Rhovum has never touched the ground.",
    desc: "Allies within 30 feet who can see it cannot be frightened. When you take the Help action while carrying it, the target gains advantage on their next three rolls instead of one. Once per long rest as an action, hostile creatures within 30 feet make a Wisdom save (DC 15) or are frightened for 1 minute.",
  },
  {
    slug: "laurel-crown-of-triumph",
    name: "Laurel Crown of Triumph",
    meta: "Uncommon · Wondrous item · Attunement",
    flavour: "They put this on your head after the last battle.",
    desc: "When you reduce a creature to 0 hit points, gain 1d6 temporary hit points. Once per long rest, cast Heroism on yourself without a spell slot.",
  },
  {
    slug: "gladius-of-the-tribune",
    name: "Gladius of the Tribune",
    meta: "Uncommon · Weapon (shortsword)",
    flavour: "The blade rewards precision over power.",
    desc: "+1 to attack and damage. When you deal Sneak Attack damage, you can maximise one Sneak Attack die rather than rolling it.",
  },
  {
    slug: "ring-of-the-augur",
    name: "Ring of the Augur",
    meta: "Uncommon · Ring · Attunement",
    flavour: "You stopped ignoring what the birds were doing.",
    desc: "Advantage on Insight checks. Once per long rest, cast Augury without components or a spell slot. On a natural 20 on an Insight check, learn the target's surface thoughts for 1 round.",
  },
  {
    slug: "pugio-of-the-sicarii",
    name: "Pugio of the Sicarii",
    meta: "Rare · Weapon (dagger)",
    flavour: "They never found the weapon because nobody saw it drawn.",
    desc: "+1 to attack and damage. As a bonus action the blade becomes invisible for up to 1 hour — DC 18 Perception to notice you are armed. Attacks against a creature that has not yet taken a turn in combat deal an extra 2d6 piercing.",
  },
  {
    slug: "amphora-of-balvor",
    name: "Amphora of Balvor",
    meta: "Rare · Wondrous item",
    flavour: "Called the Amphora of Mars by the Rhovians — the same item.",
    desc: "Seven charges, regaining 1d4+2 at dawn. Spend 1 charge for Burning Hands, 3 for Fireball, or 5 for Wall of Fire. When the last charge is spent, roll a d20 — on a 1 the amphora shatters, releasing a 6th-level Flame Strike centred on the holder.",
  },
  {
    slug: "scutum-immortale",
    name: "Scutum Immortale",
    meta: "Very Rare · Shield · Attunement",
    flavour: "It has turned blows that should have been fatal. The dents are still there.",
    desc: "+2 to AC. Once per long rest, as a reaction when you or an ally within 5 feet takes damage, reduce it by 3d10 + your Constitution modifier. Shield proficiency is not required to attune.",
  },
  {
    slug: "tessera-of-passage",
    name: "Tessera of Passage",
    meta: "Common · Wondrous item",
    flavour: "A clay token. In the right hands, worth more than armor.",
    desc: "When you present this to a humanoid that would be hostile to you, they make a Wisdom save (DC 10) or pause and hear you out for 1 round before attacking. No effect on creatures that cannot understand language.",
  },
  {
    slug: "toga-praetexta",
    name: "Toga Praetexta",
    meta: "Uncommon · Wondrous item",
    flavour: "White wool with the purple border of a magistrate. Its authority outlasts whoever is wearing it.",
    desc: "Once per long rest, as a reaction when a hostile creature targets you, it makes a Wisdom save (DC 13) or retargets a random adjacent creature instead. Advantage on Persuasion checks with Rhovian-aligned factions.",
  },
];

export const VARRA_FEATS = [
  {
    slug: "legionary-discipline",
    name: "Legionary Discipline",
    meta: "Feat",
    flavour: "You trained in Rhovian military formation.",
    desc: "Proficiency with shields and heavy armor. While adjacent to at least one ally, gain +1 AC and advantage on saves against being frightened. When you use the Help action, the target also gains +1 AC until the start of your next turn.",
  },
  {
    slug: "gladiators-blood",
    name: "Gladiator's Blood",
    meta: "Half-feat (+1 CON)",
    flavour: "You survived the sands. Most don't.",
    desc: "+1 Constitution to a maximum of 20, and proficiency with nets and tridents. When you reduce a creature to 0 hit points, gain 1d6 temporary hit points. While grappled, deal 1d4 piercing damage to the grappler at the start of each of your turns.",
  },
  {
    slug: "haruspexs-eye",
    name: "Haruspex's Eye",
    meta: "Feat",
    flavour: "You read signs in the world others dismiss.",
    desc: "Cast Detect Magic and Augury each once per long rest without a spell slot. You always know when you are being observed by magical means — you sense the surveillance but not the source.",
  },
  {
    slug: "triumph",
    name: "Triumph",
    meta: "Feat · Prerequisite",
    flavour: "You must have survived a major battle or significant victory, at the DM's discretion.",
    desc: "Once per long rest when you reduce a creature to 0 hit points, issue a battle cry as a free action. All allies within 30 feet who can hear you gain temporary hit points equal to your proficiency bonus and advantage on their next attack roll.",
  },
  {
    slug: "pax-rhoviana",
    name: "Pax Rhoviana",
    meta: "Feat",
    flavour: "You carry the weight of imperial peace in every negotiation.",
    desc: "Advantage on Persuasion when negotiating with hostile or unfriendly creatures; on a success they hear one full proposal before attacking. Once per long rest, cast Zone of Truth without a spell slot.",
  },
  {
    slug: "son-of-balvor",
    name: "Son of Balvor",
    meta: "Feat",
    flavour: "The war-god's favor is not given — it is recognised. Balvor is called Mars by the Rhovians.",
    desc: "Your weapon attacks deal +1 damage. When you score a critical hit, the target is frightened of you until the end of their next turn. You are proficient with all martial weapons regardless of class.",
  },
  {
    slug: "vestals-favor",
    name: "Vestal's Favor",
    meta: "Feat",
    flavour: "You carry the flame that doesn't go out.",
    desc: "Gain the Sacred Flame cantrip, using Wisdom or Charisma — whichever is higher. Once per long rest, automatically stabilise a dying creature you touch. Advantage on death saving throws.",
  },
  {
    slug: "via-militaris",
    name: "Via Militaris",
    meta: "Feat",
    flavour: "You've walked every road. None of them slow you down.",
    desc: "Difficult terrain from natural sources never slows you. When you take the Dash action, move through hostile creatures' spaces without provoking opportunity attacks. Your travel pace never forces the group to slow.",
  },
];
