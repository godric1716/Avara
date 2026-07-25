import styles from "../section.module.css";

export default function NpcsPage() {
  return (
    <div className={`wrap ${styles.section}`}>
      <span className="eyebrow">Section</span>
      <h1 className={styles.title}>NPCs</h1>
      <p className={styles.lead}>
        The people and powers of Avara — allies, rivals, and the ones your party
        hasn&rsquo;t met yet.
      </p>
      <div className={`card ${styles.placeholder}`}>
        Next up: an NPC directory, built alongside the World of Avara section.
      </div>
    </div>
  );
}
