import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span>Avara &middot; a homebrew world, built one session at a time</span>
      </div>
    </footer>
  );
}
