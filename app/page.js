import Link from "next/link";
import styles from "./page.module.css";
import Flourish from "./components/Flourish";
import VineCorner from "./components/VineCorner";
import Sparkles from "./components/Sparkles";

const SECTIONS = [
  {
    href: "/classes",
    title: "Classes",
    desc: "Five homebrew classes — Death Knight, Undying Sovereign, Mirrorwarden, Devourer, and Fablekeeper — written up properly, not just pasted rules text.",
  },
  {
    href: "/compendium",
    title: "Compendium",
    desc: "A searchable home for feats and items, homebrew and SRD side by side.",
  },
  {
    href: "/world",
    title: "World of Avara",
    desc: "The setting, its history, and the lore that's grown out of actual sessions.",
  },
  {
    href: "/npcs",
    title: "NPCs",
    desc: "The people and powers your table has met — and the ones still waiting.",
  },
  {
    href: "/sheet",
    title: "Character Sheet",
    desc: "The interactive tracker for whichever class you're playing, built for the table.",
  },
];

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <Sparkles className={styles.sparkles} />
      <VineCorner corner="tl" className={`${styles.cornerVine} ${styles.cornerVinePrimary} ${styles.cornerVineTL}`} />
      <VineCorner corner="br" className={`${styles.cornerVine} ${styles.cornerVinePrimary} ${styles.cornerVineBR}`} />
      <VineCorner corner="tr" className={`${styles.cornerVine} ${styles.cornerVineSecondary} ${styles.cornerVineTR}`} />
      <VineCorner corner="bl" className={`${styles.cornerVine} ${styles.cornerVineSecondary} ${styles.cornerVineBL}`} />
      <div className="wrap">
        <span className="eyebrow">A Homebrew World</span>
        <h1 className={styles.title}>AVARA</h1>
        <Flourish className={styles.flourish} />
        <p className={styles.tagline}>
          Everything for the table, in one place — classes, a growing compendium,
          the world&rsquo;s lore, and the people in it.
        </p>

        <div className={styles.grid}>
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} className={`card ${styles.card}`}>
              <h2 className={styles.cardTitle}>{s.title}</h2>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardLink}>Enter &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
