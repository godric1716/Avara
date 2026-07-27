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
    feats: [], items: []
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
    feats: [], items: []
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
    feats: [], items: []
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
    feats: [], items: []
  }
};

export const CLASS_RESONANT = {
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
  generalFeats: [],
  sharedItems: [],
  secondary: "resonant"
};
