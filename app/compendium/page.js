import styles from "../section.module.css";
import Flourish from "../components/Flourish";
import CompendiumBrowser from "./CompendiumBrowser";
import { ENTRIES, HOMEBREW } from "./data";

export const metadata = {
  title: "Compendium · Avara",
  description:
    "A searchable compendium of feats and magic items — Avara homebrew alongside the open SRD.",
};

export default function CompendiumPage() {
  const srdCount = ENTRIES.length - HOMEBREW.length;

  return (
    <div className={`wrap ${styles.section}`}>
      <span className="eyebrow">Section</span>
      <h1 className={styles.title}>Compendium</h1>
      <Flourish className={styles.flourish} />
      <p className={styles.lead}>
        Every feat and magic item in one place — {HOMEBREW.length} homebrew
        entries from the five classes of Avara, alongside {srdCount} from the
        open SRD. Search across all of it, or filter down to one class.
      </p>
      <CompendiumBrowser />
    </div>
  );
}
