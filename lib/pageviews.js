import { pool } from "./db.js";

/* Visit logging.

   Recorded from proxy.js, which already resolves the signed-in user on every
   request — so this costs one insert and no extra round trip for the session.

   What counts as a visit is the fiddly part. Next prefetches links on hover
   and on entering the viewport, and those prefetches hit the proxy like any
   other request. Counting them would inflate every total: hovering a nav bar
   would read as visiting five pages. The proxy filters them out by header
   before calling this. */

/* Paths that aren't pages. Assets, the auth endpoints and the document
   downloads would otherwise dominate the log without saying anything about
   who read what. */
const IGNORED_PREFIXES = ["/api", "/documents", "/_next", "/favicon"];

export function isTrackablePath(pathname) {
  if (IGNORED_PREFIXES.some((p) => pathname.startsWith(p))) return false;
  // Anything with a file extension is an asset, not a page.
  if (/\.[a-z0-9]{2,5}$/i.test(pathname)) return false;
  return true;
}

/* A short window in which the same person hitting the same path again isn't
   a second visit. A refresh, a back-button, or Next re-fetching a route on
   focus would otherwise each count. */
const DEDUPE_SECONDS = 20;

export async function recordPageView(email, path) {
  if (!email || !path) return;
  try {
    await pool.query(
      `insert into page_view (email, path)
       select $1, $2
        where not exists (
              select 1 from page_view
               where email = $1 and path = $2
                 and viewed_at > now() - ($3 || ' seconds')::interval
        )`,
      [String(email).trim().toLowerCase(), path, DEDUPE_SECONDS]
    );
  } catch {
    /* Logging a visit must never break serving the page. If the insert
       fails the visit simply isn't counted. */
  }
}

/* Per-email totals, newest activity first. Left joined from the user table so
   somebody who signed in but has never been logged still appears with a zero
   rather than being invisible. */
export async function visitStats() {
  const { rows } = await pool.query(`
    with views as (
      select email,
             count(*)::int                     as views,
             count(distinct date(viewed_at))::int as days,
             max(viewed_at)                    as last_view
        from page_view
       group by email
    ),
    sessions as (
      select lower(u.email) as email,
             count(s.id)::int as sign_ins,
             max(s."createdAt") as last_sign_in
        from "user" u
        left join session s on s."userId" = u.id
       group by lower(u.email)
    )
    select coalesce(v.email, s.email)       as email,
           coalesce(v.views, 0)             as views,
           coalesce(v.days, 0)              as days,
           v.last_view,
           coalesce(s.sign_ins, 0)          as sign_ins,
           s.last_sign_in
      from views v
      full outer join sessions s on s.email = v.email
     order by coalesce(v.views, 0) desc, email
  `);
  return rows.map((r) => ({
    email: r.email,
    views: r.views,
    days: r.days,
    lastView: r.last_view?.toISOString() || null,
    signIns: r.sign_ins,
    lastSignIn: r.last_sign_in?.toISOString() || null,
  }));
}

/* The most-read pages, so the DM can see what the site is actually used for
   rather than only who used it. */
export async function topPaths(limit = 12) {
  const { rows } = await pool.query(
    `select path, count(*)::int views, count(distinct email)::int readers
       from page_view
      group by path
      order by views desc
      limit $1`,
    [limit]
  );
  return rows;
}

export async function totalViews() {
  const { rows } = await pool.query(
    "select count(*)::int n, min(viewed_at) since from page_view"
  );
  return { total: rows[0].n, since: rows[0].since?.toISOString() || null };
}
