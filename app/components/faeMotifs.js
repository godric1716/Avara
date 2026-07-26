export function Leaf({ x, y, rotate = 0, scale = 1, color = "var(--accent-2)" }) {
  return (
    <path
      d="M0 0C3 -5 9 -5 12 0C9 5 3 5 0 0Z"
      fill={color}
      opacity="0.9"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

export function Bloom({ x, y, scale = 1 }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {petals.map((deg) => (
        <circle
          key={deg}
          cx={Math.cos((deg * Math.PI) / 180) * 3.4}
          cy={Math.sin((deg * Math.PI) / 180) * 3.4}
          r="2.7"
          fill="var(--bloom)"
          opacity="0.95"
        />
      ))}
      <circle cx="0" cy="0" r="2" fill="var(--accent-2)" />
    </g>
  );
}
