/* Weapons defined by the Avara classes rather than the SRD. Kept separate
   from equipment.json because that file is overwritten wholesale by
   `npm run import:equipment` — anything homebrew put there would be lost on
   the next run. Same shape as the imported entries so they merge cleanly. */

export const HOMEBREW_WEAPONS = [
  {
    kind: "weapon",
    index: "warglaive",
    name: "Warglaive",
    category: "Martial",
    range: "Melee",
    damageDice: "1d6",
    damageType: "Slashing",
    properties: ["Finesse", "Light", "Special"],
    rangeNormal: 20,
    rangeLong: 60,
    weight: 2,
    cost: "50 gp",
    source: "Devourer",
    special:
      "Once per turn when you attack with a warglaive, hurl it 20/60 ft and call it back as part of the same attack. The throw counts as a single attack and the blade returns whether or not it hit.",
  },
  {
    kind: "weapon",
    index: "tonfa-scythe",
    name: "Tonfa Scythe",
    category: "Martial",
    range: "Melee",
    damageDice: "1d6",
    damageType: "Slashing",
    properties: ["Finesse", "Light", "Special"],
    rangeNormal: 5,
    rangeLong: null,
    weight: 2,
    cost: "50 gp",
    source: "Devourer",
    special:
      "Taking the Attack action while wielding paired tonfa scythes grants +1 AC until the start of your next turn, from the parrying perpendicular grip.",
  },
];
