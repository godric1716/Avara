import styles from "./login.module.css";
import { login } from "./actions";

export const metadata = {
  title: "Sign in · Avara",
};

export default async function LoginPage({ searchParams }) {
  const sp = await searchParams;
  const fromParam = Array.isArray(sp.from) ? sp.from[0] : sp.from;
  const from = fromParam && fromParam.startsWith("/") ? fromParam : "/";
  const error = sp.error === "1";

  return (
    <div className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.card}>
        <span className={styles.eyebrow}>A World for the Table</span>
        <h1 className={styles.title}>AVARA</h1>
        <p className={styles.lede}>Enter the table&rsquo;s passphrase to continue.</p>

        <form action={login} className={styles.form}>
          <input type="hidden" name="from" value={from} />
          <input
            type="password"
            name="password"
            placeholder="Passphrase"
            autoFocus
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Enter
          </button>
        </form>

        {error && (
          <p className={styles.error}>That passphrase didn&rsquo;t match. Try again.</p>
        )}
      </div>
    </div>
  );
}
