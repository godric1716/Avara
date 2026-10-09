import styles from "./players.module.css";

/* Who actually uses the site, next to who's allowed to.

   Two numbers per person on purpose. Sign-ins come from the session table and
   were being recorded from the first day the site had accounts, but a session
   lasts a week — so somebody who opens the site daily shows one sign-in.
   Views come from the page_view log and only start from the day it was added.
   Showing both makes the gap legible instead of making one number lie. */
export default function VisitStats({ stats, paths, totals }) {
  const tracking = totals.total > 0;

  return (
    <>
      <section className={styles.group}>
        <h2 className={styles.groupTitle}>
          Who&rsquo;s using the site
          {tracking && ` — ${totals.total.toLocaleString()} page views`}
        </h2>

        {!tracking && (
          <p className={styles.empty}>
            Nothing logged yet. Page views start counting from now; the
            sign-in numbers below go back to the first day the site had
            accounts.
          </p>
        )}

        <ul className={styles.list}>
          {stats.map((s) => (
            <li key={s.email} className={styles.row} data-status="approved">
              <div className={styles.who}>
                <span className={styles.name}>{s.email}</span>
                <span className={styles.when}>
                  {s.views > 0
                    ? `${s.views} view${s.views === 1 ? "" : "s"} across ${s.days} day${s.days === 1 ? "" : "s"} · last ${relative(s.lastView)}`
                    : "no page views logged yet"}
                </span>
                <span className={styles.when}>
                  {s.signIns > 0
                    ? `${s.signIns} sign-in${s.signIns === 1 ? "" : "s"} · last ${relative(s.lastSignIn)}`
                    : "never signed in"}
                </span>
              </div>
              <div className={styles.statFigures}>
                <span className={`${styles.statNum} num`}>{s.views}</span>
                <span className={styles.statLabel}>views</span>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          A visit is one page load. Repeats of the same page within 20 seconds
          count once, and link prefetches aren&rsquo;t counted at all —
          without that, hovering the nav bar would read as visiting every page
          in it.
        </p>
      </section>

      {paths.length > 0 && (
        <section className={styles.group}>
          <h2 className={styles.groupTitle}>Most-read pages</h2>
          <ul className={styles.list}>
            {paths.map((p) => (
              <li key={p.path} className={styles.row}>
                <div className={styles.who}>
                  <span className={styles.name}>{p.path}</span>
                  <span className={styles.when}>
                    {p.readers} {p.readers === 1 ? "person" : "people"}
                  </span>
                </div>
                <div className={styles.statFigures}>
                  <span className={`${styles.statNum} num`}>{p.views}</span>
                  <span className={styles.statLabel}>views</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

function relative(iso) {
  if (!iso) return "never";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "unknown";
  const mins = Math.round((Date.now() - then) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.round(days / 30)} months ago`;
}
