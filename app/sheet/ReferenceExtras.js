"use client";

import styles from "./sheet.module.css";
import {
  DEVOURER_STANDARD_SPELLS,
  DEVOURER_SPELL_SLOTS,
  DEVOURER_SPELLS,
} from "./data/devourer";
import { FABLEKEEPER_CONCOCTIONS } from "./data/fablekeeper";

const SEAL_BANDS = [
  { levels: "2–4", max: "CON mod + 4", from: 2, to: 4 },
  { levels: "5–8", max: "CON mod + 6", from: 5, to: 8 },
  { levels: "9–12", max: "CON mod + 8", from: 9, to: 12 },
  { levels: "13–16", max: "CON mod + 10", from: 13, to: 16 },
  { levels: "17–20", max: "CON mod + 12", from: 17, to: 20 },
];

const SLOT_LEVELS = ["1st", "2nd", "3rd", "4th", "5th"];

/* Per-class reference tables that don't fit the feat/item checklists. */
export default function ReferenceExtras({ classId, level }) {
  if (classId === "deathknight") return <SealTable level={level} />;
  if (classId === "devourer") return <DevourerReference level={level} />;
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

function DevourerReference({ level }) {
  const slots = DEVOURER_SPELL_SLOTS[Math.min(Math.max(level, 1), 20) - 1];
  const hasSlots = slots.some((n) => n > 0);

  return (
    <>
      <section className={`${styles.card} ${styles.column}`}>
        <h2 className={styles.cardTitle}>Spell Slots</h2>
        {hasSlots ? (
          <div className={styles.slotRow}>
            {slots.map((count, i) =>
              count > 0 ? (
                <div key={SLOT_LEVELS[i]} className={styles.slotChip}>
                  <span className={styles.slotChipLabel}>{SLOT_LEVELS[i]}</span>
                  <span className={`${styles.slotChipCount} num`}>{count}</span>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <p className={styles.empty}>No slots yet — spellcasting begins at 2nd level.</p>
        )}

        <details className={styles.upcoming}>
          <summary>Full progression</summary>
          <table className={styles.refTable}>
            <thead>
              <tr>
                <th>Lv</th>
                {SLOT_LEVELS.map((s) => (
                  <th key={s}>{s}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEVOURER_SPELL_SLOTS.map((row, i) => (
                <tr key={i} className={i + 1 === level ? styles.refRowActive : ""}>
                  <td className="num">{i + 1}</td>
                  {row.map((n, j) => (
                    <td key={j} className="num">
                      {n || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </section>

      <section className={`${styles.card} ${styles.column}`}>
        <h2 className={styles.cardTitle}>Custom Spells</h2>
        <ul className={styles.featureList}>
          {DEVOURER_SPELLS.map((s) => (
            <li key={s.name} className={styles.feature}>
              <div className={styles.featureHead}>
                <h3 className={styles.featureName}>{s.name}</h3>
              </div>
              {s.meta && <div className={styles.featureMeta}>{s.meta}</div>}
              <p className={styles.featureDesc}>{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.card} ${styles.column}`}>
        <h2 className={styles.cardTitle}>Standard Spell List</h2>
        <p className={styles.trackerNote}>
          Names only — these are ordinary 5e spells, so look them up in the
          compendium or your usual reference.
        </p>
        {Object.entries(DEVOURER_STANDARD_SPELLS).map(([tier, names]) => (
          <div key={tier} className={styles.spellGroup}>
            <h3 className={styles.spellGroupTitle}>{tier}</h3>
            <div className={styles.spellNames}>
              {names.map((n) => (
                <span key={n} className={styles.spellName}>
                  {n}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
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
