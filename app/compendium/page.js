import styles from "../section.module.css";
import Flourish from "../components/Flourish";

export default function CompendiumPage() {
  return (
    <div className={`wrap ${styles.section}`}>
      <span className="eyebrow">Section</span>
      <h1 className={styles.title}>Compendium</h1>
      <Flourish className={styles.flourish} />
      <p className={styles.lead}>
        A single searchable home for feats and items — your homebrew content and
        the open-licensed SRD content side by side, tagged by source and class.
      </p>
      <div className={`card ${styles.placeholder}`}>
        Next up: search &amp; filters, then the homebrew feats/items already built
        for the character sheet, then the SRD set.
      </div>
    </div>
  );
}
