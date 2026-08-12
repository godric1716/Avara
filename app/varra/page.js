import Link from "next/link";
import styles from "./varra.module.css";
import sectionStyles from "../section.module.css";
import Flourish from "../components/Flourish";
import {
  SUBCLASSES,
  VARRA_RACES,
  VARRA_BACKGROUNDS,
  VARRA_ITEMS,
  VARRA_FEATS,
  UNCOVERED_CLASSES,
} from "./data";
import { getDocuments } from "../classes/classData";

export const metadata = {
  title: "Varra Aeterna · Avara",
  description:
    "A Rhovian sourcebook for Avara — ten subclasses, three races, seven backgrounds, ten magic items and eight feats.",
};

export default function VarraPage() {
  const documents = getDocuments("varra");

  return (
    <div className={`wrap ${styles.book}`}>
      <div className={sectionStyles.section}>
        <span className="eyebrow">Sourcebook</span>
        <h1 className={sectionStyles.title}>Varra Aeterna</h1>
        <Flourish className={sectionStyles.flourish} />
        <p className={styles.lede}>
          A Rhovian sourcebook for the world of Avara. Rhovum is Avara&rsquo;s
          Roman-analog civilisation and its people are Rhovian;{" "}
          <strong>Balvor</strong> is the god of war the Rhovians call Mars.
        </p>
      </div>

      <div className={styles.counts}>
        {[
          [SUBCLASSES.length, "Subclasses"],
          [VARRA_RACES.length, "Races"],
          [VARRA_BACKGROUNDS.length, "Backgrounds"],
          [VARRA_ITEMS.length, "Magic Items"],
          [VARRA_FEATS.length, "Feats"],
        ].map(([n, label]) => (
          <div key={label}>
            <span className={`${styles.countNum} num`}>{n}</span>
            <span className={styles.countLabel}>{label}</span>
          </div>
        ))}
      </div>

      {documents.length > 0 && (
        <div className={styles.docRow}>
          {documents.map((d) => (
            <a key={d.file} href={`/documents/${d.file}`} className={styles.docLink} download>
              {d.label} <span className={styles.docMeta}>PDF · {d.size}</span>
            </a>
          ))}
        </div>
      )}

      <Group
        eyebrow="Subclasses"
        title="Rhovian Archetypes"
        blurb="One for each of ten classes. They attach to the standard 5e classes rather than to Avara's own — a Rhovian Rogue, a Rhovian Paladin."
        note={`Not yet covered: ${UNCOVERED_CLASSES.join(", ")}.`}
      >
        <ul className={styles.grid}>
          {SUBCLASSES.map((s) => (
            <li key={s.slug}>
              <Link href={`/varra/${s.slug}`} className={styles.card}>
                <span className={styles.cardClass}>{s.dndClass}</span>
                <span className={styles.cardName}>{s.name}</span>
                <span className={styles.cardType}>{s.typeLabel}</span>
                <span className={styles.cardTagline}>{s.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Group>

      <Group
        eyebrow="Races"
        title="Rhovian Peoples"
        blurb="Three creatures the Rhovians named, feared, or claimed as part of their founding stories. All three are selectable on the character sheet."
      >
        <ul className={styles.grid}>
          {VARRA_RACES.map((r) => (
            <li key={r.slug}>
              <Link href={`/varra/${r.slug}`} className={styles.card}>
                <span className={styles.cardName}>{r.name}</span>
                <span className={styles.cardTagline}>{r.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Group>

      <Group
        eyebrow="Backgrounds"
        title="Seven Rhovian Origins"
        blurb="Where you stood in Rhovum before the campaign started — veteran, freed person, senator's child, or someone Rhovum marched through."
      >
        <ul className={styles.grid}>
          {VARRA_BACKGROUNDS.map((b) => (
            <li key={b.slug}>
              <Link href={`/varra/${b.slug}`} className={styles.card}>
                <span className={styles.cardName}>{b.name}</span>
                <span className={styles.cardClass}>{b.latin}</span>
                <span className={styles.cardTagline}>{b.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Group>

      <Group
        eyebrow="Magic Items"
        title="Rhovian Artifacts"
        blurb="Ten items, all selectable on the character sheet's Magic Items list."
      >
        <GearList entries={VARRA_ITEMS} />
      </Group>

      <Group
        eyebrow="Feats"
        title="Martial Traditions"
        blurb="Eight feats, written as general feats rather than locked to any class or subclass — so any character can take them."
      >
        <GearList entries={VARRA_FEATS} />
      </Group>
    </div>
  );
}

function Group({ eyebrow, title, blurb, note, children }) {
  return (
    <section className={styles.group}>
      <div className={styles.groupHead}>
        <span className={styles.groupEyebrow}>{eyebrow}</span>
        <h2 className={styles.groupTitle}>{title}</h2>
        <p className={styles.groupBlurb}>{blurb}</p>
        {note && <p className={styles.groupNote}>{note}</p>}
      </div>
      {children}
    </section>
  );
}

/* Items and feats are reference lists rather than destinations — shown in
   full here instead of behind ten more clicks. */
function GearList({ entries }) {
  return (
    <ul className={styles.gearList}>
      {entries.map((g) => (
        <li key={g.slug} className={styles.gear}>
          <div className={styles.gearHead}>
            <span className={styles.gearName}>{g.name}</span>
            <span className={styles.gearMeta}>{g.meta}</span>
          </div>
          {g.flavour && <p className={styles.gearFlavour}>{g.flavour}</p>}
          <p className={styles.gearDesc}>{g.desc}</p>
        </li>
      ))}
    </ul>
  );
}
