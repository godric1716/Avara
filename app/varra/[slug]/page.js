import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../varra.module.css";
import { VARRA_ENTRIES, getVarraEntry } from "../data";

export function generateStaticParams() {
  return VARRA_ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getVarraEntry(slug);
  if (!entry) return { title: "Not found · Avara" };
  return {
    title: `${entry.name} · Varra Aeterna · Avara`,
    description: entry.tagline,
  };
}

export default async function VarraEntryPage({ params }) {
  const { slug } = await params;
  const entry = getVarraEntry(slug);
  if (!entry) notFound();

  return (
    <div className={`wrap ${styles.book}`}>
      <p className={styles.back}>
        <Link href="/varra">← Varra Aeterna</Link>
      </p>

      <header className={styles.entryHead}>
        <span className={styles.entryKind}>
          {entry.kind === "subclass"
            ? `${entry.dndClass} · ${entry.typeLabel}`
            : entry.kind === "race"
              ? "Race"
              : "Background"}
        </span>
        <h1 className={styles.entryTitle}>{entry.name}</h1>
        {entry.latin && <p className={styles.entryLatin}>{entry.latin}</p>}
        {entry.tagline && <p className={styles.entryTagline}>{entry.tagline}</p>}
      </header>

      <div className={styles.rule} />

      {entry.quote && <blockquote className={styles.quote}>{entry.quote}</blockquote>}

      <div className={styles.intro}>
        {entry.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {entry.kind === "subclass" && <SubclassBody entry={entry} />}
      {entry.kind === "race" && <RaceBody entry={entry} />}
      {entry.kind === "background" && <BackgroundBody entry={entry} />}
    </div>
  );
}

function SubclassBody({ entry }) {
  return (
    <>
      {entry.tenets && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Tenets</h2>
          <ol className={styles.tenetList}>
            {entry.tenets.map((t) => (
              <li key={t.name}>
                <span className={styles.tenetName}>{t.name}</span>
                <p className={styles.prose}>{t.desc}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>Progression</h2>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Level</th>
                <th>Feature</th>
              </tr>
            </thead>
            <tbody>
              {entry.levels.map((l) => (
                <tr key={l.lvl}>
                  <td className="num">{l.lvl}</td>
                  <td>{l.feature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {entry.spells && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>
            {entry.dndClass === "Warlock" ? "Expanded Spells" : "Bonus Spells"}
          </h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{entry.dndClass === "Warlock" ? "Spell Level" : "Level"}</th>
                  <th>Spells</th>
                </tr>
              </thead>
              <tbody>
                {entry.spells.map((s) => (
                  <tr key={s.lvl}>
                    <td className="num">{s.lvl}</td>
                    <td>{s.list}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {entry.features.map((f) => (
        <section key={`${f.lvl}-${f.name}`} className={styles.panel}>
          <h2 className={styles.panelTitle}>
            <span className={styles.featLvl}>Level {f.lvl}</span>
            {f.name}
          </h2>
          <p className={styles.prose}>{f.desc}</p>

          {f.bullets && (
            <ul className={styles.bulletList}>
              {f.bullets.map((b) => (
                <li key={b.name}>
                  <span className={styles.bulletName}>{b.name}</span>
                  <p className={styles.prose}>{b.desc}</p>
                </li>
              ))}
            </ul>
          )}

          {f.table && (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {f.table.head.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {f.table.rows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((cell, i) => (
                        <td key={i} className={i === 0 ? "num" : ""}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      {entry.invocations && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Eldritch Invocations</h2>
          <ul className={styles.bulletList}>
            {entry.invocations.map((i) => (
              <li key={i.name}>
                <span className={styles.bulletName}>
                  {i.name}
                  {i.req && <span className={styles.req}> · {i.req}</span>}
                </span>
                <p className={styles.prose}>{i.desc}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {entry.support && (
        <section className={`${styles.panel} ${styles.supportPanel}`}>
          <h2 className={styles.panelTitle}>Supporting system</h2>
          <span className={styles.bulletName}>{entry.support.title}</span>
          <p className={styles.prose}>{entry.support.desc}</p>
        </section>
      )}
    </>
  );
}

function RaceBody({ entry }) {
  return (
    <>
      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>At a glance</h2>
        <dl className={styles.quickList}>
          {entry.quick.map((q) => (
            <div key={q.label}>
              <dt>{q.label}</dt>
              <dd>{q.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.panel}>
        <h2 className={styles.panelTitle}>Traits</h2>
        <ul className={styles.bulletList}>
          {entry.traits.map((t) => (
            <li key={t.name}>
              <span className={styles.bulletName}>{t.name}</span>
              <p className={styles.prose}>{t.desc}</p>
            </li>
          ))}
        </ul>
      </section>
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
        <h2 className={styles.panelTitle}>Proficiencies &amp; Equipment</h2>
        <dl className={styles.quickList}>
          {prof.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${styles.panel} ${styles.supportPanel}`}>
        <h2 className={styles.panelTitle}>Feature</h2>
        <span className={styles.bulletName}>{entry.feature.name}</span>
        <p className={styles.prose}>{entry.feature.desc}</p>
      </section>
    </>
  );
}
