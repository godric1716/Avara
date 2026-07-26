import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./document.module.css";
import ClassSigil from "../../../components/ClassSigil";
import ClassOrnament from "../../../components/ClassOrnament";
import { CLASSES, getClass, getDocuments } from "../../classData";
import { getDocument } from "./documentData";
import { CLASS_DATA } from "../../../sheet/data";

export function generateStaticParams() {
  return CLASSES.filter((c) => getDocument(c.slug)).map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cls = getClass(slug);
  if (!cls) return {};
  return {
    title: `${cls.name} — Full Document · Avara`,
    description: `The complete ${cls.name} class document: progression, features, covenants, feats and magic items.`,
  };
}

export default async function ClassDocument({ params }) {
  const { slug } = await params;
  const cls = getClass(slug);
  const doc = getDocument(slug);
  if (!cls || !doc) notFound();

  // Mechanics come from the sheet's data so the two cannot drift apart.
  const sheet = CLASS_DATA[cls.id];
  const subclasses = Object.entries(sheet.subclasses || {});
  const pdf = getDocuments(slug)[0];

  const contents = [
    { id: "reference", label: "Quick Reference" },
    { id: "progression", label: "Progression" },
    { id: "features", label: "Class Features" },
    ...subclasses.map(([key, sub]) => ({
      id: key,
      label: sub.colTitle || sub.label,
    })),
    { id: "feats", label: "Feats" },
    { id: "items", label: "Magic Items" },
  ];

  return (
    <article data-class={cls.id} className={styles.doc}>
      <header className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <ClassSigil id={cls.id} className={styles.watermark} />
        <div className={styles.heroInner}>
          <Link href={`/classes/${slug}`} className={styles.back}>
            &larr; {cls.name} chapter
          </Link>
          <span className={styles.eyebrow}>Complete Class Document</span>
          <h1 className={styles.title}>{cls.name}</h1>
          <ClassOrnament id={cls.id} className={styles.ornament} />
          <p className={styles.lede}>{cls.quote}</p>
        </div>
      </header>

      <div className={styles.layout}>
        <nav className={styles.contents} aria-label="Contents">
          <span className={styles.contentsTitle}>Contents</span>
          <ol>
            {contents.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`}>{c.label}</a>
              </li>
            ))}
          </ol>
          {pdf && (
            <a className={styles.pdf} href={`/documents/${pdf.file}`} target="_blank" rel="noopener">
              Original PDF · {pdf.size}
            </a>
          )}
        </nav>

        <div className={styles.body}>
          {/* ---------- Quick reference ---------- */}
          <section id="reference" className={styles.section}>
            <h2 className={styles.h2}>Quick Reference</h2>
            <dl className={styles.refList}>
              {doc.quickReference.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>

            {doc.equipment && (
              <>
                <h3 className={styles.h3}>Starting Equipment</h3>
                <ul className={styles.bullets}>
                  {doc.equipment.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                {doc.equipment.capstone && (
                  <aside className={styles.aside}>
                    <span className={styles.asideTitle}>
                      {doc.equipment.capstone.name}
                    </span>
                    <p>{doc.equipment.capstone.text}</p>
                  </aside>
                )}
              </>
            )}
          </section>

          {/* ---------- Progression ---------- */}
          <section id="progression" className={styles.section}>
            <h2 className={styles.h2}>Progression</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {doc.progressionHead.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {doc.progression.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className={i === 0 || i === 1 ? "num" : undefined}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ---------- Base features ---------- */}
          <section id="features" className={styles.section}>
            <h2 className={styles.h2}>Class Features</h2>
            <FeatureList features={sheet.generalFeatures} />
          </section>

          {/* ---------- Each subclass ---------- */}
          {subclasses.map(([key, sub]) => (
            <section key={key} id={key} className={styles.section}>
              <h2 className={styles.h2}>{sub.colTitle || sub.label}</h2>
              {sub.title && sub.title !== sub.label && (
                <p className={styles.subtitle}>{sub.title}</p>
              )}

              <FeatureList features={sub.features} />

              {doc.roleplay?.[key]?.map((rp) => (
                <aside key={rp.title} className={styles.roleplay}>
                  <span className={styles.roleplayLabel}>Roleplay</span>
                  <h4 className={styles.roleplayTitle}>{rp.title}</h4>
                  {rp.text.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </aside>
              ))}
            </section>
          ))}

          {/* ---------- Feats ---------- */}
          <section id="feats" className={styles.section}>
            <h2 className={styles.h2}>Feats</h2>
            <EntryList entries={sheet.generalFeats} label="General" />
            {subclasses.map(([key, sub]) =>
              sub.feats?.length ? (
                <EntryList
                  key={key}
                  entries={sub.feats}
                  label={sub.colTitle || sub.label}
                />
              ) : null
            )}
          </section>

          {/* ---------- Items ---------- */}
          <section id="items" className={styles.section}>
            <h2 className={styles.h2}>Magic Items</h2>
            <EntryList entries={sheet.sharedItems} label="Shared" />
            {subclasses.map(([key, sub]) =>
              sub.items?.length ? (
                <EntryList
                  key={key}
                  entries={sub.items}
                  label={sub.colTitle || sub.label}
                />
              ) : null
            )}
          </section>

          {doc.closing && (
            <section className={styles.closing}>
              <h2 className={styles.h2}>{doc.closing.title}</h2>
              <p>{doc.closing.text}</p>
            </section>
          )}

          <div className={styles.footerCta}>
            <Link href="/sheet" className={styles.ctaLink}>
              Play this class on the character sheet &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function FeatureList({ features }) {
  if (!features?.length) return null;
  return (
    <div className={styles.features}>
      {features.map((f) => (
        <div key={`${f.lvl}-${f.name}`} className={styles.feature}>
          <div className={styles.featureHead}>
            <span className={`${styles.lvl} num`}>{f.lvl}</span>
            <h3 className={styles.featureName}>{f.name}</h3>
            {(f.cost || f.action) && (
              <span className={styles.featureMeta}>
                {[f.cost, f.action].filter(Boolean).join(" · ")}
              </span>
            )}
          </div>
          <p className={styles.featureDesc}>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

function EntryList({ entries, label }) {
  if (!entries?.length) return null;
  return (
    <div className={styles.entryGroup}>
      <h3 className={styles.h3}>{label}</h3>
      {entries.map((e) => (
        <div key={e.name} className={styles.feature}>
          <div className={styles.featureHead}>
            <h3 className={styles.featureName}>{e.name}</h3>
            {e.meta && <span className={styles.featureMeta}>{e.meta}</span>}
          </div>
          <p className={styles.featureDesc}>{e.desc}</p>
        </div>
      ))}
    </div>
  );
}
