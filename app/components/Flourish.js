import { Leaf, Bloom } from "./faeMotifs";

export default function Flourish({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 14c20-12 40 12 60 0s40-12 60 0 40 12 60 0 40-12 60 0"
        stroke="url(#vine-stem-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Leaf x={26} y={5} rotate={-30} scale={1.15} />
      <Leaf x={54} y={23} rotate={140} scale={1.15} />
      <Leaf x={146} y={23} rotate={40} scale={1.15} />
      <Leaf x={174} y={5} rotate={-150} scale={1.15} />
      <Bloom x={100} y={7} scale={1.05} />
      <Bloom x={200} y={21} scale={0.9} />
      <Bloom x={16} y={20} scale={0.7} />
      <defs>
        <linearGradient id="vine-stem-grad" x1="0" y1="0" x2="260" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--accent-2)" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="var(--bloom)" stopOpacity="0.9" />
          <stop offset="1" stopColor="var(--accent-2)" stopOpacity="0.65" />
        </linearGradient>
      </defs>
    </svg>
  );
}
