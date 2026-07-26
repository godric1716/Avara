"use client";

import styles from "./sheet.module.css";
import {
  POKEDEX_ALL,
  POKEDEX_STARTERS,
  POKEDEX_LEGENDARY,
} from "./data/pokedex";

/* Roster slots. The Legendary sits outside the four-companion limit — it is
   awarded narratively and counts as a Starter for Mega and Bond. */
export const FK_SLOTS = [
  { key: "starter", label: "Starter Companion", unlock: 1, starterOnly: true },
  { key: "second", label: "2nd Companion", unlock: 3 },
  { key: "third", label: "3rd Companion", unlock: 7 },
  { key: "fourth", label: "4th Companion", unlock: 12 },
  {
    key: "legendary",
    label: "Legendary (Master Ball)",
    unlock: 1,
    legendaryOnly: true,
    note: "Doesn't count against your four-companion roster. Awarded narratively by your DM — counts as a Starter for Mega, Bond, and Expanded Tome.",
  },
];

export function defaultSlots() {
  return FK_SLOTS.reduce((acc, s) => {
    acc[s.key] = { line: null, hpCur: "", mega: false };
    return acc;
  }, {});
}

/* Only the Starter and the Legendary can Mega or gain a Bond. */
function isStarterLike(slotKey) {
  return slotKey === "starter" || slotKey === "legendary";
}

function stageFor(line, level) {
  const idx = level < 5 ? 0 : level < 10 ? 1 : 2;
  return Math.min(idx, line.stages.length - 1);
}

export default function Companions({
  level,
  subclass,
  slots,
  activeSlot,
  onSlotsChange,
  onActiveChange,
}) {
  function setSlot(key, patch) {
    onSlotsChange({ ...slots, [key]: { ...slots[key], ...patch } });
  }

  return (
    <div className={styles.companions}>
      {FK_SLOTS.map((slot) => {
        const state = slots[slot.key] || { line: null, hpCur: "", mega: false };
        const locked = level < slot.unlock;
        const options = slot.legendaryOnly
          ? POKEDEX_LEGENDARY
          : slot.starterOnly
            ? POKEDEX_STARTERS
            : POKEDEX_ALL;
        const line = state.line
          ? options.find((l) => l.key === state.line)
          : null;

        return (
          <section key={slot.key} className={`${styles.card} ${styles.slot}`}>
            <div className={styles.slotHead}>
              <h2 className={styles.cardTitle}>{slot.label}</h2>
              {!locked && line && (
                <button
                  type="button"
                  className={`${styles.smallBtn} ${
                    activeSlot === slot.key ? styles.smallBtnOn : ""
                  }`}
                  onClick={() =>
                    onActiveChange(activeSlot === slot.key ? null : slot.key)
                  }
                >
                  {activeSlot === slot.key ? "On the field" : "Set active"}
                </button>
              )}
            </div>

            {locked ? (
              <p className={styles.empty}>Unlocks at level {slot.unlock}.</p>
            ) : (
              <>
                {slot.note && <p className={styles.slotNote}>{slot.note}</p>}

                <select
                  className={styles.companionSelect}
                  value={state.line || ""}
                  onChange={(e) =>
                    setSlot(slot.key, {
                      line: e.target.value || null,
                      hpCur: "",
                      mega: false,
                    })
                  }
                  aria-label={`Choose a companion for ${slot.label}`}
                >
                  <option value="">— choose a line —</option>
                  {options.map((l) => (
                    <option key={l.key} value={l.key}>
                      {l.name}
                    </option>
                  ))}
                </select>

                {line ? (
                  <StatBlock
                    line={line}
                    slotKey={slot.key}
                    level={level}
                    subclass={subclass}
                    state={state}
                    onSet={(patch) => setSlot(slot.key, patch)}
                  />
                ) : (
                  <p className={styles.empty}>
                    No companion inscribed in this slot yet.
                  </p>
                )}
              </>
            )}
          </section>
        );
      })}
    </div>
  );
}

function StatBlock({ line, slotKey, level, subclass, state, onSet }) {
  const idx = stageFor(line, level);
  const canMega = isStarterLike(slotKey) && line.mega && level >= 11;
  const megaOn = canMega && state.mega;
  const d = megaOn ? line.mega : line.stages[idx];
  const showBond =
    subclass === "bonded" && isStarterLike(slotKey) && level >= 9 && d.bond;

  return (
    <div className={styles.statBlock}>
      <div className={styles.companionMeta}>
        {line.types} · {line.role}
        {line.megaLabel ? ` · ${line.megaLabel}` : ""}
      </div>
      {line.flavor && <p className={styles.companionFlavor}>{line.flavor}</p>}

      <div className={styles.statHead}>
        <h3 className={styles.statName}>{d.name}</h3>
        {canMega && (
          <button
            type="button"
            className={`${styles.smallBtn} ${megaOn ? styles.smallBtnOn : ""}`}
            onClick={() => onSet({ mega: !megaOn })}
          >
            {megaOn ? "End Mega" : "Mega"}
          </button>
        )}
      </div>
      <div className={styles.statSub}>
        {d.size}
        {d.note ? ` · ${d.note}` : ""}
      </div>

      <div className={styles.statGrid}>
        <Stat label="AC" value={d.ac} />
        <Stat
          label="HP"
          value={
            <input
              className={`${styles.hpInput} num`}
              value={state.hpCur}
              onChange={(e) => onSet({ hpCur: e.target.value })}
              placeholder={String(d.hp)}
              inputMode="numeric"
              aria-label={`${d.name} current hit points`}
            />
          }
          hint={`of ${d.hp}`}
        />
        <Stat label="Speed" value={d.speed} />
        <Stat label="Attack" value={d.atk} />
        <Stat label="Save DC" value={d.saveDC} />
        <Stat label="Abilities" value={d.ab} />
        <Stat label="Saves" value={d.saves} />
        {d.resist && d.resist !== "—" && <Stat label="Resists" value={d.resist} />}
        {d.cond && <Stat label="Cond. Immune" value={d.cond} />}
      </div>

      {d.atkNote && <p className={styles.statNote}>{d.atkNote}</p>}
      {megaOn && d.activation && (
        <p className={styles.statNote}>
          <strong>Activation.</strong> {d.activation}
        </p>
      )}

      <EntryList title="Traits" entries={d.traits} />
      <EntryList title="Actions" entries={d.actions} />

      {d.sig && (
        <div className={styles.entry}>
          <div className={styles.entryHead}>
            <span className={styles.entryName}>{d.sig.n}</span>
            {d.sig.cost && <span className={styles.entryTag}>{d.sig.cost}</span>}
          </div>
          <p className={styles.entryDesc}>{d.sig.d}</p>
        </div>
      )}

      {d.special?.length > 0 && <EntryList title="Special" entries={d.special} />}

      {showBond && (
        <div className={`${styles.entry} ${styles.bond}`}>
          <div className={styles.entryHead}>
            <span className={styles.entryName}>{d.bond.n}</span>
            <span className={styles.entryTag}>Bonded Pair</span>
          </div>
          <p className={styles.entryDesc}>{d.bond.d}</p>
        </div>
      )}

      {megaOn && d.endNote && <p className={styles.statNote}>{d.endNote}</p>}
    </div>
  );
}

function Stat({ label, value, hint }) {
  return (
    <div className={styles.statCell}>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>
        {value}
        {hint && <span className={styles.statHint}> {hint}</span>}
      </span>
    </div>
  );
}

function EntryList({ title, entries }) {
  if (!entries?.length) return null;
  return (
    <div className={styles.entryGroup}>
      <h4 className={styles.entryGroupTitle}>{title}</h4>
      {entries.map((e) => (
        <div key={e.n} className={styles.entry}>
          <div className={styles.entryHead}>
            <span className={styles.entryName}>{e.n}</span>
            {(e.tag || e.cost) && (
              <span className={styles.entryTag}>{e.tag || e.cost}</span>
            )}
          </div>
          {e.d && <p className={styles.entryDesc}>{e.d}</p>}
          {e.b && (
            <p className={styles.entryDesc}>
              <strong>Basic.</strong> {e.b}
            </p>
          )}
          {e.e && (
            <p className={styles.entryDesc}>
              <strong>Enhanced.</strong> {e.e}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
