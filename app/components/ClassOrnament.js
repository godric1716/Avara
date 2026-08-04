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

  // Four elemental nodes strung on one line, balanced around a centre.
  resonant: (
    <>
      <path d="M12 14h100M148 14h100" stroke={A} strokeWidth="1.4" />
      <circle cx="130" cy="14" r="5" fill="none" stroke={A} strokeWidth="1.6" />
      <circle cx="130" cy="14" r="1.6" fill={A} />
      {[52, 88, 172, 208].map((x, i) => (
        <circle key={x} cx={x} cy="14" r={i % 2 ? 2.6 : 3.4} fill={S} />
      ))}
    </>
  ),

  // A rule that bleeds toward a central drop.
  sangreal: (
    <>
      <path d="M14 12h102M144 12h102" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 4C130 4 125 11 125 14.5a5 5 0 0 0 10 0C135 11 130 4 130 4Z" fill={A} />
      {[60, 90, 170, 200].map((x) => (
        <path key={x} d={`M${x} 12v5`} stroke={S} strokeWidth="1.3" strokeLinecap="round" />
      ))}
      <circle cx="14" cy="12" r="2.2" fill={S} />
      <circle cx="246" cy="12" r="2.2" fill={S} />
    </>
  ),

  // A line torn open at the centre, a crescent in the gap, claw marks either
  // side — the wound first, then the wolf.
  unbroken: (
    <>
      <path d="M12 14h96" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M152 14h96" stroke={A} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M134.5 5.5A9 9 0 1 0 137 22.5 7.2 7.2 0 0 1 134.5 5.5Z"
        fill="none"
        stroke={A}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {[
        [58, -1],
        [196, 1],
      ].map(([x, dir]) => (
        <g key={x} stroke={S} strokeWidth="1.3" strokeLinecap="round">
          <path d={`M${x} 7 ${x + 7 * dir} 21`} />
          <path d={`M${x + 9 * dir} 7 ${x + 16 * dir} 21`} />
          <path d={`M${x + 18 * dir} 7 ${x + 25 * dir} 21`} />
        </g>
      ))}
      <circle cx="12" cy="14" r="2.2" fill={S} />
      <circle cx="248" cy="14" r="2.2" fill={S} />
    </>
  ),

  // A quill nib on a growing stem — book and living thing at once. The nib
  // keeps it from reading as the site's fae vine now that it is green.
  fablekeeper: (
    <>
      <path
        d="M14 15c24-8 44 5 60 2s20-7 36-7"
        stroke={A}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M150 10c16 0 20 7 36 10s36-9 60-5"
        stroke={A}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* nib */}
      <path
        d="M130 3c4.5 5 5.5 11 0 21-5.5-10-4.5-16 0-21Z"
        fill="none"
        stroke={A}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M130 12.5V21" stroke={A} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="130" cy="10.5" r="1.5" fill={A} />
      {/* leaves */}
      <path d="M60 17c4-6 11-6 15 0-4 6-11 6-15 0Z" fill={S} />
      <path d="M196 13c4-6 11-6 15 0-4 6-11 6-15 0Z" fill={S} />
      <circle cx="14" cy="15" r="2" fill={S} />
      <circle cx="246" cy="5" r="2" fill={S} />
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
