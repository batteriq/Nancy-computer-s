// Hand-drawn custom SVG flame. Electric-blue outer body with an orange inner
// glow. Self-contained and fully scalable; works on dark or light backgrounds.
export default function FlameIcon({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Nancy Fire Computers flame"
      className={className}
    >
      <defs>
        <linearGradient id="flameOuter" x1="24" y1="2" x2="24" y2="46">
          <stop offset="0" stopColor="#00D4FF" />
          <stop offset="1" stopColor="#0097c4" />
        </linearGradient>
        <radialGradient id="flameInner" cx="0.5" cy="0.68" r="0.5">
          <stop offset="0" stopColor="#FFD089" />
          <stop offset="0.5" stopColor="#FF6B00" />
          <stop offset="1" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer flame body */}
      <path
        d="M24 2c1.6 5.8-1.2 9.4-4.5 12.6-3.6 3.5-7.8 7-7.8 14.1C11.7 38.4 17.2 46 24 46s12.3-7.6 12.3-17.3c0-4.6-2-7.6-4.1-10-1.3 1.7-2.7 2.7-4.4 2.9 2.3-5.2 1.8-11.2-2.4-16.1-.5 3.2-2 5-3.9 6.6C22 9.3 24.6 6.4 24 2z"
        fill="url(#flameOuter)"
      />
      {/* Inner orange glow */}
      <path
        d="M24 20c1.1 3 .2 5.3-1.6 7.4-1.6 1.9-3.3 3.8-3.3 7 0 3.9 2.2 6.6 4.9 6.6s4.9-2.7 4.9-6.6c0-2.3-1-4-2.1-5.6-1 .9-2 1.3-3 1.3 1.2-2.9.9-6.4-.3-8.9-.4 1.4-1.1 2.3-2 3 .8-1.6 2.1-3.3 1.6-4.2z"
        fill="url(#flameInner)"
      />
    </svg>
  );
}
