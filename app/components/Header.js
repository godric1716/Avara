import { headers } from "next/headers";
import Link from "next/link";
import styles from "./Header.module.css";
import { Leaf, Bloom } from "./faeMotifs";
import ThemeToggle from "./ThemeToggle";
import { auth } from "../../lib/auth";
import { isDm } from "../../lib/allowlist";

const NAV_LINKS = [
  { href: "/classes", label: "Classes" },
  { href: "/compendium", label: "Compendium" },
  { href: "/world", label: "World of Avara", dmOnly: true },
  { href: "/npcs", label: "NPCs", dmOnly: true },
  { href: "/sheet", label: "Character Sheet" },
];

export default async function Header() {
  const configured = !!(process.env.BETTER_AUTH_SECRET && process.env.DATABASE_URL);
  // Unconfigured means the gate itself is off (see proxy.js), so show every
  // link — there's no player/DM split to enforce yet.
  let dm = !configured;
  if (configured) {
    const session = await auth.api.getSession({ headers: await headers() });
    dm = isDm(session?.user?.email);
  }
  /* Hiding the link is presentation only. The pages themselves are gated in
     proxy.js — a player who types /npcs directly still gets turned away. */
  const links = NAV_LINKS.filter((l) => !l.dmOnly || dm);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.eyebrow}>A World for the Table</span>
          <span className={styles.titleRow}>
            <svg className={styles.sigil} viewBox="0 0 20 20" aria-hidden="true">
              <Leaf x={2} y={12} rotate={-20} scale={0.8} />
              <Bloom x={13} y={9} scale={0.7} />
            </svg>
            <span className={styles.title}>AVARA</span>
          </span>
        </Link>
        <nav className={styles.nav}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
