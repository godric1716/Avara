import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./chapter.module.css";
import ClassSigil from "../../components/ClassSigil";
import Flourish from "../../components/Flourish";
import VineCorner from "../../components/VineCorner";
import { CLASSES, getClass } from "../classData";

export function generateStaticParams() {
  return CLASSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cls = getClass(slug);
  if (!cls) return {};
  return {
    title: `${cls.name} · Avara`,
    description: cls.intro,
  };
}

export default async function ClassChapter({ params }) {
  const { slug } = await params;
  const cls = getClass(slug);
  if (!cls) notFound();

  return (
    <article data-class={cls.id} className={styles.chapter}>
      <header className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <VineCorner corner="tl" className={`${styles.heroVine} ${styles.heroVineTL}`} />
        <VineCorner corner="br" className={`${styles.heroVine} ${styles.heroVineBR}`} />
        <ClassSigil id={cls.id} className={styles.watermark} />

        <div className={`wrap ${styles.heroInner}`}>
          <Link href="/classes" className={styles.back}>
            &larr; All classes
          </Link>
          <ClassSigil id={cls.id} className={styles.heroSigil} />
          <span className={styles.eyebrow}>{cls.eyebrow}</span>
          <h1 className={styles.title}>{cls.name}</h1>
          <Flourish className={styles.flourish} />
          <p className={styles.intro}>{cls.intro}</p>

          <dl className={styles.statStrip}>
            <div>
              <dt>Resource</dt>
              <dd>{cls.resource}</dd>
            </div>
            <div>
              <dt>Primary Ability</dt>
              <dd>{cls.primaryAbility}</dd>
            </div>
            <div>
              <dt>Recovery</dt>
              <dd>{cls.recovery}</dd>
            </div>
            <div>
              <dt>{cls.subclassLabel}</dt>
              <dd>{cls.subclasses.length} paths</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className={`wrap ${styles.body}`}>
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

        <div className={styles.cta}>
          <Link href="/sheet" className={styles.ctaLink}>
            Play this class on the character sheet &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
