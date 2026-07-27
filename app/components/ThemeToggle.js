"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const KEY = "avara-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // The inline script in layout.js has already applied the stored theme before
  // first paint; this just syncs React's copy of it.
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    const root = document.documentElement;
    if (next === "light") root.dataset.theme = "light";
    else delete root.dataset.theme;
    // Keep form controls and scrollbars in step with the chosen theme.
    root.style.colorScheme = next;
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* private mode — the choice just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={theme === "light" ? "Dark theme" : "Light theme"}
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
