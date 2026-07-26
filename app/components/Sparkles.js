const DOTS = [
  { x: 8, y: 18, r: 0.8, c: "bloom" },
  { x: 16, y: 55, r: 0.55, c: "accent2" },
  { x: 24, y: 10, r: 0.65, c: "accent2" },
  { x: 78, y: 12, r: 0.75, c: "bloom" },
  { x: 88, y: 32, r: 0.55, c: "accent2" },
  { x: 93, y: 60, r: 0.7, c: "bloom" },
  { x: 60, y: 6, r: 0.5, c: "accent2" },
  { x: 37, y: 68, r: 0.6, c: "bloom" },
  { x: 70, y: 74, r: 0.5, c: "accent2" },
  { x: 48, y: 30, r: 0.45, c: "bloom" },
];

export default function Sparkles({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {DOTS.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={d.c === "bloom" ? "var(--bloom)" : "var(--accent-2)"}
          opacity="0.6"
        />
      ))}
    </svg>
  );
}
