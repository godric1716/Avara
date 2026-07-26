export const MIRROR_POINTS_MAX = [2,3,4,4,5,6,6,7,7,8,9,9,10,10,11,11,12,12,13,13];
export const MIRROR_SLOTS_MAX = [0,0,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4];
export const REFLECTION_SLOTS_MAX = [2,3,3,4,4,4,5,5,5,6,7,7,7,8,8,8,9,9,9,9];

export const MIRRORWARDEN_GENERAL = [
  {lvl:1, name:"The Fractured", desc:"Bonded mirror spirit (see Secondary tracker). Bonus action to summon/dismiss within 30 ft; acts right after you, no action needed. Mirror Link: advantage on Perception while summoned; bonus action to see through its eyes. The Vault: all Reflection/Mirror Slots live inside it — inaccessible at 0 HP. Shattering Burst on its 0 HP: 15-ft Dex save (2d6 piercing + 2d6 radiant, scaling), you take psychic = your level. Shattering Surge: spend Hit Dice for Mirror Points. Reformation: 2 Mirror Points to reform at half HP within 30 ft."},
  {lvl:1, name:"Mirror Imprint", cost:"0", action:"Reaction", desc:"When a creature within 60 ft casts a spell, attempt to imprint it: Persuasion check DC = 10 + spell level. Success fills a Reflection Slot (or overwrite one if full). Casting from a slot costs Mirror Points = spell level (min 1), CHA-based, Mirror Save DC = 8+prof+CHA. Reflection Slots clear at end of combat; Mirror Slots persist until overwritten."},
  {lvl:1, name:"Unarmored Defense", desc:"Unarmored AC = 10 + DEX mod + CHA mod. Shields still apply."},
  {lvl:2, name:"Shatter Pulse", cost:"2 Mirror Points", action:"Action", desc:"The Fractured bursts in a 15-ft radius: CON save vs Mirror Save DC or 2d6 radiant + blinded until end of their next turn (half damage, no blind on success). Scales to 5d6 at 15th."},
  {lvl:2, name:"Reflect Resistance", cost:"1 Mirror Point to activate", action:"Reaction to imprint", desc:"Imprint a creature's damage resistance (Persuasion DC = 10+target's prof bonus) into a Reflection Slot; spend 1 Mirror Point to apply it to yourself or the Fractured until end of combat. One resistance active on each at a time."},
  {lvl:2, name:"Charge Generation", desc:"Reflexive Charge: once/round, gain 1 Mirror Point when targeted by a spell/magical effect (hit or miss). Fractured Feedback: once/turn, gain 1 Mirror Point when the Fractured deals damage (misses count from 5th level). All Mirror Points recover on a short or long rest."},
  {lvl:3, name:"Mirror Vault", desc:"Your first Mirror Slot opens. Successful imprints may route into a Mirror Slot instead of a Reflection Slot — persists until you overwrite it. Only enemy/creature abilities may fill Mirror Slots; ally abilities fill Reflection Slots only."},
  {lvl:5, name:"Extra Attack", desc:"Attack twice when you take the Attack action."},
  {lvl:5, name:"Fractured Ascendance", desc:"The Fractured gains a second attack, Mirror Strike improves to 2d8+4 slashing + 2d6 radiant, Shattering Burst improves to 3d6+3d6, advantage on saves vs spells/magic, and Fractured Feedback now triggers even on a miss."},
  {lvl:5, name:"Ability Imprint", cost:"0", action:"Reaction", desc:"When a creature within 60 ft uses a named combat ability (Sneak Attack, Frightful Presence, etc.), attempt to imprint it (Persuasion DC = 10+target's prof bonus). Enemy source may go to a Mirror Slot. Mirror's Grace: imprinting a willing ally's ability grants them temp HP = 2×CHA mod and advantage on their next use, regardless of check result."},
  {lvl:7, name:"Mirrored Soul", cost:"0", action:"Reaction", desc:"Pain Sharing: while the Fractured is summoned and conscious, split damage you take equally with it (round up to you). Your second Mirror Slot opens (two permanent reflections at once)."},
  {lvl:9, name:"Prismatic Reflection", desc:"Overcharge: imprinting into an already-full slot type overcharges an existing entry, activating one tier higher for the same cost. Sure Reflection (1/short rest): one imprint attempt auto-succeeds."},
  {lvl:10, name:"Fractured: Greater Form", desc:"Grows Huge: +2 AC, +30 max HP, reach 10 ft. Mirror Collapse (1/turn): hit forces a STR save vs Mirror Save DC or restrained until end of its next turn. Shattering Burst improves to 4d6+4d6."},
  {lvl:11, name:"Splintered Echo", cost:"+1 Mirror Point", desc:"When you activate a stored slot, spend 1 additional Mirror Point to fire it from the Fractured's position instead of yours (it must be summoned and conscious)."},
  {lvl:13, name:"Deeper Imprint", cost:"2 Mirror Points to activate", action:"Reaction to imprint", desc:"Imprint damage immunities (Persuasion DC = 10+prof+4) or Legendary Traits (same DC) — Legendary Resistance stored lets you fail-then-succeed a save once per long rest; Regeneration stored heals CHA mod at the start of each of your turns until end of combat. Your third Mirror Slot opens."},
  {lvl:15, name:"Shattering Resolve", cost:"0", action:"Action", desc:"Voluntary Burst: trigger Shattering Burst intentionally, even at full HP — full power (5d6+5d6), then reforms at full HP at the start of your next turn, no Mirror Point cost, no psychic damage to you. Reflexive Charge also triggers when the Fractured is targeted."},
  {lvl:17, name:"Mirror Absolute", cost:"0", action:"Reaction · 1/short rest", desc:"When you or the Fractured are targeted by a spell or ability, attempt to absorb it (Persuasion DC = 10+spell level or 10+source's prof bonus). Success: fully negated and auto-imprinted into an open Reflection Slot (or displaces the oldest). Failure: resolves normally, still gain 1 Mirror Point."},
  {lvl:18, name:"Cascading Reflection", cost:"0", desc:"When you activate a stored slot and at least one creature fails its save or is hit, immediately attempt one free imprint (no reaction, no check) on any creature within 60 ft. Once per activation."},
  {lvl:20, name:"Fractured: True Form", desc:"Grows Gargantuan: +2 AC (total +4), +30 max HP (total +60), Shattering Burst becomes 6d6+6d6 at 30-ft radius, Full Reformation (returns at full HP), Legendary Resilience 1/day, fourth Mirror Slot opens."},
  {lvl:20, name:"Endless Reflection", desc:"Regain 3 Mirror Points at the start of each of your turns (up to max)."}
];

export const MIRRORWARDEN_PATHS = {
  fractal: {
    label: "Path of the Fractal", colTitle: "Path of the Fractal",
    title: "Fractal — Mirror Step",
    features: [
      {lvl:3, name:"Mirror Step", cost:"1 Mirror Point", action:"Bonus action", desc:"Teleport up to 30 ft to an unoccupied visible space. Leaves an afterimage at your origin: 1 HP, your AC, lasts until your next turn or until damaged; illusion-blind creatures target it first. On shatter: 1d4 piercing + 1d4 radiant to all within 5 ft, no save. May bring the Fractured with you."},
      {lvl:3, name:"Cascade Fragment", cost:"0, always on", desc:"When you activate a stored slot that deals damage and at least one creature is hit or fails its save, one shard ricochets to one additional target within 15 ft for CHA mod damage of the same type."},
      {lvl:6, name:"Fractal Assault", desc:"Shatter Dash: detonating your afterimage on arrival instead of leaving it standing hits all within 10 ft of your origin (DEX save vs Mirror Save DC, 2d6 piercing + 2d6 radiant, half on success). Twin Angle: when you and the Fractured both damage the same target the same turn, Cascade Fragment triggers twice at two separate targets."},
      {lvl:14, name:"Shatter Pattern", cost:"0", action:"Action · 1/short rest", desc:"Every Reflection and Mirror Slot activates simultaneously at different targets/areas. Free Mirror Step between each activation. Each auto-triggers Cascade Fragment. The Fractured makes one Mirror Strike per activation. Reflection Slots empty after; Mirror Slots fire but persist."}
    ],
    feats: [
      {name:"Phantom Trail", meta:"Feat · 6th", desc:"Mirror Step leaves up to 3 afterimages along your path (not just origin); each burst becomes 1d6 piercing + 1d6 radiant. Advantage on DEX saves while 2+ afterimages stand."},
      {name:"Cascading Glass", meta:"Feat · 4th, repeatable", desc:"Cascade Fragment ricochets to two additional targets instead of one, matching the activation's damage type. Repeat: range +10 ft and damage +CHA mod each time."},
      {name:"Glass Ghost", meta:"Feat · 10th", desc:"Illusion-blind enemies need a WIS save (Mirror Save DC) at the start of their turn or have disadvantage attacking you while an afterimage stands. Afterimage shattering grants 1 Mirror Point. Mirror Step usable as a reaction to dodge an attack (it hits your afterimage instead)."}
    ],
    items: []
  },
  bastion: {
    label: "Path of the Bastion", colTitle: "Path of the Bastion",
    title: "Bastion — Threat Lock",
    features: [
      {lvl:3, name:"Threat Lock", cost:"0", action:"Bonus action", desc:"Designate yourself or the Fractured as Threat Anchor. Anchor-you: enemies within 30 ft have disadvantage attacking anyone but you; reaction weapon attack when they attack someone else; +2 AC. Anchor-Fractured: same disadvantage effect centered on it, +2 AC and resistance to nonmagical B/P/S for it, and it may reaction-move 15 ft + Mirror Strike when an enemy attacks someone else."},
      {lvl:3, name:"Mirror Sheen", desc:"Above half HP: melee hits against you deal CHA mod radiant back, no action. Armor Mastery: proficiency in medium armor; add half proficiency bonus (round down) to AC while wearing medium armor or using Unarmored Defense."},
      {lvl:6, name:"Fracture Absorption", desc:"Below half HP, Absorption Mode replaces Mirror Sheen: once/turn reduce damage taken by 1d8+CHA mod; every 5 damage absorbed grants 1 Mirror Point. Hungry Mirror: imprint DC for damage resistances is reduced by 4 while in Absorption Mode."},
      {lvl:14, name:"Glass Fortress", cost:"0", action:"Action · 1/long rest, 1 minute", desc:"Resistance to all damage; Fractured immune to all damage. HP threshold suspended — Mirror Sheen always reflects 2×CHA mod on melee hits; Absorption Mode suspended. Reaction 1/round: redirect half of an ally's damage (within 30 ft) to yourself. Mark a tally each time you take damage during the Fortress. When it ends: 20-ft DEX save vs Mirror Save DC or 1d8 radiant per tally (half on success)."}
    ],
    feats: [
      {name:"Iron Reflection", meta:"Feat · 4th, repeatable", desc:"Mirror Sheen reflects CHA mod + prof bonus instead of CHA mod alone, and also triggers on ranged attacks. Repeat: +prof bonus again, threshold drops to quarter HP."},
      {name:"Immovable", meta:"Feat · 6th", desc:"Immune to forced movement while Threat Anchor; gain 1 Mirror Point when a forced-move attempt against you fails. The Fractured shares this while it is Anchor. Both advantage on saves vs prone."},
      {name:"Hungry Wall", meta:"Feat · 8th, repeatable", desc:"Fracture Absorption reduction becomes 1d10+CHA mod; Mirror Point threshold drops to every 3 damage. Entering Absorption Mode grants temp HP = 2×CHA mod. Repeat: reduction +1d6, threshold −1 more."}
    ],
    items: []
  },
  silverlight: {
    label: "Path of the Silver Light", colTitle: "Path of the Silver Light",
    title: "Silver Light — Luminous Aura",
    features: [
      {lvl:3, name:"Luminous Aura", desc:"15-ft radius around the summoned Fractured, passive: allies gain +1 AC, movement inside doesn't provoke opportunity attacks, and temp HP = CHA mod at the start of each ally's turn within it."},
      {lvl:3, name:"Resistance Weave", cost:"1 (or 2 for Split Weave)", desc:"Apply a stored resistance to an ally within 30 ft instead of yourself/the Fractured. Split Weave (2 Mirror Points): apply to two targets simultaneously (any mix of you, the Fractured, allies)."},
      {lvl:6, name:"Mirror's Intercession", cost:"1 Mirror Point (Intercept) / prof-bonus uses per short rest (Relocation)", action:"Reaction", desc:"Intercept: ally within 60 ft hit/failed save gets +3 AC or +3 to the save (declared after the roll). Reactive Relocation: teleport a damaged ally within 30 ft of the Fractured into the Luminous Aura, no OA. Silvered Grace: Mirror's Grace temp HP becomes 4×CHA mod, advantage on next two uses, +1 Mirror Point regardless of check."},
      {lvl:14, name:"Grand Illumination", cost:"0", action:"Action · 1/long rest, 1 minute", desc:"Aura expands to 30 ft; allies inside gain +2 AC (total +3) and resistance to one damage type you choose (must be held in a slot); aura temp HP becomes 3×CHA mod; once/round free action grants an ally an extra reaction; the Fractured can't drop below 1 HP. On end: Silver Farewell grants everyone in the aura temp HP = 4×CHA mod."}
    ],
    feats: [
      {name:"Silver Conduit", meta:"Feat · 4th, repeatable", desc:"Aura radius +5 ft; aura temp HP +prof bonus; allies entering for the first time on their turn get advantage on their first save. Repeat: radius +5 ft and temp HP +prof bonus again."},
      {name:"Radiant Weave", meta:"Feat · 6th", desc:"Resistance Weave can target three creatures for 2 Mirror Points. Once per long rest, apply two different stored resistances simultaneously. While Grand Illumination is active, all resistances in your slots share to every ally in the aura."},
      {name:"Mirror's Memory", meta:"Feat · 8th", desc:"Reactive Relocation gains an extra use per short rest and grants Mirror Points = CHA mod when used to give an ally a bonus action. Silvered Grace grants advantage on the next three uses and temp HP = 6×CHA mod."}
    ],
    items: []
  }
};

export const MIRRORWARDEN_GENERAL_FEATS = [
  {name:"Shardmind", meta:"Feat · 4th, repeatable", desc:"All imprint DCs −2 (min 5). Once/round, attempt an imprint as a free action in addition to your reaction. Gain 1 Mirror Point whenever an imprint fails. Repeat: DCs −2 more each time (floor 5)."},
  {name:"Deeper Mirror", meta:"Feat · 4th, 1+ Mirror Slot", desc:"Gain one additional Mirror Slot. Voluntarily overwriting a Mirror Slot grants Mirror Points = the entry's spell level or the target's prof bonus, and now costs a bonus action instead of an action."},
  {name:"Bond Surge", meta:"Feat · 4th, repeatable", desc:"Reflexive Charge also triggers when the Fractured is targeted. Fractured Feedback works on a miss too. Shattering psychic damage reduced by CHA mod (min 0). Repeat: each Hit Die spent on Shattering Surge generates +1 extra Mirror Point."},
  {name:"Mirror Form", meta:"Feat · 8th, Unarmored Defense", desc:"Unarmored Defense becomes 10+DEX+CHA+2. While unarmored, critical hits against you deal normal damage instead. Add CHA mod to initiative."}
];

export const MIRRORWARDEN_ITEMS = [
  {name:"Sliver of the First Mirror", meta:"Common · Wondrous focus", desc:"Imprint range 60→80 ft. 1/short rest: one imprint auto-succeeds, check skipped. Overflow: attempt an imprint with no open slot — held up to 1 minute, fills the next slot that opens."},
  {name:"Fracture Blade", meta:"Uncommon · Weapon (sword)", desc:"+1 attack/damage. On hit, your next imprint check vs that creature has DC −3 until your next turn. Mirror Step immediately before/after attacking with it deals +1d6 radiant. The Fractured's Mirror Strike uses this weapon's bonus while attuned."},
  {name:"Mirrorweave Wrap", meta:"Uncommon · Light armor", desc:"+1 AC; keep Unarmored Defense, use whichever is higher. 1/short rest, when damage would drop you below half HP, reduce it by 1d8+CHA mod as a reaction. Sheds dim light 5 ft while Absorption Mode is active."},
  {name:"Echo Chamber", meta:"Rare · Wondrous (hand mirror, focus)", desc:"+1 Reflection Slot while attuned. Activating a stored slot costs 1 fewer Mirror Point (min 0). Granting Mirror's Grace grants Mirror Points = half CHA mod (round up). 1/long rest: commit a fresh imprint directly to a Mirror Slot, no action."},
  {name:"The Shattered Crown", meta:"Rare · Wondrous (headwear)", desc:"All imprint checks use your Mirror Save DC instead of Persuasion. Imprint range extends to 120 ft. 1/long rest, suppress a Shattering Burst entirely — the Fractured silently reforms full HP with slots intact at the start of your next turn, and you gain Mirror Points = your prof bonus."},
  {name:"Heart of the Fractured", meta:"Very Rare · Wondrous", desc:"Fractured max HP +40, +2 to its attack/damage rolls. 1/long rest, it drops to 1 HP instead of 0 (no burst). It gains its own independent resistance slot (chosen at long rest) that persists even at 0 HP. Psychic damage from its shattering is reduced to 0 for you."},
  {name:"The Obsidian Pane", meta:"Legendary · Wondrous (mirror)", desc:"Obsidian Vault: Fractured gains a 4th, independent Mirror Slot (CR 13+ sources only; either of you can activate it). Twin Vault: once/turn, when you activate a stored slot the Fractured can activate a different one free. Obsidian Reflection (1/long rest): the Fractured becomes a 1-minute portal to any reflective surface within a mile you've seen. The Pane Remembers: reaction at 0 HP — swap places with the Fractured, it takes the rest of the damage (not combinable with Heart of the Fractured same rest)."}
];

export const CLASS_MIRRORWARDEN = {
  label: "Mirrorwarden", eyebrow: "Bonded to the Fractured", primaryAbil: "cha",
  resourceLabel: "Mirror Points",
  resourceMax: function(level){ return MIRROR_POINTS_MAX[Math.min(20,Math.max(1,level))-1]; },
  resourceRecoveryType: "rest",
  resourceRecoveryHint: "All Mirror Points recover on a short or long rest. Reflexive Charge and Fractured Feedback also generate points passively in combat.",
  resourceButtons: [
    {label:"Rest (refill)", tag:"refill-full"}
  ],
  subclassLabel: "Mirror Path",
  subclasses: MIRRORWARDEN_PATHS,
  generalFeatures: MIRRORWARDEN_GENERAL,
  generalFeats: MIRRORWARDEN_GENERAL_FEATS,
  sharedItems: MIRRORWARDEN_ITEMS,
  secondary: "mirrorwarden"
};

