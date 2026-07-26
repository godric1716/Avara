const SIGILS = {
  deathknight: (
    <path d="M12 2C12 2 5 11 5 15.5A7 7 0 0 0 19 15.5C19 11 12 2 12 2Z" />
  ),
  sovereign: <path d="M3 18h18l-1-9-4 4-3-6-3 6-4-4-1 9Z" />,
  mirrorwarden: (
    <>
      <path d="M12 2 20 9l-3 13H7L4 9Z" />
      <path d="M12 2v20M4 9h16" />
    </>
  ),
  devourer: <path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4Z" />,
  // Open book: two page leaves curving away from a central spine.
  fablekeeper: (
    <>
      <path d="M12 6.9C9.6 5.2 6.6 4.6 3.6 4.9V17.9C6.6 17.6 9.6 18.2 12 19.9" />
      <path d="M12 6.9C14.4 5.2 17.4 4.6 20.4 4.9V17.9C17.4 17.6 14.4 18.2 12 19.9" />
      <path d="M12 6.9V19.9" />
    </>
  ),
};

export default function ClassSigil({ id, className }) {
  const sigil = SIGILS[id];
  if (!sigil) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {sigil}
    </svg>
  );
}
