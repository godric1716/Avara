export const DEVOURER_STANDARD_SPELLS = {
  "Cantrips": ["Chill Touch", "Mind Sliver", "Toll the Dead", "Sapping Sting", "Spare the Dying", "Booming Blade"],
  "1st Level": ["Bane", "Cause Fear", "Dissonant Whispers", "False Life", "Hellish Rebuke", "Wrathful Smite"],
  "2nd Level": ["Crown of Madness", "Darkness", "Hold Person", "Mirror Image", "Misty Step", "Phantasmal Force", "Ray of Enfeeblement", "Wither and Bloom"],
  "3rd Level": ["Bestow Curse", "Fear", "Hunger of Hadar", "Spirit Shroud", "Vampiric Touch", "Summon Shadowspawn", "Summon Aberration"],
  "4th Level": ["Banishment", "Blight", "Compulsion", "Phantasmal Killer", "Shadow of Moil", "Sickening Radiance"],
  "5th Level": ["Antilife Shell", "Dawn", "Enervation", "Hold Monster", "Negative Energy Flood", "Synaptic Static"]
};

export const DEVOURER_SPELL_SLOTS = [
  [0,0,0,0,0], [2,0,0,0,0], [3,0,0,0,0], [3,0,0,0,0], [4,2,0,0,0],
  [4,2,0,0,0], [4,3,0,0,0], [4,3,0,0,0], [4,3,2,0,0], [4,3,2,0,0],
  [4,3,3,0,0], [4,3,3,0,0], [4,3,3,1,0], [4,3,3,1,0], [4,3,3,2,0],
  [4,3,3,2,0], [4,3,3,3,1], [4,3,3,3,1], [4,3,3,3,2], [4,3,3,3,2]
];
export const DEVOURER_META_USES = function(level){
  if (level < 3) return 0;
  if (level <= 5) return 3;
  if (level <= 11) return 4;
  if (level <= 16) return 5;
  if (level <= 19) return 6;
  return -1; // unlimited
};
export const DEVOURER_META_MAX_ROUNDS = function(level){ return level >= 11 ? 15 : 10; };

export const DEVOURER_GENERAL = [
  {lvl:1, name:"Bound Pair", desc:"10-minute ritual at end of a rest bonds up to 2 melee weapons. While wielding a bound weapon: CHA replaces STR/DEX for attack & damage, counts as magical, summon it to your hand as a bonus action. Two bonded weapons of the same type grant Two-Weapon Fighting (add CHA mod to off-hand damage)."},
  {lvl:1, name:"Void-Touched", desc:"Resistance to necrotic damage. Darkvision 60 ft (or +30 ft if you already have it). You learn Deep Speech."},
  {lvl:2, name:"Spellcasting", desc:"CHA-based half-caster. Save DC = 8+prof+CHA. Attack = prof+CHA. Prepared spells = CHA mod + half Devourer level (round down, min 1). Focus: bound weapon, obsidian focus, or creature trophy."},
  {lvl:2, name:"Soul Fragments", desc:"Your resource (see tracker). Max = level + CHA mod (+5 at 20th). Starts at 0 each long rest, fills only through combat: +1 bound weapon hit, +1 cantrip hit, +2 any creature drops within 30 ft (+1 more if it was your kill). Per-round cap = CHA mod per triggering event."},
  {lvl:2, name:"Reap", cost:"2 Soul Fragments", action:"Bonus action", desc:"While wielding a bound weapon, make one additional bound weapon attack. On a hit, regain HP = CHA mod + half the damage dealt (round down)."},
  {lvl:3, name:"Hero Path", desc:"Choose Voidreaper, Annihilator, or Void-Scarred. Grants features at 3rd, 7th, 10th, 15th, 18th."},
  {lvl:3, name:"Void Metamorphosis", cost:"3 Soul Fragments", action:"Bonus action", desc:"Transform: flying speed = walking speed (hover), advantage on Intimidation, resistance to psychic damage, bound weapon attacks +1d6 necrotic. Base duration 3 rounds (max 10, or 15 at 11th+). Spending 2+ Soul Fragments on a feature while in Meta extends it 1 round (1+ SF at 11th+). Ends when duration expires or Fragments run out."},
  {lvl:5, name:"Extra Attack", desc:"Attack twice when you take the Attack action."},
  {lvl:6, name:"Voidstride", cost:"0, once/turn", desc:"When you move, teleport up to 15 ft instead (30 ft while in Meta)."},
  {lvl:9, name:"Void Sense", desc:"Blindsight 10 ft; sense any creature with a soul within 30 ft (through walls/darkness, type unknown). First Fragment generated per long rest from a creature detected this way is +1 extra."},
  {lvl:10, name:"Collapsing Star", cost:"4 Soul Fragments", desc:"Call down a falling shard of cosmic dark — requires Meta active, lasts as long as it does, detonates automatically when Meta ends. See your Hero Path for shape and detonation."},
  {lvl:11, name:"Sustained Form", desc:"Meta max duration becomes 15 rounds. Gain temp HP = Devourer level at the start of each turn in Meta. Extension cost drops to 1+ Soul Fragments per round."},
  {lvl:13, name:"Hollow Step", desc:"Voidstride range becomes 30 ft once/turn and the destination may be unseen if you can describe it. While in Meta, gain truesight 10 ft."},
  {lvl:14, name:"Glaive Storm", cost:"4 Soul Fragments", action:"Action", desc:"Each chosen creature within 15 ft: DEX save or 4d8 necrotic (half on success). Each failed save: regain 1 Soul Fragment and move a marked/branded creature 5 ft. Scales to 5d8 (17th), 6d8 (20th)."},
  {lvl:17, name:"Greater Metamorphosis", desc:"Choose a form on entering Meta: Ascendant (fly +10 ft, +2 SF on kills, disadvantage on one target's next save/turn), Devouring (+2d8 necrotic replacing +1d6, heal CHA mod on necrotic damage once/turn, advantage vs charmed/frightened), or Hollow (resist nonmagical B/P/S + one chosen type, reaction disadvantage on attacks vs you up to CHA mod/rest, advantage on concentration)."},
  {lvl:20, name:"The First Devourer", desc:"Soul Fragments persist between long rests, max becomes level+CHA mod+5. Enter Meta once per short rest; no Fragment cost to extend — any feature use refreshes duration to 15. Once per long rest, enter Meta free. Final Devouring: reducing a creature to 0 HP in Meta grants crits on 18–20, max damage on all dice, and an extra action next turn, until end of your next turn."}
];

export const DEVOURER_PATHS = {
  voidreaper: {
    label: "Voidreaper", colTitle: "Voidreaper",
    title: "Voidreaper — Voidmark",
    features: [
      {lvl:3, name:"Voidmark", cost:"1 Soul Fragment", action:"Bonus action", desc:"Mark an ally within 60 ft, 1 minute, no concentration. Whenever you damage with a bound weapon or class feature, the mark heals CHA mod HP (once per source). Max marks: 2 (3rd), 3 (7th), 4 (11th), 5 (15th); healing becomes CHA mod + 1/4 level at 7th+. Void Ray's Mend auto-marks the healed target free; Collapsing Star auto-marks everyone in its radius free."},
      {lvl:3, name:"Void Ray — Beam of Twin Light", cost:"3 Soul Fragments", action:"Action, up to 3 rounds, no concentration", desc:"Each round choose Sever (60 ft, DEX save or 2d8 necrotic) or Mend (60 ft, 2d8 healing). Scales to 5d8 by 17th."},
      {lvl:7, name:"Atonement Resonance & Stellar Boon", desc:"Spending Soul Fragments on any feature heals every Voidmarked ally = Fragments spent. Applying a mark also grants a Stellar Boon: once before it expires, add a d4 to one attack/save/check; refreshes on reapplication."},
      {lvl:10, name:"Collapsing Star — Convergent Star", desc:"20-ft radius, lasts as long as Meta. Each turn: enemies inside CON save or 2d8 necrotic; allies inside regain 2d8 HP + temp HP = CHA mod. Detonation: all Voidmarked allies anywhere heal level+CHA mod; enemies ever inside take 4d10 necrotic (CON save halves, no save if still inside)."},
      {lvl:15, name:"Convergence", desc:"Reducing a creature to 0 HP heals every Voidmarked ally anywhere on the plane = level+CHA mod. Regain 1 Soul Fragment per ally healed (max CHA mod)."},
      {lvl:18, name:"Astral Ascendant", desc:"While in Meta: allies within 30 ft get temp HP = CHA mod each turn; Void Ray can Sever and Mend the same round on different targets; Voidmarks last until your next long rest; Convergence triggers on any 0-HP drop within 60 ft."}
    ],
    feats: [
      {name:"Stellar Conduit", meta:"Feat · Voidreaper", desc:"Voidmark gains modes: Harvest (default, heals on your damage) or Shield (heals when the ally takes damage). 1/short rest: reaction, spend 3 SF to drop a dying Voidmarked ally to 1 HP instead of 0 (ends their mark)."},
      {name:"Twin Light Mastery", meta:"Feat · Voidreaper, 7th", desc:"Void Ray can Sever and Mend the same round (brings the 18th-level upgrade forward). Choosing Mend also removes frightened, poisoned, or blinded from the target."}
    ],
    items: [
      {name:"Aphelion & Perihelion", meta:"Very Rare · Paired tonfa scythes (Voidreaper)", desc:"+2 each. Aphelion: 10-ft reach; Sever channeled through it is +1d8 and bends around total cover; hit gives disadvantage on the target's next save vs a Devourer feature/spell. Perihelion: Reap heals +1d6; Mend also heals one more marked ally CHA mod; +1 SF on a kill. Fallen Harmony: while both are your Bound Pair in Meta, all Voidmarks pulse CHA mod healing at the start of your turns for free."},
      {name:"Shard of the Riven Sky", meta:"Rare · Wondrous neck (Voidreaper)", desc:"Voidmarks heal +1d4 per trigger. 1/short rest: apply a mark to two allies as one bonus action (counts as one use). Convergent Star detonation heals marked allies +2d8 more."}
    ]
  },
  annihilator: {
    label: "Annihilator", colTitle: "Annihilator",
    title: "Annihilator — Blade Dance",
    features: [
      {lvl:3, name:"Blade Dance", cost:"2 Soul Fragments", action:"Bonus action", desc:"Move up to half speed with no opportunity attacks, striking each enemy you pass within 5 ft (up to CHA mod targets, min 1) with a bound weapon attack. Separate from normal movement. Counts as an Extra Attack trigger at 7th. Max targets CHA mod+1 (11th), CHA mod+2 (15th)."},
      {lvl:3, name:"Void Ray — Sweeping Beam", cost:"3 Soul Fragments", action:"Action, up to 3 rounds, no concentration", desc:"60-ft line, 5 ft wide, pivots each round. DEX save or 2d8 necrotic (half on success). Scales to 5d8 by 17th."},
      {lvl:7, name:"Eye of Annihilation & Predator's Cadence", desc:"Critical hit with a bound weapon/feature: +1 SF and extend Meta 1 round if active. Reducing a creature to 0 HP with a weapon or Blade Dance: speed +15 ft until your next turn and Voidstride becomes free as part of that movement."},
      {lvl:10, name:"Collapsing Star — Devouring Star", desc:"20-ft radius, lasts as long as Meta. Each turn: all enemies within 30 ft pulled 10 ft toward it (no save); enemies in 20 ft CON save or 3d8 necrotic. Detonation: enemies within 30 ft take 6d10 necrotic (CON save halves, no save if still in the 20-ft radius)."},
      {lvl:15, name:"Endless Hunger", desc:"Reducing a creature to 0 HP: immediately make one bound weapon attack on a creature within 5 ft, or trigger one free round of Blade Dance. Each enemy can trigger this once per turn."},
      {lvl:18, name:"Cataclysm Embodied", desc:"While in Meta: bound weapon attacks deal +2d6 necrotic (replaces the base +1d6); Blade Dance usable as part of the Attack action once/turn (not just bonus action); detonating a Devouring Star lets you spend 3 SF to re-enter Meta immediately, bypassing the rest restriction."}
    ],
    feats: [
      {name:"Cosmic Predator", meta:"Feat (half) · Annihilator", desc:"+1 DEX or CHA (max 20). Blade Dance generates 1 SF per creature hit during the movement. Predator's Cadence triggers a free Voidstride as part of its movement."},
      {name:"Gravity Architect", meta:"Feat · Annihilator, 10th", desc:"Devouring Star's pull radius 30→45 ft; pulled creatures can be dragged through other creatures' spaces, stopping only at walls. Delaying detonation 1 round on voluntary Meta end: +3d10 damage and escaping enemies are restrained until it goes off."}
    ],
    items: [
      {name:"Stardust Wraps", meta:"Rare · Wondrous hands (Annihilator)", desc:"Blade Dance movement is fully separate from your normal speed. Creatures hit during it: DEX save or speed 0 until end of their next turn. Your Blade Dance trail is difficult terrain for enemies until your next turn."}
    ]
  },
  voidscarred: {
    label: "Void-Scarred", colTitle: "Void-Scarred",
    title: "Void-Scarred — Voidbrand",
    features: [
      {lvl:3, name:"Voidbrand", cost:"1 Soul Fragment", action:"Bonus action", desc:"Brand a creature within 60 ft (lands automatically, no attack roll), then it makes a WIS save (your spell save DC), 1 minute, no concentration. Always: you know its location; it takes CHA mod necrotic if it ends its turn 30+ ft from you. On a failed save: disadvantage attacking anyone but you; 2d6 psychic at end of turn if it didn't attack you. Max brands: 1 (3rd), 2 (7th), 3 (15th)."},
      {lvl:3, name:"Void Ray — Bulwark Beam", cost:"3 Soul Fragments", action:"Action, up to 3 rounds, no concentration", desc:"30-ft cone each round: CON save or 2d8 necrotic. While channeling: resistance to all damage, temp HP = CHA mod+level each turn. Any creature damaged is auto-Voidbranded (passive only, free). Scales to 5d8 by 17th."},
      {lvl:7, name:"Scarred Flesh & Demanding Presence", desc:"Taking damage grants 1 SF per 10 damage (round down), up to CHA mod per turn. Branded creatures treat the area within 5 ft of you as difficult terrain moving away. Reaction: when a branded creature drops an ally to 0 HP, teleport 30 ft adjacent and force a WIS save or stun until end of its next turn."},
      {lvl:10, name:"Collapsing Star — Sentinel Star", desc:"Anchors within 5 ft of you and moves with you; 15-ft radius, lasts as long as Meta. All enemies within 30 ft auto-Voidbranded (passive only). Resistance to all damage while within 5 ft of it. Enemies in 15 ft: CON save or 2d8 necrotic + pulled 5 ft (pull is automatic). Detonation: 30-ft WIS save or stunned; 15-ft radius takes 5d10 necrotic (CON save halves); you heal half the total damage dealt (max level×5)."},
      {lvl:15, name:"Soul-Hardened", desc:"Max HP +Devourer level (retroactive). +1 AC in medium/no armor. 1/long rest, at 0 HP in Meta: drop to 1 HP instead, end Meta, and trigger any active Sentinel Star detonation."},
      {lvl:18, name:"Wall of the Void", desc:"While in Meta: you and allies within 10 ft resist all damage except force/radiant; Voidbrand needs no save (failed-save effects apply automatically); taking damage from a branded creature grants 2 SF (stacks with Scarred Flesh); once/turn, reaction — force an enemy who hit an ally within 30 ft to reroll that attack against you instead."}
    ],
    feats: [
      {name:"Scar Resonance", meta:"Feat (half) · Void-Scarred", desc:"+1 CON (max 20). Scarred Flesh cap becomes CHA mod + prof bonus. Entering Meta retroactively triggers Scarred Flesh for damage taken since your last turn."},
      {name:"Brand of Dominion", meta:"Feat · Void-Scarred", desc:"Voidbrand affects creatures immune to frightened (WIS save still applies). When a branded creature succeeds its save to break the brand, spend 2 SF to reapply it free. Passive distance-damage for branded creatures increases from CHA mod to CHA mod + prof bonus."}
    ],
    items: [
      {name:"Memento & Mori", meta:"Very Rare · Paired warglaives (Void-Scarred)", desc:"+2 each. Memento: Voidbrand within 5 ft needs no save; branded creatures take CHA mod necrotic every turn (not just when fleeing). Mori: reaction on any 0-HP drop within 30 ft — all branded creatures within 30 ft take 2d8 psychic. 1/short rest, at 0 HP: drop to 1 instead, branded creatures within 30 ft take 4d10 necrotic, Sentinel Star detonates if active. Wall Inscription: +2 AC while holding both."},
      {name:"Brand of Eternity", meta:"Rare · Wondrous ring (Void-Scarred)", desc:"Voidbrand passive range 30→60 ft. Reaction: impose disadvantage on a branded creature's attack against an ally. 1/long rest, cast Compulsion (no slot, no concentration) targeting only Voidbranded creatures."}
    ]
  }
};

export const DEVOURER_GENERAL_FEATS = [
  {name:"Starborne Instinct", meta:"Feat (half) · Devourer", desc:"+1 CHA (max 20). On initiative, gain SF = prof bonus. 1/short rest, reaction when hit: enter Meta (needs 3+ SF and an available use) — activates after the hit resolves."},
  {name:"Hollow Vessel", meta:"Feat · 4th", desc:"SF max +prof bonus. Starting your turn at max SF grants temp HP = 2×CHA mod. Extending Meta: spend 1 additional SF to extend 2 rounds instead of 1."},
  {name:"Fracture Point", meta:"Feat · Devourer", desc:"Critical hit with a bound weapon: +2×CHA mod necrotic, CON save or lose reaction until next turn, +1 SF. When critically hit, reaction: spend 2 SF for a free bound weapon attack on the attacker."},
  {name:"Resonant Void", meta:"Feat · 2nd", desc:"Casting a Devourer spell with a slot generates 1 SF. Your necrotic spells/features ignore resistance (not immunity). Once/turn, Sever on Void Ray can push 10 ft instead of damage, or deal damage and push 5 ft."}
];

export const DEVOURER_ITEMS = [
  {name:"Sunder & Claim", meta:"Legendary · Paired warglaives (universal)", desc:"+2 each. Bound weapon attacks deal CHA mod necrotic to any creature whose space you pass through via teleport/movement. Sunder: on hit, pull target 10 ft (no save) or +1d8 necrotic if already adjacent; 1/turn spend 1 SF to root them in place. Claim: on hit, +1 SF beyond normal; pull 1 extra SF from any creature dropping to 0 HP within 30 ft. The Riven Resonance: while both bonded and in Meta, Blade Dance pulls everyone you pass 15 ft toward the nearest point."},
  {name:"Starfall Glaives", meta:"Rare · Paired warglaives (universal)", desc:"+1 each. Thrown hit (Special property): +2d6 force and knocked prone. Return generates 1 SF. 1/long rest, throw both at once at up to two targets within 60 ft; both return."},
  {name:"The Hollowed Edge", meta:"Rare · Tonfa scythe, single (universal)", desc:"+1 weapon, +1d4 necrotic every hit. Damaging a creature at 50 HP or fewer generates +1 SF. 1/short rest, forgo damage on a hit: CON save (spell DC) or lose 1d4 of its highest spell slots, taking necrotic = slot level × 5."},
  {name:"Voidwalker's Carapace", meta:"Very Rare · Medium armor", desc:"AC 14+DEX (max 2). +1 AC while in Meta. Resistance to psychic damage always. Voidstride range +15 ft. 1/short rest, reaction: negate all forced movement against you."},
  {name:"Fractured Mantle", meta:"Rare · Medium armor", desc:"AC 12+DEX (max 2). Taking melee damage grants 1 SF (once/turn). Advantage on death saves while in Meta. 1/long rest, at 0 HP: drop to 1 HP and gain SF = prof bonus."},
  {name:"Obsidian Resonance Focus", meta:"Uncommon · Wondrous neck", desc:"Casting a spell with a slot generates 1 SF. Spell save DC +1. 1/long rest, cast Mark of the Reaper at no slot cost."},
  {name:"Crystallized Soul Fragment", meta:"Uncommon · Consumable", desc:"Bonus action, crush: gain SF = prof bonus. If already at max, excess converts to temp HP = 2× the excess."},
  {name:"Void Draught", meta:"Rare · Consumable", desc:"Bonus action, drink: 10 minutes of SF cap +CHA mod, every SF source +1 extra, and a d6 each turn (5–6 regains a Meta use). 1 level of exhaustion when it ends."}
];

export const CLASS_DEVOURER = {
  label: "Devourer", eyebrow: "Voidreaper · Annihilator · Void-Scarred", primaryAbil: "cha",
  resourceLabel: "Soul Fragments",
  resourceMax: function(level, ab){ return Math.max(0, level + ab.cha + (level >= 20 ? 5 : 0)); },
  resourceRecoveryType: "rest",
  resourceRecoveryHint: "Starts at 0 each long rest — the pool fills only through combat (bound-weapon hits, cantrips, kills). At 20th level it persists between long rests instead.",
  resourceButtons: [
    {label:"Long Rest (empty)", tag:"reset-zero"}
  ],
  subclassLabel: "Hero Path",
  subclasses: DEVOURER_PATHS,
  generalFeatures: DEVOURER_GENERAL,
  generalFeats: DEVOURER_GENERAL_FEATS,
  sharedItems: DEVOURER_ITEMS,
  secondary: "devourer"
};

export const DEVOURER_SPELLS = [
  {name:"Void Lash", meta:"Evocation cantrip", desc:"Ranged spell attack, 120 ft: 1d8 necrotic, ignores half/three-quarters cover (scales 2d8/3d8/4d8 at 5th/11th/17th). Voidreaper: a Voidmarked ally within 30 ft heals CHA mod on a hit. Annihilator: push the target 10 ft. Void-Scarred: auto-Voidbrand the target (passive only)."},
  {name:"Soulreader", meta:"Divination cantrip", desc:"Self, 30-ft radius, 1 round: know the location of every ensouled creature in range. First Fragment from a creature detected this way is +1. Voidreaper: also senses who is below half HP. Annihilator: exact position/facing; advantage on first attack vs hidden/obscured targets. Void-Scarred: detected Voidbranded creatures auto-fail their next compulsion save this turn."},
  {name:"Mark of the Reaper", meta:"1st · replaces Hex/Hunter's Mark", desc:"Bonus action, 60 ft, concentration 1 minute: first damage each turn on the marked creature regains 1 SF and deals +1d4 necrotic; transfers free on the target's death. Voidreaper: rider also heals a Voidmarked ally within 60 ft. Annihilator: die becomes 1d6; death teleports you to its space free. Void-Scarred: target is also fully Voidbranded (full save); you heal for the mark's necrotic each trigger."},
  {name:"Voidstep", meta:"1st conjuration", desc:"Bonus action: teleport up to 15 ft (30 ft at 3rd+); ending within 5 ft of a hostile creature gives your next attack on it advantage. Voidreaper: doubles healing from Void Ray/Mend used the same turn. Annihilator: 1d8 necrotic to everyone within 5 ft of your departure point. Void-Scarred: Voidbranded creatures within 10 ft of your landing save or frightened until end of next turn."},
  {name:"Drink the Stars", meta:"2nd evocation", desc:"Self, 30-ft radius: up to CHA mod creatures — allies heal 2d6, enemies CON save or take 2d6 necrotic (half on success); regain 1 SF per enemy damaged. Voidreaper: healed allies auto-Voidmarked 1 minute free. Annihilator: damaged enemies pushed 15 ft away. Void-Scarred: damaged enemies pulled 10 ft toward you and auto-Voidbranded."},
  {name:"Cradle of Hollow Stars", meta:"3rd conjuration", desc:"60 ft, concentration 1 minute: 15-ft sphere, lightly obscured to others. Entering/starting turn inside: WIS save or 2d8 psychic + frightened until start of next turn; each failed save grants 1 SF; allies inside get temp HP = CHA mod each turn. Voidreaper: Voidmarks inside refresh to full duration each turn. Annihilator: frightened creatures' speed also drops to 0 that round. Void-Scarred: failed saves also auto-Voidbrand (full compulsion, no extra save)."},
  {name:"Soul Tether", meta:"4th necromancy", desc:"60 ft, concentration 10 minutes: link two creatures — damage to one splits half to the other; CHA save each turn to break (triangle of three at 6th+). Voidreaper: redirect entirely between willing allies (one heals half the other's damage). Annihilator: +10 ft speed (stacking) each time a tethered enemy takes your damage. Void-Scarred: tethered enemy's attacks on allies deal half damage."},
  {name:"Convergent Veil", meta:"5th transmutation", desc:"Self, 20-ft radius, concentration 1 minute: allies get +1d4 on weapon attacks each turn; an enemy dropping to 0 HP in range grants 2 SF; once/turn, spending SF on a feature heals an ally in the veil = Fragments spent. Voidreaper: Voidmarks free, once/turn. Annihilator: Blade Dance free, full speed. Void-Scarred: Voidbranded enemies in range reroll attacks on allies and take the lower result."}
];

