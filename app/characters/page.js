import Link from "next/link";
import styles from "./characters.module.css";
import sectionStyles from "../section.module.css";
import Flourish from "../components/Flourish";
import ClassSigil from "../components/ClassSigil";
import { currentUser, listCharacters } from "../../lib/characters";
import { CLASS_DATA, CLASS_SLUGS } from "../sheet/data";

export const metadata = {
  title: "Characters · Avara",
  description: "Every character at the table, with portraits.",
};

/* Read fresh on every visit. A cached list would show a player's sheet at the
   level it was two sessions ago, which is worse than a moment's load. */
export const dynamic = "force-dynamic";

export default async function CharactersPage() {
  const user = await currentUser();
  if (!user) return null; // proxy.js redirects; this is belt and braces

  const characters = await listCharacters();

  /* Players see a flat list of their own. The DM gets everyone's, grouped by
     player, because "whose is this?" is the first question they'll ask. */
  const groups = user.dm
    ? groupByOwner(characters, user.id)
    : [{ key: "mine", label: null, characters }];

  return (
    <div className="wrap">
      <div className={sectionStyles.section}>
        <span className="eyebrow">Section</span>
        <h1 className={sectionStyles.title}>Characters</h1>
        <Flourish className={sectionStyles.flourish} />
      </div>

      {characters.length === 0 ? (
        <p className={styles.empty}>
          No characters yet.{" "}
          <Link href="/sheet">Open the character sheet</Link> to make one — it
          saves to your account automatically.
        </p>
      ) : (
        groups.map((g) => (
          <section key={g.key} className={styles.group}>
            {g.label && <h2 className={styles.groupTitle}>{g.label}</h2>}
            <ul className={styles.grid}>
              {g.characters.map((c) => (
                <Card key={c.id} c={c} showOwner={false} />
              ))}
            </ul>
          </section>
        ))
      )}

      {user.dm && characters.length > 0 && (
        <p className={styles.dmNote}>
          You&rsquo;re seeing every character at the table because you&rsquo;re
          the DM. Opening one lets you edit it — your name is recorded as the
          last editor so nobody is confused by a change they didn&rsquo;t make.
        </p>
      )}
    </div>
  );
}

function Card({ c }) {
  const cls = CLASS_DATA[c.classId];
  const slug = CLASS_SLUGS[c.classId];
  return (
    <li>
      {/* data-class re-points the palette tokens, so each card is dressed in
          its own class's colours rather than one shared theme. */}
      <Link
        href={`/sheet?c=${encodeURIComponent(c.id)}`}
        className={styles.card}
        data-class={c.classId}
      >
        <span className={styles.portrait}>
          {c.portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={c.portrait} alt="" className={styles.portraitImg} />
          ) : (
            <ClassSigil id={c.classId} className={styles.sigil} />
          )}
        </span>

        <span className={styles.body}>
          <span className={styles.name}>{c.name || "Unnamed"}</span>
          <span className={styles.meta}>
            {cls?.label || c.classId}
            {c.subclass && cls?.subclasses?.[c.subclass]
              ? ` · ${cls.subclasses[c.subclass].label}`
              : ""}
          </span>
          <span className={styles.level}>Level {c.level}</span>

          {/* Only shown when someone other than the owner touched it last —
              otherwise it's noise on every single card. */}
          {c.updatedByName && c.updatedByName !== c.ownerName && (
            <span className={styles.editedBy}>
              Last edited by {c.updatedByName}
            </span>
          )}
        </span>
      </Link>
      {slug && (
        <Link href={`/classes/${slug}`} className={styles.classLink}>
          About the {cls?.label || "class"} →
        </Link>
      )}
    </li>
  );
}

/* The signed-in user's own characters come first — the DM is a player too and
   shouldn't have to hunt past four other people to find their own sheet. */
function groupByOwner(characters, selfId) {
  const map = new Map();
  for (const c of characters) {
    const key = c.ownerId;
    if (!map.has(key)) {
      map.set(key, {
        key,
        label: c.ownerId === selfId ? "Yours" : c.ownerName || "Unnamed player",
        self: c.ownerId === selfId,
        characters: [],
      });
    }
    map.get(key).characters.push(c);
  }
  return [...map.values()].sort((a, b) => {
    if (a.self !== b.self) return a.self ? -1 : 1;
    return a.label.localeCompare(b.label);
  });
}
