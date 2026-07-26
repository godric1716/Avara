import Link from "next/link";
import styles from "./bestiary.module.css";
import ClassSigil from "../../../components/ClassSigil";
import ClassOrnament from "../../../components/ClassOrnament";
import BestiaryBrowser from "./BestiaryBrowser";
import { POKEDEX_ALL, POKEDEX_STARTERS, POKEDEX_LEGENDARY } from "../../../sheet/data/pokedex";

export const metadata = {
  title: "Bestiary · Fablekeeper · Avara",
  description:
    "Every companion line in the Fablekeeper's Tome, searchable — starters, caught lines, and the four Legendaries.",
};

export default function BestiaryPage() {
  const caughtCount = POKEDEX_ALL.length - POKEDEX_STARTERS.length - POKEDEX_LEGENDARY.length;

  return (
    <article data-class="fablekeeper" className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <Link href="/classes/fablekeeper" className={styles.back}>
          &larr; Fablekeeper chapter
        </Link>

        <div className={styles.heroRow}>
          <ClassSigil id="fablekeeper" className={styles.sigil} />
          <div>
            <span className={styles.eyebrow}>The Tome, Opened</span>
            <h1 className={styles.title}>Bestiary</h1>
          </div>
        </div>
        <ClassOrnament id="fablekeeper" className={styles.ornament} />

        <p className={styles.lede}>
          Every creature the Tome has ever held a page for — {POKEDEX_STARTERS.length}{" "}
          Starter lines, {caughtCount} lines caught along the way, and{" "}
          {POKEDEX_LEGENDARY.length} Legendaries kept in the fifth slot. Each stat block
          advances the same way it does on the character sheet: pick a stage, or trigger
          Mega where the line has one.
        </p>

        <BestiaryBrowser />
      </div>
    </article>
  );
}
