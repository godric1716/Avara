/* One mark per race and background, drawn on a shared 24x24 field.

   These are stroked with currentColor rather than a palette token, so the
   page can set the colour from each entry's `tint` and a new entry only
   needs a shape added here — no CSS change. */

const MARKS = {
  // A star already falling, with the trail still burning behind it.
  silvaneth: (
    <>
      <path d="M15.6 8.4 17 4.2l1.4 4.2 4.2 1.4-4.2 1.4L17 15.4l-1.4-4.2-4.2-1.4Z" />
      <path d="M12.4 12.6 3 22" />
      <path d="M8.4 14.2 5.6 17M11 17.4l-2.2 2.2" />
    </>
  ),

  // Two wings, panelled like stained glass.
  aelar: (
    <>
      <path d="M12 4v16" />
      <path d="M11.2 6C8 5 4 6.6 3 10c-1 3.4 1.4 7 4.6 8 2-2.6 3-5.4 3.6-8Z" />
      <path d="M12.8 6C16 5 20 6.6 21 10c1 3.4-1.4 7-4.6 8-2-2.6-3-5.4-3.6-8Z" />
      <path d="M7.6 8.6c1 2.6 1.6 5 1.8 7.6M16.4 8.6c-1 2.6-1.6 5-1.8 7.6" />
    </>
  ),

  // A cut gem shot through with veins.
  valraekh: (
    <>
      <path d="M12 2.6 20 8v8l-8 5.4L4 16V8Z" />
      <path d="M12 2.6v18.8" />
      <path d="M4 8l8 4 8-4M6.8 13.2 12 12M17.2 13.2 12 12" />
    </>
  ),

  // A mirror with the figure already out of it, on the other side of the frame.
  glimmerfolk: (
    <>
      <path d="M4 3.2h7v17.6H4Z" />
      <path d="M15 5.6a2.1 2.1 0 1 0 0-.02Z" />
      <path d="M15.1 9.6h1.8l2.4 4.4M17 9.6v5M15.6 21l1.4-6.4M18.6 21l-1.6-6.4" />
    </>
  ),

  // Ash still falling over a broken line — the third morning.
  "fenris-survivor": (
    <>
      <path d="M3 20.4h18" />
      <path d="M6 20.4c0-3.4 2-5.2 2-8 2 1.4 3 3 3 4.6 1.4-1 2-2.6 2-4.6 2.6 2 4 4.6 4 8" />
      <path d="M8.4 3.4v2.4M12 2.2v2.6M15.6 3.4v2.4" />
    </>
  ),

  // Two hands, or two links — family that isn't blood.
  "the-lost-ones": (
    <>
      <path d="M9.4 8.4a4 4 0 1 0 0 7.2" />
      <path d="M14.6 8.4a4 4 0 1 1 0 7.2" />
      <path d="M9.4 12h5.2" />
    </>
  ),

  // An eye behind a drawn veil.
  "agent-of-the-unseen-veil": (
    <>
      <path d="M2.6 12S6 6.4 12 6.4 21.4 12 21.4 12 18 17.6 12 17.6 2.6 12 2.6 12Z" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M4 4.6c2.4 1.6 4.4 2.4 8 2.4s5.6-.8 8-2.4" />
    </>
  ),

  // A charm on a cord, the kind a neighbour presses on you.
  "veiled-touched": (
    <>
      <path d="M7 3.4c1.6 2.6 3.2 4 5 4s3.4-1.4 5-4" />
      <path d="M12 7.4v3" />
      <path d="M12 10.4 15.4 14 12 21 8.6 14Z" />
    </>
  ),

  // A compass rose sitting on a wave.
  "island-hopper": (
    <>
      <circle cx="12" cy="10" r="6.4" />
      <path d="M12 3.6v12.8M5.6 10h12.8" />
      <path d="M9.6 7.6 14.4 12.4M14.4 7.6 9.6 12.4" />
      <path d="M2.6 20.4c1.8 0 1.8 1.4 3.6 1.4s1.8-1.4 3.6-1.4 1.8 1.4 3.6 1.4 1.8-1.4 3.6-1.4 1.8 1.4 3.6 1.4" />
    </>
  ),
};

export default function PeopleSigil({ slug, className }) {
  const mark = MARKS[slug];
  if (!mark) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {mark}
    </svg>
  );
}
