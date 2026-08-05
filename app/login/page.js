import styles from "./login.module.css";
import GoogleSignIn from "./GoogleSignIn";

export const metadata = {
  title: "Sign in · Avara",
};

export default async function LoginPage({ searchParams }) {
  const sp = await searchParams;
  const fromParam = Array.isArray(sp.from) ? sp.from[0] : sp.from;
  /* Only ever a path on this site. An absolute URL here would turn the login
     page into an open redirect — sign in, get bounced somewhere else. */
  const from = fromParam && /^\/(?!\/)/.test(fromParam) ? fromParam : "/";
  const denied = sp.error === "denied";

  return (
    <div className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.card}>
        <span className={styles.eyebrow}>A World for the Table</span>
        <h1 className={styles.title}>AVARA</h1>
        <p className={styles.lede}>
          Sign in with the Google account your DM added to the table.
        </p>

        <div className={styles.form}>
          <GoogleSignIn from={from} />
        </div>

        {denied && (
          <p className={styles.error}>
            That Google account isn&rsquo;t on the table&rsquo;s list. Ask your
            DM to add it, then try again.
          </p>
        )}
      </div>
    </div>
  );
}
