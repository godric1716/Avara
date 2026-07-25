import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/classes", label: "Classes" },
  { href: "/compendium", label: "Compendium" },
  { href: "/world", label: "World of Avara" },
  { href: "/npcs", label: "NPCs" },
  { href: "/sheet", label: "Character Sheet" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.eyebrow}>A World for the Table</span>
          <span className={styles.title}>AVARA</span>
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
