"use client";

import { useState } from "react";
import styles from "./sheet.module.css";
import {
  MIRROR_SLOTS_MAX,
  REFLECTION_SLOTS_MAX,
} from "./data/mirrorwarden";
import {
  DEVOURER_META_USES,
  DEVOURER_META_MAX_ROUNDS,
} from "./data/devourer";

/* The per-class tracker that doesn't fit the single resource pool: the
   Mirrorwarden's vault, the Devourer's transformation clock, and the
   subclass-specific target lists. Returns null for classes that need none. */
export default function SecondaryTracker({
  classId,
  subclass,
  level,
  lists,
  counters,
  onLists,
  onCounters,
}) {
  const config = configFor(classId, subclass, level);
  if (!config) return null;

  return (
    <section className={`${styles.card} ${styles.secondaryCard}`}>
      <h2 className={styles.cardTitle}>{config.title}</h2>

      {config.counters?.map((c) => (
        <Counter
          key={c.key}
          label={c.label}
          note={c.note}
          value={counters[c.key] || 0}
          max={c.max}
          onChange={(v) => onCounters({ ...counters, [c.key]: v })}
        />
      ))}

      {config.lists?.map((l) => (
        <TagList
          key={l.key}
          label={l.label}
          note={l.note}
          max={l.max}
          entries={lists[l.key] || []}
          onChange={(next) => onLists({ ...lists, [l.key]: next })}
        />
      ))}
    </section>
  );
}

function configFor(classId, subclass, level) {
  const i = Math.min(Math.max(level, 1), 20) - 1;

  if (classId === "mirrorwarden") {
    return {
      title: "The Vault",
      lists: [
        {
          key: "mirror",
          label: "Mirror Slots",
          max: MIRROR_SLOTS_MAX[i],
          note: "Permanent until you overwrite them.",
        },
        {
          key: "reflection",
          label: "Reflection Slots",
          max: REFLECTION_SLOTS_MAX[i],
          note: "Clear at the end of combat.",
        },
      ],
    };
  }

  if (classId === "devourer") {
    return {
      title: "Void Metamorphosis",
      counters: [
        {
          key: "metaRounds",
          label: "Rounds active",
          max: DEVOURER_META_MAX_ROUNDS(level),
          note: "Spending Fragments on a class feature extends it.",
        },
        {
          key: "metaUses",
          label: "Uses spent",
          max: DEVOURER_META_USES(level),
          note: "Refills on a long rest.",
        },
      ],
    };
  }

  if (classId === "deathknight" && subclass === "unholy" && level >= 1) {
    return {
      title: "The Risen Court",
      lists: [
        { key: "festering", label: "Festering targets", note: "A creature either is or isn't — reapplying does nothing." },
        { key: "risen", label: "Risen & skeletons", note: "Track what's on the field." },
      ],
    };
  }

  if (classId === "sovereign" && subclass === "pyre" && level >= 7) {
    return {
      title: "The Grave Pyre",
      counters: [
        {
          key: "charge",
          label: "Charge dice held",
          max: 6,
          note: "Cap equals your proficiency bonus. Released on a Severance hit.",
        },
      ],
      lists: [{ key: "ignited", label: "Ignited creatures", note: "Consumed when the charge detonates." }],
    };
  }

  if (classId === "sovereign" && subclass === "vessels" && level >= 3) {
    return {
      title: "Carved Vessels",
      counters: [
        {
          key: "vessels",
          label: "Vessels intact",
          max: 6,
          note: "One per proficiency bonus. Shatter one to reduce damage; gone until a long rest.",
        },
      ],
    };
  }

  return null;
}

function Counter({ label, note, value, max, onChange }) {
  return (
    <div className={styles.tracker}>
      <div className={styles.trackerHead}>
        <span className={styles.trackerLabel}>{label}</span>
        <span className={`${styles.trackerCount} num`}>
          {value} / {max}
        </span>
      </div>
      <div className={styles.stepper}>
        <button type="button" onClick={() => onChange(Math.max(0, value - 1))}>
          −
        </button>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))}>
          +
        </button>
        {value > 0 && (
          <button
            type="button"
            className={styles.smallBtn}
            onClick={() => onChange(0)}
          >
            Clear
          </button>
        )}
      </div>
      {note && <p className={styles.trackerNote}>{note}</p>}
    </div>
  );
}

function TagList({ label, note, max, entries, onChange }) {
  const [draft, setDraft] = useState("");
  const full = typeof max === "number" && entries.length >= max;

  function add(e) {
    e.preventDefault();
    const v = draft.trim();
    if (!v || full) return;
    onChange([...entries, v]);
    setDraft("");
  }

  return (
    <div className={styles.tracker}>
      <div className={styles.trackerHead}>
        <span className={styles.trackerLabel}>{label}</span>
        {typeof max === "number" && (
          <span className={`${styles.trackerCount} num`}>
            {entries.length} / {max}
          </span>
        )}
      </div>

      <form onSubmit={add} className={styles.trackerForm}>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={full ? "Full" : "Add…"}
          disabled={full}
          aria-label={`Add to ${label}`}
        />
        <button type="submit" className={styles.smallBtn} disabled={full}>
          Add
        </button>
      </form>

      {entries.length > 0 && (
        <ul className={styles.tagList}>
          {entries.map((t, idx) => (
            <li key={`${t}-${idx}`}>
              <span>{t}</span>
              <button
                type="button"
                onClick={() => onChange(entries.filter((_, j) => j !== idx))}
                aria-label={`Remove ${t}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {note && <p className={styles.trackerNote}>{note}</p>}
    </div>
  );
}
