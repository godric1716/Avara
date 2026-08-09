import Link from "next/link";
import styles from "./peoples.module.css";
import sectionStyles from "../section.module.css";
import Flourish from "../components/Flourish";
import PeopleSigil from "./PeopleSigil";
import { RACES, BACKGROUNDS } from "./data";
import { getDocuments } from "../classes/classData";

export const metadata = {
  title: "Peoples & Paths · Avara",
  description:
    "The playable races and backgrounds of Avara — who you are, and where you came from.",
};

export default function PeoplesPage() {
  const documents = getDocuments("peoples");

  return (
    <div className="wrap">
      <div className={sectionStyles.section}>
        <span className="eyebrow">Section</span>
        <h1 className={sectionStyles.title}>Peoples &amp; Paths</h1>
        <Flourish className={sectionStyles.flourish} />
        <p className={styles.lede}>
          Who you are, and where you came from. Races are what you were born
          as — or in one case, what you refused to keep being. Backgrounds are
          what happened to you before the campaign started.
        </p>
      </div>

      {documents.length > 0 && (
        <div className={styles.docRow}>
          {documents.map((d) => (
            <a
              key={d.file}
              href={`/documents/${d.file}`}
              className={styles.docLink}
              download
            >
              {d.label} <span className={styles.docMeta}>PDF · {d.size}</span>
            </a>
          ))}
        </div>
      )}

      <Group
        eyebrow="Races"
        title="The Peoples"
        blurb="Four so far. Each is written to be picked at session zero and lived in afterwards — the traits matter, but so does what your people argue about when more than two of them are in a room."
        entries={RACES}
      />

      <Group
        eyebrow="Backgrounds"
        title="The Paths"
        blurb="Five so far. Every one carries a feature that opens a door in Avara specifically, rather than a generic favour — and the full personality, ideal, bond and flaw tables to roll or pick from."
        entries={BACKGROUNDS}
      />
    </div>
  );
}

function Group({ eyebrow, title, blurb, entries }) {
  return (
    <section className={styles.group}>
      <div className={styles.groupHead}>
        <span className={styles.groupEyebrow}>{eyebrow}</span>
        <h2 className={styles.groupTitle}>{title}</h2>
        <p className={styles.groupBlurb}>{blurb}</p>
      </div>

      <ul className={styles.grid}>
        {entries.map((e) => (
          <li key={e.slug}>
            <Link href={`/peoples/${e.slug}`} className={styles.card}>
              {/* The tint is set inline because it belongs to the entry, not
                  to a stylesheet — a new race ships its own colour. */}
              <span className={styles.cardMark} style={{ color: e.tint }}>
                <PeopleSigil slug={e.slug} className={styles.sigil} />
              </span>
              <span className={styles.cardBody}>
                <span className={styles.cardName}>{e.name}</span>
                <span className={styles.cardTagline}>{e.tagline}</span>
              </span>
              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
