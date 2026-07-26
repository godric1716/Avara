import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./chapter.module.css";
import ClassSigil from "../../components/ClassSigil";
import ClassOrnament from "../../components/ClassOrnament";
import { CLASSES, getClass, getDocuments } from "../classData";

export function generateStaticParams() {
  return CLASSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cls = getClass(slug);
  if (!cls) return {};
  return {
    title: `${cls.name} · Avara`,
    description: cls.quote,
  };
}

export default async function ClassChapter({ params }) {
  const { slug } = await params;
  const cls = getClass(slug);
  if (!cls) notFound();
  const documents = getDocuments(slug);

  return (
    <article data-class={cls.id} className={styles.chapter}>
      <header className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <ClassSigil id={cls.id} className={styles.watermark} />

        <div className={`wrap ${styles.heroInner}`}>
          <Link href="/classes" className={styles.back}>
            &larr; All classes
          </Link>
          <ClassSigil id={cls.id} className={styles.heroSigil} />
          <span className={styles.eyebrow}>{cls.eyebrow}</span>
          <h1 className={styles.title}>{cls.name}</h1>
          <ClassOrnament id={cls.id} className={styles.flourish} />

          <blockquote className={styles.epigraph}>
            <p>&ldquo;{cls.quote}&rdquo;</p>
          </blockquote>

          <div className={styles.intro}>
            {cls.intro.map((para, i) => (
              <p key={i} className={i === 0 ? styles.introLead : undefined}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </header>

      <div className={`wrap ${styles.body}`}>
        <dl className={styles.statStrip}>
          <div>
            <dt>Hit Die</dt>
            <dd className="num">{cls.hitDie}</dd>
          </div>
          <div>
            <dt>Primary Ability</dt>
            <dd>{cls.primaryAbility}</dd>
          </div>
          <div>
            <dt>Saving Throws</dt>
            <dd>{cls.saves}</dd>
          </div>
          <div>
            <dt>Armor</dt>
            <dd>{cls.armor}</dd>
          </div>
        </dl>

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>
            <span className={styles.blockRule} aria-hidden="true" />
            {cls.resource}
          </h2>
          <p className={styles.resourceNote}>{cls.resourceNote}</p>
          <span className={styles.resourceMeta}>{cls.recovery}</span>
        </section>

        {cls.detail && (
          <aside className={styles.detail}>
            <span className={styles.detailLabel}>{cls.detail.label}</span>
            <p className={styles.detailText}>{cls.detail.text}</p>
          </aside>
        )}

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>
            <span className={styles.blockRule} aria-hidden="true" />
            {cls.subclassPlural}
          </h2>
          <div className={styles.paths}>
            {cls.subclasses.map((s) => (
              <div key={s.name} className={styles.path}>
                <h3 className={styles.pathName}>{s.name}</h3>
                <span className={styles.pathTitle}>{s.title}</span>
                {s.quote && (
                  <p className={styles.pathQuote}>&ldquo;{s.quote}&rdquo;</p>
                )}
                <p className={styles.pathBlurb}>{s.blurb}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>
            <span className={styles.blockRule} aria-hidden="true" />
            Signature Features
          </h2>
          <ul className={styles.features}>
            {cls.signature.map((f) => (
              <li key={f.name} className={styles.feature}>
                <div className={styles.featureHead}>
                  <span className={styles.featureLvl}>
                    {typeof f.lvl === "number" ? `Lv ${f.lvl}` : f.lvl}
                  </span>
                  <h3 className={styles.featureName}>{f.name}</h3>
                  <span className={styles.featureCost}>{f.cost}</span>
                </div>
                <p className={styles.featureDesc}>{f.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {cls.closer && (
          <p className={styles.closer}>&ldquo;{cls.closer}&rdquo;</p>
        )}

        <div className={styles.cta}>
          {documents.map((doc) => (
            <a
              key={doc.file}
              href={`/documents/${doc.file}`}
              className={styles.docLink}
              target="_blank"
              rel="noopener"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7.5 11 12 15.5 16.5 11" />
                <path d="M4.5 19.5h15" />
              </svg>
              <span>
                {doc.label}
                <span className={styles.docSize}>PDF · {doc.size}</span>
              </span>
            </a>
          ))}

          <Link href="/sheet" className={styles.ctaLink}>
            Play this class on the character sheet &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
