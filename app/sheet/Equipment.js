"use client";

import { useState } from "react";
import styles from "./sheet.module.css";
import equipment from "./data/equipment.json";
import { fmt } from "./data";

const WEAPONS = equipment.weapons;
const ARMOR = equipment.armor;

/* Classes whose own features replace Strength/Dexterity on weapon attacks.
   The Devourer's Bound Pair and the Death Knight's Death's Mark both do this,
   so the sheet should default to the stat the character actually uses rather
   than making them notice and override it every time. */
const CLASS_ATTACK_ABILITY = {
  deathknight: "con",
  devourer: "cha",
  sovereign: "int",
};

const ABILITY_LABEL = { str: "STR", dex: "DEX", con: "CON", int: "INT", wis: "WIS", cha: "CHA" };

function isFinesse(weapon) {
  return (weapon?.properties || []).includes("Finesse");
}

/* Which ability a given weapon actually uses, honouring the class override,
   then finesse, then melee/ranged defaults. */
function abilityFor(weapon, classId, abilityMods, override) {
  if (override && override !== "auto") return override;

  const classAbility = CLASS_ATTACK_ABILITY[classId];
  if (classAbility) return classAbility;

  if (weapon?.range === "Ranged") return "dex";
  if (isFinesse(weapon)) {
    return (abilityMods.dex ?? 0) >= (abilityMods.str ?? 0) ? "dex" : "str";
  }
  return "str";
}

export default function Equipment({
  classId,
  abilityMods,
  profBonus,
  attacks,
  inventory,
  armorIndex,
  shieldEquipped,
  onAttacks,
  onInventory,
  onArmor,
  onShield,
}) {
  const [pickWeapon, setPickWeapon] = useState("");
  const [invDraft, setInvDraft] = useState("");

  const armor = ARMOR.find((a) => a.index === armorIndex) || null;
  const dexMod = abilityMods.dex ?? 0;

  /* Armor Class from the equipped armor, capped Dex where the armor says so.
     Unarmored is the plain 10 + Dex baseline — several classes replace this
     with their own formula, which is why the note below says so rather than
     the sheet pretending this is authoritative. */
  let ac = 10 + dexMod;
  if (armor) {
    const dexPart = armor.dexBonus
      ? armor.maxDexBonus !== null
        ? Math.min(dexMod, armor.maxDexBonus)
        : dexMod
      : 0;
    ac = armor.baseAC + dexPart;
  }
  if (shieldEquipped) ac += 2;

  function addAttack(index) {
    const w = WEAPONS.find((x) => x.index === index);
    if (!w) return;
    onAttacks([
      ...attacks,
      {
        id: `${index}-${Date.now()}`,
        index,
        name: w.name,
        ability: "auto",
        bonus: 0,
        damageBonus: 0,
        proficient: true,
        note: "",
      },
    ]);
    setPickWeapon("");
  }

  function patchAttack(id, patch) {
    onAttacks(attacks.map((a) => (a.id === id ? { ...a, ...patch } : a)));
  }

  function addInventory(e) {
    e.preventDefault();
    const v = invDraft.trim();
    if (!v) return;
    onInventory([...inventory, { id: `i-${Date.now()}`, text: v, qty: 1 }]);
    setInvDraft("");
  }

  return (
    <div className={styles.equipment}>
      {/* ---------------- Attacks ---------------- */}
      <section className={`${styles.card} ${styles.attacksCard}`}>
        <h2 className={styles.cardTitle}>Attacks</h2>

        <div className={styles.addRow}>
          <select
            value={pickWeapon}
            onChange={(e) => addAttack(e.target.value)}
            aria-label="Add a weapon"
            className={styles.companionSelect}
          >
            <option value="">Add a weapon…</option>
            <optgroup label="Simple">
              {WEAPONS.filter((w) => w.category === "Simple").map((w) => (
                <option key={w.index} value={w.index}>
                  {w.name} ({w.damageDice} {w.damageType})
                </option>
              ))}
            </optgroup>
            <optgroup label="Martial">
              {WEAPONS.filter((w) => w.category === "Martial").map((w) => (
                <option key={w.index} value={w.index}>
                  {w.name} ({w.damageDice} {w.damageType})
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {attacks.length === 0 ? (
          <p className={styles.empty}>
            No attacks yet. Add a weapon above and the to-hit and damage are
            worked out for you.
          </p>
        ) : (
          <ul className={styles.attackList}>
            {attacks.map((a) => {
              const w = WEAPONS.find((x) => x.index === a.index);
              const abil = abilityFor(w, classId, abilityMods, a.ability);
              const abilMod = abilityMods[abil] ?? 0;
              const toHit =
                abilMod + (a.proficient ? profBonus : 0) + Number(a.bonus || 0);
              const dmgMod = abilMod + Number(a.damageBonus || 0);
              const versatile = (w?.properties || []).includes("Versatile");

              return (
                <li key={a.id} className={styles.attackRow}>
                  <div className={styles.attackMain}>
                    <span className={styles.attackName}>{a.name}</span>
                    <span className={`${styles.attackLine} num`}>
                      {fmt(toHit)}
                      {"  "}
                      <span className={styles.attackDamage}>
                        {w?.damageDice}
                        {dmgMod !== 0 ? fmt(dmgMod) : ""} {w?.damageType?.toLowerCase()}
                      </span>
                    </span>
                    <span className={styles.attackMeta}>
                      {ABILITY_LABEL[abil]}
                      {w?.range === "Ranged" && w.rangeNormal
                        ? ` · ${w.rangeNormal}/${w.rangeLong} ft`
                        : ""}
                      {versatile ? " · versatile" : ""}
                      {(w?.properties || []).includes("Finesse") ? " · finesse" : ""}
                    </span>
                  </div>

                  <div className={styles.attackControls}>
                    <label className={styles.miniField}>
                      <span>Abil</span>
                      <select
                        value={a.ability}
                        onChange={(e) => patchAttack(a.id, { ability: e.target.value })}
                      >
                        <option value="auto">Auto</option>
                        {Object.entries(ABILITY_LABEL).map(([k, label]) => (
                          <option key={k} value={k}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={styles.miniField}>
                      <span>Hit</span>
                      <input
                        type="number"
                        value={a.bonus}
                        onChange={(e) => patchAttack(a.id, { bonus: e.target.value })}
                      />
                    </label>
                    <label className={styles.miniField}>
                      <span>Dmg</span>
                      <input
                        type="number"
                        value={a.damageBonus}
                        onChange={(e) =>
                          patchAttack(a.id, { damageBonus: e.target.value })
                        }
                      />
                    </label>
                    <label className={styles.miniCheck}>
                      <input
                        type="checkbox"
                        checked={a.proficient}
                        onChange={(e) =>
                          patchAttack(a.id, { proficient: e.target.checked })
                        }
                      />
                      <span>Prof</span>
                    </label>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={() => onAttacks(attacks.filter((x) => x.id !== a.id))}
                      aria-label={`Remove ${a.name}`}
                    >
                      ×
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* ---------------- Armor ---------------- */}
      <section className={`${styles.card} ${styles.armorCard}`}>
        <div className={styles.slotsHead}>
          <h2 className={styles.cardTitle}>Armor</h2>
          <span className={`${styles.acDisplay} num`}>AC {ac}</span>
        </div>

        <label className={styles.field}>
          <span>Worn</span>
          <select
            value={armorIndex || ""}
            onChange={(e) => onArmor(e.target.value || null)}
          >
            <option value="">Unarmored</option>
            {["Light", "Medium", "Heavy"].map((cat) => (
              <optgroup key={cat} label={cat}>
                {ARMOR.filter((a) => a.category === cat).map((a) => (
                  <option key={a.index} value={a.index}>
                    {a.name} (AC {a.baseAC}
                    {a.dexBonus
                      ? a.maxDexBonus !== null
                        ? ` + Dex max ${a.maxDexBonus}`
                        : " + Dex"
                      : ""}
                    )
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>

        <label className={styles.miniCheck} style={{ marginTop: "12px" }}>
          <input
            type="checkbox"
            checked={shieldEquipped}
            onChange={(e) => onShield(e.target.checked)}
          />
          <span>Shield (+2)</span>
        </label>

        {armor && (armor.strMinimum > 0 || armor.stealthDisadvantage) && (
          <p className={styles.trackerNote}>
            {armor.strMinimum > 0 ? `Requires STR ${armor.strMinimum}. ` : ""}
            {armor.stealthDisadvantage ? "Disadvantage on Stealth." : ""}
          </p>
        )}
        <p className={styles.trackerNote}>
          Several classes replace this with their own formula — the Sovereign&rsquo;s
          Deathless Frame and the Mirrorwarden&rsquo;s Unarmored Defense both do.
          Override in Vitals if so.
        </p>
      </section>

      {/* ---------------- Inventory ---------------- */}
      <section className={`${styles.card} ${styles.inventoryCard}`}>
        <h2 className={styles.cardTitle}>Inventory</h2>

        <form onSubmit={addInventory} className={styles.trackerForm}>
          <input
            value={invDraft}
            onChange={(e) => setInvDraft(e.target.value)}
            placeholder="Add an item…"
            aria-label="Add an inventory item"
          />
          <button type="submit" className={styles.smallBtn}>
            Add
          </button>
        </form>

        {inventory.length === 0 ? (
          <p className={styles.empty}>Nothing carried yet.</p>
        ) : (
          <ul className={styles.inventoryList}>
            {inventory.map((it) => (
              <li key={it.id}>
                <input
                  type="number"
                  className={`${styles.qtyInput} num`}
                  value={it.qty}
                  min="1"
                  onChange={(e) =>
                    onInventory(
                      inventory.map((x) =>
                        x.id === it.id ? { ...x, qty: e.target.value } : x
                      )
                    )
                  }
                  aria-label={`Quantity of ${it.text}`}
                />
                <input
                  className={styles.invText}
                  value={it.text}
                  onChange={(e) =>
                    onInventory(
                      inventory.map((x) =>
                        x.id === it.id ? { ...x, text: e.target.value } : x
                      )
                    )
                  }
                  aria-label={`Item name`}
                />
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => onInventory(inventory.filter((x) => x.id !== it.id))}
                  aria-label={`Remove ${it.text}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
