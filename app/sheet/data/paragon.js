/* Genetic Potential is level + CON, which is the only resource on the site
   that scales off an ability score rather than a table.

   Genetic Surge at 10 says only "your maximum increases" without a number,
   so it is not modelled — inventing one would put a wrong figure in a rules
   reference. Genetic Surge II at 14 does state +2, and that is applied. */
export function geneticPotentialMax(level, abilityMods) {
  const con = abilityMods?.con ?? 0;
  return Math.max(0, level + con + (level >= 14 ? 2 : 0));
}

/* Genes Known, straight off the progression table: 2 at 1st, then one more
   every odd level. */
export const PARAGON_GENES_KNOWN = [
  2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
];

export function poweredStrikeDie(level) {
  if (level >= 17) return "1d12";
  if (level >= 10) return "1d10";
  if (level >= 5) return "1d8";
  return "1d6";
}

export const PARAGON_GENERAL = [
  {lvl:1, name:"Powered Strike", action:"Attack action", desc:"Your basic attack: 1d6 plus your ability modifier and your proficiency bonus. The die grows to 1d8 at 5th, 1d10 at 10th, and 1d12 at 17th."},
  {lvl:1, name:"Hero Archetype", desc:"Choose Streak, The Web, The Weave, The Brick, or The Tempest. The choice is permanent."},
  {lvl:1, name:"Genes Known", desc:"You know 2 Genes at 1st level and one more at every odd level after, to 11 at 19th. Draw from the universal list or your archetype's exclusive list."},
  {lvl:2, name:"Genetic Potential", desc:"Your resource pool for Genes that cost points, equal to your Paragon level plus your Constitution modifier. At-will Genes cost nothing."},
  {lvl:5, name:"Extra Attack", desc:"Attack twice, instead of once, when you take the Attack action."},
  {lvl:7, name:"Adaptive Instinct", action:"Automatic · no action", desc:"When you take damage from a source that already damaged you earlier in the same encounter, you gain resistance to that damage type until the end of your next turn."},
  {lvl:10, name:"Genetic Surge", desc:"Your Genetic Potential maximum increases. The document doesn't state by how much — agree a number with your DM."},
  {lvl:11, name:"Extra Attack II", desc:"Attack three times when you take the Attack action."},
  {lvl:13, name:"Overcharged Genes", action:"1/short rest", desc:"Use a Gene that costs Genetic Potential without spending any points."},
  {lvl:14, name:"Genetic Surge II", desc:"Your maximum increases by 2, stacking with Genetic Surge. Once per long rest, when your Genetic Potential drops to 0, immediately regain half your maximum (round up) as part of the triggering action."},
  {lvl:17, name:"Extra Attack III", desc:"Attack four times when you take the Attack action."},
  {lvl:20, name:"Apex Potential", action:"Capstone", desc:"Two ability scores of your choice increase by 2, to a maximum of 24. Once per long rest, use two Genes as part of the same action without spending Genetic Potential for either."},
];

/* Genes behave exactly like the Unbroken's Instincts — chosen a fixed number
   of times, then always available — so they render through the same list. */
export const PARAGON_GENES = [
  {name:"Adrenal Surge", meta:"Gene · At-will · Bonus action", desc:"Advantage on your next Strength or Dexterity check or save made before the end of your turn."},
  {name:"Iron Skin", meta:"Gene · At-will · Reaction", desc:"Reduce damage taken by your proficiency bonus. Once per turn."},
  {name:"Reflexive Sense", meta:"Gene · At-will · Passive", desc:"You can't be surprised while conscious, and you add your proficiency bonus to initiative."},
  {name:"Powered Leap", meta:"Gene · At-will · Passive", desc:"Your jump distance is tripled, and you take no fall damage from falls of 20 feet or less."},
  {name:"Kinetic Burst", meta:"Gene · 1 GP", desc:"As part of a Powered Strike hit, push the target 10 feet."},
  {name:"Focused Mind", meta:"Gene · 1 GP · Bonus action", desc:"Advantage on Wisdom and Intelligence saves until the start of your next turn."},
  {name:"Overwhelm", meta:"Gene · 1 GP", desc:"On a Powered Strike hit, the target has disadvantage on its next save before the end of your next turn."},
  {name:"Second Wind (Genetic)", meta:"Gene · 2 GP · Bonus action", desc:"Regain 1d10 + your Paragon level hit points."},
  {name:"Sensory Overload", meta:"Gene · 1 GP · Action", desc:"One creature within 30 ft makes a Constitution save or is blinded and deafened until the end of its next turn."},
  {name:"Unbreakable Stance", meta:"Gene · 1 GP · Reaction", desc:"Negate being knocked prone, pushed, or pulled."},
  {name:"Aura of Presence", meta:"Gene · 2 GP · Action", desc:"Up to 3 creatures within 30 ft gain advantage on their next attack or save."},
  {name:"Emergency Output", meta:"Gene · All remaining GP (min 1) · Reaction · 1/long rest", desc:"When reduced to 0 HP, drop to 1 HP instead."},
];

export const PARAGON_FEATS = [
  {name:"Not Today", meta:"Feat · 1/short rest", desc:"Reaction: when an attack would reduce an ally within 30 ft to 0 HP, move up to your speed toward them ignoring opportunity attacks, and take the damage instead."},
  {name:"This Ends Now", meta:"Feat", desc:"Your Powered Strike deals an extra die of its damage type against a creature at or below half its hit point maximum."},
  {name:"With Great Power", meta:"Feat", desc:"Whenever you reduce a creature to 0 HP, regain 1 Genetic Potential, up to your maximum."},
  {name:"Big Damn Hero", meta:"Feat", desc:"If you enter combat by moving at least 20 ft toward the fight on your first turn, your first attack that turn has advantage."},
  {name:"Team-Up", meta:"Feat · 1/turn", desc:"When you hit a creature an ally has already hit this round, your attack deals an extra 1d6 damage."},
  {name:"Never Give Up", meta:"Feat · 1/long rest", desc:"When reduced to 0 HP but not killed outright, drop to 1 HP instead."},
  {name:"Signature Move", meta:"Feat · 1/long rest", desc:"Choose one Gene you know that costs Genetic Potential. Use it once without spending any points."},
  {name:"Everyone's Hero", meta:"Feat", desc:"Whenever you spend your action, reaction, or movement protecting, saving, or deliberately not harming an ally or bystander at a cost to your own position, gain temporary hit points equal to your Paragon level until the start of your next turn."},
];

/* Not tied to any archetype — the document notes these are usable by any
   Paragon, or indeed any class. */
export const PARAGON_ITEMS = [
  {name:"Cowl of the Vigilante", meta:"Uncommon · Attunement", desc:"Darkvision 60 ft, or +30 ft if you already have it. Advantage on Intimidation against creatures that can see you, while worn with the hood up."},
  {name:"Aegis Disc", meta:"Rare · Attunement", desc:"A returning throwing shield: +1 AC, and a melee or thrown attack for 1d8 + STR bludgeoning. It returns to your hand once the attack resolves."},
  {name:"Adamant Claws", meta:"Rare · Attunement", desc:"Magic slashing claws (1d6) that let you climb any surface without a check. Once per long rest as a bonus action, regain 2d8 + your Paragon level hit points."},
  {name:"Stormcaller's Hammer", meta:"Rare · Attunement (STR 15+)", desc:"A returning magic maul dealing 2d6 bludgeoning. Once per short rest on a hit, 2d8 lightning to the target and each creature within 10 ft, Dexterity save for half."},
  {name:"Utility Harness", meta:"Rare", desc:"Six compartments. Once per long rest as a bonus action, produce a smoke grenade, grapnel line, flashbang, or lockpick set as though you'd been carrying it."},
  {name:"Ring of the Unbreakable Ward", meta:"Very Rare · Attunement", desc:"Once per long rest as a reaction, reduce damage to yourself or an ally within 30 ft by 4d10."},
  {name:"Speed Force Anklets", meta:"Very Rare · Attunement", desc:"+15 ft walking speed. Once per short rest as a bonus action, Dash for free without provoking opportunity attacks this turn."},
  {name:"Gauntlets of the Iron Sentinel", meta:"Legendary · Attunement", desc:"Action: ranged spell attack at +7 for 4d10 force damage, three times per long rest. Resistance to nonmagical bludgeoning, piercing and slashing while worn."},
  {name:"Amulet of the Cosmic Sight", meta:"Legendary · Attunement", desc:"Cast detect magic at will. Once per long rest, cast dispel magic as a 5th-level spell without a slot."},
  {name:"Shield of Freedom", meta:"Legendary · Attunement", desc:"+2 AC, and a returning thrown weapon dealing 1d10 + STR force. Once per short rest as a reaction, grant an ally within 30 ft resistance to the triggering damage instead of yourself."},
  {name:"Lock of Phoenix Hair", meta:"Legendary · Attunement", desc:"Resistance to fire damage. Once per long rest, if reduced to 0 HP, rise instead with half your maximum HP in a burst of flame, dealing 3d6 fire to each creature within 10 ft."},
];

export const PARAGON_ARCHETYPES = {
  streak: {
    label: "Streak", colTitle: "The Streak",
    title: "Blistering velocity, momentum given weight",
    features: [
      {lvl:1, name:"Kinetic Instinct", desc:"+10 ft speed, and a reaction dodge-blur against attacks."},
      {lvl:1, name:"Blur Step", action:"Bonus action · at-will", desc:"A 15-foot teleport-dash. Your signature Gene, known for free."},
      {lvl:3, name:"Momentum", desc:"Whenever you move at least 20 ft in a turn, gain a Momentum die (1d4+1, becoming 1d6+1 at 9th), banked up to 4. Expend one as part of any attack to add its result to the damage."},
      {lvl:6, name:"Time-Slip", desc:"Advantage on Dexterity and Strength saving throws. Beat the DC by 5 or more and you negate the effect entirely."},
      {lvl:9, name:"Flash Time", action:"Ultimate · 1/long rest", desc:"Take an extra full turn immediately."},
      {lvl:15, name:"Afterimage", desc:"When you use Flash Time, attackers must choose between you and a lingering afterimage; targeting the afterimage automatically misses. Once per long rest it can also be used standalone as a bonus action."},
    ],
    instincts: [
      {name:"Redline", meta:"Gene · At-will · Streak", desc:"Treat a spent Momentum die as its maximum result — 5, or 7 at 9th level — instead of rolling."},
      {name:"Skid Stop", meta:"Gene · At-will · Reaction · Streak", desc:"When you end your movement, drop all banked Momentum dice to gain that much movement back."},
      {name:"Full Tilt", meta:"Gene · 1 GP · Streak", desc:"As part of your movement, your speed doubles until the end of turn and Momentum dice gained this turn are rolled with advantage."},
      {name:"Velocity Lash", meta:"Gene · 1 GP · Streak", desc:"On a Powered Strike hit after moving 20+ ft, deal an extra 1d6 per banked Momentum die, to a maximum of 3d6."},
      {name:"Phase Run", meta:"Gene · 2 GP · Streak", desc:"Move through creatures and objects for the rest of your turn."},
      {name:"Echo Step", meta:"Gene · 1 GP · Reaction · Streak", desc:"When an enemy misses you, move up to your banked Momentum dice × 5 feet without provoking."},
    ],
    items: [
      {name:"Boots of the Racing Pulse", meta:"Uncommon · Attunement (Streak)", desc:"+10 ft walking speed. Momentum triggers on any 20 ft of movement in a turn, even if it isn't in a straight line."},
      {name:"Chronowoven Sash", meta:"Rare · Attunement (Streak)", desc:"Once per short rest as a bonus action, gain a Momentum die without moving first."},
      {name:"Tachyon Circuit Anklets", meta:"Very Rare · Attunement (Streak)", desc:"Once per short rest, react to being hit by moving half your speed before damage is calculated. If that takes you out of range or sight, the attack misses."},
      {name:"The Golden Chronoarmor", meta:"Legendary · Attunement (Streak)", desc:"Once per long rest, Flash Time's extra turn is followed by another normal turn at your usual initiative. Your primary ability score counts as 2 higher for Powered Strike attack and damage rolls."},
    ],
  },

  web: {
    label: "The Web", colTitle: "The Web",
    title: "Evasion, repositioning, and battlefield puppetry over raw force",
    features: [
      {lvl:1, name:"Adhesive Grip", desc:"Climbing speed equal to your walking speed, and no damage from unintentional falls."},
      {lvl:1, name:"Web Line", action:"Bonus action · at-will · 30 ft", desc:"Swing (move 30 ft without provoking) or Snag (pull an ally free of danger, or force a Strength save to pull a hostile creature 15 ft or halve its speed). Your signature Gene, known for free."},
      {lvl:3, name:"Web-Sense", action:"Reaction · prof bonus/short rest", desc:"Advantage on Dexterity saves and you can't be surprised. Impose disadvantage on an incoming attack roll."},
      {lvl:3, name:"Tangled Strikes", desc:"Powered Strike hits apply a stacking Webbing condition to a maximum of 3, each reducing speed by 10 ft. Clearing all stacks costs the target its action. Hitting an already-maxed target splashes a stack onto another creature within 10 ft instead."},
      {lvl:6, name:"Safety Line", action:"Reaction", desc:"Yank an ally within 30 ft out of an attack's reach or a hazard, which can cause the triggering attack to miss outright."},
      {lvl:6, name:"Ensnare / Binding Web", desc:"Snag can fully restrain on a failed Strength save against DC 8 + proficiency + CON. Restraining applies 2 Webbing stacks."},
      {lvl:9, name:"Master Weaver", action:"Ultimate · 1/long rest", desc:"Fill a 30-ft cube with webbing — difficult terrain, restraining on entry — and reposition any already-restrained creature within it."},
      {lvl:11, name:"Overwhelmed", desc:"A target holding all 3 Webbing stacks also has its AC reduced by 2."},
      {lvl:15, name:"Weaver's Instinct", desc:"Web-Sense's reaction becomes unlimited, and a successful disadvantage-miss lets you use Web Line for free as part of the same reaction."},
    ],
    instincts: [
      {name:"Zip Line", meta:"Gene · At-will · The Web", desc:"When you Swing, bring one willing ally within 5 ft along for the move."},
      {name:"Sticky Landing", meta:"Gene · At-will · The Web", desc:"When you land from a fall or a Swing, make one free Powered Strike against a creature within 5 ft."},
      {name:"Web Shield", meta:"Gene · 1 GP · Reaction · The Web", desc:"Impose disadvantage on an attack targeting you or an ally within 30 ft."},
      {name:"Pinning Shot", meta:"Gene · 1 GP · The Web", desc:"A Webbing stack also gives the target disadvantage on attacks against anyone but you."},
      {name:"Cocoon", meta:"Gene · 2 GP · Action · The Web", desc:"A restrained creature can't take actions or reactions until the start of your next turn."},
      {name:"Web Anchor", meta:"Gene · 1 GP · Reaction · The Web", desc:"Halve forced movement on a creature within 30 ft."},
    ],
    items: [
      {name:"Web-Slinger's Cartridges", meta:"Uncommon · Attunement (The Web)", desc:"Wrist launchers with 3 charges per dawn. Action: fire webbing at a point within 60 ft, creating a swingable anchor."},
      {name:"Adaptive Web-Suit", meta:"Rare · Attunement (The Web)", desc:"Web Line's range increases to 60 ft. Once per short rest, Snag two creatures within 15 ft of each other with a single use."},
      {name:"Weaver's Mantle", meta:"Very Rare · Attunement (The Web)", desc:"Once per long rest, restraining a creature simultaneously webs up to two others within 10 ft."},
      {name:"Aranea's Loom", meta:"Legendary · Attunement (The Web)", desc:"Master Weaver is usable twice per long rest. While your webbing exists, teleport to any point in it as a bonus action, once per turn."},
    ],
  },

  weave: {
    label: "The Weave", colTitle: "The Weave",
    title: "A ranged psychic blaster whose confusion unravels a mind",
    features: [
      {lvl:1, name:"Mind Blast", desc:"Your Powered Strike can be made at 60 ft instead of in melee, dealing psychic damage. This applies to every attack, including those from Extra Attack."},
      {lvl:1, name:"Telepathic Bond", desc:"At-will telepathy within 60 ft with any creature that shares a language with you."},
      {lvl:3, name:"Fracture", desc:"On a Powered Strike hit, the target makes an Intelligence or Wisdom save (your choice) against DC 8 + proficiency + CHA or is Fractured until the end of its next turn: on a d6, 1–2 wastes its action, 3–4 forces it to target the nearest creature, 5–6 it acts normally. Only one Fractured target at a time."},
      {lvl:6, name:"Deepen the Fracture", desc:"Maintain Fracture on up to 2 creatures. A failed save also gives disadvantage on saves against your other Weave features."},
      {lvl:9, name:"Mind Storm", action:"Ultimate · 1/long rest", desc:"A 30-ft radius takes 4d6 psychic damage and makes a Fracture save, repeating each turn for 1 minute. No cap on simultaneous Fractures from this effect."},
      {lvl:15, name:"Puppeteer", action:"1/long rest", desc:"Override a Fractured creature's d6 roll and dictate its action instead — move, attack with advantage, or drop an item."},
    ],
    instincts: [
      {name:"Levitation Field", meta:"Gene · At-will · The Weave", desc:"Flying speed equal to your walking speed, hovering — you must end your turn within 5 ft of a surface."},
      {name:"Whisper Read", meta:"Gene · At-will · Action · The Weave", desc:"Read the surface thoughts of a creature within 30 ft. No save, though an Insight check against your Deception detects it."},
      {name:"Piercing Thought", meta:"Gene · 1 GP · The Weave", desc:"Mind Blast ignores psychic resistance and treats immunity as resistance."},
      {name:"Echoing Fracture", meta:"Gene · 1 GP · The Weave", desc:"On a failed Fracture save, one other creature within 10 ft must also save or become Fractured."},
      {name:"Silence the Mind", meta:"Gene · 2 GP · Reaction · The Weave", desc:"Force a reroll of a save you'd make against an incoming mental effect, choosing which result stands."},
      {name:"Shattering Presence", meta:"Gene · 1 GP · Bonus action · The Weave", desc:"Your next Powered Strike against a Fractured creature deals an extra 2d6 psychic damage."},
    ],
    items: [
      {name:"Circlet of Whispers", meta:"Uncommon · Attunement (The Weave)", desc:"Telepathic Bond reaches 120 ft, and you have advantage on Insight checks to detect lies from a linked creature."},
      {name:"Fractured Lens", meta:"Rare · Attunement (The Weave)", desc:"Once per short rest, a creature hit by Mind Blast has disadvantage on its Fracture save."},
      {name:"Crown of the Puppeteer", meta:"Very Rare · Attunement (The Weave)", desc:"Once per long rest as a bonus action, apply Fracture to a creature within 30 ft with no attack roll and no save."},
      {name:"Diadem of the Hive Mind", meta:"Legendary · Attunement (The Weave)", desc:"Maintain Fracture on any number of creatures at once, and share Telepathic Bond with up to 3 willing allies."},
    ],
  },

  brick: {
    label: "The Brick", colTitle: "The Brick",
    title: "A bruiser and grappler who beats enemies down while holding them there",
    features: [
      {lvl:1, name:"Titan's Grip", desc:"Grapple creatures up to two sizes larger than you — Huge at 1st level. Advantage on Athletics to grapple or shove, double carrying capacity, and you can grapple as part of a Powered Strike hit rather than using your action."},
      {lvl:1, name:"Crushing Hold", desc:"Grappled creatures take 1d6 bludgeoning at the start of their turn, and you need no free hand or weapon to strike them."},
      {lvl:3, name:"Overpower", desc:"Powered Strikes against a grappled target deal an extra 1d6 and the target has disadvantage on escape checks. You regain HP equal to a third of the damage dealt this way."},
      {lvl:6, name:"Twin Grip", desc:"Grapple cap rises to Gargantuan and you can grapple two creatures at once. Lifesteal rises to half. Action: slam two grappled creatures together for 2d6, Constitution save or stunned."},
      {lvl:9, name:"Seismic Slam", action:"Ultimate · 1/long rest", desc:"Slam a grappled creature into the ground for 4d10, ending the grapple, with a 15-ft area effect — Strength save for half, or knocked prone. Doesn't require an existing grapple."},
      {lvl:15, name:"Unstoppable Force", desc:"Uncapped grapple size, advantage on Strength saves, and immunity to forced movement while grappling. Lifesteal rises to two-thirds. Once per long rest, drop to 1 HP instead of 0 while grappling."},
    ],
    instincts: [
      {name:"Growth Spurt", meta:"Gene · At-will · Bonus action · The Brick", desc:"Grow to Large: +1d4 damage, +5 ft reach, disadvantage on Dexterity saves, until you end it."},
      {name:"Iron Grip", meta:"Gene · At-will · The Brick", desc:"A creature you have grappled is immune to all forced movement and teleportation."},
      {name:"Colossal Growth", meta:"Gene · 2 GP · Bonus action · The Brick", desc:"As Growth Spurt, but Huge: +2d4 damage and +10 ft reach, for 1 minute."},
      {name:"Aftershock", meta:"Gene · 1 GP · The Brick", desc:"+2 to the save DC of your slam and Seismic Slam effects."},
      {name:"Feeding Frenzy", meta:"Gene · 1 GP · Bonus action · The Brick", desc:"Your next Powered Strike against your grapple target automatically hits."},
      {name:"Human Shield", meta:"Gene · 1 GP · Reaction · The Brick", desc:"Redirect an attack targeting your grapple victim to yourself instead."},
    ],
    items: [
      {name:"Gauntlets of the Iron Grip", meta:"Uncommon · Attunement (The Brick)", desc:"Advantage on checks to maintain a grapple, and grappled targets have disadvantage on escape attempts."},
      {name:"Girdle of Titan Strength", meta:"Rare · Attunement (The Brick)", desc:"Your Strength becomes 21 if it isn't already higher, and slam-effect save DCs increase by 1."},
      {name:"Plates of the Unmovable", meta:"Very Rare · Attunement (The Brick)", desc:"While grappling, you have resistance to nonmagical bludgeoning, piercing and slashing, and can't be knocked prone."},
      {name:"Titan's Core", meta:"Legendary · Attunement (The Brick)", desc:"While grappling, your Strength counts as 24. Once per long rest, Seismic Slam needs no prior grapple and its area grows to 30 ft."},
    ],
  },

  tempest: {
    label: "The Tempest", colTitle: "The Tempest",
    title: "Elemental fury — Fire, Cold, or Lightning, chosen once and for good",
    features: [
      {lvl:1, name:"Elemental Affinity", desc:"Choose Fire, Cold, or Lightning at creation. Powered Strike deals that damage type, you have resistance to it, and your damage ignores resistance to it and treats immunity as resistance."},
      {lvl:1, name:"Elemental Mark", desc:"On a hit, apply a stack of your Mark, maximum 1 at this level. At the END of the marked creature's turn it takes 1d4 of your element and the mark ends. Cold halves its speed until the mark triggers; Lightning lets you arc half the tick damage to another creature within 10 ft."},
      {lvl:3, name:"Elemental Surge", desc:"Mark stacks to 3 and the tick die becomes 1d6 per stack. Cold: triggering at 3 stacks forces a Constitution save or the target is restrained in ice. Lightning: the arc no longer halves damage at 3 stacks."},
      {lvl:6, name:"Elemental Mastery", desc:"Fire: the tick deals an extra 1d6 if the target didn't move that turn. Cold: you ignore your own ice terrain, and ice-restrained targets are vulnerable to your damage. Lightning: the arc no longer needs 3 stacks and always hits one additional target at full damage."},
      {lvl:9, name:"Elemental Cataclysm", action:"Ultimate · 1/long rest", desc:"A 30-ft radius takes 6d6 of your element, save for half, plus a field effect — Fire leaves burning difficult terrain, Cold restrains on a failure, Lightning hits every creature at full uncapped damage."},
      {lvl:15, name:"Elemental Avatar", desc:"Immunity to your element. Fire: adjacent creatures take 2d6 at the start of your turn. Cold: creatures ending their turn within 5 ft take 2d6 and have their speed halved on a failed Constitution save. Lightning: once per turn when hit, react to teleport up to 30 ft, and creatures near your path take 2d6."},
    ],
    instincts: [
      {name:"Elemental Reach", meta:"Gene · At-will · The Tempest", desc:"Powered Strike can be made against a target within 10 ft without requiring melee range."},
      {name:"Attuned Resistance", meta:"Gene · At-will · The Tempest", desc:"Resistance to the two elemental damage types you didn't choose."},
      {name:"Overload", meta:"Gene · 1 GP · The Tempest", desc:"A newly applied Mark stack's tick damage resolves immediately instead of at the end of the turn."},
      {name:"Elemental Wave", meta:"Gene · 2 GP · Action · The Tempest", desc:"Fire: a 15-ft cone. Cold: a 30-ft line. Lightning: a bolt arcing to up to 3 targets within 10 ft of each other. Dexterity save; 2d6 and a Mark stack on a failure, half damage and no Mark on a success."},
      {name:"Double Mark", meta:"Gene · 1 GP · Bonus action · The Tempest", desc:"Your next Powered Strike this turn applies 2 Mark stacks instead of 1."},
      {name:"Elemental Feedback", meta:"Gene · 1 GP · Reaction · The Tempest", desc:"When you take damage of a type you resist, regain HP equal to half the damage prevented."},
    ],
    items: [
      {name:"Cloak of the Storm's Herald", meta:"Uncommon · Attunement (The Tempest)", desc:"Elemental Wave's area increases by 5 ft."},
      {name:"Core of the Undying Element", meta:"Rare · Attunement (The Tempest)", desc:"Once per short rest, applying a Mark stack applies an additional stack at the same time."},
      {name:"Cinderheart Catalyst", meta:"Very Rare · Attunement (The Tempest)", desc:"Renamed to match your element — Frostheart or Stormheart. As Core of the Undying, at a stronger and more reliable rate; the document leaves the exact frequency to the DM."},
      {name:"Heart of the Primal Storm", meta:"Legendary · Attunement (The Tempest)", desc:"Elemental Cataclysm recharges on a short rest rather than a long one, Mark stacks no longer cap at 3, and your primary ability counts as 2 higher for Powered Strike attack and damage rolls."},
    ],
  },
};

export const CLASS_PARAGON = {
  hitDie: 10,
  label: "Paragon", eyebrow: "Genetic Potential", primaryAbil: "str",
  resourceLabel: "Genetic Potential",
  resourceMax: function (level, abilityMods) {
    return geneticPotentialMax(level, abilityMods);
  },
  resourceRecoveryType: "rest",
  resourceRecoveryHint:
    "Equal to your Paragon level plus your Constitution modifier, so it grows as you do. At-will Genes cost nothing.",
  resourceButtons: [{ label: "Long Rest (full)", tag: "refill-full" }],
  subclassLabel: "Hero Archetype",
  subclasses: PARAGON_ARCHETYPES,
  generalFeatures: PARAGON_GENERAL,
  generalFeats: PARAGON_FEATS,
  instincts: PARAGON_GENES,
  instinctsLabel: "Genes",
  sharedItems: PARAGON_ITEMS,
};
