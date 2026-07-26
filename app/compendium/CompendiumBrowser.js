"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./compendium.module.css";
import {
  CLASS_FILTERS,
  ENTRIES,
  KINDS,
  SOURCES,
  SRD_META,
} from "./data";

const PAGE = 60;

export default function CompendiumBrowser() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState(null);
  const [source, setSource] = useState(null);
  const [classId, setClassId] = useState(null);
  const [limit, setLimit] = useState(PAGE);
  const [openId, setOpenId] = useState(null);

  // Typing stays responsive while the (large) list re-filters.
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return ENTRIES.filter((e) => {
      if (kind && e.kind !== kind) return false;
      if (source && e.source !== source) return false;
      if (classId && e.classId !== classId) return false;
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        e.desc.toLowerCase().includes(q) ||
        (e.meta || "").toLowerCase().includes(q)
      );
    });
  }, [deferredQuery, kind, source, classId]);

  const shown = results.slice(0, limit);
  const activeFilters = [kind, source, classId].filter(Boolean).length;

  function reset() {
    setKind(null);
    setSource(null);
    setClassId(null);
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
          placeholder="Search feats and items…"
          aria-label="Search the compendium"
          type="search"
        />

        <div className={styles.filterRow}>
          <FilterGroup
            label="Type"
            options={KINDS.map((k) => ({ value: k.key, label: k.label }))}
            value={kind}
            onChange={(v) => {
              setKind(v);
              setLimit(PAGE);
            }}
          />
          <FilterGroup
            label="Source"
            options={SOURCES.map((s) => ({ value: s, label: s }))}
            value={source}
            onChange={(v) => {
              setSource(v);
              setLimit(PAGE);
            }}
          />
          <FilterGroup
            label="Class"
            options={CLASS_FILTERS.map((c) => ({ value: c.id, label: c.label }))}
            value={classId}
            onChange={(v) => {
              setClassId(v);
              setSource(v ? "Homebrew" : source);
              setLimit(PAGE);
            }}
          />
        </div>

        <div className={styles.resultBar}>
          <span className={styles.count}>
            <strong className="num">{results.length}</strong>{" "}
            {results.length === 1 ? "entry" : "entries"}
          </span>
          {(activeFilters > 0 || query) && (
            <button type="button" className={styles.clear} onClick={reset}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      {results.length === 0 ? (
        <p className={styles.empty}>
          Nothing matches that. Try a shorter search, or clear the filters.
        </p>
      ) : (
        <ul className={styles.list}>
          {shown.map((e) => {
            const open = openId === e.id;
            return (
              <li
                key={e.id}
                className={`${styles.entry} ${open ? styles.entryOpen : ""}`}
                data-class={e.classId || undefined}
              >
                <button
                  type="button"
                  className={styles.entryHead}
                  onClick={() => setOpenId(open ? null : e.id)}
                  aria-expanded={open}
                >
                  <span className={styles.entryName}>{e.name}</span>
                  <span className={styles.tags}>
                    <span className={`${styles.tag} ${styles[e.kind]}`}>
                      {e.kind}
                    </span>
                    <span className={styles.tagSource}>{e.source}</span>
                    {e.className && (
                      <span className={styles.tagClass}>{e.className}</span>
                    )}
                  </span>
                </button>

                {open && (
                  <div className={styles.entryBody}>
                    {e.meta && <div className={styles.entryMeta}>{e.meta}</div>}
                    {e.scope && e.scope !== e.className && (
                      <div className={styles.entryScope}>{e.scope}</div>
                    )}
                    {e.desc
                      .split("\n\n")
                      .filter(Boolean)
                      .map((para, i) => (
                        <p key={i} className={styles.entryDesc}>
                          {para}
                        </p>
                      ))}
                    {e.classId && (
                      <Link
                        href={`/classes/${
                          CLASS_FILTERS.find((c) => c.id === e.classId)?.slug || ""
                        }`}
                        className={styles.entryLink}
                      >
                        Read the {e.className} chapter &rarr;
                      </Link>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
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

      <footer className={styles.attribution}>{SRD_META.attribution}</footer>
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
            key={o.value}
            type="button"
            className={`${styles.chip} ${value === o.value ? styles.chipOn : ""}`}
            onClick={() => onChange(value === o.value ? null : o.value)}
            aria-pressed={value === o.value}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
