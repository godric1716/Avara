import { profBonus } from "./helpers";

export const SOVEREIGN_GENERAL = [
  {lvl:1, name:"Deathless Frame", desc:"Unarmored AC = 10 + DEX mod + INT mod. Only 4 hours needed to benefit from a long rest. Advantage on saves vs disease and poison."},
  {lvl:1, name:"The Inherited Arsenal", cost:"0 Malice", action:"Attack action", desc:"Malice pool established (see tracker). Grants Severance: melee or 30 ft, INT for attack & damage, 1d8 slashing, magical. Works with Extra Attack. This is your at-will baseline."},
  {lvl:2, name:"Sovereign's Oath", desc:"While single-classed, gain Crown Boons: Malice max +prof bonus (2nd), Crowned Will (10th), Full Inheritance (15th), Undying King (20th)."},
  {lvl:2, name:"Declared Oaths", cost:"0 Malice", action:"Bonus action · 1/short rest", desc:"Oath of Revelation: announce your next technique — it deals max damage on all dice, then unusable until long rest. Oath of the Stayed Hand: forgo your reaction until your next turn; next Severance this turn crits on 18–20. Oath of the Open Hand (15th+): Counterflow unusable until long rest; next Rend costs 0 Malice + 1 extra die."},
  {lvl:2, name:"Counterflow", cost:"1+ Malice", action:"Bonus action", desc:"Spend any amount of Malice; regain 1d8 + INT mod HP per point spent. Costs 0 inside The Pale Dominion."},
  {lvl:3, name:"Reliquary", desc:"Choose Carved Throne, Twenty Vessels, or Grave Pyre. Grants features at 3rd, 7th, 13th, 18th."},
  {lvl:3, name:"Lagging Strike", cost:"2 Malice", action:"On Severance hit", desc:"Mark the target. At the start of your next turn: 2d6 force damage, no roll, no save (3d6 at 11th, 4d6 at 17th). One mark at a time; marking anew removes the old mark (no damage)."},
  {lvl:5, name:"Extra Attack", desc:"Attack twice when you take the Attack action."},
  {lvl:5, name:"Rend", cost:"1–Prof Malice", action:"On Severance hit", desc:"+1d10 slashing per Malice spent, up to your proficiency bonus."},
  {lvl:6, name:"Eyes of the Hollow Soul", desc:"Within 30 ft: see through illusions/shapeshifting, perceive invisible creatures, know if a creature is below half HP. Severance can deal necrotic instead of slashing (choice before the roll)."},
  {lvl:6, name:"Grave Flash", cost:"1 Malice", action:"Reaction (max-die trigger)", desc:"When you roll max on any single damage die from Severance/Rend/Lagging Strike: +2d6 damage of the same type, and advantage on Severance until end of your next turn."},
  {lvl:8, name:"Deathless Grace", cost:"2 Malice (active)", action:"Reaction (attack trigger)", desc:"Passive: AoE/Dex-save damage that would be halved instead deals 0 on success. Active: when attacked, the attacker has disadvantage on that roll."},
  {lvl:9, name:"Deathless Resolve", cost:"3 Malice", action:"Reaction (0 HP trigger)", desc:"When reduced to 0 HP, drop to 1 HP instead."},
  {lvl:10, name:"Crowned Will", desc:"Immune to frightened. Advantage on saves vs charmed or possessed."},
  {lvl:10, name:"The Pale Dominion", cost:"4 Malice", action:"Bonus action", desc:"10-ft aura, 1 minute. Designated creatures take prof + INT slashing on entry or turn-start. Counterflow costs 0 Malice while inside."},
  {lvl:11, name:"Adaptation", desc:"Resistance to necrotic damage and to slashing damage from nonmagical weapons."},
  {lvl:11, name:"Sovereign's Edge", desc:"Severance deals an extra 1d6 necrotic on every hit, no cost, always active. Becomes 1d8 at 17th level."},
  {lvl:14, name:"Contempt for the Weak", cost:"Int mod uses (min 1), refill on long rest", desc:"When you hit a bloodied creature (≤ half HP) with Severance, force a WIS save (DC 8+prof+INT) or it's frightened of you until end of its next turn."},
  {lvl:15, name:"The Full Inheritance", desc:"Malice max +INT mod (stacks with all prior increases). Learn Oath of the Open Hand. Once per long rest, two Declared Oaths may be active simultaneously."},
  {lvl:17, name:"The Sovereign's Tomb", cost:"1/long rest, free once used", action:"Action", desc:"30-ft emanation, up to 1 minute, no concentration, persists unconscious (ends only on death). Chosen creatures take 2×INT+prof necrotic on entry/turn-start. Rend costs 0 Malice inside. Severance crits on 19–20 vs creatures below half HP. Difficult terrain ignored."},
  {lvl:20, name:"The Undying King", desc:"The Sovereign's Tomb usable 1/short or long rest and grants resistance to all damage while active. Once per long rest, at 0 HP: drop to 1 HP instead and regain all Malice."}
];

export const SOVEREIGN_GENERAL_FEATS = [
  {name:"Null Body", meta:"Feat · 4th", desc:"When you take damage, spend Malice as a reaction — each point spent reduces that damage by 6, up to your full available Malice in one use. Competes directly with Counterflow for the same pool: prevention now, or recovery on your next turn."},
  {name:"Soul Harvest", meta:"Half-feat (+1 INT) · 4th", desc:"+1 Intelligence (max 20). Kill Regen now restores Malice equal to 1 + half the slain creature's CR (round down, min 1), plus 1d6 HP on a killing blow. Eyes of the Hollow Soul range extends to 60 ft."},
  {name:"Oath Breaker's Irony", meta:"Feat · 8th", desc:"One additional use of Declared Oaths per short rest (2 total). Oath of Revelation no longer locks the technique until a long rest. Oath of the Stayed Hand crits on 17–20 instead of 18–20."},
  {name:"The Last Sovereign", meta:"Feat · 5th, requires Extra Attack", desc:"Hitting with both Severance strikes in a turn lets you move up to 10 ft between them without provoking. A Severance crit immediately regains 2 Malice. Rend dice increase from d10 to d12."},
];

export const SOVEREIGN_RELIQUARIES = {
  throne: {
    label: "Carved Throne", colTitle: "Reliquary of the Carved Throne",
    title: "Carved Throne — Sovereign's Ground",
    features: [
      {lvl:3, name:"Sovereign's Ground", cost:"0 Malice", action:"Bonus action", desc:"Designate the area within 15 ft (20 ft once you have The Pale Dominion) as your territory until you voluntarily move or are incapacitated. Designated creatures treat it as difficult terrain; hitting you with melee inside it deals INT mod slashing to them."},
      {lvl:7, name:"Inescapable Domain", action:"Reaction", desc:"When a creature tries to leave your Sovereign's Ground or The Pale Dominion, make one free Severance strike; on a hit its speed drops to 0 until start of its next turn. While Sovereign's Ground is active, advantage on checks/saves to resist being moved from your space."},
      {lvl:13, name:"Carved Dominion", cost:"1 Malice", action:"Free action, 1/round", desc:"When a creature takes damage from The Pale Dominion or Sovereign's Tomb, force a STR save (DC 8+prof+INT); on a failure push or pull it 15 ft. While Sovereign's Ground is active, you know the exact location of every creature within 30 ft regardless of invisibility/cover."},
      {lvl:18, name:"The Eternal Throne", desc:"Sovereign's Tomb radius becomes 60 ft. Carved Dominion failures also restrain until end of their next turn. Reducing a creature to 0 HP inside the emanation grants Malice equal to your proficiency bonus. Advantage on all saves while inside the emanation."}
    ],
    feats: [
      {name:"Iron Sovereignty", meta:"Half-feat (+1 INT) · 4th", desc:"+1 Intelligence (max 20). While you haven't voluntarily moved since the start of your last turn, your Deathless Frame AC gains half your proficiency bonus (round down, min 1). Severance range extends to 45 ft inside Sovereign's Ground or the Pale Dominion."},
      {name:"Crowned Domain", meta:"Feat · 8th", desc:"Sovereign's Ground radius increases to 20 ft. Creatures entering it for the first time on a turn take proficiency-bonus slashing damage on entry. Inside your territory, Grave Flash also triggers on rolling one below the maximum on any damage die."},
      {name:"The Pulled Thread", meta:"Feat · 13th", desc:"Carved Dominion's push/pull distance increases from 15 to 30 ft. A hit with Inescapable Domain's reaction strike can pull the creature 10 ft toward you before damage. Once per round, spend 1 Malice as a free action to deal INT-mod slashing to a creature starting its turn in your territory."},
    ],
    items: [
      {name:"The Carven Mark", meta:"Uncommon · Ring", desc:"Creatures crossing your Sovereign's Ground or Pale Dominion must succeed on a Strength check (DC = your Technique DC) or have their movement halved that turn, stacking with the difficult terrain your territory already imposes."},
      {name:"Throne-Sworn Mantle", meta:"Rare · Cloak", desc:"While you haven't voluntarily moved since the start of your last turn: +2 to Deathless Frame AC, advantage on saves against involuntary movement. Inescapable Domain's reaction strike deals bonus slashing equal to your INT mod."},
      {name:"Scepter of the Hollow Court", meta:"Very Rare · Weapon (attunement)", desc:"A bone-and-iron weapon using INT for attack and damage, 1d8 slashing or necrotic (your choice). Counts as a Severance strike for all purposes. Once per long rest, slam it down to instantly activate Sovereign's Ground and reduce speeds by 10 ft in a 15-ft zone."},
      {name:"The Eternal Mandate", meta:"Legendary · Crown", desc:"Sovereign's Ground and Pale Dominion radii double. Immune to forced movement while either is active. Once per long rest, teleport within your active territory as a bonus action. While the Sovereign's Tomb is active, entering creatures must save or be frightened."},
    ]
  },
  vessels: {
    label: "Twenty Vessels", colTitle: "Reliquary of Twenty Vessels",
    title: "Twenty Vessels — Carved Vessels",
    features: [
      {lvl:3, name:"Sanguine Vessel", cost:"2 Malice", action:"Action", desc:"Sanguine Coil: 30 ft, 2d6 piercing or necrotic; STR save (DC 8+prof+INT) or restrained until end of its next turn and disadvantage on attacks vs anyone but you. Also: harden Carved Vessels on a long rest, max = proficiency bonus. Shatter one as a reaction to reduce incoming damage by 1d10+INT mod."},
      {lvl:7, name:"Vessel's Constitution", desc:"+2 max HP per class level, retroactive (stacks with Tough). Resistance to poison damage, immunity to poisoned."},
      {lvl:13, name:"Blood Aegis", cost:"2 Malice", action:"Bonus action", desc:"Gain 2d10 + INT mod temporary HP. When an enemy destroys a Carved Vessel directly, it takes necrotic damage equal to your proficiency bonus."},
      {lvl:18, name:"Undying Bulwark", desc:"Resistance to bludgeoning, piercing, and slashing from all sources, magical or not. Once per round when you take damage, reduce it by your proficiency bonus before resistances apply."}
    ],
    feats: [
      {name:"Blood Sculptor", meta:"Half-feat (+1 CON) · 4th", desc:"+1 Constitution (max 20). Sanguine Coil range increases to 60 ft, and a failed save also prevents reactions until the end of your next turn. Carved Vessel maximum increases by your Constitution modifier."},
      {name:"Aegis of the Hollow", meta:"Feat · 8th", desc:"Shattering a Carved Vessel to reduce damage can redirect that prevented damage as necrotic to a creature within 20 ft. Once per long rest, when your final Vessel shatters, immediately reform a number equal to your proficiency bonus."},
      {name:"The Unbroken Vessel", meta:"Feat · 13th", desc:"Vessel's Constitution HP bonus increases from +2 to +3 per level, retroactive. Below half HP, Severance deals bonus necrotic equal to your CON mod. Once per long rest, negate a Carved Vessel's destruction entirely."},
    ],
    items: [
      {name:"Vessel-Seal Bracers", meta:"Uncommon · Bracers", desc:"Your Carved Vessels have 3 hit points instead of 1. Whenever a hostile creature destroys one, you immediately regain 1 Malice — breaking your defenses refuels your engine."},
      {name:"Sanguine Thread Armor", meta:"Rare · Armor", desc:"+1 to Deathless Frame AC. A creature that fails its save against Sanguine Coil takes proficiency-bonus necrotic at the start of each of its turns while restrained."},
      {name:"The Twenty Fingers", meta:"Very Rare · Necklace", desc:"Carved Vessel maximum increases by your Constitution modifier. Once per short rest, when a Vessel shatters, immediately shatter a second as a free action to regain 2d10 + CON mod HP."},
      {name:"Phylactery of the Hollow Body", meta:"Legendary · Wondrous item", desc:"Necrotic resistance becomes immunity. One Carved Vessel reforms automatically at the end of each short rest. Once per round, a Vessel shatters automatically to absorb damage that would drop you to 0 HP, no action required. Once per long rest, distribute up to 30 points of incoming damage across your Vessels."},
    ]
  },
  pyre: {
    label: "Grave Pyre", colTitle: "Reliquary of the Grave Pyre",
    title: "Grave Pyre — Pyre Charge",
    features: [
      {lvl:3, name:"Grave Flame", cost:"1 Malice", action:"On Severance hit", desc:"Ignite the target: fire damage = INT mod at the start of each of its turns. One ignition at a time per creature; max simultaneous ignitions = proficiency bonus. Cleared by an action (self or nearby ally) or consumed by another Grave Pyre feature. You gain resistance to fire damage."},
      {lvl:7, name:"Pyre Charge", cost:"1+ Malice (max prof/use)", action:"Bonus action", desc:"Build Charge Dice (d8 fire), 1 per Malice spent, across multiple turns (cap = proficiency bonus). On a Severance hit, release the entire charge: fire damage = all Charge Dice + INT mod. If the target is ignited, consume it and double the Charge Dice damage."},
      {lvl:13, name:"Open", cost:"0 (uses Pyre Charge)", action:"1/short rest", desc:"Instead of hitting one target, release your Pyre Charge outward: every chosen creature within 30 ft takes fire = Charge Dice + INT mod (DEX save half, DC 8+prof+INT). Ignited creatures auto-fail and lose their ignition."},
      {lvl:18, name:"Conflagration", cost:"0 (consumes ignitions)", action:"Action · 1/long rest", desc:"Every creature you have ignited detonates simultaneously: 6d10 fire each, no roll, no save. Each ignition is consumed."}
    ],
    feats: [
      {name:"Incinerator", meta:"Half-feat (+1 INT) · 4th", desc:"+1 Intelligence (max 20). Grave Flame damage increases to INT mod + proficiency bonus. A creature can carry two Grave Flame stacks at once, each requiring its own Severance hit and Malice, ticking independently."},
      {name:"Pressure Point", meta:"Feat · 8th", desc:"On a Severance hit where you don't spend Malice on Lagging Strike, apply a Pressure Mark instead — the target's next Grave Flame tick deals double damage, then is consumed. Pyre Charge maximum increases by 1 beyond the proficiency-bonus cap."},
      {name:"Open, Wide", meta:"Feat · 13th", desc:"Use Open twice per short rest instead of once. Ignited creatures caught by Open auto-fail their save and take maximum Charge Die damage rather than rolled. Conflagration's base damage increases from 6d10 to 8d10."},
    ],
    items: [
      {name:"Ignis Flask", meta:"Uncommon · Wondrous item", desc:"Once per long rest as a bonus action, apply a Grave Flame ignition to a target within 30 ft with no attack roll required. Whenever you take fire damage from any source, regain 1 Malice."},
      {name:"Ashen Channeler", meta:"Rare · Wondrous item", desc:"Building a Pyre Charge adds 1 free Charge Die (d8 fire) with no Malice cost, in addition to any you spend. This free die recharges at dawn."},
      {name:"Cinder Shroud", meta:"Very Rare · Cloak", desc:"Releasing a Pyre Charge into a target also deals fire damage equal to your total Charge Die count, no save, to every creature you choose within 10 ft of the target. Your Grave Flame ignitions cannot be extinguished by hostile creatures."},
      {name:"The Sovereign's Brand", meta:"Legendary · Wondrous item", desc:"When an ignited creature takes Grave Flame damage, each creature within 5 ft of it must save or become ignited too. Conflagration erupts in a 10-ft radius per ignited creature. Once per long rest, Conflagration also erupts in a 30-ft radius centered on you at half damage to anyone not already ignited."},
    ]
  }
};

export const CLASS_SOVEREIGN = {
  label: "Undying Sovereign", eyebrow: "A Vessel of Inherited Power", primaryAbil: "int",
  resourceLabel: "Malice",
  resourceMax: function(level, ab){
    var base = level * 2 + ab.int;
    if (level >= 2) base += profBonus(level);
    if (level >= 15) base += ab.int;
    return Math.max(0, base);
  },
  resourceRecoveryType: "rest",
  resourceRecoveryHint: "Regain all Malice on a long rest. Regain Malice equal to your proficiency bonus on a short rest. Regain 1 Malice whenever you reduce a creature to 0 HP.",
  resourceButtons: [
    {label:"Short Rest (+prof)", tag:"refill-partial-prof"},
    {label:"Long Rest (full)", tag:"refill-full"}
  ],
  subclassLabel: "Reliquary",
  subclasses: SOVEREIGN_RELIQUARIES,
  generalFeatures: SOVEREIGN_GENERAL,
  generalFeats: SOVEREIGN_GENERAL_FEATS,
  sharedItems: [],
  secondary: "sovereign"
};

