// Fully self-contained animated hero backdrop. Inline SVG tech silhouettes drift
// over a circuit-board grid, with a sweeping scan line and a central glow.
// Zero external image dependencies.

const STROKE = "#00D4FF";

function Laptop({ className = "" }: { className?: string }) {
  return (
    <svg
      width="220"
      height="150"
      viewBox="0 0 220 150"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* screen */}
      <rect
        x="45"
        y="15"
        width="130"
        height="85"
        rx="6"
        stroke={STROKE}
        strokeWidth="2"
      />
      <rect
        x="55"
        y="25"
        width="110"
        height="65"
        rx="3"
        stroke={STROKE}
        strokeWidth="1"
      />
      {/* base / keyboard */}
      <path
        d="M20 110h180l14 24a4 4 0 0 1-3.6 5.8H9.6A4 4 0 0 1 6 134l14-24z"
        stroke={STROKE}
        strokeWidth="2"
      />
      <line x1="95" y1="123" x2="125" y2="123" stroke={STROKE} strokeWidth="2" />
    </svg>
  );
}

function Monitor({ className = "" }: { className?: string }) {
  return (
    <svg
      width="190"
      height="170"
      viewBox="0 0 190 170"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="10"
        width="170"
        height="110"
        rx="8"
        stroke={STROKE}
        strokeWidth="2"
      />
      <rect
        x="22"
        y="22"
        width="146"
        height="86"
        rx="3"
        stroke={STROKE}
        strokeWidth="1"
      />
      <line x1="95" y1="120" x2="95" y2="142" stroke={STROKE} strokeWidth="2" />
      <line x1="60" y1="150" x2="130" y2="150" stroke={STROKE} strokeWidth="3" />
    </svg>
  );
}

function Keyboard({ className = "" }: { className?: string }) {
  return (
    <svg
      width="210"
      height="90"
      viewBox="0 0 210 90"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="10"
        width="198"
        height="70"
        rx="8"
        stroke={STROKE}
        strokeWidth="2"
      />
      {/* key grid */}
      {[24, 38, 52, 66].map((y) => (
        <line key={y} x1="18" y1={y} x2="192" y2={y} stroke={STROKE} strokeWidth="1" />
      ))}
      {[40, 70, 100, 130, 160].map((x) => (
        <line key={x} x1={x} y1="20" x2={x} y2="70" stroke={STROKE} strokeWidth="1" />
      ))}
    </svg>
  );
}

function Mouse({ className = "" }: { className?: string }) {
  return (
    <svg
      width="90"
      height="140"
      viewBox="0 0 90 140"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="12"
        y="8"
        width="66"
        height="124"
        rx="33"
        stroke={STROKE}
        strokeWidth="2"
      />
      <line x1="45" y1="20" x2="45" y2="52" stroke={STROKE} strokeWidth="2" />
      <line x1="12" y1="60" x2="78" y2="60" stroke={STROKE} strokeWidth="1" />
    </svg>
  );
}

export default function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Circuit board line pattern with nodes */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="circuit"
            width="90"
            height="90"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 45h30m30 0h30M45 0v30m0 30v30"
              stroke={STROKE}
              strokeWidth="1"
              fill="none"
            />
            <circle cx="45" cy="45" r="3" fill={STROKE} />
            <circle cx="0" cy="45" r="2" fill={STROKE} />
            <circle cx="45" cy="0" r="2" fill={STROKE} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Central radial glow */}
      <div className="radial-glow" />

      {/* Floating tech silhouettes (very low opacity, like watermarks) */}
      <Laptop className="float-x absolute left-[6%] top-[18%] opacity-[0.12]" />
      <Monitor className="float-y absolute right-[8%] top-[12%] opacity-[0.1]" />
      <Keyboard className="float-diagonal absolute bottom-[14%] left-[14%] opacity-[0.1]" />
      <Mouse className="pulse-scale absolute right-[16%] bottom-[16%] opacity-[0.12]" />
      <Monitor className="float-diagonal absolute left-[42%] top-[60%] opacity-[0.08]" />

      {/* Electric blue scan line sweeping top to bottom */}
      <div className="scanline" />
    </div>
  );
}
