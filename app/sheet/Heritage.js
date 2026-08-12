"use client";

import Link from "next/link";
import styles from "./sheet.module.css";
import PeopleSigil from "../peoples/PeopleSigil";
import { getEntry } from "../peoples/data";

/* Race and background on the sheet: the traits and feature you'll actually
   reference at the table, plus the four roleplay tables made pickable so a
   chosen ideal ends up on the sheet rather than staying on a lore page. */
export default function Heritage({ race, background, roleplay, onRoleplay }) {
  const raceEntry = race ? getEntry(race) : null;
  const bgEntry = background ? getEntry(background) : null;

  if (!raceEntry && !bgEntry) {
    return (
      <section className={`${styles.card} ${styles.heritageEmpty}`}>
        <h2 className={styles.cardTitle}>Race &amp; Background</h2>
        <p className={styles.empty}>
          Pick a race and a background above and their traits, feature and
          roleplay tables appear here.{" "}
          <Link href="/peoples">Browse Peoples &amp; Paths</Link> if you
          haven&rsquo;t decided.
        </p>
      </section>
    );
  }

  return (
    <div className={styles.columns}>
      {raceEntry && (
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>
            <span className={styles.heritageMark} style={{ color: raceEntry.tint }}>
              <PeopleSigil slug={raceEntry.slug} className={styles.heritageSigil} />
            </span>
            {raceEntry.name}
            <Link href={`/peoples/${raceEntry.slug}`} className={styles.heritageLink}>
              full entry →
            </Link>
          </h2>

          <ul className={styles.traitList}>
            {raceEntry.traits.map((t) => (
              <li key={t.name}>
                <span className={styles.traitName}>{t.name}</span>
                <p className={styles.traitDesc}>{t.desc}</p>
              </li>
            ))}
          </ul>

          {/* Ability scores and skills are chosen by the player and the sheet
              has nowhere to put a skill list, so these are shown to copy from
              rather than silently applied. */}
          <p className={styles.trackerNote}>
            {raceEntry.quick?.find((q) => q.label === "Ability Scores")?.value}{" "}
            Nothing here is applied to your scores automatically — set them in
            Ability Scores above.
          </p>
        </section>
      )}

      {bgEntry && (
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>
            <span className={styles.heritageMark} style={{ color: bgEntry.tint }}>
              <PeopleSigil slug={bgEntry.slug} className={styles.heritageSigil} />
            </span>
            {bgEntry.name}
            <Link href={`/peoples/${bgEntry.slug}`} className={styles.heritageLink}>
              full entry →
            </Link>
          </h2>

          <div className={styles.heritageFeature}>
            <span className={styles.traitName}>{bgEntry.feature.name}</span>
            <p className={styles.traitDesc}>{bgEntry.feature.desc}</p>
          </div>

          <dl className={styles.heritageProf}>
            {[
              ["Skills", bgEntry.skills],
              ["Tools", bgEntry.tools],
              ["Languages", bgEntry.languages],
              ["Equipment", bgEntry.equipment],
            ]
              .filter(([, v]) => v)
              .map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
          </dl>
        </section>
      )}

      {/* Rhovian backgrounds carry no personality/ideal/bond/flaw tables —
          the sourcebook doesn't give them — so this whole card only appears
          for backgrounds that actually have something to pick from. */}
      {bgEntry?.personality?.length > 0 && (
        <section className={`${styles.card} ${styles.roleplayCard}`}>
          <h2 className={styles.cardTitle}>Who you are</h2>
          <p className={styles.trackerNote}>
            Pick one from each, or write your own — whatever you choose is
            saved to this character and prints with the sheet.
          </p>

          <Picker
            label="Personality Trait"
            die="d6"
            options={bgEntry.personality}
            value={roleplay.personality}
            onChange={(v) => onRoleplay("personality", v)}
          />
          <Picker
            label="Ideal"
            die="d4"
            options={(bgEntry.ideals || []).map((i) => i.text)}
            tags={(bgEntry.ideals || []).map((i) => i.alignment)}
            value={roleplay.ideal}
            onChange={(v) => onRoleplay("ideal", v)}
          />
          <Picker
            label="Bond"
            die="d4"
            options={bgEntry.bonds || []}
            value={roleplay.bond}
            onChange={(v) => onRoleplay("bond", v)}
          />
          <Picker
            label="Flaw"
            die="d4"
            options={bgEntry.flaws || []}
            value={roleplay.flaw}
            onChange={(v) => onRoleplay("flaw", v)}
          />
        </section>
      )}
    </div>
  );
}

function Picker({ label, die, options, tags, value, onChange }) {
  /* Anything not in the table is the player's own writing — tracked so the
     textarea can stay open on their text instead of collapsing back to the
     list the moment it stops matching. */
  const isCustom = !!value && !options.includes(value);

  return (
    <div className={styles.picker}>
      <div className={styles.trackerHead}>
        <span className={styles.trackerLabel}>{label}</span>
        <span className={styles.die}>{die}</span>
      </div>

      <ol className={styles.pickList}>
        {options.map((opt, i) => {
          const chosen = value === opt;
          return (
            <li key={opt}>
              <button
                type="button"
                className={`${styles.pickBtn} ${chosen ? styles.pickChosen : ""}`}
                aria-pressed={chosen}
                // Clicking the chosen one clears it, so a misclick is undoable
                // without hunting for a reset.
                onClick={() => onChange(chosen ? "" : opt)}
              >
                <span className={`${styles.rollNum} num`}>{i + 1}</span>
                <span className={styles.pickText}>
                  {opt}
                  {tags?.[i] && <span className={styles.alignTag}>{tags[i]}</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <textarea
        className={styles.pickCustom}
        rows={2}
        value={isCustom ? value : ""}
        placeholder="…or write your own"
        onChange={(e) => onChange(e.target.value)}
        aria-label={`Your own ${label.toLowerCase()}`}
      />
    </div>
  );
}
