"use client";

import styles from "./sheet.module.css";

export default function FeatureColumn({ title, features, level }) {
  const list = features || [];
  const available = list.filter((f) => (f.lvl || 1) <= level);
  const upcoming = list.filter((f) => (f.lvl || 1) > level);

  return (
    <section className={`${styles.card} ${styles.column}`}>
      <h2 className={styles.cardTitle}>{title}</h2>

      {available.length === 0 && (
        <p className={styles.empty}>Nothing unlocked at this level yet.</p>
      )}

      <ul className={styles.featureList}>
        {available.map((f) => (
          <li key={`${f.lvl}-${f.name}`} className={styles.feature}>
            <div className={styles.featureHead}>
              <span className={`${styles.featureLvl} num`}>{f.lvl}</span>
              <h3 className={styles.featureName}>{f.name}</h3>
            </div>
            {(f.cost || f.action) && (
              <div className={styles.featureMeta}>
                {[f.cost, f.action].filter(Boolean).join(" · ")}
              </div>
            )}
            <p className={styles.featureDesc}>{f.desc}</p>
          </li>
        ))}
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
