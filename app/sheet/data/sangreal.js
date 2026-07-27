/* Hunger is tiered, not a formula: 3 at levels 1–4, 5 at 5–10, 6 at 11–16,
   8 at 17–20. */
export function hungerMax(level) {
  if (level >= 17) return 8;
  if (level >= 11) return 6;
  if (level >= 5) return 5;
  return 3;
}

export const SANGREAL_GENERAL = [
  {lvl:1, name:"Vampiric Traits", desc:"Darkvision 60 ft. You no longer need to breathe, you have resistance to necrotic damage, and you no longer age."},
  {lvl:1, name:"Hunger", desc:"Your resource pool, recharging on a short rest. Regain 1 Hunger whenever you score a critical hit or reduce a creature to 0 HP."},
  {lvl:1, name:"The Bite", cost:"1+ Hunger", action:"On any hit", desc:"Spend any number of Hunger as part of the same attack: +2d8 necrotic per Hunger spent, no upper limit beyond what you're holding."},
  {lvl:1, name:"Bloodstarved", desc:"If spending Hunger on The Bite drops you to 0, you are Bloodstarved until you finish a short or long rest — disadvantage on all saving throws."},
  {lvl:2, name:"Blood Rush", cost:"1 Hunger", action:"Bonus action", desc:"Your speed doubles until the end of the turn and you don't provoke opportunity attacks. If you end that movement within 10 ft of an enemy you weren't already next to, your first attack against it this turn has advantage."},
  {lvl:2, name:"Sanguine Ward", cost:"1 Hunger", action:"Reaction", desc:"When hit by a creature within 10 ft: resistance to that instance of damage, and the attacker has disadvantage on its next attack roll before the end of its next turn."},
  {lvl:3, name:"Bloodline", desc:"Choose your Bloodline. Grants a feature now and again at 8, 11, 15, and 18."},
  {lvl:5, name:"Extra Attack", desc:"Attack twice, not once, whenever you take the Attack action."},
  {lvl:6, name:"Blood Siphon", cost:"1 Hunger", action:"Action", desc:"Melee or ranged spell attack for 2d10 necrotic — and you regain HP equal to half the damage dealt."},
  {lvl:7, name:"Dreadful Gaze", action:"Action · 2/long rest", desc:"Every creature within 30 ft that can see you saves against your Compulsion DC or is frightened for 1 minute."},
  {lvl:9, name:"Compulsion", cost:"1 Hunger", action:"Reaction", desc:"When an enemy within 10 ft makes an attack roll or casts a spell targeting anyone, it saves against your Compulsion DC or the attack redirects to a different valid target of your choice, within that effect's own original range."},
  {lvl:10, name:"Improved Bite", desc:"The Bite now deals +3d8 necrotic per Hunger spent, instead of +2d8."},
  {lvl:13, name:"Deeper Hunger", desc:"Blood Siphon can take extra Hunger when cast: each additional Hunger adds 1d10 necrotic, and the healing scales with it since it remains half the damage dealt."},
  {lvl:14, name:"Undying Will", desc:"The first time you would become Bloodstarved each long rest, you don't."},
  {lvl:17, name:"Ravenous", desc:"You also regain 1 Hunger whenever you reduce a creature to half its hit points or below, once per turn, in addition to the crit and kill triggers."},
  {lvl:20, name:"The Undying Feast", action:"Bonus action · 1/long rest", desc:"For 1 minute, Blood Rush, Sanguine Ward, Compulsion, and Blood Siphon all cost no Hunger. The Bite is deliberately untouched — every point you generate during the minute goes straight into it."},
];

export const SANGREAL_GENERAL_FEATS = [
  {name:"Deep Well", meta:"Feat", desc:"Your maximum Hunger increases by 1 at every tier."},
  {name:"Efficient Feeding", meta:"Half-feat (+1 CON)", desc:"Once per short rest, cast any Blood Sorcery ability for free."},
  {name:"Feral Recovery", meta:"Half-feat (+1 WIS or CON)", desc:"When you reduce a creature to 0 HP, also regain 1d4 HP, in addition to the Hunger you already regain."},
];

/* Not tied to a Bloodline — the Fang predates all five. */
export const SANGREAL_ITEMS = [
  {name:"The Progenitor's Fang", meta:"Artifact · Attunement", desc:"A dagger-fanged relic of the very first vampire, favoring no Bloodline. Levels 1–4: +1 to attack and damage; necrotic resistance becomes immunity. 5–10: +2, and once per long rest ignore becoming Bloodstarved. 11–16: +3, and spending 3+ Hunger on one Bite adds an extra die free. 17–20: once per long rest, bonus action to instantly restore all expended Hunger. Faintly sentient and hungry on its own account — advantage on Intimidation against anyone who has seen it drink, disadvantage on Persuasion with anyone innocent enough to sense what it is."},
];

export const SANGREAL_BLOODLINES = {
  hollowcrown: {
    label: "Hollow Crown", colTitle: "Bloodline of the Hollow Crown",
    title: "Aalise Bathory's own line — bait the hit, punish the attacker",
    features: [
      {lvl:3, name:"Bodyguard's Reach", desc:"Compulsion's range extends to 30 ft whenever the triggering attack or spell targets an ally instead of you."},
      {lvl:3, name:"The Toll", desc:"Whenever a creature fails its save against your Compulsion, choose one: it takes necrotic damage equal to your Charisma modifier (min 1), or you regain 1 Hunger."},
      {lvl:3, name:"Blood Ward", cost:"1 Hunger", action:"Bonus action", desc:"Resistance to all damage until the start of your next turn."},
      {lvl:8, name:"Thorned Ward", desc:"While Blood Ward's resistance is active, whenever a creature hits you, your next attack against that creature before the end of your next turn has advantage and deals an extra 2d6 necrotic."},
      {lvl:11, name:"Second Command", desc:"Compulsion is no longer limited to once per round — use it again the same round for an additional 1 Hunger each time."},
      {lvl:15, name:"Unshakable Crown", desc:"While you hold at least 1 Hunger, advantage on saves against frightened or charmed. A creature that has already failed a save against your Compulsion this encounter has disadvantage on further saves against it."},
      {lvl:18, name:"The Crown Does Not Fall", action:"Bonus action · 1/long rest", desc:"For 1 minute, whenever an ally within your movement range is hit, use your reaction to move there and intercept — you take the damage instead, with resistance, and the attacker saves against your Compulsion DC or loses its reaction until the start of your next turn. Each time this saves an ally from dropping to 0 HP, you regain all expended Hunger."},
    ],
    feats: [
      {name:"Bodyguard's Instinct", meta:"Feat · Hollow Crown", desc:"Bodyguard's Reach no longer requires a save to trigger against an ally — automatic, but The Toll's choice is unavailable on those triggers."},
      {name:"Unyielding Ward", meta:"Half-feat (+1 CON) · Hollow Crown", desc:"Once per short rest, Blood Ward can be triggered as a reaction the instant before you're hit, instead of only as a bonus action."},
    ],
    items: [
      {name:"Warding Collar", meta:"Rare · Attunement (Hollow Crown)", desc:"Blood Ward can be activated as a reaction, once per short rest."},
      {name:"Gauntlet of the Unshaken", meta:"Very Rare · Attunement (Hollow Crown)", desc:"Second Command's additional Compulsion uses cost 1 less Hunger (minimum 1)."},
      {name:"Crown of the Undying", meta:"Legendary · Hollow Crown only", desc:"The Crown Does Not Fall can be activated twice per long rest, and while active, Blood Ward costs no Hunger."},
    ]
  },
  redhunt: {
    label: "Red Hunt", colTitle: "Bloodline of the Red Hunt",
    title: "Turned, not born — momentum that pays for itself",
    features: [
      {lvl:3, name:"Predator's Momentum", desc:"Blood Rush's advantage applies to every attack you make that turn, not just the first. If none of your attacks land that turn, you don't lose the Hunger spent on it."},
      {lvl:3, name:"Blood Debt Repaid", desc:"Whenever you reduce a creature to 0 HP, regain the Hunger you spent on Blood Rush this turn."},
      {lvl:3, name:"Twin Fangs", cost:"1 Hunger", action:"Once per turn, on a hit", desc:"Immediately move up to half your speed without provoking, then make one additional weapon attack against a different creature."},
      {lvl:8, name:"Wounded Prey", desc:"The Bite deals an extra 1d8 necrotic against a creature at or below half its hit points, at no added cost."},
      {lvl:11, name:"Relentless Fangs", desc:"Twin Fangs can trigger more than once per turn — each additional use beyond the first costs 1 Hunger."},
      {lvl:15, name:"Unbroken Chase", desc:"Opportunity attacks against you have disadvantage. If you've moved 20+ ft since the start of your turn, all your attacks this turn have advantage."},
      {lvl:18, name:"The Hunt Never Ends", action:"Bonus action · 1/long rest", desc:"For 1 minute, Blood Rush costs no Hunger and Twin Fangs triggers automatically — no cost, no per-turn limit — whenever you hit a creature."},
    ],
    feats: [
      {name:"Twin Hunt", meta:"Feat · Red Hunt", desc:"Twin Fangs' first use each turn costs no Hunger."},
      {name:"Fleet Fangs", meta:"Half-feat (+1 DEX) · Red Hunt", desc:"Twin Fangs' movement increases from half your speed to your full speed."},
    ],
    items: [
      {name:"Boots of the Endless Chase", meta:"Rare · Attunement (Red Hunt)", desc:"Blood Rush's advantage no longer requires ending within 10 ft of an enemy — any enemy you moved past this turn qualifies."},
      {name:"Necklace of Torn Prey", meta:"Very Rare · Attunement (Red Hunt)", desc:"Wounded Prey's threshold rises from half HP to 75% HP."},
      {name:"Mantle of the Undying Hunt", meta:"Legendary · Red Hunt only", desc:"The Hunt Never Ends is usable twice per long rest, and your speed doubles while it is active."},
    ]
  },
  weepingveil: {
    label: "Weeping Veil", colTitle: "Bloodline of the Weeping Veil",
    title: "Bonds over domination — feeding your ally is what protects them",
    features: [
      {lvl:3, name:"Shared Feast", desc:"Blood Siphon's healing can target an ally within 30 ft instead of yourself."},
      {lvl:3, name:"Given Freely", desc:"Passive. Whenever you heal yourself from any Blood Sorcery ability, the nearest ally within 30 ft also heals for half as much, automatically."},
      {lvl:3, name:"Bonded", action:"Free action · 1/rest", desc:"Name one willing ally as your Bonded creature, replacing any earlier bond. Whenever you heal your Bonded ally, they gain resistance to the next attack that hits them before the start of your next turn."},
      {lvl:8, name:"Twinned Wound", action:"Reaction · no cost", desc:"When you take damage, your Bonded ally within 30 ft may use their own reaction to take half of it instead — their choice, not yours."},
      {lvl:11, name:"Devoted Strike", cost:"1 Hunger", action:"Reaction · once per turn", desc:"When your Bonded ally is hit by an attack, immediately make one weapon attack against the attacker."},
      {lvl:15, name:"Inseparable", desc:"While within 30 ft of your Bonded ally, you both have advantage on saves against charmed or frightened, and Given Freely's shared healing doubles to a full amount instead of half."},
      {lvl:18, name:"Til Death, and After", action:"Bonus action · 1/long rest", desc:"For 1 minute: the first time your Bonded ally would drop to 0 HP they drop to 1 instead, and you take necrotic equal to half the damage that would have felled them. Healing you grant them is maximized instead of rolled, and Given Freely reaches every ally within 30 ft."},
    ],
    feats: [
      {name:"Distant Bond", meta:"Feat · Weeping Veil", desc:"Shared Feast, Twinned Wound, and Devoted Strike's ranges all extend to 60 ft."},
      {name:"Shared Vigor", meta:"Half-feat (+1 CON or WIS) · Weeping Veil", desc:"Once per long rest, Given Freely's splash healing also removes one level of exhaustion from the ally it reaches."},
    ],
    items: [
      {name:"Locket of the Bonded Heart", meta:"Rare · Attunement (Weeping Veil)", desc:"Twinned Wound can trigger even if your Bonded ally has already used their reaction this round, once per short rest."},
      {name:"Chalice of Shared Blood", meta:"Very Rare · Attunement (Weeping Veil)", desc:"Given Freely's splash always heals the full amount rather than half — Inseparable's benefit, early."},
      {name:"The Weeping Veil", meta:"Legendary · Weeping Veil only", desc:"Til Death, and After is usable twice per long rest, and its maximized-healing effect also applies to Shared Feast during that window."},
    ]
  },
  ashencourt: {
    label: "Ashen Court", colTitle: "Bloodline of the Ashen Court",
    title: "Centuries of accumulated knowledge — precision that doesn't miss",
    features: [
      {lvl:3, name:"Practiced Wound", desc:"The Bite ignores resistance to necrotic damage entirely, and treats immunity to necrotic as resistance instead."},
      {lvl:3, name:"Marked Weakness", desc:"Passive, once per turn on a hit: mark a creature as your Studied target until the end of your next turn, replacing any previous mark. Attacks against it — yours or an ally's — have advantage."},
      {lvl:3, name:"Guaranteed Cut", action:"1/short rest · no cost", desc:"One attack roll you make automatically hits."},
      {lvl:8, name:"Anatomist's Draw", desc:"Blood Siphon against your Studied target deals an extra 1d10 necrotic, and the healing you gain from it is maximized instead of rolled."},
      {lvl:11, name:"Second Cut", desc:"Guaranteed Cut can be used a second time per short rest, but the second use costs 1 Hunger."},
      {lvl:15, name:"Nothing Left to Chance", desc:"While you have a Studied target, you have advantage on saves against anything that target does to you, and your Compulsion against it never gains disadvantage from prior failed saves."},
      {lvl:18, name:"The Perfect Cut", action:"1/long rest", desc:"Your next attack against your Studied target automatically hits and crits, ignores all its resistances and immunities outright, and deals maximum damage. Until the end of the encounter, every ally attacking that creature also ignores its resistances and immunities."},
    ],
    feats: [
      {name:"Perfect Study", meta:"Feat · Ashen Court", desc:"Marked Weakness no longer requires a hit — bonus action, no cost, mark any creature you can see as Studied."},
      {name:"Keener Eye", meta:"Half-feat (+1 INT or WIS) · Ashen Court", desc:"Once per short rest, Guaranteed Cut can target an ally's attack roll instead of your own."},
    ],
    items: [
      {name:"Loupe of Marked Prey", meta:"Rare · Attunement (Ashen Court)", desc:"Marked Weakness also gives the Studied target disadvantage on saves against your Compulsion."},
      {name:"Scalpel of the Ashen Court", meta:"Very Rare · Attunement (Ashen Court)", desc:"Guaranteed Cut recharges an additional use per short rest."},
      {name:"Codex of the Ashen Court", meta:"Legendary · Ashen Court only", desc:"The Perfect Cut is usable twice per long rest, and its party-wide bypass also grants advantage against that creature, not just the resistance and immunity ignore."},
    ]
  }
};

export const CLASS_SANGREAL = {
  label: "Sangreal", eyebrow: "Of the True Blood", primaryAbil: "cha",
  resourceLabel: "Hunger",
  resourceMax: function(level){ return hungerMax(level); },
  resourceRecoveryType: "rest",
  resourceRecoveryHint: "Recharges on a short rest. Regain 1 Hunger on a critical hit or when you reduce a creature to 0 HP.",
  resourceButtons: [
    {label:"Short Rest (full)", tag:"refill-full"}
  ],
  subclassLabel: "Bloodline",
  subclasses: SANGREAL_BLOODLINES,
  generalFeatures: SANGREAL_GENERAL,
  generalFeats: SANGREAL_GENERAL_FEATS,
  sharedItems: SANGREAL_ITEMS,
  secondary: "sangreal"
};
