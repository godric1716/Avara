export default function Flourish({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 10c26-10 46 10 72 0s46-10 72 0 46 10 72 0"
        stroke="url(#fae-flourish-grad)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="18" cy="6.4" r="2.1" fill="var(--accent-2)" />
      <circle cx="110" cy="13.4" r="2.1" fill="var(--accent)" />
      <circle cx="202" cy="6.4" r="2.1" fill="var(--accent-2)" />
      <defs>
        <linearGradient
          id="fae-flourish-grad"
          x1="0"
          y1="0"
          x2="220"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="var(--accent-2)" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--accent-2)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
