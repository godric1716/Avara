"use client";

import { useState } from "react";
import styles from "./login.module.css";
import { signIn } from "../../lib/authClient";

export default function GoogleSignIn({ from }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function go() {
    setBusy(true);
    setError("");
    try {
      /* Better Auth hands back Google's URL and the browser follows it. The
         allowlist is not checked here — it is enforced on the server when the
         account would be created, so a rejection can't be skipped by anyone
         poking at this button. */
      await signIn.social({
        provider: "google",
        callbackURL: from,
        /* Without this, a rejected sign-in lands back here with nothing to
           show for it — which reads to the player as the button being
           broken. Better Auth appends ?error=<code> to this URL. */
        errorCallbackURL: "/login",
      });
    } catch {
      setError("Couldn't reach Google. Check your connection and try again.");
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={go}
        disabled={busy}
        className={styles.button}
      >
        {busy ? "Taking you to Google…" : "Sign in with Google"}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}
