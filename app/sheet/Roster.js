"use client";

import { useEffect, useState } from "react";
import styles from "./sheet.module.css";
import ClassSigil from "../components/ClassSigil";

/* The character picker. Sits above the identity bar so switching sheets is the
   first thing on the page rather than something buried in a menu — most of
   this table plays on a phone, where a hidden control may as well not exist. */
export default function Roster({
  roster,
  onSelect,
  onCreate,
  onDuplicate,
  onDelete,
}) {
  /* Deleting a character can't be undone and there is no server copy yet, so
     it takes two taps. Holding the id rather than a boolean means the prompt
     can never outlive the row it belongs to. */
  const [confirmingId, setConfirmingId] = useState(null);
  const active = roster.find((c) => c.isActive);

  // A pending confirmation is about one specific character; switching away
  // from it should drop the prompt rather than carry it to the new sheet.
  useEffect(() => {
    if (confirmingId && confirmingId !== active?.id) setConfirmingId(null);
  }, [active?.id, confirmingId]);

  return (
    <section className={styles.roster} aria-label="Your characters">
      <div className={styles.rosterScroll}>
        {roster.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelect(c.id)}
            className={`${styles.rosterCard} ${c.isActive ? styles.rosterActive : ""}`}
            aria-pressed={c.isActive}
            data-class={c.classId}
          >
            <span className={styles.rosterThumb}>
              {c.portrait ? (
                // A client-side data URI, which next/image can't optimise.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.portrait} alt="" className={styles.rosterThumbImg} />
              ) : (
                <ClassSigil id={c.classId} className={styles.rosterSigil} />
              )}
            </span>
            <span className={styles.rosterText}>
              <span className={styles.rosterName}>
                {c.name || "Unnamed"}
              </span>
              <span className={styles.rosterMeta}>
                {c.classLabel} · {c.level}
              </span>
            </span>
          </button>
        ))}

        <button
          type="button"
          onClick={onCreate}
          className={`${styles.rosterCard} ${styles.rosterNew}`}
        >
          <span className={styles.rosterThumb} aria-hidden="true">
            +
          </span>
          <span className={styles.rosterText}>
            <span className={styles.rosterName}>New</span>
            <span className={styles.rosterMeta}>Blank sheet</span>
          </span>
        </button>
      </div>

      {active && (
        <div className={styles.rosterActions}>
          <button
            type="button"
            className={styles.smallBtn}
            onClick={() => onDuplicate(active.id)}
          >
            Duplicate
          </button>

          {confirmingId === active.id ? (
            <>
              <span className={styles.rosterWarn}>
                Delete {active.name || "this character"}?
              </span>
              <button
                type="button"
                className={`${styles.smallBtn} ${styles.rosterDanger}`}
                onClick={() => {
                  onDelete(active.id);
                  setConfirmingId(null);
                }}
              >
                Delete for good
              </button>
              <button
                type="button"
                className={styles.smallBtn}
                onClick={() => setConfirmingId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              type="button"
              className={styles.smallBtn}
              onClick={() => setConfirmingId(active.id)}
            >
              Delete
            </button>
          )}
        </div>
      )}
    </section>
  );
}
