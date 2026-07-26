import { Leaf, Bloom } from "./faeMotifs";

const TRANSFORMS = {
  bl: undefined,
  br: "scaleX(-1)",
  tl: "scaleY(-1)",
  tr: "scale(-1, -1)",
};

export default function VineCorner({ className, corner = "bl" }) {
  const transform = TRANSFORMS[corner];
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={transform ? { transform } : undefined}
    >
      <path
        d="M4 156C4 110 18 76 48 54C70 38 78 20 74 2"
        stroke="var(--accent-2)"
        strokeOpacity="0.65"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M48 54C58 60 66 56 70 44"
        stroke="var(--accent-2)"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Leaf x={20} y={128} rotate={20} scale={1.6} />
      <Leaf x={36} y={90} rotate={-40} scale={1.4} />
      <Leaf x={66} y={46} rotate={100} scale={1.3} />
      <Bloom x={72} y={16} scale={1.6} />
      <Bloom x={12} y={150} scale={1.1} />
    </svg>
  );
}
