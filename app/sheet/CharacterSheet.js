"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./sheet.module.css";
import ClassSigil from "../components/ClassSigil";
import { useCharacter } from "./useCharacter";
import {
  ABILITIES,
  CLASS_DATA,
  CLASS_ORDER,
  CLASS_SLUGS,
  fmt,
  mod,
  profBonus,
} from "./data";
import ResourceTracker from "./ResourceTracker";
import FeatureColumn from "./FeatureColumn";
import CheckList from "./CheckList";

const TABS = [
  { key: "actions", label: "Actions" },
  { key: "reference", label: "Reference" },
  { key: "notes", label: "Notes" },
];

export default function CharacterSheet() {
  const { character, loaded, update, setAbility, setClass, toggleIn, reset } =
    useCharacter();
  const [tab, setTab] = useState("actions");

  const cls = CLASS_DATA[character.classId];
  const sub = cls.subclasses?.[character.subclass] || null;
  const level = character.level;
  const pb = profBonus(level);

  const abilityMods = useMemo(() => {
    const out = {};
    for (const a of ABILITIES) out[a.key] = mod(character.abilities[a.key]);
    return out;
  }, [character.abilities]);

  const resourceMax = useMemo(() => {
    try {
      return cls.resourceMax(level, abilityMods);
    } catch {
      return 0;
    }
  }, [cls, level, abilityMods]);

  const loadout = useMemo(
    () => collectLoadout(cls, sub, character),
    [cls, sub, character]
  );

  return (
    <div data-class={character.classId} className={styles.sheet}>
      <div className={styles.glow} aria-hidden="true" />

      {/* ---------- Identity bar ---------- */}
      <header className={styles.identity}>
        <ClassSigil id={character.classId} className={styles.sigil} />
        <div className={styles.identityMain}>
          <input
            className={styles.nameInput}
            value={character.name}
            onChange={(e) => update({ name: e.target.value })}
            placeholder="Name your character"
            aria-label="Character name"
          />
          <div className={styles.identityMeta}>
            <Link href={`/classes/${CLASS_SLUGS[character.classId]}`}>
              {cls.eyebrow}
            </Link>
          </div>
        </div>

        <div className={styles.selects}>
          <label className={styles.field}>
            <span>Class</span>
            <select
              value={character.classId}
              onChange={(e) => setClass(e.target.value)}
            >
              {CLASS_ORDER.map((id) => (
                <option key={id} value={id}>
                  {CLASS_DATA[id].label}
                </option>
              ))}
            </select>
          </label>

          {cls.subclasses && (
            <label className={styles.field}>
              <span>{cls.subclassLabel}</span>
              <select
                value={character.subclass || ""}
                onChange={(e) => update({ subclass: e.target.value })}
              >
                {Object.entries(cls.subclasses).map(([key, s]) => (
                  <option key={key} value={key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className={styles.field}>
            <span>Level</span>
            <select
              value={level}
              onChange={(e) => update({ level: Number(e.target.value) })}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      {/* ---------- Dashboard ---------- */}
      <div className={styles.dashboard}>
        <section className={`${styles.card} ${styles.vitals}`}>
          <h2 className={styles.cardTitle}>Vitals</h2>
          <div className={styles.vitalsGrid}>
            <Vital
              label="HP"
              value={character.hpCur}
              onChange={(v) => update({ hpCur: v })}
            />
            <Vital
              label="Max HP"
              value={character.hpMax}
              onChange={(v) => update({ hpMax: v })}
            />
            <Vital label="AC" value={character.ac} onChange={(v) => update({ ac: v })} />
            <Vital
              label="Speed"
              value={character.speed}
              onChange={(v) => update({ speed: v })}
            />
            <div className={styles.vitalStatic}>
              <span className={styles.vitalLabel}>Prof</span>
              <span className={`${styles.vitalValue} num`}>{fmt(pb)}</span>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.abilities}`}>
          <h2 className={styles.cardTitle}>Ability Scores</h2>
          <div className={styles.abilityGrid}>
            {ABILITIES.map((a) => {
              const isKey = a.key === cls.primaryAbil;
              return (
                <div
                  key={a.key}
                  className={`${styles.ability} ${isKey ? styles.abilityKey : ""}`}
                >
                  <label htmlFor={`abil-${a.key}`}>
                    {a.label}
                    {isKey && <span aria-label=" (primary)"> ★</span>}
                  </label>
                  <input
                    id={`abil-${a.key}`}
                    type="number"
                    value={character.abilities[a.key]}
                    onChange={(e) => setAbility(a.key, clamp(e.target.value))}
                  />
                  <div className={`${styles.abilityMod} num`}>
                    {fmt(abilityMods[a.key])}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <ResourceTracker
          label={cls.resourceLabel}
          value={character.resource}
          max={resourceMax}
          buttons={cls.resourceButtons}
          profBonus={pb}
          onChange={(v) => update({ resource: v })}
        />

        <section className={`${styles.card} ${styles.loadoutCard}`}>
          <h2 className={styles.cardTitle}>Loadout</h2>
          {loadout.length === 0 ? (
            <p className={styles.empty}>
              Check feats and items in the Reference tab to pin them here.
            </p>
          ) : (
            <ul className={styles.loadoutList}>
              {loadout.map((entry) => (
                <li key={`${entry.bucket}-${entry.name}`}>
                  <span className={styles.loadoutName}>{entry.name}</span>
                  {entry.meta && (
                    <span className={styles.loadoutMeta}>{entry.meta}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* ---------- Tabs ---------- */}
      <nav className={styles.tabbar}>
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`${styles.tabbtn} ${tab === t.key ? styles.tabActive : ""}`}
            aria-pressed={tab === t.key}
          >
            {t.label}
          </button>
        ))}
        <button type="button" className={styles.resetBtn} onClick={reset}>
          Reset sheet
        </button>
      </nav>

      {tab === "actions" && (
        <div className={styles.columns}>
          <FeatureColumn
            title={`${cls.label} Features`}
            features={cls.generalFeatures}
            level={level}
          />
          {sub && (
            <FeatureColumn
              title={sub.colTitle || sub.label}
              features={sub.features}
              level={level}
            />
          )}
        </div>
      )}

      {tab === "reference" && (
        <div className={styles.columns}>
          <CheckList
            title="Feats"
            entries={[...(cls.generalFeats || []), ...((sub && sub.feats) || [])]}
            checked={character.feats}
            onToggle={(name) => toggleIn("feats", name)}
          />
          <CheckList
            title="Magic Items"
            entries={[...(cls.sharedItems || []), ...((sub && sub.items) || [])]}
            checked={character.items}
            onToggle={(name) => toggleIn("items", name)}
          />
        </div>
      )}

      {tab === "notes" && (
        <section className={`${styles.card} ${styles.notesCard}`}>
          <h2 className={styles.cardTitle}>Notes</h2>
          <textarea
            className={styles.notes}
            value={character.notes}
            onChange={(e) => update({ notes: e.target.value })}
            placeholder="Session notes, bonds, whatever you need to remember."
            rows={14}
          />
        </section>
      )}

      <p className={styles.storageNote}>
        {loaded
          ? "Saved automatically in this browser."
          : "Loading your saved sheet…"}
      </p>
    </div>
  );
}

function Vital({ label, value, onChange }) {
  return (
    <label className={styles.vital}>
      <span className={styles.vitalLabel}>{label}</span>
      <input
        className={`${styles.vitalValue} num`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode="numeric"
      />
    </label>
  );
}

function clamp(v) {
  const n = parseInt(v, 10);
  if (Number.isNaN(n)) return 10;
  return Math.min(30, Math.max(1, n));
}

/* Checked feats/items are stored by name, so resolve them back against the
   currently selected class — a name checked under another class won't match. */
function collectLoadout(cls, sub, character) {
  const out = [];
  const feats = [...(cls.generalFeats || []), ...((sub && sub.feats) || [])];
  const items = [...(cls.sharedItems || []), ...((sub && sub.items) || [])];
  for (const f of feats) {
    if (character.feats[f.name]) out.push({ ...f, bucket: "feats" });
  }
  for (const i of items) {
    if (character.items[i.name]) out.push({ ...i, bucket: "items" });
  }
  return out;
}
