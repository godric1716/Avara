import { profBonus } from "./helpers";

export const FABLEKEEPER_GENERAL = [
  {lvl:1, name:"Fablekeeper's Tome", desc:"Opening to a companion's page is part of any action, free. Switching (closing one page, opening another) is a bonus action. Indestructible by mundane means; 8 hours + 25gp ritual to replace if lost, bonds intact."},
  {lvl:1, name:"Witch's Bag", desc:"Daily uses = WIS mod + prof bonus (min 3), refresh on long rest. Ink Save DC = 8+WIS mod+prof. Brew: spend 1 Ink on any use to activate its Brewed effect."},
  {lvl:1, name:"Starter Companion", desc:"Begin with one Starter Line (all four stat blocks: Stage 1/2/3/Mega) fully written in your Tome."},
  {lvl:1, name:"Command", cost:"1 Ink (Enhanced) / 2 Ink (Signature)", action:"Action", desc:"Elevate your companion's turn: Enhanced Move (1 Ink) upgrades its Basic Action; Signature Move (2 Ink, 1/short rest per companion) triggers its named ability. Master Narrator (17th) makes Enhanced Moves free."},
  {lvl:1, name:"Tend", action:"Action", desc:"Reach into the Witch's Bag; apply a concoction to yourself, your active companion, or any creature within 30 ft. Uses one daily supply. Spend 1 Ink at the moment of use for the Brewed effect."},
  {lvl:1, name:"Inspire the Chapter", cost:"0 Ink", action:"Bonus action · 1/short rest", desc:"One creature within 60 ft gains a bonus = your WIS mod to one attack roll, check, or save before your next turn. Becomes WIS mod + prof bonus at 13th (Improved)."},
  {lvl:2, name:"Dramatic Ink", desc:"Gain 1 Ink automatically when: your active companion crits; it faints; an ally other than you drops to 0 HP; or an enemy is defeated by your companion."},
  {lvl:2, name:"Trained Eye", cost:"0", action:"Bonus action", desc:"Study one creature you can see; learn its damage immunities, resistances, or vulnerabilities (your choice of one category)."},
  {lvl:3, name:"Subclass", desc:"Choose Bonded Pair, Type Specialist, Item Master, Tactician, or Ace Trainer. Grants features at 3rd, 6th, 9th, 11th, 14th, 18th."},
  {lvl:3, name:"Second Companion", desc:"Bond with your first caught companion, expanding your bench."},
  {lvl:5, name:"First Evolution", desc:"All companions whose story has a second chapter evolve to Stage 2. Companions caught after this evolve in immediately at Stage 2."},
  {lvl:5, name:"Instinctive Command", desc:"When you switch companions with your Bonus Action, the incoming companion may immediately use its Basic Action as part of that same Bonus Action, at no extra cost."},
  {lvl:7, name:"Third Companion", desc:"Bond with your second caught companion."},
  {lvl:7, name:"Type Sense", cost:"1 Ink (pierce)", desc:"Always know a creature's immunities, resistances, and vulnerabilities without an action. When you summon/switch in a companion, spend 1 Ink to have its attacks ignore resistance to one damage type until it leaves the field."},
  {lvl:9, name:"Unbreakable Chapter", cost:"2 Ink", action:"Reaction · 1/short rest", desc:"When your active companion would be reduced to 0 HP, they drop to 1 HP instead."},
  {lvl:10, name:"Final Evolution", desc:"All companions whose story has a third chapter evolve to Stage 3. Two-stage lines remain at Stage 2 permanently."},
  {lvl:10, name:"Expanded Tome", desc:"Each companion's highest available evolution gains one additional trait or upgraded ability (see each stat block's [L10] entry)."},
  {lvl:11, name:"Resonant Chapter (Mega Evolution)", cost:"3 Ink", action:"Bonus action · 1/short rest, Starter only", desc:"Activate Mega Evolution for your Starter: replaces the Stage 3 stat block entirely, up to 1 minute, requires Concentration (until 15th). On end: returns to Stage 3, HP = HP at activation minus damage taken in Mega (min 1)."},
  {lvl:12, name:"Fourth Companion", desc:"Bond with your final caught companion. Full roster: one active slot, bench of three."},
  {lvl:13, name:"Rewrite the Scene", cost:"1 Ink", action:"Bonus action", desc:"Teleport up to 30 ft to an unoccupied space you can see. If you land adjacent to your active companion, they gain advantage on their next attack before your next turn."},
  {lvl:14, name:"Ink Surge", cost:"0", action:"Bonus action · 1/long rest", desc:"Regain Ink equal to your WIS mod + proficiency bonus."},
  {lvl:15, name:"Perfected Chapter", desc:"Mega Evolution no longer requires Concentration; you may maintain it freely while concentrating on other effects."},
  {lvl:17, name:"Master Narrator", desc:"Command's Enhanced Move cost is permanently reduced to 0. Ink is now reserved for Heighten, Brew, Type Sense pierce, Resonant Chapter, Rewrite the Scene, and Revive."},
  {lvl:20, name:"Legendary Chapter", cost:"0", action:"Action · 1/long rest", desc:"Open every page at once: for 1 minute, all three benched companions manifest alongside your active companion, each acting on your initiative with their Basic Action. When it ends, all manifested companions gain 1 level of exhaustion and can't be summoned until a short rest."}
];

export const FABLEKEEPER_SUBCLASSES = {
  bonded: {
    label: "Bonded Pair", colTitle: "Bonded Pair",
    title: "Bonded Pair — Fight Beside Them",
    features: [
      {lvl:3, name:"Bonded Pair", desc:"Proficiency with medium armor and martial weapons. While within 5 ft of your active Starter, its Basic Action is auto-Enhanced at no Ink cost. Bonus action: make one weapon attack. Reaction: reduce involuntary movement by up to 15 ft."},
      {lvl:6, name:"Interposed", desc:"When you'd take damage from an attack while your Starter is within 5 ft, it may use its reaction to step in front and take the full damage instead — no Ink, no command."},
      {lvl:9, name:"Deepened Chapter", desc:"Your Starter gains its Bond Ability (see its stat block). Reaction: when a creature within 5 ft hits or misses your active Starter, make one weapon attack against that creature."},
      {lvl:11, name:"Surge Together", desc:"Resonant Chapter costs 0 Ink while adjacent to your Starter. Bond Resonance: while Mega is active and you're within 10 ft, both have advantage on all saves and your Starter deals +1d8 of its primary type on all attacks."},
      {lvl:14, name:"Synchronized", cost:"0", action:"Action · 1/short rest", desc:"Move up to speed and make two weapon attacks; simultaneously your Starter moves up to speed and uses its Signature Move at no Ink cost. One action, two bodies."},
      {lvl:18, name:"Unwritten Ending", desc:"When you drop to 0 HP while your Starter is active, it transfers half its max HP to you (its own HP drops by the same). While either of you is below half max HP, both your and your Starter's attacks deal an extra 1d10 of its primary type."}
    ],
    feats: [
      {name:"Double Strike", meta:"Feat · Bond, 8th", desc:"Your Bonus Action weapon attack (Bonded Pair) becomes two attacks if your Starter made at least two attacks this turn. Synchronized becomes three weapon attacks instead of two, and the Starter's Signature Move during it deals max damage on all dice — even outside Mega."},
      {name:"Shared Resilience", meta:"Feat · Bond, 8th", desc:"Interposed reduces the redirected damage by your prof bonus before your Starter takes it. Within 5 ft of your Starter: resistance to the first damage instance each round. Unbreakable Chapter doesn't expend its use if your Starter was within 5 ft when it triggered."},
      {name:"One Chapter", meta:"Feat · Bond, 12th", desc:"Your Starter gains your prof bonus to all saves. Within 5 ft and both act the same round: your Starter gets one free extra Basic Action, no Ink. Unwritten Ending transfers 100% of your Starter's current HP instead of half max (Starter drops to 1 HP)."}
    ],
    items: []
  },
  typespecialist: {
    label: "Type Specialist", colTitle: "Type Specialist",
    title: "Type Specialist — One Element",
    features: [
      {lvl:3, name:"Specialist's Oath", desc:"Choose one damage type (permanent). Companions sharing it automatically pierce resistance to it (free, always) and deal bonus damage of that type equal to your prof bonus on all attacks."},
      {lvl:6, name:"Devoted Roster", desc:"Count same-type companions in your full roster: 1 = +1 Ink DC; 2 = +2 DC, +1d4 typed bonus damage; 3 = +3 DC, +1d6; 4 = +4 DC, +1d8, and you gain resistance to your chosen type."},
      {lvl:9, name:"Elemental Authority", desc:"Creatures immune to your chosen type instead treat it as resistance vs your companions. Your type gains a Mastery Effect (fires on hit, once/turn/creature) — e.g. Fire: ignites for 1d6 next turn; Cold: speed −15 ft; Poison: Con DC or Poisoned; see full table with your DM for other types."},
      {lvl:11, name:"Elemental Resonance", desc:"While Mega is active, allies within 30 ft deal bonus damage = your WIS mod of your chosen type whenever they deal any damage. If your Starter shares the type, its Mastery Effect applies to every Mega attack automatically, no save."},
      {lvl:14, name:"Elemental Weak Point", cost:"0", action:"Reaction · 1/short rest", desc:"When your active companion hits, strip the target's immunity/resistance to your chosen type until your next turn and give it vulnerability instead — no save."},
      {lvl:18, name:"Type Incarnate", desc:"Immunity to your chosen damage type. 1/long rest, Action: 1 minute, every hostile creature within 60 ft takes WIS mod of your type each turn (no save); your companions' typed attacks deal max damage on all dice and can't be absorbed, redirected, or blocked."}
    ],
    feats: [
      {name:"Absolute Element", meta:"Feat · Type Specialist, 10th", desc:"Your Mastery Effect triggers twice per creature per turn (the second must apply a different effect if possible). Elemental Weak Point's vulnerability lasts until the start of the creature's own next turn instead of yours."},
      {name:"Spectrum", meta:"Feat · Type Specialist, 8th", desc:"Choose a secondary damage type. Companions sharing it also get Specialist's Oath (resistance pierce + prof bonus damage, typed as your primary). Devoted Roster counts companions of either type toward the same tier; your Mastery Effect fires for either type."},
      {name:"Living Element", meta:"Feat · Type Specialist, 12th", desc:"Your Mastery Effect no longer needs a save — it applies automatically on every companion hit. Gain the Type Incarnate immunity immediately instead of waiting for 18th. 1/short rest: your active companion's attacks all deal your chosen type until your next turn, regardless of actual type."}
    ],
    items: []
  },
  itemmaster: {
    label: "Item Master", colTitle: "Item Master",
    title: "Item Master — The Bag Is the Turn",
    features: [
      {lvl:3, name:"Masterwork Bag", desc:"Tend is a bonus action instead of an action. Daily Witch's Bag uses increase by your prof bonus."},
      {lvl:6, name:"Alchemist's Intuition", desc:"Brew Enhancement costs 0 Ink — every concoction is automatically Brewed. Timed (until-next-turn) concoctions last 1 minute instead. Healing concoctions also grant temp HP = WIS mod to allies within 10 ft of the target."},
      {lvl:9, name:"Exclusive Formulary", desc:"Unlock four Tier 4 concoctions (see Concoctions reference): Wraithveil Smoke, Soulthread Tonic, Voidthorn Extract, Stormweave Balm. Uses/long rest = WIS mod (refreshes to short rest at 14th)."},
      {lvl:11, name:"Applied Mastery", desc:"While Mega is active, concoctions you apply hit all valid targets within 15 ft of your Starter. Reaction: spend a daily use to apply any Tier 1 concoction to a creature within 30 ft when it takes damage, no action required."},
      {lvl:14, name:"Potent Mixture", desc:"Tend can combine two concoctions into one application (one bonus action, one daily use each). 1/short rest, applying a Tier 4 concoction lets you apply a second at no extra Tier 4 cost. Tier 4 uses now refresh on a short rest."},
      {lvl:18, name:"Masterwork Finale", cost:"3 daily uses", action:"Action · 1/long rest", desc:"Apply any three concoctions simultaneously to any targets within 30 ft, each auto-Brewed; targets below half HP also gain temp HP = WIS mod × prof bonus. Witch's Bag now refreshes on a short rest."}
    ],
    feats: [
      {name:"Volatile Mixture", meta:"Feat · Item Master, 8th", desc:"1/short rest, throw a concoction as an attack (WIS mod as attack modifier) at an enemy within 30 ft; full Brewed effect applies on hit. Thrown Voidthorn Extract hits everyone within 10 ft of the target. Brewed Stormcap Powder or Dreamcatcher Smoke also applies to your companion's next hit this turn."},
      {name:"Lifegiver", meta:"Feat · Item Master, 8th", desc:"Healing to full HP: excess becomes temp HP up to 2×WIS mod. 1/short rest reaction: when a creature within 30 ft drops to 0 HP, apply Soulthread Tonic even if your reaction is already spent. Healing Pulse usable twice per short rest."},
      {name:"Deep Pockets", meta:"Feat · Item Master, 8th", desc:"Daily Witch's Bag uses +WIS mod again. At the end of your turn, queue one concoction to apply free at the start of your next turn (hold one queued item). Gain one additional custom Tier 4 concoction designed with your DM."}
    ],
    items: []
  },
  tactician: {
    label: "Tactician", colTitle: "Tactician",
    title: "Tactician — Architect the Fight",
    features: [
      {lvl:3, name:"Tactical Read", desc:"Cannot be surprised; always know every creature's initiative count. Whenever your companion hits a creature, one ally within 60 ft who can see/hear you gets advantage on their next attack vs it before your next turn (free, every hit)."},
      {lvl:6, name:"Battle Conditions", desc:"When your companion hits or misses, apply Fractured (crits on 18–20 vs it until your next turn) or Exploited (disadvantage on its next save/check). Switching companions lets all allies within 30 ft move 30 ft free (no OA) and make one weapon attack."},
      {lvl:9, name:"Strategic Mark", cost:"0", action:"Bonus action", desc:"Mark a creature for 1 minute or until 0 HP: your companion has advantage vs it; allies hitting it deal bonus damage = your prof bonus; once/round add or subtract WIS mod from its attack roll. On its death: regain 2 Ink, may re-Mark free."},
      {lvl:11, name:"Command Aura", desc:"While Mega is active, allies within 30 ft get: +WIS mod to their first attack each round; +1d8 damage hitting a target your companion also hit this round; Disengage as a bonus action. Any ally crit while this is active grants one additional attack."},
      {lvl:14, name:"Counter-Play", cost:"0", action:"Reaction · WIS mod uses/short rest", desc:"Impose disadvantage on any roll within 60 ft. If it fails because of you, one ally within 60 ft may move and attack free (no reaction cost to them)."},
      {lvl:18, name:"Grand Strategy", cost:"0", action:"Bonus action · 1/long rest, 1 minute", desc:"All allies within 60 ft add your WIS mod to all attacks, checks, and saves. You regain 1 Ink whenever any ally drops a creature to 0 HP. Counter-Play becomes a bonus action, unlimited uses, for the duration."}
    ],
    feats: [
      {name:"Studied Pressure", meta:"Feat · Tactician, 8th", desc:"Battle Conditions applies two different conditions on every companion hit or miss. Applying Fractured also expands your own crit range while that creature remains Fractured. You may have two Strategic Marks active on different creatures at once, each fully independent."},
      {name:"Theater Commander", meta:"Feat · Tactician, 8th", desc:"Strategic Mark's prof-bonus damage applies twice to your active companion's attacks. Command Aura's Press the Advantage becomes +2d8 instead of +1d8. Grand Strategy's bonus becomes WIS mod + prof bonus instead of just WIS mod."},
      {name:"One Step Ahead", meta:"Feat · Tactician, 8th", desc:"Counter-Play imposes disadvantage AND subtracts your WIS mod from the result. A fail caused by Counter-Play refunds 1 Ink. Each combat, designate an Anticipated Threat — before its first turn each round, the DM tells you one action it has declared."}
    ],
    items: []
  },
  acetrainer: {
    label: "Ace Trainer", colTitle: "Ace Trainer",
    title: "Ace Trainer — Rotation Momentum",
    features: [
      {lvl:3, name:"Perfect Rotation", desc:"Switching no longer costs your bonus action once per turn. Every switch adds 1 Rotation Momentum stack (max = WIS mod, min 3), applying immediately to the incoming companion. Stacks: 1+ bonus damage = prof bonus; 2+ crit on 19–20; 3+ Signature costs 1 Ink; max = next Signature free. Stacks reset at end of combat."},
      {lvl:6, name:"Tag Team", desc:"Every switch: the outgoing companion makes one free Basic Action attack (Parting Shot) and the incoming one does too on arrival (Entrance Strike) — automatic, no Ink, replaces Instinctive Command's bonus."},
      {lvl:9, name:"Seamless Rotation", desc:"All Signature Moves cost 1 Ink instead of 2 (0 at max stacks). Stack Inheritance: an incoming companion immediately operates at the current Momentum tier."},
      {lvl:11, name:"Resonant Rotation", desc:"Activating Resonant Chapter doesn't replace your active companion — your Mega Starter appears alongside it; both act on your initiative and use Basic Actions freely (Command only one per turn). Momentum max +2 while the double battle is active."},
      {lvl:14, name:"Counter-Switch", cost:"0", action:"Reaction", desc:"Before an attack roll against your active companion, switch companions — the roll then targets the incoming companion with disadvantage. Adds 1 Momentum stack and triggers Tag Team normally."},
      {lvl:18, name:"Full Rotation", cost:"0", action:"Action · 1/long rest", desc:"Each benched companion appears in sequence (your order), uses its Signature Move free at current Momentum, then returns to the bench. On completion, Momentum resets to its maximum (WIS mod stacks)."}
    ],
    feats: [
      {name:"Rotational Mastery", meta:"Feat · Ace Trainer, 8th", desc:"Switch companions twice per turn as free actions instead of once. Tag Team's Parting Shot and Entrance Strike each trigger up to twice per turn. At max Momentum, your active companion gets advantage on all attacks until your next turn."},
      {name:"Perfect Matchup", meta:"Feat · Ace Trainer, 8th", desc:"If the incoming companion's damage type isn't resisted by the primary target, Entrance Strike deals max damage on all dice. Momentum persists on benched companions — re-entering inherits the current count instead of adding a new stack. Signature cost at 3+ stacks drops to 0 Ink."},
      {name:"All In", meta:"Feat · Ace Trainer, 8th", desc:"Start of turn: choose a benched companion; your active companion borrows one of its passive traits until your next turn (must not require physical presence). Momentum can't drop below 1 while 2+ companions are alive (always at least +prof bonus damage). Full Rotation also fires each companion's Enhanced Move alongside its Signature."}
    ],
    items: []
  }
};

export const FABLEKEEPER_CONCOCTIONS = [
  {name:"Moonwater Flask", meta:"Tier 1 · Healing", desc:"One creature within 30 ft regains 2d8 + WIS mod HP. Brewed: heals 4d8 + WIS mod instead."},
  {name:"Brightberry Pulp", meta:"Tier 1 · Companion Healing", desc:"Your active companion regains 3d6 + WIS mod HP (any HP above 0). Brewed: also clears one condition."},
  {name:"Foxfire Oil", meta:"Tier 1 · Attack Buff", desc:"One creature gains advantage on its next attack before your next turn. Brewed: advantage on all attacks until your next turn."},
  {name:"Thornbreaker Salve", meta:"Tier 1 · Condition Removal", desc:"Remove one of: Blinded, Deafened, Paralyzed, Poisoned. Brewed: remove up to two."},
  {name:"Stormcap Powder", meta:"Tier 1 · Damage Boost", desc:"Until your next turn, your companion's attacks deal +1d6 of its primary damage type. Brewed: +2d6 instead."},
  {name:"Starfall Draught", meta:"Tier 2 · Greater Healing (Level 5+)", desc:"One creature within 30 ft regains 4d8 + WIS mod HP. Brewed: also grants temp HP = 2×WIS mod."},
  {name:"Goldleaf Tincture", meta:"Tier 2 · Damage Resistance (Level 5+)", desc:"One creature gains resistance to a chosen damage type until your next turn. Brewed: lasts 1 minute."},
  {name:"Spellbane Dust", meta:"Tier 2 · Anti-Magic (Level 5+)", desc:"One creature has advantage on its next save vs a spell/magical effect. Brewed: advantage on all such saves until your next turn."},
  {name:"Mirrorleaf Extract", meta:"Tier 2 · Concentration Aid (Level 5+)", desc:"One creature has advantage on Concentration saves until your next turn. Brewed: lasts 1 minute."},
  {name:"Dreamcatcher Smoke", meta:"Tier 3 · Control (Level 9+)", desc:"One creature within 30 ft: WIS save (Ink DC) or Incapacitated until end of its next turn. Brewed: also Frightened of you for 1 minute on a fail."},
  {name:"Shadowmoss Paste", meta:"Tier 3 · Stealth (Level 9+)", desc:"One creature becomes invisible until your next turn or until it attacks. Brewed: invisibility persists regardless of attacks."},
  {name:"Ironbark Sap", meta:"Tier 3 · Defense (Level 9+)", desc:"One creature gains +2 AC until your next turn. Brewed: also resistance to the next instance of damage it takes."},
  {name:"Wraithveil Smoke", meta:"Tier 4 · Item Master only (Level 9+)", desc:"One creature within 30 ft gains Blur (attacks vs it have disadvantage) for 1 minute, no concentration."},
  {name:"Soulthread Tonic", meta:"Tier 4 · Item Master only (Level 9+)", desc:"One creature at 0 HP within 30 ft regains 6d8 + WIS mod HP and stands immediately."},
  {name:"Voidthorn Extract", meta:"Tier 4 · Item Master only (Level 9+)", desc:"One creature within 30 ft: Con save (Ink DC) or Poisoned + Blinded until end of its next turn."},
  {name:"Stormweave Balm", meta:"Tier 4 · Item Master only (Level 9+)", desc:"One creature within 30 ft gains immunity to a chosen damage type for 1 minute."}
];

export const FABLEKEEPER_GENERAL_FEATS = [
  {name:"Practiced Penmanship", meta:"Feat · 4th", desc:"Ink maximum +2. Choose one Basic Action from any companion in your roster — that action costs 0 Ink when Enhanced, permanently. Change your chosen action on a long rest."},
  {name:"Iron Page", meta:"Feat · 4th", desc:"Revive restores two-thirds HP instead of half. If a companion would faint as your last conscious companion, it drops to 1 HP instead (1/long rest, no Dramatic Ink). Unbreakable Chapter triggers once per short rest per companion instead of once per short rest total."},
  {name:"Advanced Chapters", meta:"Feat · 4th", desc:"One companion evolves one stage early (Stage 2 at 3rd, Stage 3 at 7th). That companion's Expanded Tome trait activates at 7th instead of 10th. Its Signature Move usable twice per short rest."},
  {name:"Field Commander", meta:"Feat · 4th", desc:"Proficiency with medium armor (heavy instead, at −5 ft speed, if you already have medium via Bond). Reaction on a companion crit: one weapon attack or one Tier 1 concoction. The Help action grants advantage on the next two attack rolls instead of one."}
];

export const FABLEKEEPER_ITEMS = [
  {name:"Rocky Helmet", meta:"Uncommon · Companion held item", desc:"When a creature hits this companion with a melee attack, that creature takes 1d8 piercing damage — no action, no save."},
  {name:"Leftovers", meta:"Uncommon · Companion held item", desc:"At the start of each of your turns, this companion regains 1d6 HP passively. Stacks with Snorlax's Rest. Never turns off."},
  {name:"Focus Sash", meta:"Rare · Companion held item", desc:"1/long rest: when this companion would drop to 0 HP from a single hit, it drops to 1 HP instead. Doesn't faint, no Dramatic Ink. No benefit again until the next long rest."},
  {name:"Eviolite", meta:"Rare · Companion held item", desc:"Unevolved companions only (Stage 1 or 2 of a three-stage line). +3 AC and +20 max HP. Falls off when the wearer hits its evolution threshold and must move to a different unevolved companion."},
  {name:"Choice Band", meta:"Rare · Companion held item", desc:"Designate one Basic Action as this companion's Choice Action when equipping — it deals +2d8 of its primary type. Only that action is usable while worn, until switched out and back in (which resets the choice)."},
  {name:"Life Orb", meta:"Very Rare · Companion held item", desc:"This companion's attacks deal +2d6 of their primary type. After any turn it dealt damage (action or Signature), it takes 5 HP unpreventable damage."},
  {name:"Expert Belt", meta:"Rare · Companion held item", desc:"On a critical hit, apply one automatic condition matching the damage type, no save: Fire—Frightened; Cold—speed halved; Lightning—loses Reaction; Necrotic—disadv. next attack; Psychic—disadv. next save; Slashing—disadv. next Str check; Bludgeoning—Prone (Large or smaller); Poison—Poisoned; Radiant—can't benefit from invisibility; Force—pushed 15 ft. Lasts until end of the target's next turn."},
  {name:"Assault Vest", meta:"Rare · Companion held item", desc:"Advantage on all saves vs spells and magical effects. Cannot use any non-damaging Basic Actions (healing/buffing/utility suppressed) while worn."},
  {name:"Scholar's Monocle", meta:"Uncommon · Fablekeeper item", desc:"Trained Eye becomes a free action and reveals all three defensive properties (immunities, resistances, vulnerabilities) at once."},
  {name:"Ink Crystal", meta:"Uncommon · Fablekeeper item (consumable)", desc:"Bonus action, crush: immediately regain 3 Ink. One use."},
  {name:"Everfull Satchel", meta:"Uncommon · Fablekeeper item", desc:"Replaces the Witch's Bag. Daily Witch's Bag uses +4."},
  {name:"Commander's Flag", meta:"Rare · Fablekeeper item", desc:"Inspire the Chapter may target two creatures simultaneously; both receive the full bonus."},
  {name:"Ancient Binding", meta:"Very Rare · Fablekeeper item", desc:"Permanent Tome clasp. Choose one Signature Move at dawn each day — it also refreshes after a short rest (two uses per short rest total). One chosen companion may hold two Held Items at once instead of one."},
  {name:"Evolution Stone Pendant", meta:"Rare · Fablekeeper item (consumable)", desc:"Once: one companion in your Tome immediately evolves to its next stage, bypassing the level threshold. Crumbles after use."},
  {name:"Master Ball", meta:"Legendary · Requires Attunement", desc:"One night of meditation with your Tome inscribes one Legendary companion's story into a new section — choose Rayquaza, Mewtwo, Lugia, or Groudon. Doesn't count toward the four-companion roster limit; it occupies a permanent fifth slot and counts as a Starter for all mechanical purposes (Bond features, Resonant Chapter, Expanded Tome, Bond Ability). Only one Mega/Primal active at a time."}
];

export const CLASS_FABLEKEEPER = {
  label: "Fablekeeper", eyebrow: "Every Creature Has a Story", primaryAbil: "wis",
  resourceLabel: "Ink",
  resourceMax: function(level, ab){ return Math.ceil(level/2) + ab.wis + profBonus(level); },
  resourceRecoveryType: "rest",
  resourceRecoveryHint: "Ink recovers fully on a short rest. Dramatic Ink also refunds 1 on a companion crit, a companion fainting, an ally dropping to 0 HP, or your companion defeating an enemy.",
  resourceButtons: [
    {label:"Short Rest (refill)", tag:"refill-full"}
  ],
  subclassLabel: "Subclass",
  subclasses: FABLEKEEPER_SUBCLASSES,
  generalFeatures: FABLEKEEPER_GENERAL,
  generalFeats: FABLEKEEPER_GENERAL_FEATS,
  sharedItems: FABLEKEEPER_ITEMS,
  secondary: "fablekeeper"
};

