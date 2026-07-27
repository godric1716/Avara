"use client";

import { useState } from "react";
import styles from "./sheet.module.css";

export default function FeatureColumn({ title, features, level }) {
  const list = features || [];
  const available = list.filter((f) => (f.lvl || 1) <= level);
  const upcoming = list.filter((f) => (f.lvl || 1) > level);
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className={`${styles.card} ${styles.column}`}>
      <h2 className={styles.cardTitle}>{title}</h2>

      {available.length === 0 && (
        <p className={styles.empty}>Nothing unlocked at this level yet.</p>
      )}

      {/* Names only until tapped. A full feature list ran to several screens
          on a phone; collapsing it also buys enough room to set the text a
          size larger everywhere. */}
      <ul className={styles.featureList}>
        {available.map((f) => {
          const key = `${f.lvl}-${f.name}`;
          const open = openKey === key;
          return (
            <li key={key} className={`${styles.feature} ${open ? styles.featureOpen : ""}`}>
              <button
                type="button"
                className={styles.featureToggle}
                onClick={() => setOpenKey(open ? null : key)}
                aria-expanded={open}
              >
                <span className={`${styles.featureLvl} num`}>{f.lvl}</span>
                <span className={styles.featureName}>{f.name}</span>
                {(f.cost || f.action) && (
                  <span className={styles.featureMeta}>
                    {[f.cost, f.action].filter(Boolean).join(" · ")}
                  </span>
                )}
                <span className={styles.chevron} aria-hidden="true">
                  {open ? "−" : "+"}
                </span>
              </button>
              {/* Always rendered, hidden by class rather than unmounted, so
                  printing can reveal every description regardless of which
                  rows happened to be open on screen. */}
              <p
                className={`${styles.featureDesc} ${open ? "" : styles.collapsed}`}
              >
                {f.desc}
              </p>
            </li>
          );
        })}
      </ul>

      {upcoming.length > 0 && (
        <details className={styles.upcoming}>
          <summary>Upcoming ({upcoming.length})</summary>
          <ul>
            {upcoming.map((f) => (
              <li key={`${f.lvl}-${f.name}`}>
                <span className="num">Lv {f.lvl}</span> {f.name}
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
