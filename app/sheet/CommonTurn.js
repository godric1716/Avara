"use client";

import { useMemo } from "react";
import styles from "./sheet.module.css";

/* Slots in the order a turn actually resolves. */
const SLOTS = [
  { key: "action", label: "Action" },
  { key: "bonus", label: "Bonus Action" },
  { key: "reaction", label: "Reaction" },
  { key: "free", label: "Free / Movement" },
];

/* Features carry an `action` string like "Bonus action or Reaction" or
   "Action · 1/short rest". Read it rather than maintaining parallel turn
   text, so this panel can never drift from the class data. */
function slotsFor(feature) {
  const a = (feature.action || "").toLowerCase();
  // Some free abilities record their timing in `cost` instead ("0, once/turn"),
  // so both fields are read before deciding a feature has no timing at all.
  const c = (feature.cost || "").toLowerCase();
  const timing = `${a} ${c}`;

  const out = [];
  if (a.includes("bonus")) out.push("bonus");
  if (a.includes("reaction")) out.push("reaction");
  // "Attack action" and plain "Action" both occupy the action slot, but
  // "Bonus action" must not be double-counted.
  if (/(^|[^s])\baction\b/.test(a.replace(/bonus action/g, ""))) out.push("action");
  if (/free|once\/turn|movement|always on/.test(timing)) out.push("free");

  return [...new Set(out)];
}

/* The recovery label has to come from how the pool actually behaves, not from
   resourceRecoveryType alone — the Devourer rests to *empty*, and telling a
   player it refills would invert the class's core mechanic. */
function economyNote(cls) {
  if (cls.resourceRecoveryType === "deathknight-turns") {
    return "it builds during the fight and resets when combat ends, so holding it back between fights gains you nothing.";
  }
  const emptiesOnRest = (cls.resourceButtons || []).some(
    (b) => b.tag === "reset-zero"
  );
  if (emptiesOnRest) {
    return "it starts empty after every long rest and fills only through combat, so the opening round is about generating, not spending.";
  }
  return "it refills on a rest, so treat it as a per-fight budget.";
}

/* Dice expressions pulled straight out of the rules text, so the report shows
   real numbers without inventing any. */
const DICE = /\b\d+d\d+(?:\s*\+\s*[\w\s]{1,12}?(?=[,.;)]|$))?/g;

function diceIn(text) {
  if (!text) return [];
  const found = text.match(DICE) || [];
  return [...new Set(found.map((d) => d.replace(/\s+/g, " ").trim()))].slice(0, 4);
}

export default function CommonTurn({
  cls,
  sub,
  level,
  resourceLabel,
  resourceMax,
  primaryAbil,
  abilityMods,
  profBonus,
}) {
  const buckets = useMemo(() => {
    const all = [
      ...(cls.generalFeatures || []).map((f) => ({ ...f, source: cls.label })),
      ...((sub && sub.features) || []).map((f) => ({
        ...f,
        source: sub.colTitle || sub.label,
      })),
    ].filter((f) => (f.lvl || 1) <= level);

    const out = { action: [], bonus: [], reaction: [], free: [] };
    for (const f of all) {
      for (const s of slotsFor(f)) out[s].push(f);
    }
    return out;
  }, [cls, sub, level]);

  const attacks = level >= 5 ? 2 : 1;
  const primaryMod = abilityMods[primaryAbil] ?? 0;
  const hasAny = SLOTS.some((s) => buckets[s.key].length > 0);

  return (
    <section className={styles.report}>
      <header className={styles.reportHead}>
        <div>
          <span className={styles.reportEyebrow}>Turn Report</span>
          <h2 className={styles.reportTitle}>
            {cls.label}
            {sub ? ` · ${sub.label}` : ""} · Level {level}
          </h2>
        </div>
        <dl className={styles.reportStats}>
          <div>
            <dt>Attacks</dt>
            <dd className="num">{attacks}</dd>
          </div>
          <div>
            <dt>{primaryAbil.toUpperCase()}</dt>
            <dd className="num">
              {primaryMod >= 0 ? `+${primaryMod}` : primaryMod}
            </dd>
          </div>
          <div>
            <dt>Prof</dt>
            <dd className="num">+{profBonus}</dd>
          </div>
          <div>
            <dt>{resourceLabel}</dt>
            <dd className="num">{resourceMax}</dd>
          </div>
        </dl>
      </header>

      {!hasAny && (
        <p className={styles.empty}>
          No timed abilities online yet at this level — your turn is a weapon
          attack and movement.
        </p>
      )}

      {SLOTS.map((slot) => {
        const entries = buckets[slot.key];
        if (!entries.length) return null;
        return (
          <div key={slot.key} className={styles.reportRow}>
            <div className={styles.reportSlot}>
              <span>{slot.label}</span>
              <span className={`${styles.reportCount} num`}>
                {entries.length}
              </span>
            </div>
            <div className={styles.reportEntries}>
              {entries.map((f) => {
                const dice = diceIn(f.desc);
                return (
                  <div key={`${f.lvl}-${f.name}`} className={styles.reportEntry}>
                    <div className={styles.reportEntryHead}>
                      <span className={styles.reportName}>{f.name}</span>
                      {f.cost && (
                        <span className={styles.reportCost}>{f.cost}</span>
                      )}
                      <span className={`${styles.reportLvl} num`}>L{f.lvl}</span>
                    </div>
                    {dice.length > 0 && (
                      <div className={styles.reportDice}>
                        {dice.map((d) => (
                          <span key={d} className={`${styles.die} num`}>
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className={styles.reportDesc}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <footer className={styles.reportFoot}>
        <span className={styles.reportSlot}>Round economy</span>
        <p className={styles.reportDesc}>
          {cls.resourceLabel} pool at this level is <strong>{resourceMax}</strong>
          {" — "}
          {economyNote(cls)}
        </p>
      </footer>
    </section>
  );
}
