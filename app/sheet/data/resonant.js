/* Harmony Points by level, straight from the class table. Not a formula —
   the progression is hand-tuned and jumps unevenly (14 at 3rd, 27 at 5th). */
export const HARMONY_POOL = [
  4, 6, 14, 17, 27, 32, 38, 44, 57, 64, 73, 73, 83, 83, 94, 94, 107, 114, 123, 133,
];

export const RESONANT_CANTRIPS_KNOWN = [
  3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];

export const RESONANT_GENERAL = [
  {lvl:1, name:"Spellcasting", desc:"Wisdom-based full caster working from a Harmony Pool rather than spell slots. Every technique of all four elements is available from 1st level — the constraint is balance, not access."},
  {lvl:1, name:"Harmony Pool", desc:"Your single shared resource for every element. One pool, not four — which is what makes each spend a balance decision rather than a free choice."},
  {lvl:1, name:"Ripple Techniques", cost:"0 Harmony", desc:"You know a number of Ripple techniques equal to your Cantrips Known, from any element. They cost nothing and can be cast any number of times. Damage scales at 5th, 11th, and 17th."},
  {lvl:1, name:"The Four Harmony Tracks", desc:"Four tracks — Earth, Water, Fire, Air — each 0 to 5. Casting a technique of an element raises that track by 1, regardless of tier or cost. Tracks reset only at the end of combat, not on a rest."},
  {lvl:1, name:"Balance States", desc:"Flowing: all four tracks within 1 of each other — techniques deal +1d6 and many gain a Flowing-only rider. Neutral: the warning zone, nothing happens. Imbalanced: any track 3+ higher than another — the highest element backlashes on you (per your Path) and the lowest element locks until balance returns."},
  {lvl:1, name:"Partial Resonance", desc:"When 3 of your 4 tracks are at 3 or higher, the next technique you cast before the end of your turn has its save DC increased by 2, or advantage on its attack roll instead."},
  {lvl:2, name:"Nation Path", desc:"Commit to The Ascendant, The Steadfast, The Tidecaller, or The Untethered. Grants features at 2, 6, 10, 14, and 18."},
  {lvl:6, name:"Avatar State", action:"Reaction · concentration", desc:"When all four tracks reach 3 or higher simultaneously, enter Avatar State for 3 rounds. All four tracks spike to 5. Techniques are Empowered (maximize one damage die each). One free Ripple cast per turn outside your normal action economy. All Harmony costs reduced by 1 (min 1). Aftermath: all tracks crash to 0 and you gain one level of exhaustion."},
  {lvl:11, name:"Sustained Resonance", desc:"Avatar State duration extends from 3 rounds to 4."},
  {lvl:17, name:"Boundless Resonance", desc:"Avatar State's Aftermath no longer inflicts a level of exhaustion. Your tracks still crash to 0 when it ends."},
  {lvl:20, name:"True Avatar", action:"Bonus action · 1/long rest", desc:"Enter Avatar State with no track prerequisite. It lasts until you choose to end it."},
];

export const RESONANT_GENERAL_FEATS = [
  {name:"Deep Reserve", meta:"Feat", desc:"You regain Harmony Points equal to your proficiency bonus when you finish a short rest."},
  {name:"Equilibrium's Grasp", meta:"Half-feat (+1 WIS)", desc:"Once per short rest, as a bonus action, adjust one Harmony Track of your choice by 1 (still bound 0–5)."},
  {name:"Lingering Resonance", meta:"Half-feat (+1 WIS)", desc:"When your Avatar State ends, choose one Harmony Track to remain at 3 instead of crashing to 0 with the rest."},
  {name:"Far-Reaching Current", meta:"Half-feat (+1 WIS)", desc:"The range of any Bridge technique increases by 15 ft. Once per short rest, a Bridge technique that normally targets one creature can affect one additional creature."},
  {name:"Adaptive Current", meta:"Half-feat (+1 WIS)", desc:"Once per short rest, swap one prepared technique for a different one of the same level you have access to."},
  {name:"Steady Current", meta:"Feat", desc:"Advantage on concentration saves when you take damage, and you can cast techniques with a movement component even while restrained or grappled."},
];

export const RESONANT_ITEMS = [
  {name:"The Returning Edge", meta:"Uncommon · Attunement", desc:"Any thrown weapon. Flies back to your hand immediately after an attack resolves, hit or miss. You may throw it as a bonus action once per turn even without a feature granting that. Choose bludgeoning, slashing, or piercing each throw."},
  {name:"Sky-Forged Blade", meta:"Rare · Attunement", desc:"Any bladed melee weapon. Counts as magical for overcoming resistance, deals an extra 1d6 force, and resistance or immunity to force doesn't apply against it."},
  {name:"Twin Shadows", meta:"Uncommon · Attunement (pair)", desc:"Two shortswords or scimitars. While wielding both: +1 AC and advantage on Stealth in no heavier than light armor. Bonus action once per short rest for advantage on your next Deception or Intimidation check."},
  {name:"Fans of the Unbending Line", meta:"Uncommon · Attunement (pair)", desc:"Finesse light weapons, 1d4 slashing. Reaction: deflect an attack, reducing damage by 1d10 + DEX. If that reduces it to 0, redirect a thrown weapon or projectile back at its source using your own attack bonus."},
  {name:"Wings of the Wandering Sky", meta:"Very Rare · Attunement", desc:"Collapsible staff. +1 quarterstaff collapsed; extended into glider wings it grants a 30-ft flying speed (must end each turn airborne or fall), or +30 ft to an existing one. As a focus, also grants +1 to Air technique save DCs."},
  {name:"Vial of the First Spring", meta:"Very Rare · Single-use, self-recharging", desc:"Poured over a creature dead less than a minute: full HP restored, no exhaustion — as Revivify but complete. On a dying or unconscious creature: full HP, stabilized, and one disease or curse ends. Refills after 7 days, but only once fully emptied and left under open moonlight for a full night."},
  {name:"Harmonic Focus", meta:"Uncommon · Attunement", desc:"Harmony Pool maximum increases by 4. Once per long rest, if you would run out of Harmony Points, draw 1d4 from the focus instead."},
  {name:"The Unbroken Circle", meta:"Legendary · Attunement by a Resonant", desc:"Harmony Track maximum rises from 5 to 6. You may enter Avatar State with only three of four tracks at 3+, treating the fourth as met. While in Avatar State you have resistance to all damage. Once per long rest, when Avatar State would end from duration, extend it by 1 round."},
];

export const RESONANT_PATHS = {
  ascendant: {
    label: "The Ascendant", colTitle: "The Ascendant — Fire",
    title: "Nova and sustain through controlled self-harm",
    features: [
      {lvl:2, name:"Overdraw", desc:"When you cast a damage-dealing technique, spend 0 up to your proficiency bonus in points: each point deals 1d4 fire to you (no resistance unless separately granted) and adds 1d8 to the technique's damage, raising your Fire Track regardless of the technique's actual element."},
      {lvl:2, name:"Volatile Equilibrium", desc:"While Imbalanced, your lowest element does not lock you out of casting it, and your maximum Overdraw spend increases."},
      {lvl:6, name:"Burning Current", desc:"Fire techniques carry through to further targets as the flame spreads."},
      {lvl:10, name:"Endless Pyre", desc:"Sustained fire that keeps burning past the round it was cast."},
    ],
    feats: [
      {name:"Ember-Fed", meta:"Half-feat (+1 CON) · Ascendant", desc:"Prereq: Ashen Reserve. Whenever Ashen Reserve triggers, you also bank 1 Overdraw point usable next turn beyond your normal maximum."},
      {name:"Reaching Flame", meta:"Half-feat (+1 WIS) · Ascendant", desc:"Prereq: Burning Current. Burning Current's Reach branch now affects two additional targets per point spent instead of one."},
      {name:"Phoenix Heart", meta:"Feat · Ascendant, repeatable", desc:"Once per long rest, when you would drop to 0 HP, drop to 1 instead and immediately gain Overdraw points equal to your proficiency bonus at no cost."},
    ],
    items: [
      {name:"Cinder-Bound Gauntlets", meta:"Uncommon · Attunement", desc:"Reduce the self-damage taken from each point of Overdraw by 1 (minimum 1 per die)."},
      {name:"The Phoenix Ember", meta:"Rare · Attunement", desc:"Once per long rest, when you would drop to 0 HP, ignite instead: drop to 1 HP, and every creature within 10 ft takes fire damage equal to your Resonant level."},
      {name:"Blue Flame Core", meta:"Very Rare · Requires The Ascendant", desc:"Once per turn when you Overdraw at least 1 point, change that technique's damage type to radiant and deal an additional 1d6 of that type."},
    ]
  },
  steadfast: {
    label: "The Steadfast", colTitle: "The Steadfast — Earth",
    title: "Tank and battlefield controller",
    features: [
      {lvl:2, name:"Mountain's Patience", desc:"Your Harmony Tracks no longer reset at the end of combat — only on a long rest, or when you release them as a bonus action."},
      {lvl:2, name:"Stoneguide", action:"Reaction", desc:"When a creature within 5 ft is hit by an attack or fails a save against a damaging spell, redirect the effect to a hostile creature within 10 ft of the original target, or to yourself with resistance to the damage."},
      {lvl:6, name:"Avalanche", desc:"Earth techniques gain mass and momentum, knocking targets prone or burying them."},
      {lvl:10, name:"The Mountain Endures", desc:"You become progressively harder to move, damage, or displace."},
    ],
    feats: [
      {name:"Unshakable Stance", meta:"Feat · Steadfast", desc:"Stoneweight max increases by 2, and unspent Stoneweight no longer resets at the end of combat — it persists until spent or you take a long rest."},
      {name:"Guided Stone", meta:"Half-feat (+1 STR) · Steadfast", desc:"Prereq: Stoneguide. Its range increases to 60 ft, and the within-10-feet restriction on the redirect target is removed entirely."},
      {name:"Crushing Momentum", meta:"Half-feat (+1 STR) · Steadfast", desc:"Prereq: Anchor's Pull. Once per turn, when you expend Stoneweight on a damaging attack, the target's speed also halves until the end of its next turn."},
      {name:"Bedrock Heart", meta:"Half-feat (+1 CON) · Steadfast, repeatable", desc:"Your hit point maximum increases by 1 per Resonant level."},
    ],
    items: [
      {name:"Seismic Greaves", meta:"Uncommon · Attunement", desc:"Whenever you gain Stoneweight, you also gain 5 ft of speed until the start of your next turn, and you ignore difficult terrain created by your own Earth techniques."},
      {name:"Earthen Awakened Soles", meta:"Rare · Attunement", desc:"You gain blindsight out to 30 ft, but only through earth, stone, or sand."},
      {name:"Vambraces of the Mountain's Memory", meta:"Legendary · Requires The Steadfast", desc:"Your Harmony Tracks no longer reset on a long rest either, unless you choose to release them as a bonus action."},
    ]
  },
  tidecaller: {
    label: "The Tidecaller", colTitle: "The Tidecaller — Water",
    title: "Controller and debuffer with a scaling healer's kit",
    features: [
      {lvl:2, name:"Undertow", desc:"When a hostile creature fails a save against a Water technique, it gains 1 Undertow Mark (no cap, lasts until end of combat). While Marked it has disadvantage on saves against your Water techniques. Expend any number of a target's Marks before a roll — each adds 1 to that technique's save DC."},
      {lvl:2, name:"Tidal Shift", desc:"Move your own balance the way water finds its level, adjusting tracks on your terms."},
      {lvl:6, name:"Water Prison", desc:"Lock a creature in suspended water, holding it in place."},
      {lvl:10, name:"The Tide Turns", desc:"Reverse the flow of a fight — healing and control scale together."},
    ],
    feats: [
      {name:"Drowning Current", meta:"Half-feat (+1 WIS) · Tidecaller", desc:"Prereq: Crushing Depths. The passive Restrained threshold lowers from 3 Undertow Marks to 2. The 5-Mark Paralyze burn threshold is unchanged."},
      {name:"Twin Current", meta:"Half-feat (+1 WIS) · Tidecaller", desc:"Your Water techniques reach a second current, letting one cast do the work of two."},
    ],
    items: [
      {name:"Abyssal Manacles", meta:"Rare · Requires The Tidecaller", desc:"Crushing Depths' Paralyze burn threshold lowers from 5 Undertow Marks to 4. The first time a creature is Paralyzed this way in a combat, it also takes cold damage equal to your WIS modifier."},
      {name:"Spirit Water Pendant", meta:"Rare · 1 charge", desc:"Action, touch: fully heal a creature and end one disease, poison, or curse. Alternatively, reaction: halve incoming damage to a creature you're touching. Recharges after a long rest near flowing water or under a full moon."},
      {name:"Tideglass Bracers", meta:"Uncommon · Attunement", desc:"Tidal Shift's range for drawing from a marked creature extends to 60 ft."},
    ]
  },
  untethered: {
    label: "The Untethered", colTitle: "The Untethered — Air",
    title: "Support built on a free standing bond, with burst tools to match",
    features: [
      {lvl:2, name:"Windrider's Balance", desc:"Once per turn, when you move at least 10 ft, adjust one Harmony Track by 1 (still bound 0–5), no action required. You also gain 1 Slipstream Charge (max = proficiency bonus); expend 1 for +10 ft of speed and to ignore difficult terrain until end of turn."},
      {lvl:2, name:"Skybound Bond", action:"Bonus action", desc:"Choose willing creatures within 30 ft, up to your proficiency bonus (can include you), and thread a current through all of them."},
      {lvl:6, name:"Boundless Chorus", desc:"Your bond carries further and does more for everyone caught in it."},
      {lvl:10, name:"Tempest Ward", desc:"A defensive current that turns incoming force aside."},
      {lvl:14, name:"Eye of the Storm", desc:"Stillness at the center while everything around you moves."},
    ],
    feats: [
      {name:"Wider Skies", meta:"Half-feat (+1 WIS) · Untethered", desc:"Your Skybound Bond reaches further and holds more of the people standing in it."},
      {name:"Restless Wind", meta:"Half-feat (+1 DEX) · Untethered", desc:"The current never settles — your movement-triggered track adjustment comes more freely."},
      {name:"Second Gust", meta:"Feat · Untethered", desc:"A second wind arrives when the first has already been spent."},
    ],
    items: [
      {name:"Featherweight Sash", meta:"Uncommon · Attunement", desc:"Slipstream Charge maximum +1, and once per long rest you can use Windward Step without spending a Charge at all."},
      {name:"Cyclone Signet", meta:"Rare · Attunement", desc:"Tempest Ward can be used twice per long rest instead of once — but the second use that day also deals you 1d6 force damage."},
      {name:"Whistle of the Sky Spirits", meta:"Very Rare · Attunement", desc:"Once per long rest, summon a spectral wind-spirit mount for 1 hour or until dismissed: obeys your commands, flies at 80 ft, and can carry you plus up to 3 allies."},
    ]
  }
};

export const CLASS_RESONANT = {
  hitDie: 8,
  label: "Resonant", eyebrow: "Elemental Harmony", primaryAbil: "wis",
  resourceLabel: "Harmony Points",
  resourceMax: function(level){
    return HARMONY_POOL[Math.min(Math.max(level, 1), 20) - 1];
  },
  resourceRecoveryType: "rest",
  resourceRecoveryHint: "Regain all Harmony Points on a long rest.",
  resourceButtons: [
    {label:"Long Rest (full)", tag:"refill-full"}
  ],
  subclassLabel: "Nation Path",
  subclasses: RESONANT_PATHS,
  generalFeatures: RESONANT_GENERAL,
  generalFeats: RESONANT_GENERAL_FEATS,
  sharedItems: RESONANT_ITEMS,
  secondary: "resonant"
};
