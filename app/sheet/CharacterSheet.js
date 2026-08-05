"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./sheet.module.css";
import { useCharacter } from "./useCharacter";
import {
  ABILITIES,
  CLASS_DATA,
  CLASS_ORDER,
  CLASS_SLUGS,
  fixedHitPoints,
  fmt,
  mod,
  profBonus,
} from "./data";
import { armorClassFor } from "./Equipment";
import ResourceTracker from "./ResourceTracker";
import FeatureColumn from "./FeatureColumn";
import CheckList from "./CheckList";
import Companions from "./Companions";
import CommonTurn from "./CommonTurn";
import SecondaryTracker from "./SecondaryTracker";
import ReferenceExtras from "./ReferenceExtras";
import Spellcasting from "./Spellcasting";
import Equipment from "./Equipment";
import Techniques from "./Techniques";
import Portrait from "./Portrait";
import Roster from "./Roster";

/* Only the two classes that actually cast get a spell tab. The Sovereign is
   explicitly "not a spellcaster" despite its Technique DC, and the
   Mirrorwarden's stored spells live in the Vault tracker rather than a list,
   since it steals them at the table instead of preparing from one. */
const TABS = [
  { key: "turn", label: "Common Turn" },
  { key: "actions", label: "Actions" },
  { key: "gear", label: "Gear" },
  { key: "companions", label: "Companions", classId: "fablekeeper" },
  { key: "spells", label: "Spells", classId: "devourer" },
  { key: "techniques", label: "Techniques", classId: "resonant" },
  { key: "reference", label: "Reference" },
  { key: "notes", label: "Notes" },
];

export default function CharacterSheet() {
  const {
    character,
    roster,
    loaded,
    syncState,
    update,
    setAbility,
    setClass,
    toggleIn,
    reset,
    selectCharacter,
    createCharacter,
    duplicateCharacter,
    deleteCharacter,
  } = useCharacter();
  const [tab, setTab] = useState("turn");

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

  /* Values the sheet can work out on its own. A blank field means "use this";
     typing anything overrides it, which is what the Recalculate button undoes. */
  const derived = useMemo(
    () => ({
      hpMax: fixedHitPoints(cls.hitDie, level, abilityMods.con ?? 0),
      ac: armorClassFor(character.armorIndex, abilityMods.dex ?? 0, character.shieldEquipped),
      speed: 30,
    }),
    [cls.hitDie, level, abilityMods, character.armorIndex, character.shieldEquipped]
  );

  const anyOverridden = ["hpMax", "ac", "speed"].some(
    (k) => String(character[k] ?? "").trim() !== ""
  );

  // Equipment builds the kit itself — it's the module that holds the weapon
  // table, so it can resolve display names the same way manual picks do.
  const applyKit = (patch) => update(patch);

  // Companions only exist for the Fablekeeper. If the class changes while that
  // tab is open, fall back rather than rendering an empty panel.
  const visibleTabs = TABS.filter(
    (t) => !t.classId || t.classId === character.classId
  );
  const activeTab = visibleTabs.some((t) => t.key === tab) ? tab : "turn";

  return (
    <div data-class={character.classId} className={styles.sheet}>
      <div className={styles.glow} aria-hidden="true" />

      <Roster
        roster={roster}
        onSelect={selectCharacter}
        onCreate={createCharacter}
        onDuplicate={duplicateCharacter}
        onDelete={deleteCharacter}
      />

      {/* ---------- Identity bar ---------- */}
      <header className={styles.identity}>
        <Portrait
          classId={character.classId}
          portrait={character.portrait}
          onChange={(portrait) => update({ portrait })}
        />
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
            {/* Editing somebody else's sheet should never be something you
                only realise afterwards. */}
            {character.mine === false && character.ownerName && (
              <span className={styles.ownerFlag}>
                {character.ownerName}&rsquo;s character
              </span>
            )}
            {character.updatedByName &&
              character.updatedByName !== character.ownerName && (
                <span className={styles.editedFlag}>
                  Last edited by {character.updatedByName}
                </span>
              )}
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
          <div className={styles.slotsHead}>
            <h2 className={styles.cardTitle}>Vitals</h2>
            {anyOverridden && (
              <button
                type="button"
                className={styles.smallBtn}
                onClick={() => update({ hpMax: "", ac: "", speed: "" })}
              >
                Recalculate
              </button>
            )}
          </div>
          <div className={styles.vitalsGrid}>
            <Vital
              label="HP"
              value={character.hpCur}
              computed={derived.hpMax}
              onChange={(v) => update({ hpCur: v })}
            />
            <Vital
              label="Max HP"
              value={character.hpMax}
              computed={derived.hpMax}
              onChange={(v) => update({ hpMax: v })}
            />
            <Vital
              label="AC"
              value={character.ac}
              computed={derived.ac}
              onChange={(v) => update({ ac: v })}
            />
            <Vital
              label="Speed"
              value={character.speed}
              computed={derived.speed}
              onChange={(v) => update({ speed: v })}
            />
            <div className={styles.vitalStatic}>
              <span className={styles.vitalLabel}>Prof</span>
              <span className={`${styles.vitalValue} num`}>{fmt(pb)}</span>
            </div>
          </div>
          <p className={styles.trackerNote}>
            Fixed HP for a {cls.label} — d{cls.hitDie} at 1st, then{" "}
            {cls.hitDie / 2 + 1} per level, plus CON each time. Features that
            raise your maximum outright aren&rsquo;t counted; type over any
            field to set your own.
          </p>
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
          uncapped={cls.resourceUncapped}
          buttons={cls.resourceButtons}
          profBonus={pb}
          onChange={(v) => update({ resource: v })}
        />

        <SecondaryTracker
          classId={character.classId}
          subclass={character.subclass}
          level={level}
          lists={character.tags}
          counters={character.counters}
          onLists={(tags) => update({ tags })}
          onCounters={(counters) => update({ counters })}
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
        <div className={styles.tabScroll}>
          {visibleTabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`${styles.tabbtn} ${activeTab === t.key ? styles.tabActive : ""}`}
              aria-pressed={activeTab === t.key}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button type="button" className={styles.resetBtn} onClick={reset}>
          Reset
        </button>
      </nav>

      {/* Every visible tab's panel is always mounted; only the active one is
          shown on screen (via .panelActive). Printing reveals all of them —
          see the @media print rules in sheet.module.css — so "export the
          sheet" produces the whole thing, not just whichever tab was open. */}
      {visibleTabs.map((t) => (
        <div
          key={t.key}
          className={`${styles.panel} ${activeTab === t.key ? styles.panelActive : ""}`}
        >
          <h2 className={styles.printOnlyHeading}>{t.label}</h2>

          {t.key === "turn" && (
            <CommonTurn
              cls={cls}
              sub={sub}
              level={level}
              resourceLabel={cls.resourceLabel}
              resourceMax={resourceMax}
              primaryAbil={cls.primaryAbil}
              abilityMods={abilityMods}
              profBonus={pb}
            />
          )}

          {t.key === "actions" && (
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

          {t.key === "gear" && (
            <Equipment
              classId={character.classId}
              subclass={character.subclass}
              abilityMods={abilityMods}
              profBonus={pb}
              attacks={character.attacks}
              inventory={character.inventory}
              armorIndex={character.armorIndex}
              shieldEquipped={character.shieldEquipped}
              onAttacks={(attacks) => update({ attacks })}
              onInventory={(inventory) => update({ inventory })}
              onArmor={(armorIndex) => update({ armorIndex })}
              onShield={(shieldEquipped) => update({ shieldEquipped })}
              onApplyKit={applyKit}
            />
          )}

          {t.key === "companions" && (
            <Companions
              level={level}
              subclass={character.subclass}
              slots={character.fkSlots}
              activeSlot={character.fkActive}
              onSlotsChange={(fkSlots) => update({ fkSlots })}
              onActiveChange={(fkActive) => update({ fkActive })}
            />
          )}

          {t.key === "spells" && (
            <Spellcasting
              level={level}
              abilityMods={abilityMods}
              prepared={character.spellsPrepared}
              slotsUsed={character.spellSlotsUsed}
              onTogglePrepared={(name) => toggleIn("spellsPrepared", name)}
              onSlotsChange={(spellSlotsUsed) => update({ spellSlotsUsed })}
            />
          )}

          {t.key === "techniques" && (
            <Techniques
              level={level}
              known={character.techniquesKnown}
              tracks={character.harmonyTracks}
              onToggleKnown={(name) => toggleIn("techniquesKnown", name)}
              onTracks={(harmonyTracks) => update({ harmonyTracks })}
            />
          )}

          {t.key === "reference" && (
            <div className={styles.columns}>
              <CheckList
                title="Feats"
                entries={[...(cls.generalFeats || []), ...((sub && sub.feats) || [])]}
                checked={character.feats}
                onToggle={(name) => toggleIn("feats", name)}
              />
              {/* A separate column only for classes that pick from a second
                  always-on pool alongside feats — the Unbroken's Instincts.
                  They share the `feats` bucket because names are unique
                  within a class and both behave the same way once taken. */}
              {cls.instincts && (
                <CheckList
                  title={cls.instinctsLabel || "Instincts"}
                  entries={[...cls.instincts, ...((sub && sub.instincts) || [])]}
                  checked={character.feats}
                  onToggle={(name) => toggleIn("feats", name)}
                />
              )}
              <CheckList
                title="Magic Items"
                entries={[...(cls.sharedItems || []), ...((sub && sub.items) || [])]}
                checked={character.items}
                onToggle={(name) => toggleIn("items", name)}
              />
              <ReferenceExtras classId={character.classId} level={level} />
            </div>
          )}

          {t.key === "notes" && (
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
        </div>
      ))}

      {/* Moved out of the tab bar: on a phone it was competing with the tabs
          for the same scroll strip, which made the tabs hard to reach. */}
      <div className={styles.pageActions}>
        <button
          type="button"
          className={styles.printBtn}
          onClick={() => window.print()}
        >
          Print / Save as PDF
        </button>
      </div>

      <p className={styles.storageNote}>
        {!loaded
          ? "Loading your saved sheet…"
          : syncState === "local"
            ? "Saved in this browser only — sign in to keep your characters across devices."
            : syncState === "error"
              ? "Couldn't reach the server. Your work is saved in this browser and will sync when it's back."
              : /* Said plainly rather than buried: players type private things
                   into the Notes tab, and they should know who can read it. */
                "Saved to your account, on every device. Your DM can see and edit your sheets."}
      </p>
    </div>
  );
}

/* A blank field shows the computed value as a placeholder and reports it as
   the character's actual number; anything typed wins and is marked as an
   override so it's obvious the sheet has stopped calculating that one. */
function Vital({ label, value, computed, onChange }) {
  const overridden = String(value ?? "").trim() !== "";
  return (
    <label className={`${styles.vital} ${overridden ? styles.vitalOverridden : ""}`}>
      <span className={styles.vitalLabel}>{label}</span>
      <input
        className={`${styles.vitalValue} num`}
        value={value}
        placeholder={computed !== undefined ? String(computed) : ""}
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
  const feats = [
    ...(cls.generalFeats || []),
    ...(cls.instincts || []),
    ...((sub && sub.feats) || []),
    ...((sub && sub.instincts) || []),
  ];
  const items = [...(cls.sharedItems || []), ...((sub && sub.items) || [])];
  for (const f of feats) {
    if (character.feats[f.name]) out.push({ ...f, bucket: "feats" });
  }
  for (const i of items) {
    if (character.items[i.name]) out.push({ ...i, bucket: "items" });
  }
  return out;
}
