"use client";

import { useMemo, useState } from "react";
import styles from "./sheet.module.css";
import {
  RESONANT_TECHNIQUES,
  RESONANT_ELEMENTS,
  RESONANT_TIERS,
} from "./data/resonantTechniques";
import { RESONANT_CANTRIPS_KNOWN } from "./data/resonant";

/* Highest technique tier available by level, from the class table. */
const HIGHEST_TIER = [
  "1st", "1st", "2nd", "2nd", "3rd", "3rd", "4th", "4th", "5th", "5th",
  "6th", "6th", "7th", "7th", "8th", "8th", "9th", "9th", "9th", "9th",
];

const TIER_INDEX = Object.fromEntries(RESONANT_TIERS.map((t, i) => [t, i]));

/* The Resonant's four tracks run 0–5 and only reset at the end of combat.
   Flowing = all four within 1; Imbalanced = any track 3+ above another. */
function balanceState(tracks) {
  const vals = RESONANT_ELEMENTS.slice(0, 4).map((e) => tracks[e] || 0);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  if (max - min >= 3) return "Imbalanced";
  if (max - min <= 1) return "Flowing";
  return "Neutral";
}

export default function Techniques({
  level,
  known,
  tracks,
  onToggleKnown,
  onTracks,
}) {
  const [element, setElement] = useState(null);

  const maxTierIdx = TIER_INDEX[HIGHEST_TIER[Math.min(Math.max(level, 1), 20) - 1]];
  const ripplesKnownMax = RESONANT_CANTRIPS_KNOWN[Math.min(Math.max(level, 1), 20) - 1];

  const rippleCount = Object.keys(known).filter((n) =>
    RESONANT_TECHNIQUES.some((t) => t.name === n && t.tier === "Ripple")
  ).length;
  const atRippleCap = rippleCount >= ripplesKnownMax;

  const state = balanceState(tracks);
  const vals = RESONANT_ELEMENTS.slice(0, 4).map((e) => tracks[e] || 0);
  const lowest = RESONANT_ELEMENTS.slice(0, 4)[vals.indexOf(Math.min(...vals))];

  const readied = useMemo(
    () => RESONANT_TECHNIQUES.filter((t) => known[t.name]),
    [known]
  );

  const visible = RESONANT_TECHNIQUES.filter(
    (t) => !element || t.element === element
  );

  function setTrack(el, value) {
    onTracks({ ...tracks, [el]: Math.max(0, Math.min(5, value)) });
  }

  return (
    <div className={styles.spellcasting}>
      {/* ---------- Harmony Tracks ---------- */}
      <section className={`${styles.card} ${styles.tracksCard}`}>
        <div className={styles.slotsHead}>
          <h2 className={styles.cardTitle}>Harmony Tracks</h2>
          <span
            className={`${styles.balanceTag} ${
              state === "Flowing"
                ? styles.balanceFlowing
                : state === "Imbalanced"
                  ? styles.balanceImbalanced
                  : ""
            }`}
          >
            {state}
          </span>
        </div>

        <div className={styles.trackRows}>
          {RESONANT_ELEMENTS.slice(0, 4).map((el) => {
            const v = tracks[el] || 0;
            const locked = state === "Imbalanced" && el === lowest;
            return (
              <div key={el} className={styles.trackRow}>
                <span className={styles.trackLabel}>
                  {el}
                  {locked && <span className={styles.lockedTag}>locked</span>}
                </span>
                <div className={styles.pips}>
                  {Array.from({ length: 5 }, (_, i) => {
                    const filled = i < v;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setTrack(el, filled && i === v - 1 ? i : i + 1)}
                        className={`${styles.pip} ${filled ? styles.pipFilled : ""}`}
                        aria-label={`Set ${el} track to ${i + 1}`}
                      />
                    );
                  })}
                </div>
                <span className={`${styles.trackCount} num`}>{v}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.resourceButtons}>
          <button
            type="button"
            className={styles.smallBtn}
            onClick={() => onTracks({ Fire: 0, Earth: 0, Water: 0, Air: 0 })}
          >
            Combat ends (reset)
          </button>
        </div>

        <p className={styles.trackerNote}>
          {state === "Flowing"
            ? "All four within 1 — techniques deal an extra 1d6, and many gain a Flowing rider."
            : state === "Imbalanced"
              ? `${lowest} is locked until you restore balance, and your highest element backlashes per your Path.`
              : "The warning zone — nothing happens here, either good or bad."}
        </p>
      </section>

      {/* ---------- Readied ---------- */}
      <section className={`${styles.card} ${styles.readiedCard}`}>
        <h2 className={styles.cardTitle}>Readied</h2>
        {readied.length === 0 ? (
          <p className={styles.empty}>
            Nothing known yet — tick techniques below and they collect here.
          </p>
        ) : (
          <ul className={styles.readiedList}>
            {readied.map((t) => (
              <li key={t.name} className={styles.readiedItem}>
                <div className={styles.readiedHead}>
                  <span className={styles.readiedName}>{t.name}</span>
                  <span className={styles.readiedTier}>
                    {t.element} · {t.tier === "Ripple" ? "Ripple" : `${t.tier} · ${t.cost} pts`}
                  </span>
                </div>
                <p className={styles.readiedDesc}>{t.desc}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ---------- Technique list ---------- */}
      <section className={`${styles.card} ${styles.preparedCard}`}>
        <div className={styles.slotsHead}>
          <h2 className={styles.cardTitle}>Techniques</h2>
          <span className={`${styles.trackerCount} num`}>
            Ripples {rippleCount} / {ripplesKnownMax}
          </span>
        </div>
        <p className={styles.trackerNote}>
          Every element is available from 1st level — the limit is your highest
          tier ({HIGHEST_TIER[Math.min(Math.max(level, 1), 20) - 1]}) and the
          Ripples you know. Everything above Ripple spends Harmony Points.
        </p>

        <div className={styles.chips} style={{ margin: "12px 0 4px" }}>
          {RESONANT_ELEMENTS.map((el) => (
            <button
              key={el}
              type="button"
              className={`${styles.smallBtn} ${element === el ? styles.smallBtnOn : ""}`}
              onClick={() => setElement(element === el ? null : el)}
            >
              {el}
            </button>
          ))}
        </div>

        {RESONANT_TIERS.map((tier) => {
          const inTier = visible.filter((t) => t.tier === tier);
          if (!inTier.length) return null;
          const tierLocked = TIER_INDEX[tier] > maxTierIdx;

          return (
            <div key={tier} className={styles.spellTier}>
              <h3 className={styles.entryGroupTitle}>
                {tier === "Ripple" ? "Ripples (at-will)" : `${tier} Tier`}
                {tierLocked && (
                  <span className={styles.lockedTag}>
                    unlocks later
                  </span>
                )}
              </h3>
              <ul className={styles.checkList}>
                {inTier.map((t) => {
                  const isKnown = !!known[t.name];
                  const disabled =
                    tierLocked ||
                    (t.tier === "Ripple" && !isKnown && atRippleCap);
                  return (
                    <li key={t.name} className={styles.checkItem}>
                      <div className={styles.checkRow}>
                        <input
                          type="checkbox"
                          checked={isKnown}
                          disabled={disabled}
                          onChange={() => onToggleKnown(t.name)}
                          aria-label={`Know ${t.name}`}
                        />
                        <span className={styles.checkBody}>
                          <span className={styles.checkName}>{t.name}</span>
                          <span className={styles.checkMeta}>
                            {t.element}
                            {t.cost > 0 ? ` · ${t.cost} pts` : " · free"}
                            {t.shape ? ` · ${t.shape}` : ""}
                          </span>
                          <span className={styles.checkDesc}>{t.desc}</span>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}
