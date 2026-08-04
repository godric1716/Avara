"use client";

import styles from "./sheet.module.css";

/* Small pools read best as clickable pips; large ones (high-level Malice)
   would be a wall of dots, so those switch to a stepper. */
const PIP_LIMIT = 30;

export default function ResourceTracker({
  label,
  value,
  max,
  uncapped,
  buttons,
  profBonus,
  onChange,
}) {
  const safeMax = Math.max(0, max || 0);
  const current = uncapped
    ? Math.max(0, value || 0)
    : Math.min(value, safeMax);

  function applyButton(tag) {
    if (tag === "refill-full") onChange(uncapped ? current : safeMax);
    else if (tag === "reset-zero" || tag === "dk-reset") onChange(0);
    else if (tag === "refill-partial-prof")
      onChange(uncapped ? current + profBonus : Math.min(safeMax, current + profBonus));
  }

  /* A pool with no ceiling can't be pips or a bounded stepper. Bloodlust also
     arrives in whole hits — you bank 14 at once, not 1 — so ±5 is here to
     keep a big swing from being ten taps. */
  if (uncapped) {
    const step = (n) => onChange(Math.max(0, current + n));
    return (
      <section className={`${styles.card} ${styles.resourceCard}`}>
        <h2 className={styles.cardTitle}>{label}</h2>

        <div className={styles.resourceHead}>
          <span className={`${styles.resourceValue} num`}>{current}</span>
          <span className={styles.resourceMax}>no cap</span>
        </div>

        <div className={styles.stepper}>
          <button type="button" onClick={() => step(-5)} aria-label={`Lower ${label} by 5`}>
            −5
          </button>
          <button type="button" onClick={() => step(-1)} aria-label={`Lower ${label} by 1`}>
            −
          </button>
          <button type="button" onClick={() => step(1)} aria-label={`Raise ${label} by 1`}>
            +
          </button>
          <button type="button" onClick={() => step(5)} aria-label={`Raise ${label} by 5`}>
            +5
          </button>
        </div>

        {buttons?.length > 0 && (
          <div className={styles.resourceButtons}>
            {buttons.map((b) => (
              <button
                key={b.tag}
                type="button"
                className={styles.smallBtn}
                onClick={() => applyButton(b.tag)}
              >
                {b.label}
              </button>
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className={`${styles.card} ${styles.resourceCard}`}>
      <h2 className={styles.cardTitle}>{label}</h2>

      {safeMax === 0 ? (
        <p className={styles.empty}>
          Not available at this level yet.
        </p>
      ) : (
        <>
      <div className={styles.resourceHead}>
        <span className={`${styles.resourceValue} num`}>{current}</span>
        <span className={styles.resourceMax}>/ {safeMax}</span>
      </div>

      {safeMax <= PIP_LIMIT ? (
        <div className={styles.pips}>
          {Array.from({ length: safeMax }, (_, i) => {
            const filled = i < current;
            return (
              <button
                key={i}
                type="button"
                // Clicking the highest filled pip empties it, so a full pool
                // can be stepped back down one at a time.
                onClick={() => onChange(filled && i === current - 1 ? i : i + 1)}
                className={`${styles.pip} ${filled ? styles.pipFilled : ""}`}
                aria-label={`Set ${label} to ${i + 1}`}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.stepper}>
          <button type="button" onClick={() => onChange(Math.max(0, current - 1))}>
            −
          </button>
          <button
            type="button"
            onClick={() => onChange(Math.min(safeMax, current + 1))}
          >
            +
          </button>
        </div>
      )}

      {buttons?.length > 0 && (
        <div className={styles.resourceButtons}>
          {buttons.map((b) => (
            <button
              key={b.tag}
              type="button"
              className={styles.smallBtn}
              onClick={() => applyButton(b.tag)}
            >
              {b.label}
            </button>
          ))}
        </div>
      )}
        </>
      )}
    </section>
  );
}
