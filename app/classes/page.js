import styles from "../section.module.css";

export default function ClassesPage() {
  return (
    <div className={`wrap ${styles.section}`}>
      <span className="eyebrow">Section</span>
      <h1 className={styles.title}>Classes</h1>
      <p className={styles.lead}>
        Death Knight, Undying Sovereign, Mirrorwarden, Devourer, and Fablekeeper —
        each getting its own proper chapter here, pulled over from the character
        sheet&rsquo;s data and dressed up for reading, not just reference.
      </p>
      <div className={`card ${styles.placeholder}`}>
        Next up: one page per class, styled like a real sourcebook chapter.
      </div>
    </div>
  );
}
