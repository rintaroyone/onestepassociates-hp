/**
 * Abstract, generated business visuals — no photography or fake faces.
 * Pure SVG/CSS so they scale crisply and add zero network weight.
 */

/** Layered ascending blocks suggesting steady, staged progress. */
export function StepGraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      className={className}
      role="img"
      aria-label="段階的に前進するビジネス変革を表す抽象図"
    >
      <defs>
        <linearGradient id="sg-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3594c5" />
          <stop offset="1" stopColor="#155f8c" />
        </linearGradient>
        <linearGradient id="sg-b" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#cfe6f4" />
        </linearGradient>
      </defs>

      {/* base panel */}
      <rect x="40" y="40" width="340" height="340" rx="28" fill="url(#sg-a)" />
      <rect
        x="40"
        y="40"
        width="340"
        height="340"
        rx="28"
        stroke="#ffffff"
        strokeOpacity="0.1"
      />

      {/* ascending steps */}
      <g opacity="0.95">
        <rect x="84" y="244" width="64" height="92" rx="10" fill="#ffffff" fillOpacity="0.14" />
        <rect x="160" y="196" width="64" height="140" rx="10" fill="#ffffff" fillOpacity="0.22" />
        <rect x="236" y="140" width="64" height="196" rx="10" fill="url(#sg-b)" />
      </g>

      {/* trajectory line + node */}
      <path
        d="M96 250 L188 196 L268 132"
        stroke="#ffffff"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="268" cy="132" r="9" fill="#ffffff" />
      <circle cx="268" cy="132" r="9" stroke="#155f8c" strokeWidth="3" />

      {/* floating accent dots */}
      <circle cx="120" cy="96" r="4" fill="#ffffff" />
      <circle cx="320" cy="300" r="4" fill="#ffffff" fillOpacity="0.5" />
    </svg>
  );
}

/** Connected-node lattice suggesting integrated systems & process flow. */
export function NetworkGraphic({ className = "" }: { className?: string }) {
  const nodes = [
    [60, 70],
    [200, 40],
    [330, 90],
    [110, 180],
    [260, 170],
    [180, 280],
    [340, 250],
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [3, 4],
    [3, 5],
    [4, 5],
    [4, 6],
    [2, 6],
  ];
  return (
    <svg viewBox="0 0 400 320" fill="none" className={className} aria-hidden>
      <g stroke="#3594c5" strokeOpacity="0.3" strokeWidth="1.5">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 7 : 5}
          fill={i % 3 === 0 ? "#1a6fa3" : "#3594c5"}
        />
      ))}
    </svg>
  );
}

/** Soft blue-tinted gradient blob for layering behind sections. */
export function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      aria-hidden
    />
  );
}
