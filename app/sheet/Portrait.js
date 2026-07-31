"use client";

import { useRef, useState } from "react";
import styles from "./sheet.module.css";
import ClassSigil from "../components/ClassSigil";

/* Everything on this sheet persists to localStorage, which caps out somewhere
   around 5MB for the whole origin. A phone photo base64s to several times
   that on its own, so an uploaded image is drawn to a canvas, capped on its
   long edge and re-encoded as JPEG before it is ever stored. A 4MB photo
   lands around 60-80KB, which leaves the rest of the sheet room to save. */
const MAX_EDGE = 512;
const QUALITY = 0.82;

function downscale(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Couldn't read that file."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("That doesn't look like an image."));
      img.onload = () => {
        const scale = Math.min(1, MAX_EDGE / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        // JPEG has no alpha, so fill first or transparency comes out black.
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", QUALITY));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

export default function Portrait({ classId, portrait, onChange }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleFile(e) {
    const file = e.target.files?.[0];
    e.target.value = ""; // let the same file be re-picked after a removal
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Pick an image file.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const dataUrl = await downscale(file);
      // Guard the quota rather than letting the debounced save fail silently.
      if (dataUrl.length > 900_000) {
        setError("That image is still too large after resizing. Try a smaller one.");
      } else {
        onChange(dataUrl);
      }
    } catch (err) {
      setError(err.message || "Couldn't use that image.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={styles.portrait}>
      <button
        type="button"
        className={styles.portraitFrame}
        onClick={() => inputRef.current?.click()}
        aria-label={portrait ? "Replace portrait" : "Upload a portrait"}
        title={portrait ? "Replace portrait" : "Upload a portrait"}
      >
        {portrait ? (
          // Intentionally a plain img: the source is a client-side data URI,
          // which next/image can't optimise anyway.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={portrait} alt="Character portrait" className={styles.portraitImg} />
        ) : (
          <span className={styles.portraitEmpty}>
            <ClassSigil id={classId} className={styles.portraitSigil} />
            <span className={styles.portraitHint}>
              {busy ? "Resizing…" : "Add portrait"}
            </span>
          </span>
        )}
      </button>

      {portrait && (
        <button
          type="button"
          className={styles.portraitRemove}
          onClick={() => {
            onChange("");
            setError("");
          }}
        >
          Remove
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className={styles.hiddenInput}
        aria-hidden="true"
        tabIndex={-1}
      />

      {error && <p className={styles.portraitError}>{error}</p>}
    </div>
  );
}
