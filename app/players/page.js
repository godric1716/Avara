import { redirect } from "next/navigation";
import styles from "./players.module.css";
import sectionStyles from "../section.module.css";
import Flourish from "../components/Flourish";
import RequestRow from "./RequestRow";
import { currentUser } from "../../lib/characters";
import { listAccessRequests } from "../../lib/allowlist";

export const metadata = { title: "Players · Avara" };

// Always fresh: a pending request the DM can't see is the whole failure mode
// this page exists to prevent.
export const dynamic = "force-dynamic";

export default async function PlayersPage() {
  const user = await currentUser();
  if (!user?.dm) redirect("/");

  const requests = await listAccessRequests();
  const pending = requests.filter((r) => r.status === "pending");
  const approved = requests.filter((r) => r.status === "approved");
  const denied = requests.filter((r) => r.status === "denied");

  return (
    <div className="wrap">
      <div className={sectionStyles.section}>
        <span className="eyebrow">DM only</span>
        <h1 className={sectionStyles.title}>Players</h1>
        <Flourish className={sectionStyles.flourish} />
      </div>

      <Group
        title={`Waiting on you${pending.length ? ` (${pending.length})` : ""}`}
        rows={pending}
        empty="Nobody's waiting. When someone signs in with an account you haven't approved, they'll appear here."
      />

      <Group
        title={`At the table (${approved.length})`}
        rows={approved}
        empty="Nobody approved yet."
      />

      {denied.length > 0 && (
        <Group title={`Turned away (${denied.length})`} rows={denied} />
      )}

      <p className={styles.note}>
        Approving lets someone sign in immediately — they don&rsquo;t need to
        be told, they just try again. Denying keeps them out and stops them
        reappearing here every time they retry. Forgetting removes the record
        entirely, so a fresh attempt shows up as new.
      </p>
      <p className={styles.note}>
        DM access is set in the site&rsquo;s environment, not on this page, so
        nobody can be promoted to DM through the web — including by you.
      </p>
    </div>
  );
}

function Group({ title, rows, empty }) {
  return (
    <section className={styles.group}>
      <h2 className={styles.groupTitle}>{title}</h2>
      {rows.length === 0 ? (
        empty ? (
          <p className={styles.empty}>{empty}</p>
        ) : null
      ) : (
        <ul className={styles.list}>
          {rows.map((r) => (
            <RequestRow key={r.email} request={r} />
          ))}
        </ul>
      )}
    </section>
  );
}
