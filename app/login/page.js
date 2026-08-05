import styles from "./login.module.css";
import GoogleSignIn from "./GoogleSignIn";

export const metadata = {
  title: "Sign in · Avara",
};

/* The allowlist rejection surfaces under a few different codes depending on
   where Better Auth catches it, so this matches on shape rather than pinning
   one exact string and silently falling through when it changes. */
function isNotOnList(code) {
  return /forbidden|denied|unauthor|signup|not_allow/i.test(String(code));
}

export default async function LoginPage({ searchParams }) {
  const sp = await searchParams;
  const fromParam = Array.isArray(sp.from) ? sp.from[0] : sp.from;
  /* Only ever a path on this site. An absolute URL here would turn the login
     page into an open redirect — sign in, get bounced somewhere else. */
  const from = fromParam && /^\/(?!\/)/.test(fromParam) ? fromParam : "/";
  /* Any error code Better Auth hands back, not just our own. An unrecognised
     failure still has to say something — silently re-rendering the sign-in
     button is indistinguishable from the button not working. */
  const errorCode = Array.isArray(sp.error) ? sp.error[0] : sp.error;

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

        {errorCode && (
          <p className={styles.error}>
            {isNotOnList(errorCode) ? (
              <>
                That Google account isn&rsquo;t on the table&rsquo;s list. Ask
                your DM to add it, then try again.
              </>
            ) : (
              <>
                Sign-in didn&rsquo;t complete.{" "}
                {/* The raw code is shown deliberately: without it a failure is
                    unreportable, and the player has nothing to tell the DM. */}
                Tell your DM this code: <code>{errorCode}</code>
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
