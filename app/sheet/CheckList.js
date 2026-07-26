"use client";

import styles from "./sheet.module.css";

export default function CheckList({ title, entries, checked, onToggle }) {
  const list = entries || [];

  return (
    <section className={`${styles.card} ${styles.column}`}>
      <h2 className={styles.cardTitle}>{title}</h2>

      {list.length === 0 ? (
        <p className={styles.empty}>None for this class.</p>
      ) : (
        <ul className={styles.checkList}>
          {list.map((entry) => (
            <li key={entry.name} className={styles.checkItem}>
              <label>
                <input
                  type="checkbox"
                  checked={!!checked[entry.name]}
                  onChange={() => onToggle(entry.name)}
                />
                <span className={styles.checkBody}>
                  <span className={styles.checkName}>{entry.name}</span>
                  {entry.meta && (
                    <span className={styles.checkMeta}>{entry.meta}</span>
                  )}
                  <span className={styles.checkDesc}>{entry.desc}</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
