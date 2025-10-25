export default function Donut() {
  return (
    <div className="relative flex items-center justify-center size-80 ">
      {/* background subtle gradient aura */}
      <div className="absolute inset-0 rounded-full blur-[90px] opacity-60 bg-[conic-gradient(from_180deg_at_50%_50%,#FF8A00_0%,#FFC960_15%,#60FF9F_35%,#55F0FF_60%,#8A5BFF_85%,#FF8A00_100%)]" />

      {/* Main bold colored ring with rounded ends */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="grad-full" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8A00" />
            <stop offset="25%" stopColor="#FFC960" />
            <stop offset="50%" stopColor="#60FF9F" />
            <stop offset="75%" stopColor="#55F0FF" />
            <stop offset="100%" stopColor="#8A5BFF" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* base ring for contrast */}
        <circle
          cx="100"
          cy="100"
          r="76"
          fill="none"
          stroke="#1F2A44"
          strokeWidth="18"
        />

        {/* colored progress ring */}
        <g transform="rotate(-90 100 100)">
          {/* controls visible portion via strokeDasharray */}
          <circle
            cx="100"
            cy="100"
            r="76"
            fill="none"
            stroke="url(#grad-full)"
            strokeWidth="25"
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="75 25"
            strokeDashoffset="0"
            filter="url(#glow)"
          />
        </g>
      </svg>

      {/* inner dark center */}
      <div className="absolute inset-[30px] rounded-full bg-[#0F1629]" />

      {/* Center text */}
      <div className="relative text-center space-y-2">
        <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-emerald-400/30">
          +8.6%
        </span>
        <div className="text-4xl font-bold">$5,643.50</div>
        <div className="text-sm text-white/60">USD</div>
      </div>
    </div>
  );
}
