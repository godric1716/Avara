import styles from "../section.module.css";
import Flourish from "../components/Flourish";

export default function WorldPage() {
  return (
    <div className={`wrap ${styles.section}`}>
      <span className="eyebrow">Section</span>
      <h1 className={styles.title}>World of Avara</h1>
      <Flourish className={styles.flourish} />
      <p className={styles.lead}>
        The setting itself — its history, its regions, and the running lore that
        keeps growing out of actual sessions at the table.
      </p>
      <div className={`card ${styles.placeholder}`}>
        Next up: we&rsquo;ll consolidate your scattered notes into real pages here,
        together.
      </div>
    </div>
  );
}
