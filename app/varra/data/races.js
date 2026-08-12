/* The three Rhovian races. Same shape as the Peoples & Paths races so the
   character sheet can render either without knowing which book it came
   from — see app/peoples/data/races.js. */

export const VARRA_RACES = [
  {
    slug: "medusa",
    kind: "race",
    source: "varra",
    name: "Medusa",
    tagline: "Almost human at a distance. Up close, the hair moves",
    intro: [
      "They appear almost human at a distance. Up close, the hair moves.",
    ],
    quick: [
      { label: "Ability Scores", value: "+2 CHA, +1 CON — or +2/+1 anywhere" },
      { label: "Type", value: "Humanoid" },
      { label: "Size", value: "Medium" },
      { label: "Speed", value: "30 ft." },
      { label: "Senses", value: "Darkvision 60 ft." },
      { label: "Languages", value: "Common, plus one of the Rhovian tongue, Elven, or Infernal" },
    ],
    traits: [
      {
        name: "Serpentine Hair",
        desc: "A natural melee weapon you've had since birth, and you are proficient with it. A hair strike deals 1d4 piercing plus 1d4 poison. On a hit, the target makes a Constitution save (DC 8 + proficiency bonus + CHA modifier) or has disadvantage on their next attack roll.",
      },
      {
        name: "Petrifying Gaze",
        desc: "You choose who the gaze affects. As an action or a bonus action, one creature within 30 feet makes a Constitution save (DC 8 + proficiency bonus + CHA modifier). On a failure they are restrained until the end of your next turn; on a success they are immune to your gaze for 24 hours. Once per short rest.",
      },
      {
        name: "Poison Resistance",
        desc: "Resistance to poison damage, and advantage on saves against the poisoned condition.",
      },
    ],
  },

  {
    slug: "lemure",
    kind: "race",
    source: "varra",
    name: "Lemure",
    tagline: "The underworld still has an unfinished claim on you",
    intro: [
      "You are not a ghost — you are a person the underworld still has an unfinished claim on.",
    ],
    quick: [
      { label: "Ability Scores", value: "+2 WIS, +1 CON — or +2/+1 anywhere" },
      { label: "Type", value: "Humanoid" },
      { label: "Size", value: "Medium" },
      { label: "Speed", value: "30 ft." },
      { label: "Senses", value: "Darkvision 60 ft." },
      { label: "Languages", value: "Common, plus one of your choice" },
    ],
    traits: [
      {
        name: "Between Worlds",
        desc: "The underworld's claim keeps you fed and breathing — or close enough. You don't need to eat, drink or breathe, you have advantage on death saving throws, and you have resistance to necrotic damage.",
      },
      {
        name: "Shadow Step",
        desc: "The dark isn't an obstacle. It's a doorway. While in dim light or darkness, use a bonus action to teleport up to 30 feet to an unoccupied space you can see that is also in dim light or darkness. Once per short rest.",
      },
      {
        name: "Haunting Presence",
        desc: "Once per long rest as a bonus action, drop the pretence of normalcy. Every creature within 30 feet that can see you makes a Wisdom save (DC 8 + proficiency bonus + WIS modifier) or is frightened until the end of your next turn.",
      },
      {
        name: "Sense the Restless",
        desc: "You always know where the dying are. You know the direction of the nearest creature at 0 hit points and the nearest undead within 300 feet — direction only, not identity.",
      },
    ],
  },

  {
    slug: "faun",
    kind: "race",
    source: "varra",
    name: "Faun",
    tagline: "You find human cities entertaining the way a wolf finds a sheep pen entertaining",
    intro: [
      "You've been in this forest longer than Rhovum has existed, and you find human cities entertaining the way a wolf finds a sheep pen entertaining.",
    ],
    quick: [
      { label: "Ability Scores", value: "+2 CHA, +1 WIS — or +2/+1 anywhere" },
      { label: "Type", value: "Humanoid" },
      { label: "Size", value: "Medium" },
      { label: "Speed", value: "35 ft. on hooves" },
      { label: "Senses", value: "No darkvision" },
      { label: "Languages", value: "Common and Sylvan" },
    ],
    traits: [
      {
        name: "Ram Charge",
        desc: "The horns aren't decorative. If you move 20 feet or more in a straight line toward a creature and hit with an unarmed strike, deal an extra 2d6 bludgeoning. The target makes a Strength save (DC 8 + proficiency bonus + STR modifier) or is knocked prone.",
      },
      {
        name: "Natural Pipes",
        desc: "The sound Faunus taught you was never meant to be calming. Once each per long rest, with no spell slot and using Charisma as your spellcasting ability: Enthrall, Dissonant Whispers, and Speak with Animals.",
      },
      {
        name: "Panic of Faunus",
        desc: "Once per long rest as a bonus action, every creature within 30 feet that can hear you makes a Wisdom save (DC 8 + proficiency bonus + CHA modifier) or is frightened until the end of your next turn. Frightened creatures must flee.",
      },
      {
        name: "Child of the Wild",
        desc: "Difficult terrain from natural sources never slows you, and you cannot be surprised outdoors in a natural environment.",
      },
    ],
  },
];
