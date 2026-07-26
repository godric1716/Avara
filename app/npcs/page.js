import Link from "next/link";
import section from "../section.module.css";
import styles from "./npcs.module.css";
import Flourish from "../components/Flourish";
import ClassSigil from "../components/ClassSigil";
import { CLASS_SLUGS } from "../sheet/data";
import { NPCS } from "./npcData";

export const metadata = {
  title: "NPCs · Avara",
  description:
    "The people and powers of Avara, drawn from the class documents — who they are, and what is still unwritten.",
};

export default function NpcsPage() {
  return (
    <div className={`wrap ${section.section} ${styles.page}`}>
      <span className="eyebrow">Section</span>
      <h1 className={section.title}>NPCs</h1>
      <Flourish className={section.flourish} />
      <p className={section.lead}>
        Everything here is pulled from the class documents rather than invented —
        the figures those rules already assume you know. Each entry separates
        what the sources actually say from the questions they leave open.
      </p>

      <div className={styles.list}>
        {NPCS.map((npc) => (
          <article key={npc.id} data-class={npc.classId} className={styles.npc}>
            <div className={styles.glow} aria-hidden="true" />

            <header className={styles.head}>
              <ClassSigil id={npc.classId} className={styles.sigil} />
              <div className={styles.headMain}>
                <span className={styles.affiliation}>{npc.affiliation}</span>
                <h2 className={styles.name}>{npc.name}</h2>
                <span className={styles.epithet}>{npc.epithet}</span>
              </div>
              <span className={`${styles.status} ${styles[`status${npc.status}`]}`}>
                {npc.status}
              </span>
            </header>

            {npc.quote && (
              <blockquote className={styles.quote}>
                &ldquo;{npc.quote}&rdquo;
              </blockquote>
            )}

            <p className={styles.summary}>{npc.summary}</p>

            <div className={styles.columns}>
              <div className={styles.block}>
                <h3 className={styles.blockTitle}>What the documents say</h3>
                <ul className={styles.facts}>
                  {npc.facts.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {npc.detail.length > 0 && (
                <div className={styles.block}>
                  <h3 className={styles.blockTitle}>
                    {npc.detailLabel || "Associated artifacts"}
                  </h3>
                  <dl className={styles.detail}>
                    {npc.detail.map((d) => (
                      <div key={d.label}>
                        <dt>{d.label}</dt>
                        <dd>{d.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            <details className={styles.open}>
              <summary>Open questions ({npc.open.length})</summary>
              <ul>
                {npc.open.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
              <p className={styles.openNote}>
                For the master document — these are raised by the sources but
                never answered.
              </p>
            </details>

            {npc.classId && (
              <Link
                href={`/classes/${CLASS_SLUGS[npc.classId]}`}
                className={styles.classLink}
              >
                Read the related chapter &rarr;
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
