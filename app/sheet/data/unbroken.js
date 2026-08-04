/* Bloodlust has no stated ceiling — it accumulates from damage dealt and
   taken and is spent to reduce incoming damage. The sheet flags it as
   uncapped rather than inventing a maximum the document doesn't give. */

export const UNBROKEN_GENERAL = [
  {lvl:1, name:"Beast Traits", desc:"Darkvision 60 ft. Advantage on Perception and Survival checks that rely on smell or hearing."},
  {lvl:1, name:"Waking Form", desc:"Your baseline. Not weak — just not yet what you become. Damage taken here still matters once Simmering Blood comes online."},
  {lvl:1, name:"Bloodlust", desc:"Your resource. While transformed, dealing or taking damage generates Bloodlust equal to the full amount either way — no discount for pain, no bonus for violence. Spend it to reduce incoming damage 1-for-1, no action required, declared the instant the damage would land."},
  {lvl:1, name:"The Threshold", desc:"The instant you drop to half your maximum HP or below you transform into Beast-Form — automatically, free, no action, no choice. Any Bloodlust banked in Waking Form is already there."},
  {lvl:1, name:"Beast-Form", desc:"Lasts up to 10 minutes, ending only by your choice or by being knocked unconscious — you don't flicker in and out between fights in the same encounter. Nothing in this class ever heals you directly; the pack keeps you standing, your own hands don't."},
  {lvl:2, name:"Beast's Instinct", desc:"Choose your first Instinct. You pick again at 7, 9, and 17, and may swap a known Instinct whenever you take an ASI."},
  {lvl:2, name:"Simmering Blood", desc:"In Waking Form, taking damage banks Bloodlust equal to the full amount. You may spend it to reduce damage while still in Waking Form at 2 Bloodlust per 1 point — worse than the 1-for-1 you get transformed, which is what makes holding for the Threshold a real bet."},
  {lvl:2, name:"Bared Fangs", action:"Reaction · Waking Form · prof bonus/long rest", desc:"When an ally within 10 ft is about to be hit, interpose a warning snarl — the attack is made with disadvantage. Reactive and single-target, a permanently different job from Howl of Provocation's proactive taunt."},
  {lvl:3, name:"Tank Pack", desc:"Choose Ironback, Bloodfang, Warden's Circle, or Vaela's Line. Grants features at 3, 8, 11, 15, and 18, and unlocks that Pack's exclusive Instincts."},
  {lvl:3, name:"Widened Frame", desc:"The first time you transform in an encounter, roll d4s equal to your class level and add your CON modifier. Your HP maximum increases by that total and you immediately regain that many HP, lasting until Beast-Form ends. Stacks with any Pack feature that raises your maximum further."},
  {lvl:3, name:"Fed by the Pack", desc:"While in Beast-Form, any healing you receive from an ally, object, or effect restores the maximum possible amount instead of being rolled. Still never a source of self-healing — it only fires off someone else's action."},
  {lvl:5, name:"Extra Attack", desc:"Attack twice when you take the Attack action."},
  {lvl:6, name:"Howl of Provocation", cost:"3 Bloodlust", action:"Bonus action", desc:"Every enemy within 15 ft that can hear you saves against your Challenge DC or, on its next turn, must use its movement to approach you by the safest path and make a melee attack against you if able."},
  {lvl:10, name:"Provoke the Change", action:"Bonus action · 1/short rest", desc:"Spend health to drop to exactly half your maximum, triggering the Threshold on your own terms. Because you chose it, gain Bloodlust equal to double the HP spent, and your weapon attacks deal an extra 1d8 for the rest of this Beast-Form. No effect if you're already at or below half."},
  {lvl:13, name:"Greater Howl", desc:"Howl of Provocation's forced attack now also has disadvantage, and any creature that fails the save is weakened until the start of your next turn — its melee weapon attacks deal half damage."},
  {lvl:14, name:"Hardened Hide", desc:"When you spend Bloodlust to reduce incoming damage, each point now reduces it by 2 instead of 1."},
  {lvl:20, name:"The Unbroken Pack", action:"1/long rest", desc:"When an ally within 30 ft would be reduced to 0 HP, redirect that damage to yourself instead, reducing it with Bloodlust as normal including Hardened Hide's exchange. You never heal — but you can always be the one who bleeds instead of them."},
];

/* Picked at 2, 7, 9 and 17, and swappable on any ASI. Modelled like feats
   because that's how they behave: chosen once, then always on. */
export const UNBROKEN_INSTINCTS = [
  {name:"Thick Hide", meta:"Instinct", desc:"+2 AC while in Beast-Form. Strong enough that a shield stops being worth the slot."},
  {name:"Iron Constitution", meta:"Instinct", desc:"Your HP maximum increases by 1 × your class level while transformed."},
  {name:"Adaptive Hide", meta:"Instinct", desc:"Each time you enter Beast-Form, choose one damage type: resistance to it until you next transform."},
  {name:"Guarding Growl", meta:"Instinct", desc:"Howl of Provocation also grants you and allies in its radius +2 AC until the start of your next turn."},
  {name:"Warding Howl", meta:"Instinct", desc:"Creatures that fail their save against Howl of Provocation also have disadvantage on their next saving throw before the end of your next turn."},
  {name:"Packmind", meta:"Instinct · 1 Bloodlust", desc:"Spend 1 Bloodlust: an ally within 10 ft rerolls a failed saving throw."},
  {name:"Packbound Strength", meta:"Instinct", desc:"While at least one ally is within 10 ft, both you and that ally have advantage on Strength checks and Strength saving throws."},
  {name:"Thicker Blood", meta:"Instinct", desc:"Bloodlust generated from damage you take increases by 50% (round up)."},
  {name:"Second Skin", meta:"Instinct · 1/short rest", desc:"When you're about to take damage in Beast-Form, gain temporary HP equal to your class level before the damage lands. A one-time buffer, not a restoration."},
  {name:"Unshakable", meta:"Instinct", desc:"Advantage on saves against being frightened or charmed while in Beast-Form."},
  {name:"Steady Bond", meta:"Instinct", desc:"Gain Bloodlust equal to any healing an ally gives you. You still can't heal yourself — this just means the pack keeping you up fuels your ability to keep protecting them."},
  {name:"Relentless", meta:"Instinct · 1/long rest", desc:"Damage that would drop you to 0 HP instead drops you to 1."},
];

export const UNBROKEN_GENERAL_FEATS = [
  {name:"Deep Reserves", meta:"Feat", desc:"Bloodlust generated from damage dealt or taken while in Beast-Form increases by 50% (round up)."},
  {name:"Efficient Fury", meta:"Half-feat (+1 CON)", desc:"Once per short rest, any single Bloodlust-cost ability costs nothing."},
  {name:"Longer Fangs", meta:"Half-feat (+1 STR or CON)", desc:"Beast-Form's duration extends to 1 hour instead of 10 minutes."},
];

export const UNBROKEN_ITEMS = [
  {name:"The First Wound", meta:"Artifact · Attunement", desc:"A relic older than any single Pack, favouring none of them. Levels 1–4: +1 to attack and damage; the Threshold grants an extra 1d6 Bloodlust. 5–10: +2, and Beast-Form's duration extends by another 10 minutes. 11–16: +3, and once per long rest as a bonus action Hardened Hide's exchange becomes 3-for-1 for 1 minute. 17–20: once per long rest, bonus action to gain Bloodlust equal to your HP maximum — triggering the Threshold if you aren't already transformed."},
];

export const UNBROKEN_PACKS = {
  ironback: {
    label: "Ironback", colTitle: "The Ironback Pack",
    title: "The wall that doesn't move, and doesn't explain why",
    features: [
      {lvl:3, name:"Ironback Transformation", desc:"Your HP maximum increases by 2 × your class level while transformed, and you have advantage on Strength and Constitution saving throws."},
      {lvl:3, name:"Stone Wall", desc:"When you'd take damage in Beast-Form, after any Bloodlust you chose to spend, if the remaining damage would still exceed 25% of your max HP you may automatically spend additional Bloodlust to bring it down to that threshold. If you can't fully close the gap it reduces as far as your remaining Bloodlust allows."},
      {lvl:3, name:"Unyielding", desc:"When you spend Bloodlust to reduce a hit all the way to 0, generate Bloodlust equal to half the damage reduced (round down)."},
      {lvl:8, name:"Grounded", desc:"While in Beast-Form you can't be knocked prone or moved against your will by any effect, and difficult terrain never costs you extra movement."},
      {lvl:11, name:"Absorbing Frame", desc:"Stone Wall's cap tightens to 20% of your max HP. Whenever the cap actually triggers, gain Bloodlust equal to the amount it cut off."},
      {lvl:15, name:"Shared Foundation", desc:"Stone Wall's cap now also protects any ally within 10 ft, measured against their own maximum and paid from your Bloodlust. A blow meant to break one of you breaks against all of you instead."},
      {lvl:18, name:"The Unbreakable", action:"Bonus action · 1/long rest", desc:"For 1 minute, Stone Wall's cap drops to 15% of max HP and applies automatically at no Bloodlust cost. You stop being someone they need to protect at all."},
    ],
    feats: [
      {name:"Deeper Roots", meta:"Feat · Ironback", desc:"Absorbing Frame's Bloodlust refund doubles."},
      {name:"Steadfast", meta:"Half-feat (+1 CON) · Ironback", desc:"Grounded's immunity to forced movement and prone extends to allies within 5 ft."},
      {name:"Foundation's Reach", meta:"Half-feat (+1 CON) · Ironback", desc:"Shared Foundation's radius extends from 10 ft to 20 ft."},
      {name:"Endless Bedrock", meta:"Feat · Ironback", desc:"Unyielding's refund becomes the full amount reduced instead of half."},
    ],
    instincts: [
      {name:"Bedrock Stance", meta:"Instinct · Ironback", desc:"Stone Wall's cap still applies even at 0 Bloodlust."},
    ],
    items: [
      {name:"Girdle of the Steadfast", meta:"Rare · Attunement (Ironback)", desc:"Grounded's immunity to forced movement explicitly overrides spell effects that normally bypass it — Thunderwave, Repelling Blast, and similar."},
      {name:"Bracers of the Bedrock", meta:"Very Rare · Attunement (Ironback)", desc:"Stone Wall's cap applies immediately, before you've chosen to spend any Bloodlust voluntarily."},
      {name:"The Ironback Mantle", meta:"Legendary · Ironback only", desc:"The Unbreakable is usable twice per long rest, and its cap drops to 10% while active."},
    ]
  },
  bloodfang: {
    label: "Bloodfang", colTitle: "The Bloodfang Pack",
    title: "Every hit that lands on you is a mistake the attacker keeps paying for",
    features: [
      {lvl:3, name:"Bloodfang Transformation", desc:"Your claws count as magical weapons for overcoming resistance and deal an extra 1d6 damage on a hit."},
      {lvl:3, name:"Blood for Blood", desc:"Whenever you spend Bloodlust to reduce a hit, the attacker takes necrotic damage equal to half the Bloodlust spent (round down)."},
      {lvl:3, name:"Marked by Pain", desc:"A creature damaged by Blood for Blood has disadvantage on its next saving throw against Howl of Provocation before the end of its next turn."},
      {lvl:8, name:"Festering Wound", desc:"Blood for Blood's damage becomes a lingering wound: the creature takes the same amount again at the start of its next turn, unless it receives healing first."},
      {lvl:11, name:"Shared Retribution", desc:"Blood for Blood also triggers when an ally within 10 ft takes damage from a melee attack — you spend your own Bloodlust to punish an attacker who never touched you."},
      {lvl:15, name:"Feared Reputation", desc:"Any creature that has taken damage from Blood for Blood this encounter has disadvantage on attack rolls against you specifically, for the rest of the encounter."},
      {lvl:18, name:"The Reckoning", action:"Bonus action · 1/long rest", desc:"For 1 minute, Blood for Blood's damage doubles and Festering Wound's lingering damage can no longer be prevented by healing — only time ends it."},
    ],
    feats: [
      {name:"Longer Claws", meta:"Feat · Bloodfang", desc:"Blood for Blood's necrotic damage increases from half the Bloodlust spent to the full amount."},
      {name:"Infectious Bite", meta:"Half-feat (+1 STR or CON) · Bloodfang", desc:"Festering Wound's lingering damage also applies from your claw attacks' bonus damage, for the same amount — but still only on a turn where Blood for Blood has already triggered."},
      {name:"Spreading Grudge", meta:"Feat · Bloodfang", desc:"Marked by Pain also applies to any other enemy within 5 ft of the creature you damaged via Blood for Blood."},
      {name:"Undying Grudge", meta:"Half-feat (+1 STR or CON) · Bloodfang", desc:"Feared Reputation's disadvantage lasts until the creature dies, instead of until the encounter ends."},
    ],
    instincts: [
      {name:"Vicious Cycle", meta:"Instinct · Bloodfang", desc:"Whenever Blood for Blood deals damage, gain Bloodlust equal to half that damage."},
    ],
    items: [
      {name:"Claws of the First Wound", meta:"Rare · Attunement (Bloodfang)", desc:"Blood for Blood's necrotic damage can instead match your claws' damage type, ignoring resistance to necrotic specifically."},
      {name:"Collar of Undying Grudge", meta:"Very Rare · Attunement (Bloodfang)", desc:"Feared Reputation's disadvantage extends to every ally attacking that creature, not just you."},
      {name:"The Reckoning Fang", meta:"Legendary · Bloodfang only", desc:"The Reckoning is usable twice per long rest, and its lingering damage can't be reduced by resistance either, not only prevented by healing."},
    ]
  },
  warden: {
    label: "Warden's Circle", colTitle: "The Warden's Circle",
    title: "You get between the party and the thing trying to kill them",
    features: [
      {lvl:3, name:"Warden's Transformation", desc:"Your reach increases by 5 ft while transformed, and your speed is never reduced by difficult terrain when moving toward an ally under attack."},
      {lvl:3, name:"Stand Between", action:"Reaction · no Bloodlust cost", desc:"When a creature within your movement range attacks an ally, move there — using your actual movement, so anything boosting your speed extends your reach — and become the target instead. Spend Bloodlust normally to reduce the resulting damage."},
      {lvl:3, name:"Circling Guard", desc:"While you have at least 1 Bloodlust, enemies have disadvantage on attack rolls against any ally within 10 ft of you, unless they target you instead."},
      {lvl:8, name:"Between Blows", desc:"Stand Between no longer costs your reaction if the attack would have targeted an ally at 0 HP — you can always answer a killing blow, even having already used your reaction."},
      {lvl:11, name:"Widening Circle", desc:"Circling Guard's radius extends to 15 ft, and Stand Between is no longer limited to your movement — it works at 30 ft."},
      {lvl:15, name:"Unbroken Line", desc:"When Stand Between triggers, the attacker has disadvantage on its next attack roll, against anyone, before the end of its next turn."},
      {lvl:18, name:"None Shall Pass", action:"Bonus action · 1/long rest", desc:"For 1 minute, Stand Between triggers automatically and free on every attack against an ally in range, and Circling Guard's disadvantage applies even to attacks made against you. A real risk as well as a promise — without a Pack Instinct backing your durability this can mean absorbing far more in one minute than any other capstone asks."},
    ],
    feats: [
      {name:"Longer Reach", meta:"Feat · Warden's Circle", desc:"Stand Between's range no longer depends on your remaining movement — it works at 30 ft regardless."},
      {name:"Watchful Circle", meta:"Half-feat (+1 STR or CON) · Warden's Circle", desc:"Circling Guard's radius increases by 5 ft whenever you have 10 or more Bloodlust banked."},
      {name:"Twin Guard", meta:"Feat · Warden's Circle", desc:"Stand Between can trigger a second time in the same round; the second use costs 3 Bloodlust instead of your reaction."},
      {name:"Between Blows, Echoed", meta:"Half-feat (+1 STR or CON) · Warden's Circle", desc:"Between Blows' reaction-free trigger also applies, once per short rest, to an attack that would drop an ally to or below half HP."},
    ],
    instincts: [
      {name:"Between Us", meta:"Instinct · Warden's Circle", desc:"While Circling Guard is active, allies it protects also have resistance to damage from any attacker within your reach."},
    ],
    items: [
      {name:"Boots of the Closing Line", meta:"Rare · Attunement (Warden's Circle)", desc:"Stand Between no longer uses your movement — it becomes a free teleport within its range."},
      {name:"Chain of the Unbroken Line", meta:"Very Rare · Attunement (Warden's Circle)", desc:"Unbroken Line's disadvantage also applies to the attacker's next saving throw, not just its attack roll."},
      {name:"The Warden's Aegis", meta:"Legendary · Warden's Circle only", desc:"None Shall Pass is usable twice per long rest, and while active you have resistance to all damage — the direct answer to that capstone's real risk."},
    ]
  },
  vaela: {
    label: "Vaela's Line", colTitle: "Vaela's Line",
    title: "The hybrid made literal, not just borrowed",
    features: [
      {lvl:3, name:"Vaela's Transformation", desc:"You gain the vampire's traits while transformed: darkvision 60 ft (or +30 ft if you already have it), resistance to necrotic damage, and you no longer need to breathe."},
      {lvl:3, name:"Blood-Quick", cost:"1 Bloodlust", action:"Bonus action", desc:"Your speed doubles until the end of the turn, you don't provoke opportunity attacks, and if you end that movement within 10 ft of an enemy you weren't already next to, your first attack against it this turn has advantage."},
      {lvl:3, name:"Faltering Will", desc:"Whenever you spend Bloodlust to reduce a hit, the attacker saves against your Compulsion DC or its speed becomes 0 until the start of your next turn."},
      {lvl:8, name:"Second Nature", desc:"Blood-Quick no longer costs Bloodlust — free, once per turn."},
      {lvl:11, name:"Compelled Retreat", desc:"When Faltering Will's save fails, the creature is also pushed 10 ft away from you, if there's room."},
      {lvl:15, name:"Blood Eruption", desc:"When Faltering Will triggers, every other enemy within 10 ft of that creature must also save against your Compulsion DC or suffer the same speed-zero effect. One failed save at the centre of a cluster locks down the whole cluster."},
      {lvl:18, name:"Vaela's Wrath", action:"Action · 1/long rest", desc:"Unleash blood-quickened compulsion in a 30-ft radius. Every enemy in range saves against your Compulsion DC or is frightened of you with its speed reduced to 0 until the end of your next turn. For each creature that fails, regain 1 Bloodlust."},
    ],
    feats: [
      {name:"Swift Current", meta:"Feat · Vaela's Line", desc:"Blood-Quick can be triggered as a reaction, once per short rest, when an enemy moves within 10 ft of you."},
      {name:"Deeper Compulsion", meta:"Half-feat (+1 CHA) · Vaela's Line", desc:"Faltering Will's speed-zero effect also gives the creature disadvantage on attack rolls while it lasts."},
      {name:"Widening Eruption", meta:"Half-feat (+1 CHA) · Vaela's Line", desc:"Blood Eruption's radius increases to 20 ft."},
      {name:"Unshaken Grip", meta:"Feat · Vaela's Line", desc:"Compelled Retreat's push also knocks the creature prone if it hits an obstacle or another creature during the push."},
    ],
    instincts: [
      {name:"Borrowed Grace", meta:"Instinct · Vaela's Line", desc:"Once per short rest, when you spend Bloodlust to reduce damage, you may also move up to half your speed without provoking opportunity attacks."},
    ],
    items: [
      {name:"Anklet of Borrowed Speed", meta:"Rare · Attunement (Vaela's Line)", desc:"Blood-Quick's \"ended within 10 ft\" clause extends to 15 ft."},
      {name:"Choker of the Faltering Will", meta:"Very Rare · Attunement (Vaela's Line)", desc:"Your Compulsion DC increases by 1."},
      {name:"Vaela's Own Collar", meta:"Legendary · Vaela's Line only", desc:"Vaela's Wrath is usable twice per long rest, and creatures it frightens have their speed held at 0 for the full duration of the fear rather than only until your next turn."},
    ]
  }
};

export const CLASS_UNBROKEN = {
  hitDie: 12,
  label: "Unbroken", eyebrow: "A Wound, and Then a Wolf", primaryAbil: "str",
  resourceLabel: "Bloodlust",
  /* The document gives no maximum — it accumulates from damage in both
     directions and drains as you spend it. */
  resourceUncapped: true,
  resourceMax: function(){ return 0; },
  resourceRecoveryType: "combat",
  resourceRecoveryHint: "Builds from damage dealt or taken while transformed, and banks at full value from damage taken in Waking Form.",
  resourceButtons: [
    {label:"Encounter ends (reset)", tag:"reset-zero"}
  ],
  subclassLabel: "Tank Pack",
  subclasses: UNBROKEN_PACKS,
  generalFeatures: UNBROKEN_GENERAL,
  generalFeats: UNBROKEN_GENERAL_FEATS,
  instincts: UNBROKEN_INSTINCTS,
  instinctsLabel: "Beast's Instincts",
  sharedItems: UNBROKEN_ITEMS
};
