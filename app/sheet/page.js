import CharacterSheet from "./CharacterSheet";
import styles from "../section.module.css";
import Flourish from "../components/Flourish";

export const metadata = {
  title: "Character Sheet · Avara",
  description:
    "An interactive tracker for the eight homebrew classes of Avara, saved in your browser.",
};

export default function SheetPage() {
  return (
    <div className="wrap">
      <div className={styles.section}>
        <span className="eyebrow">Section</span>
        <h1 className={styles.title}>Character Sheet</h1>
        <Flourish className={styles.flourish} />
      </div>
      <CharacterSheet />
    </div>
  );
}
