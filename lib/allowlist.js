/* Who is allowed to sign in at all. Your four players plus you.

   Kept in an environment variable rather than in the repo for two reasons:
   adding a fifth player is a Vercel settings change and a redeploy rather
   than a commit, and nobody's personal email address ends up in git history
   where it would live forever. */

function parseList(raw) {
  return new Set(
    String(raw || "")
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );
}

export function allowedEmails() {
  return parseList(process.env.AVARA_ALLOWED_EMAILS);
}

/* An empty or missing allowlist denies everyone, including you.

   That is deliberate. A missing env var is far more likely to be a deploy
   that was configured wrong than a decision to let the whole internet create
   characters on your site, so the failure mode is "nobody can get in and you
   notice immediately" rather than "everyone can get in and you don't". */
export function isAllowed(email) {
  if (!email) return false;
  return allowedEmails().has(String(email).trim().toLowerCase());
}

/* Who sees the DM-only pages — /npcs and /world, which carry spoilers the
   players shouldn't read. Separate from the allowlist because being able to
   sign in and being able to see the answers are different questions.

   Also fails closed: an unset variable means no DMs, so the spoiler pages
   stay shut rather than opening to the whole table. */
export function isDm(email) {
  if (!email) return false;
  return parseList(process.env.AVARA_DM_EMAILS).has(
    String(email).trim().toLowerCase()
  );
}
