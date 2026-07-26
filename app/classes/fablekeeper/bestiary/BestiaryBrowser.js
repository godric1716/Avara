"use client";

import { useMemo, useState } from "react";
import styles from "./bestiary.module.css";
import { POKEDEX_ALL } from "../../../sheet/data/pokedex";

const PAGE = 24;

/* Roles carry flavor suffixes on Legendaries ("Striker — The Apex Predator");
   filter on the base word before the dash so "Striker" catches both. */
function baseRole(role) {
  return role.split(" — ")[0].split(" / ")[0];
}

const ROLES = [...new Set(POKEDEX_ALL.map((l) => baseRole(l.role)))].sort();
const TYPES = [...new Set(POKEDEX_ALL.flatMap((l) => l.types.split(" / ")))].sort();

const CATEGORIES = [
  { key: "starter", label: "Starters" },
  { key: "caught", label: "Caught" },
  { key: "legendary", label: "Legendary" },
];

function categoryOf(line) {
  if (line.isLegendary) return "legendary";
  if (line.isStarter) return "starter";
  return "caught";
}

export default function BestiaryBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(null);
  const [role, setRole] = useState(null);
  const [type, setType] = useState(null);
  const [limit, setLimit] = useState(PAGE);
  const [openKey, setOpenKey] = useState(null);
  const [stageByKey, setStageByKey] = useState({});
  const [megaByKey, setMegaByKey] = useState({});

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POKEDEX_ALL.filter((l) => {
      if (category && categoryOf(l) !== category) return false;
      if (role && baseRole(l.role) !== role) return false;
      if (type && !l.types.split(" / ").includes(type)) return false;
      if (!q) return true;
      return l.name.toLowerCase().includes(q) || l.types.toLowerCase().includes(q);
    });
  }, [query, category, role, type]);

  const shown = results.slice(0, limit);
  const activeFilters = [category, role, type].filter(Boolean).length;

  function reset() {
    setCategory(null);
    setRole(null);
    setType(null);
    setQuery("");
    setLimit(PAGE);
  }

  return (
    <div className={styles.browser}>
      <div className={styles.controls}>
        <input
          className={styles.search}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setLimit(PAGE);
          }}
          placeholder="Search companion lines…"
          aria-label="Search the bestiary"
          type="search"
        />

        <div className={styles.filterRow}>
          <FilterGroup
            label="Roster"
            options={CATEGORIES}
            value={category}
            onChange={(v) => {
              setCategory(v);
              setLimit(PAGE);
            }}
          />
          <FilterGroup
            label="Role"
            options={ROLES.map((r) => ({ key: r, label: r }))}
            value={role}
            onChange={(v) => {
              setRole(v);
              setLimit(PAGE);
            }}
          />
          <FilterGroup
            label="Type"
            options={TYPES.map((t) => ({ key: t, label: t }))}
            value={type}
            onChange={(v) => {
              setType(v);
              setLimit(PAGE);
            }}
          />
        </div>

        <div className={styles.resultBar}>
          <span className={styles.count}>
            <strong className="num">{results.length}</strong>{" "}
            {results.length === 1 ? "line" : "lines"}
          </span>
          {(activeFilters > 0 || query) && (
            <button type="button" className={styles.clear} onClick={reset}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      {results.length === 0 ? (
        <p className={styles.empty}>Nothing matches that. Try clearing a filter.</p>
      ) : (
        <div className={styles.grid}>
          {shown.map((line) => {
            const open = openKey === line.key;
            const stageIdx = Math.min(
              stageByKey[line.key] ?? line.stages.length - 1,
              line.stages.length - 1
            );
            const megaOn = !!megaByKey[line.key] && !!line.mega;
            const d = megaOn ? line.mega : line.stages[stageIdx];

            return (
              <article
                key={line.key}
                className={`${styles.card} ${open ? styles.cardOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.cardHead}
                  onClick={() => setOpenKey(open ? null : line.key)}
                  aria-expanded={open}
                >
                  <span className={styles.cardName}>{line.name}</span>
                  <span className={styles.cardTags}>
                    <span className={styles.cardCategory}>
                      {CATEGORIES.find((c) => c.key === categoryOf(line))?.label}
                    </span>
                    <span className={styles.cardMeta}>
                      {line.types} · {line.role}
                    </span>
                  </span>
                </button>

                {open && (
                  <div className={styles.cardBody}>
                    {line.flavor && (
                      <p className={styles.flavor}>{line.flavor}</p>
                    )}

                    <div className={styles.stageRow}>
                      {line.stages.map((s, i) => (
                        <button
                          key={s.name}
                          type="button"
                          className={`${styles.stageBtn} ${
                            !megaOn && stageIdx === i ? styles.stageBtnOn : ""
                          }`}
                          onClick={() => {
                            setStageByKey((m) => ({ ...m, [line.key]: i }));
                            setMegaByKey((m) => ({ ...m, [line.key]: false }));
                          }}
                        >
                          {s.name}
                        </button>
                      ))}
                      {line.mega && (
                        <button
                          type="button"
                          className={`${styles.stageBtn} ${styles.megaBtn} ${
                            megaOn ? styles.stageBtnOn : ""
                          }`}
                          onClick={() =>
                            setMegaByKey((m) => ({ ...m, [line.key]: !megaOn }))
                          }
                        >
                          {line.megaLabel?.replace(/^Mega:\s*/, "") || "Mega"}
                        </button>
                      )}
                    </div>

                    <StatBlock d={d} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {shown.length < results.length && (
        <button
          type="button"
          className={styles.more}
          onClick={() => setLimit((l) => l + PAGE)}
        >
          Show {Math.min(PAGE, results.length - shown.length)} more
        </button>
      )}
    </div>
  );
}

function StatBlock({ d }) {
  return (
    <div className={styles.statBlock}>
      <div className={styles.statHead}>
        <h3 className={styles.statName}>{d.name}</h3>
        <span className={styles.statSub}>
          {d.size}
          {d.note ? ` · ${d.note}` : ""}
        </span>
      </div>

      <div className={styles.statGrid}>
        <Stat label="AC" value={d.ac} />
        <Stat label="HP" value={d.hp} />
        <Stat label="Speed" value={d.speed} />
        <Stat label="Attack" value={d.atk} />
        <Stat label="Save DC" value={d.saveDC} />
        <Stat label="Abilities" value={d.ab} />
        <Stat label="Saves" value={d.saves} />
        {d.resist && d.resist !== "—" && <Stat label="Resists" value={d.resist} />}
        {d.cond && <Stat label="Cond. Immune" value={d.cond} />}
      </div>

      {d.atkNote && <p className={styles.statNote}>{d.atkNote}</p>}
      {d.activation && (
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

      {d.bond && (
        <div className={`${styles.entry} ${styles.bond}`}>
          <div className={styles.entryHead}>
            <span className={styles.entryName}>{d.bond.n}</span>
            <span className={styles.entryTag}>Bonded Pair</span>
          </div>
          <p className={styles.entryDesc}>{d.bond.d}</p>
        </div>
      )}

      {d.endNote && <p className={styles.statNote}>{d.endNote}</p>}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className={styles.statCell}>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>{value}</span>
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

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className={styles.filterGroup}>
      <span className={styles.filterLabel}>{label}</span>
      <div className={styles.chips}>
        {options.map((o) => (
          <button
            key={o.key}
            type="button"
            className={`${styles.chip} ${value === o.key ? styles.chipOn : ""}`}
            onClick={() => onChange(value === o.key ? null : o.key)}
            aria-pressed={value === o.key}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
