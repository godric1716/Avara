"use client";

import styles from "./sheet.module.css";
import {
  DEVOURER_SPELL_SLOTS,
  DEVOURER_SPELLS,
  DEVOURER_STANDARD_SPELLS,
} from "./data/devourer";

const TIER_LABELS = ["Cantrips", "1st Level", "2nd Level", "3rd Level", "4th Level", "5th Level"];

function levelFromMeta(meta) {
  if (/cantrip/i.test(meta || "")) return 0;
  const m = (meta || "").match(/(\d)(st|nd|rd|th)/);
  return m ? Number(m[1]) : 0;
}

/* Custom spells (full mechanical text) and standard spells (names only —
   they're ordinary 5e spells, not ours to reproduce) merged into one list
   per tier so prepared selection covers both. */
function spellsByTier() {
  const byTier = TIER_LABELS.map(() => []);

  for (const s of DEVOURER_SPELLS) {
    byTier[levelFromMeta(s.meta)].push({
      name: s.name,
      meta: s.meta,
      desc: s.desc,
      custom: true,
    });
  }
  Object.entries(DEVOURER_STANDARD_SPELLS).forEach(([tierLabel, names]) => {
    const idx = TIER_LABELS.indexOf(tierLabel);
    if (idx < 0) return;
    for (const name of names) {
      byTier[idx].push({ name, custom: false });
    }
  });

  return byTier;
}

const SPELLS_BY_TIER = spellsByTier();

export default function Spellcasting({ level, abilityMods, prepared, slotsUsed, onTogglePrepared, onSlotsChange }) {
  const chaMod = abilityMods.cha ?? 0;
  const preparedMax = Math.max(1, chaMod + Math.floor(level / 2));
  const preparedNonCantripCount = Object.keys(prepared).filter((name) => {
    const tier = SPELLS_BY_TIER.findIndex((t) => t.some((s) => s.name === name));
    return tier > 0;
  }).length;
  const atCap = preparedNonCantripCount >= preparedMax;

  // Flatten every ticked spell, cantrips first, for the Readied card.
  const preparedList = SPELLS_BY_TIER.flatMap((tierSpells, tier) =>
    tierSpells.filter((s) => prepared[s.name]).map((s) => ({ ...s, tier }))
  );

  const slots = DEVOURER_SPELL_SLOTS[Math.min(Math.max(level, 1), 20) - 1];
  const activeSlotLevels = slots
    .map((max, i) => ({ lvl: i + 1, max }))
    .filter((s) => s.max > 0);

  function setUsed(lvl, value) {
    onSlotsChange({ ...slotsUsed, [lvl]: Math.max(0, Math.min(slots[lvl - 1], value)) });
  }

  return (
    <div className={styles.spellcasting}>
      <section className={`${styles.card} ${styles.spellSlotsCard}`}>
        <div className={styles.slotsHead}>
          <h2 className={styles.cardTitle}>Spell Slots</h2>
          <button
            type="button"
            className={styles.smallBtn}
            onClick={() => onSlotsChange({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })}
          >
            Long Rest (refill all)
          </button>
        </div>

        {activeSlotLevels.length === 0 ? (
          <p className={styles.empty}>No spell slots yet — spellcasting begins at 2nd level.</p>
        ) : (
          <div className={styles.slotLevels}>
            {activeSlotLevels.map(({ lvl, max }) => {
              const used = Math.min(slotsUsed[lvl] || 0, max);
              return (
                <div key={lvl} className={styles.slotLevelRow}>
                  <span className={styles.slotLevelLabel}>
                    {lvl === 1 ? "1st" : lvl === 2 ? "2nd" : lvl === 3 ? "3rd" : `${lvl}th`}
                  </span>
                  <div className={styles.pips}>
                    {Array.from({ length: max }, (_, i) => {
                      const filled = i < used;
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setUsed(lvl, filled && i === used - 1 ? i : i + 1)}
                          className={`${styles.pip} ${filled ? styles.pipFilled : ""}`}
                          aria-label={`Set level ${lvl} slots used to ${i + 1}`}
                        />
                      );
                    })}
                  </div>
                  <span className={`${styles.slotLevelCount} num`}>
                    {max - used} / {max}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* What you actually reach for mid-turn: everything ticked below,
          pulled to the top so it isn't buried in the full list. */}
      <section className={`${styles.card} ${styles.readiedCard}`}>
        <h2 className={styles.cardTitle}>Readied</h2>
        {preparedList.length === 0 ? (
          <p className={styles.empty}>
            Nothing prepared yet — tick spells below and they collect here.
          </p>
        ) : (
          <ul className={styles.readiedList}>
            {preparedList.map((s) => (
              <li key={s.name} className={styles.readiedItem}>
                <div className={styles.readiedHead}>
                  <span className={styles.readiedName}>{s.name}</span>
                  <span className={styles.readiedTier}>
                    {s.tier === 0 ? "Cantrip" : TIER_LABELS[s.tier]}
                  </span>
                </div>
                {s.desc && <p className={styles.readiedDesc}>{s.desc}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={`${styles.card} ${styles.preparedCard}`}>
        <div className={styles.slotsHead}>
          <h2 className={styles.cardTitle}>Prepared Spells</h2>
          <span className={`${styles.trackerCount} num`}>
            {preparedNonCantripCount} / {preparedMax}
          </span>
        </div>
        <p className={styles.trackerNote}>
          CHA modifier + half your Devourer level (minimum 1). Cantrips don&rsquo;t count
          against the cap.
        </p>

        {SPELLS_BY_TIER.map((tierSpells, tierIdx) => {
          if (tierSpells.length === 0) return null;
          return (
            <div key={TIER_LABELS[tierIdx]} className={styles.spellTier}>
              <h3 className={styles.entryGroupTitle}>{TIER_LABELS[tierIdx]}</h3>
              <ul className={styles.checkList}>
                {tierSpells.map((s) => {
                  const isChecked = !!prepared[s.name];
                  const disabled = tierIdx > 0 && !isChecked && atCap;
                  return (
                    <li key={s.name} className={styles.checkItem}>
                      <label className={disabled ? styles.checkItemDisabled : undefined}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={disabled}
                          onChange={() => onTogglePrepared(s.name)}
                        />
                        <span className={styles.checkBody}>
                          <span className={styles.checkName}>{s.name}</span>
                          {s.meta && <span className={styles.checkMeta}>{s.meta}</span>}
                          {s.custom && s.desc && (
                            <span className={styles.checkDesc}>{s.desc}</span>
                          )}
                        </span>
                      </label>
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
