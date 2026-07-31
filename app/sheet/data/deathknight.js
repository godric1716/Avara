export const ICONS = {
  blood: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2C12 2 5 11 5 15.5A7 7 0 0 0 19 15.5C19 11 12 2 12 2Z"/></svg>',
  frost: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="3.5" y1="7" x2="20.5" y2="17"/><line x1="3.5" y1="17" x2="20.5" y2="7"/><path d="M12 6l-2 -1.2M12 6l2 -1.2M12 18l-2 1.2M12 18l2 1.2"/><path d="M6.7 8.8l-2.3 -.3M6.7 8.8l.6 -2.2M17.3 15.2l2.3 .3M17.3 15.2l-.6 2.2"/><path d="M6.7 15.2l-.6 2.2M6.7 15.2l-2.3 .3M17.3 8.8l2.3 -.3M17.3 8.8l-.6 -2.2"/></svg>',
  unholy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.7 1.4 4.4 2.5 5.6.5.6.8 1.1.8 1.9V18h7.4v-1.5c0-.8.3-1.3.8-1.9C17.6 13.4 19 11.7 19 9a7 7 0 0 0-7-7Z"/><circle cx="9.3" cy="9.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="14.7" cy="9.5" r="1.3" fill="currentColor" stroke="none"/><path d="M11 12.2v1.6M9.5 18v2.2M14.5 18v2.2M8.5 20.5h7"/></svg>'
};

export const GENERAL_FEATURES = [
  {lvl:1, name:"Death's Mark", desc:"CON modifier replaces STR/DEX for melee attack & damage with proficient weapons. Attune 1–2 melee weapons each rest (can't be disarmed while conscious). Attuned weapons glow near undead/fiends within 30 ft. Spell save DC = 8 + prof + CON mod."},
  {lvl:1, name:"Unhallowed Body", desc:"No food, drink, or sleep — 4-hr death-trance instead (adv. on Perception while in it). Resistance to necrotic & poison. Immune to disease. Not undead — Turn Undead doesn't affect you."},
  {lvl:1, name:"Covenant Path", desc:"Choose Blood, Frost, or Unholy. Grants features at 2, 3, 6, 7, 10, 13, 15, 18."},
  {lvl:2, name:"Grave Seals", desc:"Your resource engine. Starts at 0 each combat, resets 60 seconds after combat ends. See the Grave Seals tracker above."},
  {lvl:2, name:"Covenant Strike", cost:"3 Seals", action:"Bonus action", desc:"Your primary Seal-spend — see your Covenant column for the specific effect."},
  {lvl:3, name:"Death Grip", cost:"2 Seals (1 Frost)", action:"Bonus action / Reaction", desc:"Target within 60 ft. Failed STR save: pulled adjacent to you + one free melee attack as they arrive. Success: pulled 20 ft, no free attack. Usable as a reaction when a creature within 60 ft willingly moves away."},
  {lvl:5, name:"Extra Attack", desc:"Attack twice when you take the Attack action."},
  {lvl:6, name:"Death and Decay", cost:"5 Seals", action:"Action, instantaneous", desc:"15-ft radius burst centered on you. CON save or 2d8 + CON mod necrotic (half on success). Heal half the total damage dealt across all targets. Scales to 3d8 (11th), 4d8 (17th)."},
  {lvl:9, name:"Dark Presence", desc:"10-ft aura, always on. +1 Grave Seal at the start of each hostile creature's turn while in range (no cap — multiple enemies each generate one). A kill within the aura nets +3 Seals total instead of +2."},
  {lvl:11, name:"Anti-Magic Shell", cost:"3 to start, 3/turn to maintain", action:"Bonus/Reaction · 2/short rest", desc:"1 round: resistance to spell damage, advantage on saves vs spells/magic, immune to charm/fright/sleep from spells. Succeeding a save vs a spell while active grants Seals equal to the spell's level (min 1)."},
  {lvl:14, name:"Lichborne", cost:"0 Seals", action:"Bonus action · 1/short rest", desc:"1 minute: your creature type becomes Undead. Immune to charm, fear, unconsciousness. Effects targeting undead affect you (adv. on saves vs them). Death and Decay heals for the full amount instead of half while active."},
  {lvl:17, name:"Soul Reaper", desc:"Once/turn, hitting a bloodied creature (≤ half HP) with a melee weapon deals +2d6 necrotic. Reducing a bloodied creature to 0 HP this way grants +1 Grave Seal beyond the normal kill bonus."},
  {lvl:17, name:"Final Mark", cost:"0 Seals", action:"Automatic · 1/long rest (2 at 20)", desc:"When you would be reduced to 0 HP: heal to full HP instead, Grave Seals refill to maximum, and take one free bonus action at no Seal cost."},
  {lvl:20, name:"Death's Apotheosis", desc:"Capstone. Grave Seals reset to your CON modifier (not 0) at the start of each combat. Your CON mod counts as +2 higher for Death Knight healing calculations only. Effects requiring undead or living both apply to you. Final Mark gains a second use per long rest."}
];

export const COVENANTS = {
  blood: {
    label: "Blood",
    title: "Blood — Crimson Hunger",
    colTitle: "Blood Covenant",
    features: [
      {lvl:1, name:"Crimson Hunger", desc:"On a melee hit (once/turn, can be suppressed): drain +1d6 necrotic, heal that amount. Thirst: feed at least 6 damage via drain every 24 h or take penalties — 24h: disadv. CHA; 48h: also disadv. INT; 72h: DC 12 WIS save each turn or move & attack the nearest creature. Feeding clears all penalties."},
      {lvl:2, name:"Crimson Strike", cost:"3 Seals", action:"Bonus action", desc:"Melee attack with an attuned weapon. Hit: weapon dmg + CON mod necrotic, heal the full damage dealt, target marked for harvest (+1d6 free necrotic on your next damage to them this turn). Miss: heal 2× CON mod instead."},
      {lvl:3, name:"Seize", desc:"Modifies Death Grip. Successful grip auto-triggers Crimson Hunger's drain even if already used this turn. A failed grip (target saves) still heals you CON mod."},
      {lvl:6, name:"Open Wound", desc:"Modifies Death and Decay. Targets damaged become Wounded until the end of your next turn — while Wounded, your drain die becomes 1d10 against them (replacing 1d6)."},
      {lvl:7, name:"Bone Shield", cost:"2 Seals", action:"Bonus action or Reaction", desc:"Until the start of your next turn, reduce all incoming damage by your CON mod (per hit)."},
      {lvl:7, name:"Vampiric Embrace", desc:"Passive. Whenever you heal via a Death Knight feature, one creature within 30 ft also heals half that amount. Doesn't chain."},
      {lvl:9, name:"Hunger's Wake", desc:"Adds to Dark Presence. When a creature dies within your 10-ft aura, heal CON mod — in addition to normal Seal gains."},
      {lvl:10, name:"Dancing Rune Weapon", cost:"8 Seals", action:"Action", desc:"1 minute (no concentration): spectral weapon copy attacks each of your turns (full weapon dmg + CON necrotic), move it 30 ft free. Mirrors your Crimson Strike when used. Generates +1 Seal per hit. Vampiric Embrace applies to its damage."},
      {lvl:13, name:"Gorefiend's Grasp", cost:"6 Seals", action:"Action · 1/short rest", desc:"Point within 60 ft; every hostile creature within 30 ft of it makes a STR save or is pulled adjacent & grappled until end of their next turn (partial pull + no grapple on success). Afterward, use Death and Decay centered there as a free action at 0 Seal cost."},
      {lvl:14, name:"Open Vein", desc:"Adds to Lichborne. While active, drain die is 1d10 and triggers on every hit (not just once/turn)."},
      {lvl:15, name:"Hemostasis", desc:"Passive. The first time each round you take damage without healing that same turn, your next Crimson Strike, Death and Decay, or Gorefiend's Grasp heals double. Doesn't stack."},
      {lvl:18, name:"Heart of Darkness", desc:"Capstone. HP maximum increases by CON mod × 5 (retroactive). Reducing a creature to 0 HP with a Blood feature grants Seals equal to your proficiency bonus."},
      {lvl:18, name:"Blood Frenzy", desc:"1/long rest, automatic. At 0 HP: drop to 1 HP instead, 1 minute — can't drop below 1, Crimson Strike/Hunger heal double, double Seal generation, Bone Shield activates free each turn. On end: heal CON mod × 10, then take 2 levels of exhaustion."}
    ],
    feats: [
      {name:"Crimson Ascendant — The Predator", meta:"Feat · 1st", desc:"Drain die 1d6→1d8 (1d10 vs Wounded). Kill via drain → free half-speed move toward nearest enemy. At full HP, drain grants a Seal instead of healing."},
      {name:"Kiss of the Coven — The Courtier", meta:"Feat · 1st", desc:"Drain damage gives disadvantage on the target's next save. Gain/upgrade Persuasion proficiency. Adv. on CHA checks vs creatures fed from (willingly) in the last 24 h."},
      {name:"Covenant Tether — The Anchor", meta:"Feat · 7th", desc:"Vampiric Embrace heals 2/3 instead of half. Designate a Bonded ally: reaction Crimson Strike (free) when they hit 0 HP — they heal instead of you; they resist necrotic within 30 ft."},
      {name:"Feeding Frenzy — The Glutton", meta:"Feat · 10th", desc:"Crimson Hunger drain triggers on every hit, not once/turn. Death and Decay hitting 3+ creatures heals full damage instead of half."}
    ],
    items: [
      {name:"Marrow Drinker", meta:"Rare · Handaxe", desc:"+1d4 necrotic + heal on hit (stacks with Crimson Hunger). Drain-kill → free thrown attack elsewhere, also triggers drain."},
      {name:"The Court's Invitation", meta:"Rare · Wondrous", desc:"Adv. Deception/Persuasion vs Wounded or recently-drained creatures. 1/long rest: mark a name — 24h kill via drain heals to full & grants 5 Seals."},
      {name:"The Bondseal", meta:"Very Rare · Amulet", desc:"Bonded ally reaction: 2 Seals → they heal CON mod, you take 1d4 necrotic. 1/long rest auto-triggers at their 0 HP, +3 Seals to you."},
      {name:"The Unending Table", meta:"Very Rare · Gauntlets", desc:"Drain on every hit. With Feeding Frenzy: D&D vs 5+ creatures heals double. 1/short rest auto-drain to stay conscious at 0 HP."}
    ],
    thirstLabel: true
  },
  frost: {
    label: "Frost",
    title: "Frost — Cold Death",
    colTitle: "Frost Covenant",
    features: [
      {lvl:1, name:"Cold Death", desc:"Immune to cold damage. Melee weapon attacks deal +1d4 cold on every hit. Critical hit: target slowed (half speed, no reactions, disadv. DEX saves) until end of their next turn."},
      {lvl:2, name:"Glacial Strike", cost:"3 Seals", action:"Bonus action", desc:"Melee attack. Hit: weapon dmg + CON mod cold, target slowed (or restrained if already slowed). Miss: target has disadvantage on its next CON save."},
      {lvl:3, name:"Permafrost", desc:"Modifies Death Grip — costs 1 Seal instead of 2. Grip targets are restrained on arrival regardless of save result. 10-ft difficult terrain radiates from you."},
      {lvl:6, name:"Flash Freeze", desc:"Modifies Death and Decay. Damaged targets are slowed (restrained instead if already slowed)."},
      {lvl:7, name:"Killing Machine", desc:"Passive. A critical hit makes your next melee attack before end of next turn auto-crit; a resolved auto-crit refreshes the chain again."},
      {lvl:7, name:"Frozen Armor", cost:"2 Seals", action:"Bonus action or Reaction", desc:"Until start of your next turn: damage taken is reduced by CON mod, and the attacker is slowed until end of their next turn."},
      {lvl:9, name:"Killing Frost", desc:"Adds to Dark Presence. Hostile creatures in the aura have speed reduced by 10 ft at the start of their turn (recalculated each turn)."},
      {lvl:10, name:"Pillar of Frost", cost:"8 Seals", action:"Action", desc:"1 minute: all weapon attacks +2d6 cold. Immune to forced movement, prone, and grapple. End of each of your turns: 10-ft burst, CON save or 2d8 cold + slowed. Generates +1 Seal at the start of each of your turns while active."},
      {lvl:13, name:"Empower Rune Weapon", cost:"5 Seals", action:"Bonus action · 1/short rest", desc:"1 minute: one additional weapon attack beyond Extra Attack (3 total). All melee attacks +1d6 cold (stacks with Cold Death). Glacial Strike always restrains while active."},
      {lvl:14, name:"Eternal Winter", desc:"Adds to Lichborne. Cold Death's passive damage increases from 1d4 to 1d8 while active."},
      {lvl:15, name:"Breath of Syndragosa", cost:"5 Seals to start, 2/turn maintain", action:"Action", desc:"30-ft cone: CON save or 3d8 cold (half on success); slowed→paralyzed if already slowed. Maintain each turn or it ends. When it ends: everyone slowed/restrained/paralyzed in the cone takes +2d8 cold, no save."},
      {lvl:18, name:"Absolute Zero", desc:"Capstone. Cold Death's damage permanently becomes 1d8. Also immune to fire. Critical hit range expands to 18–20 while Pillar of Frost is active."},
      {lvl:18, name:"Snap Freeze", cost:"0 Seals", action:"Action · 1/long rest", desc:"30 ft: CON save or frozen solid (paralyzed, immune to all but fire damage) for 1 minute; repeat save at end of each of their turns."}
    ],
    feats: [
      {name:"Twin Frost — The Duelist", meta:"Feat · 1st (dual-wield)", desc:"Killing Machine works from either weapon. Off-hand attack has advantage if main-hand already hit this turn. Glacial Strike usable off-hand at no penalty."},
      {name:"Frozen Ground — The Warden", meta:"Feat · 7th", desc:"Permafrost's terrain radius 10→20 ft, lingers 1 min after leaving; creatures ending turn in it take 1d6 cold. Death Grip can restrain in place instead of pulling."},
      {name:"Executioner's Chill — The Executioner", meta:"Feat · 7th", desc:"Auto-crit vs restrained creatures. Glacial Strike kill on a restrained target refreshes Killing Machine even if inactive. 1/short rest: kill a slowed/restrained/paralyzed creature → regain 3 Seals."},
      {name:"Heart of the Blizzard — The Storm", meta:"Feat · 10th", desc:"Pillar's end-of-turn burst 10→20 ft, 2d8→3d8. Death and Decay costs 0 Seals while Pillar is active. Breath of Syndragosa maintain cost 2→1 while Pillar is also active."}
    ],
    items: [
      {name:"Permafrost & Deathchill", meta:"Very Rare · Paired swords", desc:"+2, +1d6 cold each, immune to restrained. Lead blade auto-slows once/turn; finishing blade +1d8 vs slowed/restrained. Shares Killing Machine between both."},
      {name:"The Last Cut", meta:"Rare · Greataxe", desc:"+1, +1d6 cold. Damage die becomes 2d12 vs restrained targets. 1/short rest: killing a restrained target refunds all Seals spent this turn."},
      {name:"The Warden's Cairn", meta:"Very Rare · Plate armor", desc:"Your difficult terrain also slows enemies starting their turn in it. If you haven't moved this turn, Death Grip costs 0 Seals and restrains on arrival."},
      {name:"Heart of the Everstorm", meta:"Legendary · Amulet (10th+)", desc:"Pillar of Frost usable as a bonus action. Breath's initial cost 5→3 while Pillar active. 1/long rest: free extra Pillar burst while both are active."}
    ],
    thirstLabel: false
  },
  unholy: {
    label: "Unholy",
    title: "Unholy — Risen Servant",
    colTitle: "Unholy Covenant",
    features: [
      {lvl:1, name:"Risen Servant", desc:"1-hour ritual raises one Risen (Ghoul stat block: HP = your level × 5, uses your prof bonus, acts right after you, can't be turned within 30 ft). One at a time. Sense its location always; it dying grants +2 Seals."},
      {lvl:2, name:"Plague Strike", cost:"3 Seals", action:"Bonus action", desc:"Melee attack. Hit: weapon dmg + CON mod necrotic, target becomes Festering, heal CON mod. Miss: target Festering anyway, no heal."},
      {lvl:3, name:"Corpse Vector", desc:"Modifies Death Grip. A successful grip makes the target Festering automatically. If your Risen is within 5 ft of the landing spot, it gets a free attack on arrival."},
      {lvl:6, name:"Rotting Ground", desc:"Modifies Death and Decay. Damaged targets become Festering."},
      {lvl:7, name:"Scourge Strike", cost:"3 Seals", action:"Action", desc:"Melee attack vs a Festering target: weapon dmg + scaling necrotic (3d8 at 7–10, 4d8 at 11–14, 5d8 at 15–17, 6d8 at 18–20), consumes their Festering. Your Risen can Scourge once/turn for free, adding CON mod necrotic."},
      {lvl:7, name:"Dark Transformation", cost:"3 Seals", action:"Bonus action", desc:"1 minute: Risen's melee +1d8 necrotic, gains temp HP = CON mod × 5, can self-Scourge once/turn. If destroyed while active: +4 Seals, free replacement Risen from a corpse within 30 ft if available."},
      {lvl:9, name:"Rise Again", desc:"Adds to Dark Presence. A Festering creature that dies in your 10-ft aura rises as a Skeleton under your command (cap = your prof bonus), lasting until dawn or destroyed."},
      {lvl:10, name:"Army of the Dead", cost:"8 Seals", action:"Action", desc:"Raise up to 4 Skeletons from the earth within 30 ft (prof bonus on attacks), 1 minute or destroyed — doesn't count against your Risen or Rise Again caps. Using Scourge Strike gives every active skeleton + Risen a free attack on that target."},
      {lvl:13, name:"Epidemic", desc:"Passive. At the start of your turn, each Festering creature within 30 ft spreads Festering to the nearest valid non-Festering creature within 10 ft (once per source per round)."},
      {lvl:14, name:"Vector Born", desc:"Adds to Lichborne. Scourge Strike vs a Festering target immediately spreads it to the nearest creature within 10 ft — unlimited while active."},
      {lvl:15, name:"Defile", cost:"5 Seals to start, 2/turn maintain", action:"Action", desc:"15-ft radius within 30 ft, 1 minute, grows +5 ft/turn while occupied (max 40 ft). Inside: enemies take 2d6 necrotic at start of turn (CON save halves) and failing makes them Festering; your undead deal +1d6 necrotic inside."},
      {lvl:18, name:"Apocalypse", cost:"6 Seals", action:"Action · 1/long rest", desc:"Capstone. Every Festering creature within 60 ft erupts for Scourge-tier necrotic (6d8 at 18th), splashing half to creatures within 10 ft (CON save negates splash); consumes their Festering. Each kill raises a Ghoul under your command for 1 minute."}
    ],
    feats: [
      {name:"Carrier Strain — The Carrier", meta:"Feat · 1st", desc:"Attuned weapons gain 15 ft reach. Epidemic spreads to every valid target, not just one. 1/short rest: instantly apply Festering to a creature within 30 ft, no roll."},
      {name:"Reaper's Cadence — The Duelist", meta:"Feat · 7th", desc:"Scourge Strike cost 3→2 Seals. Killing a Festering target lets you chain into another melee attack + Scourge Strike on a nearby Festering creature. Plague Strike's miss-effect also applies to an adjacent creature on a hit."},
      {name:"Legion's Call — The General", meta:"Feat · 10th", desc:"Maintain two Risen at once (separate rituals). Dark Transformation can target both for 5 Seals. Rise Again's skeleton cap +2."},
      {name:"Grave Tide — The Necromancer", meta:"Feat · 13th", desc:"Death and Decay raises fresh corpses in range as Skeletons. Defile grows +10 ft/turn instead of +5 while your undead stand in it. Apocalypse's Ghouls gain temp HP and apply Festering on hit."}
    ],
    items: [
      {name:"Plague Fang", meta:"Rare · Short sword", desc:"Applies Festering on hit at no Seal cost. 10 ft reach."},
      {name:"The Long Road", meta:"Rare · Boots", desc:"Scourge Strike kill → +10 ft speed and free movement without provoking opportunity attacks this turn."},
      {name:"The Second Shroud", meta:"Very Rare · Wondrous (10th+)", desc:"Maintain two Risen at once. With Legion's Call: Rise Again cap +2 more, and a destroyed Risen grants the other temp HP."},
      {name:"The First Grave", meta:"Legendary · Wondrous (13th+)", desc:"Extends Grave Tide's range, or (without the feat) lets you ready any corpse for raising regardless of time since death. 1/long rest: force one non-Festering creature to count as Festering for an Apocalypse eruption."}
    ],
    thirstLabel: false
  }
};

export const GENERAL_FEATS = [
  {name:"Unyielding Mark", meta:"Half-feat · 1st", desc:"+1 CON (max 20). Gain 1 Grave Seal automatically before initiative is rolled. A missed Covenant Strike only spends half its Seal cost (round up)."},
  {name:"Grim Reckoning", meta:"Feat · 1st", desc:"Once/turn, reducing a creature to 0 HP refunds the Seal cost of one ability used this turn. Start-of-turn Seal generation is +2 instead of +1 while an enemy is within 10 ft."},
  {name:"Walking Grave", meta:"Feat · 6th", desc:"Death and Decay's cost drops from 5 to 3 Seals. Usable at 0 Seals by instead taking 1d6 damage (no save) as the cost."}
];

export const SHARED_ITEMS = [
  {name:"Covenant's Edge", meta:"Legendary · Two-handed sword (universal)", desc:"+3 weapon. +1 Grave Seal on hit, no per-turn cap. Grave Seal maximum +4 while attuned. 1/short rest: use Covenant Strike as a reaction the instant a nearby creature becomes Wounded/slowed-restrained/Festering by any source."},
  {name:"Runeblade of the Unbroken", meta:"Very Rare · Two-handed sword (universal)", desc:"+2 weapon. Once/turn on a hit: +1d10 necrotic and a CON save or disadvantage on their next attack, no cost. Spending Grave Seals on a class feature heals 1 HP per Seal spent."},
  {name:"Vanguard of the Coven", meta:"Very Rare · Plate armor (shared)", desc:"AC 18. Generating Grave Seals from any source grants 1 temp HP per Seal (refreshes, doesn't stack). Anti-Magic Shell's first duration extends to 2 rounds and grants immunity to spells of 3rd level or lower while active."},
  {name:"Shield of the Unbroken", meta:"Rare · Shield (shared)", desc:"+2 AC. Cannot be disarmed while conscious. Anti-Magic Shell save success grants +2 extra Seals. 1/short rest: reduce an incoming melee hit by 2d6+CON mod as a reaction; if reduced to 0, the attacker becomes the target of a free Death Grip pull."},
  {name:"Mark of Aalise", meta:"Rare · Consumable", desc:"Bonus action, dissolve on skin: 1 hour of Grave Seal maximum +prof bonus and Covenant Strike costing 2 instead of 3. Gain 1 exhaustion when it ends."},
  {name:"Vessel of Preserved Mark", meta:"Uncommon · Consumable (~150 gp)", desc:"Bonus action, break & inhale: immediately gain 1d4 + CON mod Grave Seals (excess above max is lost)."}
];

export function sealMax(level, conMod){
  var base;
  if (level < 2) base = 0;
  else if (level <= 4) base = 4;
  else if (level <= 8) base = 6;
  else if (level <= 12) base = 8;
  else if (level <= 16) base = 10;
  else base = 12;
  return Math.max(0, conMod + base);
}

export const CLASS_DEATHKNIGHT = {
  hitDie: 12,
  label: "Death Knight", eyebrow: "Covenant of the Unbroken", primaryAbil: "con",
  resourceLabel: "Grave Seals",
  resourceMax: function(level, ab){ return sealMax(level, ab.con); },
  resourceRecoveryType: "deathknight-turns",
  resourceButtons: [
    {label:"Combat Ends (reset)", tag:"dk-reset"}
  ],
  subclassLabel: "Covenant",
  subclasses: COVENANTS,
  generalFeatures: GENERAL_FEATURES,
  generalFeats: GENERAL_FEATS,
  sharedItems: SHARED_ITEMS,
  secondary: "deathknight"
};

