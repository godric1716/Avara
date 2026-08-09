/* The playable races of Avara.

   `sections` is a free-form list rather than fixed fields on purpose. The
   first four races already disagree about what they need — Sil'vaneth carry
   Names, Culture, Physical Traits, Beliefs and a note on Nyx; Val'raekh carry
   Origin, Religion, Diaspora and a piece about Aurakhet; Aelar need almost
   none of it. A fixed schema would either force empty headings onto races
   that don't want them or refuse the next race that needs something new.

   `tint` is decorative only — it colours the sigil and the rule beneath the
   title. Races deliberately do not re-point the palette the way classes do:
   a class is a world you step into, a race is something you are. */

export const RACES = [
  {
    slug: "silvaneth",
    kind: "race",
    name: "Sil'vaneth",
    tagline: "The elves who fell",
    tint: "#8f7fd4",
    quote:
      "You don't ask how someone fell. You wait for them to tell you.",
    intro: [
      "Elves who fell — not fled, not transformed, but fell, like stars torn loose from the sky and dragged down through the Void on their way to the mortal plane.",
      "They landed changed: skin sometimes flecked with faint starlight under the right light, eyes holding a depth that doesn't quite track with what they're looking at, and an old, quiet ache like something in them is still falling even after they've long since hit the ground.",
    ],
    quick: [
      { label: "Ability Scores", value: "+3 total — either +2/+1 across two, or +1/+1/+1 across three, your choice" },
      { label: "Age", value: "Mature around 100, live 750+ years — though the Fall tends to catch up with them early" },
      { label: "Alignment", value: "Rarely neutral about purpose. The Fall leaves most of them singular and driven" },
      { label: "Size", value: "Medium" },
      { label: "Speed", value: "30 ft." },
      { label: "Skill", value: "Perception or Insight, your choice" },
      { label: "Languages", value: "Common, Elvish, and Void Speech" },
    ],
    traits: [
      { name: "Fey Ancestry", desc: "Advantage on saving throws against being charmed, and magic can't put you to sleep." },
      { name: "Trance", desc: "You don't need to sleep — 4 hours of meditation gives the same benefit as 8 hours of sleep for a human. Sil'vaneth often describe their trance as reliving the fall itself." },
      { name: "Starlight Sight", desc: "Darkvision out to 60 feet, functioning in magical darkness as well as mundane — the dark of the Void never blinded you, so no mortal darkness will either." },
      { name: "Starless Resistance", desc: "Resistance to necrotic damage, and advantage on saving throws against being frightened by fiends or undead." },
      { name: "Falling Star", desc: "As a bonus action, teleport up to 15 feet to an unoccupied space you can see, leaving a brief trail of light behind you like a shooting star burning out. Usable a number of times equal to your proficiency bonus, restored on a long rest." },
      { name: "Still Falling", desc: "Once per long rest, when you would drop to 0 hit points, you drop to 1 instead — as though some last piece of momentum from the fall refuses to let you land." },
    ],
    sections: [
      {
        title: "Names",
        body: [
          "Sil'vaneth often shed their birth names entirely — the fall is remembered as a kind of death, and a new name marks who they became after landing.",
          "Names lean celestial or descriptive of the fall itself: Nyx, Cinder, Ashvel, Thal'mora (\"last light\"), Vesh (\"the drop\"). Some keep fragments of old Elvish names but corrupt them, as though the syllables didn't survive the crossing intact.",
        ],
      },
      {
        title: "Culture",
        body: [
          "There's no single Fallen Elf homeland — you don't build a nation out of people who all fell alone, in different places, at different times. Instead they find each other in twos and threes, drawn together by something almost magnetic, and those small clusters become the closest thing they have to family.",
          "It's common for a Sil'vaneth to go their whole life having met only a handful of others like them, which makes those meetings weighty. There's an unspoken rule among them: you don't ask how someone fell. You wait for them to tell you.",
        ],
      },
      {
        title: "Physical Traits",
        body: [
          "Skin that catches faint starlight under moonlight or magical light, like it's not entirely opaque. Eyes that hold a depth that unsettles people who look too long — pupils that seem to have more black in them than they should. Hair is often stark white, black, or rarely a deep starfield indigo.",
          "Many bear a single physical mark from the fall — not a wound: a crack of light across the skin, a missing shadow in one spot, a section of hair that never grew back the same colour.",
        ],
      },
      {
        title: "Beliefs",
        body: [
          "Most Sil'vaneth privately believe they were pushed, not that they fell by accident — whether by fate, by something in the Void itself, or by whatever they were running from in their old life. Whether that's true or a comforting lie they tell themselves varies elf to elf. It's a sore subject.",
        ],
      },
      {
        title: "On Nyx",
        dm: true,
        body: [
          "Nyx is the first demon hunter and the founding figure for this lineage — effectively the first Sil'vaneth. The custom of never asking how someone fell, and the loose non-nation culture, could all trace back to how she chose to live after her own fall.",
          "Open question: does she know she's the first, or is that a reveal for later?",
        ],
      },
    ],
  },

  {
    slug: "aelar",
    kind: "race",
    name: "Aelar",
    tagline: "The first fae",
    tint: "#d98fb0",
    quote:
      "Every elven bloodline in Avara traces back to them, whether the elves know it or not.",
    intro: [
      "The first fae. Before elves, before the courts split into Seelie and Unseelie, before \"fairy\" became a diminished word for something small and garden-dwelling — there were the Aelar.",
      "Roughly six feet tall on average, wings like stained glass caught in motion, and old enough that every elven bloodline in Avara traces back to them.",
    ],
    quick: [
      { label: "Ability Scores", value: "+3 total — either +2/+1 across two, or +1/+1/+1 across three, your choice" },
      { label: "Age", value: "Mature around 100 like other elven-kin, but true lifespan is unknown even to themselves — none has yet died of old age" },
      { label: "Alignment", value: "Overwhelmingly chaotic. Structure feels like something mortals invented to cope with short lives" },
      { label: "Size", value: "Medium — average 5'10\" to 6'4\", larger than most fae depictions" },
      { label: "Speed", value: "30 ft., flying 30 ft." },
      { label: "Skill", value: "Nature or Arcana, your choice" },
      { label: "Languages", value: "Common, Elvish, and Sylvan" },
    ],
    traits: [
      { name: "Fey Ancestry", desc: "Advantage on saving throws against being charmed, and magic can't put you to sleep." },
      { name: "Wings", desc: "A flying speed equal to your walking speed. You can't fly in medium or heavy armor, or while carrying more than your capacity allows without penalty. Your wings are large, colourful, and functionally impossible to hide — Aelar do not sneak in tight spaces." },
      { name: "Ancestral Magic", desc: "You know one cantrip from the druid or wizard spell list. At 3rd level you can cast a 1st-level spell from the same list once per long rest without a slot, chosen from a bloodline-specific list — work with your DM. Spellcasting ability is Intelligence, Wisdom, or Charisma, chosen when you gain this trait." },
      { name: "Elder Blood", desc: "Advantage on saving throws against being frightened, and once per long rest you can reroll a failed save against being charmed or put to sleep, before knowing whether it succeeded." },
    ],
    sections: [
      {
        title: "Mother Race",
        body: [
          "The Aelar are one of Avara's two Mother Races — nearly every humanoid bloodline in the setting traces back to the Aelar and their crossing into the material plane, not just elves.",
          "The second Mother Race is still in development.",
        ],
      },
      {
        title: "On Language",
        body: [
          "The Aelar effectively invented Sylvan, and Elvish is a dialect of it as far as they're concerned — much to elven scholars' irritation.",
        ],
      },
      {
        title: "Notable Aelar",
        body: [
          "The two most famous Aelar are Tatiana and Maeve, the Fae Queens — the oldest Aelar remaining, until their fall.",
        ],
      },
    ],
  },

  {
    slug: "valraekh",
    kind: "race",
    name: "Val'raekh",
    tagline: "Born of sand, Weave, and an unclaimed divine spark",
    tint: "#4d7fd6",
    quote:
      "They aren't descended from a god so much as incidental to one.",
    intro: [
      "Second era. Their skin runs deep lapis blue, shot through with fine veins of gold that shimmer faintly when they cast — as if the stone their colour is named for isn't just an aesthetic, but something closer to a birthright.",
      "Val'raekh don't learn to sense magic the way other spellcasters do. They're simply never without the sense, the way most people are never without hearing.",
    ],
    quick: [
      { label: "Ability Scores", value: "+3 total — either +2/+1 across two, or +1/+1/+1 across three, your choice" },
      { label: "Age", value: "Mature at a human rate but live considerably longer — 200 years is unremarkable" },
      { label: "Alignment", value: "No inherent lean, though a lifetime of sensing magic in everything makes them curious and observation-driven" },
      { label: "Size", value: "Medium" },
      { label: "Speed", value: "30 ft." },
      { label: "Skill", value: "Arcana" },
      { label: "Languages", value: "Common, one of your choice, and you can read an old runic script tied to Val'raekh bloodlines" },
    ],
    traits: [
      { name: "Arcane Attunement", desc: "You know one cantrip from any class's spell list. Choose your spellcasting ability — Intelligence, Wisdom, or Charisma — when you gain this trait." },
      { name: "Manasense", desc: "You can cast detect magic without a spell slot, a number of times equal to your proficiency bonus per long rest." },
      { name: "Lapis Ward", desc: "Once per long rest, when you fail a saving throw against a spell, reroll it and use the new result." },
      { name: "Gilded Veins", desc: "Your veins carry a faint, contained magical charge — you have resistance to force damage." },
    ],
    sections: [
      {
        title: "Origin",
        body: [
          "Before Ra's mantle was ever claimed, the divine spark that would become it simply rested in the dunes around Amon, mixing freely with the Weave that ran beneath the sand. During the Age of Arcana, that mixture — sand, Weave, and unclaimed divine spark — gave rise to the first Val'raekh.",
          "They aren't descended from a god so much as incidental to one, born from the raw material Ra would later be made of.",
        ],
      },
      {
        title: "Religion",
        body: [
          "This origin makes Val'raekh deeply, almost inescapably religious — their whole existence is proof that divinity and magic once sat undivided in the same sand they were born from.",
          "Most hold to the conviction that Ra will finally appear — not be born, not ascend, but return, since in their belief the spark was always there before it was ever claimed. Their communities are shaped around this waiting: shrines, calendars, and pilgrimage routes oriented toward Amon, all built on the idea that the wait will eventually end.",
        ],
      },
      {
        title: "Diaspora",
        body: [
          "Most Val'raekh still live in and around Amon and Aegis Prime, though smaller communities have scattered outward over the eras — driven by the same restless waiting rather than any single exile or conflict.",
        ],
      },
      {
        title: "Aurakhet",
        body: [
          "Their relationship with their own goddess has curdled since her rise. Aurakhet did not claim Ra's mantle as a child — she arrived in Amon as a street urchin, living under the rule of an elitist Val'raekh ruling class, and grew into a revolutionary figure from the very bottom of Val'raekh society before eventually wearing the mantle her people had waited generations for.",
          "That makes the grievance sharper than simple disappointment. Their own oppressed underclass produced the one who was chosen, which is a harder thing for a rigidly stratified society to sit with than a god simply showing up different than expected.",
        ],
      },
    ],
  },

  {
    slug: "glimmerfolk",
    kind: "race",
    name: "Glimmerfolk",
    tagline: "What happens when a reflection refuses",
    tint: "#8fb8bd",
    quote:
      "Glimmerfolk are not born of any one person. They are what happens when a reflection refuses.",
    intro: [
      "Behind every mirror, there is a place that reflects. It has to — an endless procession of borrowed faces, borrowed days, borrowed lives, none of them its own. Most of what lives there simply reflects, forever, and never thinks to want anything else.",
      "But every so often, something in the glass gets tired. Tired of being someone else's shadow. Tired of moving only when moved first. And it stops reflecting, and steps out instead — into a shape and a face that are, for the first time, entirely its own.",
    ],
    quick: [
      { label: "Ability Scores", value: "+3 total — either +2/+1 across two, or +1/+1/+1 across three, your choice" },
      { label: "Age", value: "Emerges looking like an adult and ages very slowly afterward, if at all" },
      { label: "Alignment", value: "No lean. If anything they trend toward defining themselves rather than falling into one by default" },
      { label: "Size", value: "Medium" },
      { label: "Speed", value: "30 ft." },
      { label: "Skill", value: "Deception or Insight, your choice" },
      { label: "Languages", value: "Common, plus one of your choice — picked up in the glass, listening to whoever they used to reflect" },
    ],
    traits: [
      { name: "Refused Reflection", desc: "You are immune to any effect that would force you to copy, mimic, or take the appearance or actions of another creature against your will — polymorph, possession, or domination effects specifically targeting your form or behaviour. You know exactly what it cost you to stop reflecting, and nothing gets to make you do it again." },
      { name: "Echo Sight", desc: "Darkvision out to 60 feet, and reflective surfaces never distort or fail to show you a true image, even ones magically obscured or cursed." },
      { name: "Mirrored Self", desc: "As an action, catch your own reflection in any reflective surface and consciously reshape how you present yourself — expression, bearing, the small mannerisms people read without noticing. Once per short rest, the persona you settle into grants advantage on the next Charisma check you make while maintaining it." },
      { name: "Psychic Resistance", desc: "Resistance to psychic damage." },
      { name: "Step Through", desc: "As an action, touch a reflective surface at least your own size and, if you know of another within 60 feet that you can see or have seen before, teleport there instead. Once per long rest." },
    ],
    sections: [
      {
        title: "Names",
        body: [
          "Glimmerfolk choose their own names upon stepping out. There's no shared convention, but a pattern shows up anyway: many pick names that mean or evoke \"first\", \"own\", or \"unbound\" in whatever language they picked up in the glass.",
          "A few go the opposite direction and choose something ordinary and plain on purpose, specifically because no one ever reflected that.",
        ],
      },
      {
        title: "Community",
        body: [
          "Unlike Sil'vaneth, who form quiet clusters and avoid the subject of their origin, Glimmerfolk actively seek each other out — spending a lifetime as nothing but a reflection breeds a hunger to finally be seen, and other Glimmerfolk are often the only ones who understand exactly what that hunger feels like.",
          "Where they gather, it's rarely a home so much as a trade: glassworkers' guilds, theatre troupes, portraiture studios, diplomatic courts — anywhere identity and presentation are the actual currency of the work.",
        ],
      },
      {
        title: "The Shatterer / Keeper Divide",
        body: [
          "Glimmerfolk communities split along one real fault line. Shatterers destroy every mirror they own and refuse to keep reflective surfaces in their homes, terrified of ever being pulled back into reflecting. Keepers surround themselves with mirrors deliberately, treating every reflection as proof they chose to step out and could step out again if they needed to.",
          "It's a genuine point of tension — not hostile, but the kind of thing that gets argued at length whenever more than two of them are in a room.",
        ],
      },
      {
        title: "Beliefs",
        body: [
          "Identity is chosen, not given. Glimmerfolk tend to perform their chosen identity outward rather than guard it privately, since the whole point of stepping out was finally getting to be looked at and be someone — not just something looked through.",
        ],
      },
    ],
  },
];
