import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../peoples.module.css";
import PeopleSigil from "../PeopleSigil";
import { ALL_ENTRIES, getEntry } from "../data";

export function generateStaticParams() {
  return ALL_ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return { title: "Not found · Avara" };
  return {
    title: `${entry.name} · Avara`,
    description: entry.tagline || entry.intro?.[0]?.slice(0, 150),
  };
}

export default async function EntryPage({ params }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const isRace = entry.kind === "race";

  return (
    /* The tint rides on a custom property so every rule beneath can use it
       without repeating an inline style on each element. */
    <div className="wrap" style={{ "--tint": entry.tint || "var(--accent)" }}>
      <p className={styles.back}>
        <Link href="/peoples">← Peoples &amp; Paths</Link>
      </p>

      <header className={styles.entryHead}>
        <span className={styles.entryMark}>
          <PeopleSigil slug={entry.slug} className={styles.entrySigil} />
        </span>
        <div>
          <span className={styles.entryKind}>
            {isRace ? "Race" : "Background"}
          </span>
          <h1 className={styles.entryTitle}>{entry.name}</h1>
          {entry.tagline && <p className={styles.entryTagline}>{entry.tagline}</p>}
        </div>
      </header>

      <div className={styles.rule} />

      {entry.quote && <blockquote className={styles.quote}>{entry.quote}</blockquote>}

      <div className={styles.intro}>
        {entry.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {isRace ? <RaceBody entry={entry} /> : <BackgroundBody entry={entry} />}
    </div>
  );
}

function RaceBody({ entry }) {
  return (
    <>
      {entry.quick?.length > 0 && (
        <section className={styles.panel}>
          <h2 className={styles.cardTitle}>At a glance</h2>
          <dl className={styles.quickList}>
            {entry.quick.map((q) => (
              <div key={q.label}>
                <dt>{q.label}</dt>
                <dd>{q.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className={styles.panel}>
        <h2 className={styles.cardTitle}>Traits</h2>
        <ul className={styles.traitList}>
          {entry.traits.map((t) => (
            <li key={t.name}>
              <span className={styles.traitName}>{t.name}</span>
              <p className={styles.traitDesc}>{t.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {(entry.sections || []).map((s) => (
        <section
          key={s.title}
          className={`${styles.panel} ${s.dm ? styles.dmCard : ""}`}
        >
          <h2 className={styles.cardTitle}>
            {s.title}
            {/* Marked rather than hidden: this page is player-facing, so a DM
                note needs to look like one at a glance. */}
            {s.dm && <span className={styles.dmTag}>DM note</span>}
          </h2>
          {s.body.map((p, i) => (
            <p key={i} className={styles.prose}>
              {p}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}

function BackgroundBody({ entry }) {
  const prof = [
    ["Skills", entry.skills],
    ["Tools", entry.tools],
    ["Languages", entry.languages],
    ["Equipment", entry.equipment],
  ].filter(([, v]) => v);

  return (
    <>
      <section className={styles.panel}>
        <h2 className={styles.cardTitle}>Proficiencies &amp; Equipment</h2>
        <dl className={styles.quickList}>
          {prof.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${styles.panel} ${styles.featureCard}`}>
        <h2 className={styles.cardTitle}>
          Feature <span className={styles.featureName}>{entry.feature.name}</span>
        </h2>
        <p className={styles.prose}>{entry.feature.desc}</p>
      </section>

      {/* Numbered because these are d6 and d4 tables meant to be rolled on,
          not bulleted lists meant to be skimmed. */}
      <RollTable title="Personality Traits" die="d6" rows={entry.personality} />
      <RollTable
        title="Ideals"
        die="d4"
        rows={entry.ideals.map((i) => i.text)}
        tags={entry.ideals.map((i) => i.alignment)}
      />
      <RollTable title="Bonds" die="d4" rows={entry.bonds} />
      <RollTable title="Flaws" die="d4" rows={entry.flaws} />
    </>
  );
}

function RollTable({ title, die, rows, tags }) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.cardTitle}>
        {title} <span className={styles.die}>{die}</span>
      </h2>
      <ol className={styles.rollList}>
        {rows.map((r, i) => (
          <li key={i}>
            <span className={`${styles.rollNum} num`}>{i + 1}</span>
            <span className={styles.rollText}>
              {r}
              {tags?.[i] && <span className={styles.alignTag}>{tags[i]}</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
