"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import styles from "./players.module.css";
import { approve, deny, forget } from "./actions";

export default function RequestRow({ request }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [confirmForget, setConfirmForget] = useState(false);

  function run(fn) {
    setError("");
    startTransition(async () => {
      try {
        const res = await fn(request.email);
        if (res && res.ok === false) {
          setError(res.error || "That didn't work.");
          return;
        }
        /* revalidatePath marks the server data stale but doesn't tell an
           already-open page to fetch it again, so the row sat in the wrong
           group until something else caused a navigation. */
        router.refresh();
      } catch (e) {
        setError(e.message || "That didn't work.");
      }
    });
  }

  return (
    <li className={styles.row} data-status={request.status}>
      <div className={styles.who}>
        <span className={styles.name}>{request.name || request.email}</span>
        {request.name && <span className={styles.email}>{request.email}</span>}
        <span className={styles.when}>
          {request.status === "pending"
            ? `asked ${relative(request.requestedAt)}`
            : `${request.status} ${relative(request.decidedAt)}`}
        </span>
      </div>

      <div className={styles.actions}>
        {request.status !== "approved" && (
          <button
            type="button"
            className={styles.btn}
            disabled={pending}
            onClick={() => run(approve)}
          >
            Approve
          </button>
        )}
        {request.status !== "denied" && (
          <button
            type="button"
            className={styles.btn}
            disabled={pending}
            onClick={() => run(deny)}
          >
            {request.status === "approved" ? "Revoke" : "Deny"}
          </button>
        )}
        {/* Two taps: forgetting an approved player silently removes their
            access, and there's no undo. */}
        {confirmForget ? (
          <>
            <button
              type="button"
              className={`${styles.btn} ${styles.danger}`}
              disabled={pending}
              onClick={() => run(forget)}
            >
              Really forget
            </button>
            <button
              type="button"
              className={styles.btn}
              onClick={() => setConfirmForget(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            className={styles.btn}
            disabled={pending}
            onClick={() => setConfirmForget(true)}
          >
            Forget
          </button>
        )}
      </div>

      {error && <p className={styles.rowError}>{error}</p>}
    </li>
  );
}

function relative(iso) {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const mins = Math.round((Date.now() - then) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
}
