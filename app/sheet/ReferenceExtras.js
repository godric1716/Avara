"use client";

import styles from "./sheet.module.css";
import { FABLEKEEPER_CONCOCTIONS } from "./data/fablekeeper";

const SEAL_BANDS = [
  { levels: "2–4", max: "CON mod + 4", from: 2, to: 4 },
  { levels: "5–8", max: "CON mod + 6", from: 5, to: 8 },
  { levels: "9–12", max: "CON mod + 8", from: 9, to: 12 },
  { levels: "13–16", max: "CON mod + 10", from: 13, to: 16 },
  { levels: "17–20", max: "CON mod + 12", from: 17, to: 20 },
];

/* Per-class reference tables that don't fit the feat/item checklists.

   The Devourer deliberately has nothing here: its slots, custom spells and
   standard list all live in the Spells tab now, and leaving a second static
   copy in Reference meant two Spell Slots cards on one sheet — one
   interactive, one not. */
export default function ReferenceExtras({ classId, level }) {
  if (classId === "deathknight") return <SealTable level={level} />;
  if (classId === "fablekeeper") return <Concoctions />;
  return null;
}

function SealTable({ level }) {
  return (
    <section className={`${styles.card} ${styles.column}`}>
      <h2 className={styles.cardTitle}>Grave Seal Maximum by Level</h2>
      <table className={styles.refTable}>
        <thead>
          <tr>
            <th>Levels</th>
            <th>Maximum</th>
          </tr>
        </thead>
        <tbody>
          {SEAL_BANDS.map((b) => {
            const here = level >= b.from && level <= b.to;
            return (
              <tr key={b.levels} className={here ? styles.refRowActive : ""}>
                <td className="num">{b.levels}</td>
                <td>{b.max}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className={styles.trackerNote}>
        Seals build during combat and reset once the fight ends. At level 1 the
        pool does not exist yet.
      </p>
    </section>
  );
}

function Concoctions() {
  return (
    <section className={`${styles.card} ${styles.column}`}>
      <h2 className={styles.cardTitle}>Witch&rsquo;s Bag Concoctions</h2>
      <ul className={styles.featureList}>
        {FABLEKEEPER_CONCOCTIONS.map((c) => (
          <li key={c.name} className={styles.feature}>
            <div className={styles.featureHead}>
              <h3 className={styles.featureName}>{c.name}</h3>
            </div>
            {c.meta && <div className={styles.featureMeta}>{c.meta}</div>}
            <p className={styles.featureDesc}>{c.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
