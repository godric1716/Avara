import Link from "next/link";
import styles from "./classes.module.css";
import section from "../section.module.css";
import Flourish from "../components/Flourish";
import ClassSigil from "../components/ClassSigil";
import { CLASSES } from "./classData";

export const metadata = {
  title: "Classes · Avara",
  description:
    "The five homebrew classes of Avara — Death Knight, Undying Sovereign, Mirrorwarden, Devourer, and Fablekeeper.",
};

export default function ClassesPage() {
  return (
    <div className={`wrap ${styles.page}`}>
      <span className="eyebrow">Section</span>
      <h1 className={section.title}>Classes</h1>
      <Flourish className={section.flourish} />
      <p className={section.lead}>
        Five homebrew classes, each with its own resource economy and its own way
        of falling apart when that economy runs dry. Pick one to read its chapter.
      </p>

      <div className={styles.plates}>
        {CLASSES.map((c) => (
          <Link
            key={c.slug}
            href={`/classes/${c.slug}`}
            data-class={c.id}
            className={styles.plate}
          >
            <div className={styles.plateGlow} aria-hidden="true" />
            <ClassSigil id={c.id} className={styles.plateSigil} />
            <div className={styles.plateBody}>
              <span className={styles.plateEyebrow}>{c.eyebrow}</span>
              <h2 className={styles.plateName}>{c.name}</h2>
              <dl className={styles.plateStats}>
                <div>
                  <dt>Resource</dt>
                  <dd>{c.resource}</dd>
                </div>
                <div>
                  <dt>Primary</dt>
                  <dd>{c.primaryAbility}</dd>
                </div>
                <div>
                  <dt>{c.subclassPlural}</dt>
                  <dd>{c.subclasses.length}</dd>
                </div>
              </dl>
            </div>
            <span className={styles.plateLink}>Read the chapter &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
