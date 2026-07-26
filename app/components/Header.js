import { cookies } from "next/headers";
import Link from "next/link";
import styles from "./Header.module.css";
import { Leaf, Bloom } from "./faeMotifs";
import { verifyRoleToken } from "../../lib/siteAuth";

const NAV_LINKS = [
  { href: "/classes", label: "Classes" },
  { href: "/compendium", label: "Compendium" },
  { href: "/world", label: "World of Avara", dmOnly: true },
  { href: "/npcs", label: "NPCs", dmOnly: true },
  { href: "/sheet", label: "Character Sheet" },
];

export default async function Header() {
  const secret = process.env.AVARA_AUTH_SECRET;
  // No secret configured means the gate itself is off (see proxy.js), so show
  // every link — there's no player/DM split to enforce yet.
  const role = secret
    ? await verifyRoleToken((await cookies()).get("avara_role")?.value, secret)
    : "dm";
  const links = NAV_LINKS.filter((l) => !l.dmOnly || role === "dm");

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
        </nav>
      </div>
    </header>
  );
}
