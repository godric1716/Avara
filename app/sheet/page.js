import styles from "../section.module.css";

export default function SheetPage() {
  return (
    <div className={`wrap ${styles.section}`}>
      <span className="eyebrow">Section</span>
      <h1 className={styles.title}>Character Sheet</h1>
      <p className={styles.lead}>
        The interactive class tracker — Grave Seals, Malice, Mirror Points, Soul
        Fragments, Ink, whichever class you&rsquo;re playing — moving over from the
        standalone artifact into a real page here, wired to the same compendium
        data as everything else.
      </p>
      <div className={`card ${styles.placeholder}`}>
        Next up: port the character sheet engine in as an interactive page.
      </div>
    </div>
  );
}
