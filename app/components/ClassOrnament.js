/* A divider per class, replacing the site's fae vine inside class pages.
   Each is drawn on the same 260x28 field so they're swappable. */

const A = "var(--class-accent)";
const S = "var(--class-strong)";

const ORNAMENTS = {
  // Iron bar hung with barbs, a blood drop at the centre.
  deathknight: (
    <>
      <path d="M14 14h100M146 14h100" stroke={A} strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M130 6C130 6 125 12.5 125 16a5 5 0 0 0 10 0c0-3.5-5-10-5-10Z"
        fill={A}
      />
      {[34, 58, 82, 178, 202, 226].map((x) => (
        <path
          key={x}
          d={`M${x} 14v6`}
          stroke={S}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ))}
      <circle cx="14" cy="14" r="2.4" fill={S} />
      <circle cx="246" cy="14" r="2.4" fill={S} />
    </>
  ),

  // Inscriptional rule with a small crown and lozenges.
  sovereign: (
    <>
      <path d="M16 14h96M148 14h96" stroke={A} strokeWidth="1.4" />
      <path
        d="M120 18h20l-2-9-4 4-4-6-4 6-4-4-2 9Z"
        fill="none"
        stroke={A}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {[52, 80, 180, 208].map((x) => (
        <path key={x} d={`M${x} 10.5 ${x + 3.5} 14 ${x} 17.5 ${x - 3.5} 14Z`} fill={S} />
      ))}
    </>
  ),

  // A line that has been broken and offset, with loose shards.
  mirrorwarden: (
    <>
      <path
        d="M18 17h42l8-6h34l8 6h22"
        stroke={A}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M128 11h22l8 6h34l8-6h42"
        stroke={A}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M124 6 130 14 124 22 118 14Z" fill={A} />
      <path d="M64 6.5 67.5 10 64 13.5 60.5 10Z" fill={S} />
      <path d="M186 14.5 189.5 18 186 21.5 182.5 18Z" fill={S} />
    </>
  ),

  // Starlight scattered along a fading line.
  devourer: (
    <>
      <path d="M10 14h104M146 14h104" stroke={A} strokeWidth="1" opacity="0.55" />
      <path
        d="M130 3l2.2 7.4L139 14l-6.8 3.6L130 25l-2.2-7.4L121 14l6.8-3.6Z"
        fill={A}
      />
      {[
        [46, 9.5, 2.6],
        [78, 18, 2],
        [190, 9.5, 2.2],
        [214, 18.5, 2.6],
      ].map(([x, y, r]) => (
        <path
          key={`${x}-${y}`}
          d={`M${x} ${y - r}l${r * 0.4} ${r * 0.6}L${x + r} ${y}l-${r * 0.6} ${r * 0.4}L${x} ${y + r}l-${r * 0.4}-${r * 0.6}L${x - r} ${y}l${r * 0.6}-${r * 0.4}Z`}
          fill={S}
        />
      ))}
      <circle cx="24" cy="14" r="1.1" fill={S} />
      <circle cx="236" cy="14" r="1.1" fill={S} />
    </>
  ),

  // A pen-stroke flourish with a leaf, in the storybook hand.
  fablekeeper: (
    <>
      <path
        d="M16 16c26-10 46 6 62 2s22-10 38-10 26 8 42 10 40-6 62-4"
        stroke={A}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M130 4c3 4 3 8 0 12-3-4-3-8 0-12Z"
        fill={A}
      />
      <path d="M62 18c3-5 9-5 12 0-3 5-9 5-12 0Z" fill={S} />
      <path d="M186 12c3-5 9-5 12 0-3 5-9 5-12 0Z" fill={S} />
    </>
  ),
};

export default function ClassOrnament({ id, className }) {
  const art = ORNAMENTS[id];
  if (!art) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 260 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {art}
    </svg>
  );
}
