"use client";

import { useState } from "react";
import styles from "./sheet.module.css";

export default function CheckList({ title, entries, checked, onToggle }) {
  const list = entries || [];
  const [openName, setOpenName] = useState(null);

  return (
    <section className={`${styles.card} ${styles.column}`}>
      <h2 className={styles.cardTitle}>{title}</h2>

      {list.length === 0 ? (
        <p className={styles.empty}>None for this class.</p>
      ) : (
        <ul className={styles.checkList}>
          {list.map((entry) => {
            const open = openName === entry.name;
            return (
              <li key={entry.name} className={styles.checkItem}>
                <div className={styles.checkRow}>
                  <input
                    type="checkbox"
                    id={`chk-${title}-${entry.name}`}
                    checked={!!checked[entry.name]}
                    onChange={() => onToggle(entry.name)}
                  />
                  {/* The name is a disclosure, not part of the label — tapping
                      it should read the entry, not silently tick the box. */}
                  <button
                    type="button"
                    className={styles.checkToggle}
                    onClick={() => setOpenName(open ? null : entry.name)}
                    aria-expanded={open}
                  >
                    <span className={styles.checkName}>{entry.name}</span>
                    {entry.meta && (
                      <span className={styles.checkMeta}>{entry.meta}</span>
                    )}
                    <span className={styles.chevron} aria-hidden="true">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                </div>
                {/* Hidden by class rather than unmounted — see FeatureColumn. */}
                <p
                  className={`${styles.checkDesc} ${open ? "" : styles.collapsed}`}
                >
                  {entry.desc}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
