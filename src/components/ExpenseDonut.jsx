import React from "react";

/**
 * CategoriesDonutCard (Reusable)
 * Tailwind + React, no chart libs. You can plug in your own logic/data later.
 *
 * Props:
 *  - title?: string
 *  - amount?: number (center amount). If omitted, a currency symbol shows.
 *  - segments: { label: string; value: number; color: string }[]  // value is percent (0-100)
 *  - rightButtonLabel?: string
 *  - onRightButtonClick?: () => void
 *  - dateFrom?: string
 *  - dateTo?: string
 *  - className?: string
 *  - size?: number (default 260)
 *  - stroke?: number (default 18)
 *  - showInnerRings?: boolean (default true)
 *  - currency?: string (default "$")
 */
export default function CategoriesDonutCard({
  title = "Categories",
  amount, // optional now
  segments,
  rightButtonLabel = "Statistics",
  onRightButtonClick,
  dateFrom,
  dateTo,
  className = "",
  size = 260, // NEW: overall svg size
  stroke = 18, // NEW: thickness
  showInnerRings = true, // NEW: subtle concentric rings in center
  currency = "$", // NEW: center symbol when amount missing
}) {
  // ---- SVG circle math
  const radius = Math.max(60, Math.round(size / 2 - stroke - 20)); // keep margins
  const center = size / 2;
  const C = 2 * Math.PI * radius; // circumference
  const GAP = 4; // visual gap between segments along path (px)

  let offsetAcc = 0;
  const arcs = (segments ?? []).map((s) => {
    const len = Math.max(0, (s.value / 100) * C);
    const segLen = Math.max(0, len - GAP);
    const arc = {
      ...s,
      dasharray: `${segLen} ${C - segLen}`,
      dashoffset: -offsetAcc,
    };
    offsetAcc += len; // keep true percentage spacing
    return arc;
  });

  return (
    <div
      className={`w-full max-w-md rounded-3xl bg-[#0b0f17] p-5 sm:p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] border border-white/5 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        {rightButtonLabel && (
          <button
            onClick={onRightButtonClick}
            className="px-3 py-1.5 text-sm rounded-xl bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 transition shadow-inner"
          >
            {rightButtonLabel}
          </button>
        )}
      </div>

      {/* Donut */}
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ height: size, width: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="rotate-[-90deg]"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="trackGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
          </defs>

          {/* Track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#trackGradient)"
            strokeWidth={stroke}
            opacity={0.15}
          />

          {/* Segments */}
          {arcs.map((a, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={a.color}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={a.dasharray}
              strokeDashoffset={a.dashoffset}
              filter="url(#glow)"
              opacity={0.95}
            />
          ))}
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 grid place-items-center">
          {/* inner subtle rings */}
          {showInnerRings && (
            <>
              <div className="absolute h-[70%] w-[70%] rounded-full border-2 border-white/10" />
              <div className="absolute h-[54%] w-[54%] rounded-full border-2 border-white/10" />
            </>
          )}
          <div className="h-[120px] w-[120px] rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-inner grid place-items-center">
            <div className="text-center">
              <div className="text-xs text-gray-400">Expense</div>
              {amount == null ? (
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  {currency}
                </div>
              ) : (
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  $
                  {typeof amount === "number" && amount.toLocaleString
                    ? amount.toLocaleString()
                    : amount}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legend (first 6 items) */}
      {segments?.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          {segments.slice(0, 6).map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: s.color }}
              />
              <span className="text-sm text-gray-300">{s.label}</span>
              <span className="ml-auto text-xs text-gray-400">{s.value}%</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer date range (optional) */}
      {(dateFrom || dateTo) && (
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          {dateFrom && (
            <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">
              From {dateFrom}
            </div>
          )}
          {dateTo && (
            <div className="px-2 py-1 rounded-lg bg-white/5 border border-white/10">
              Till {dateTo}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// --- Example usage ---
// const demoSegments = [
//   { label: "Housing", value: 22, color: "#ef4444" },
//   { label: "Food", value: 15, color: "#f59e0b" },
//   { label: "Transport", value: 11, color: "#facc15" },
//   { label: "Health", value: 10, color: "#10b981" },
//   { label: "Leisure", value: 9, color: "#22c55e" },
//   { label: "Other", value: 7, color: "#a78bfa" },
//   { label: "Gifts", value: 6, color: "#60a5fa" },
//   { label: "Fees", value: 6, color: "#34d399" },
//   { label: "Charity", value: 5, color: "#f472b6" },
// ];
// <CategoriesDonutCard amount={6436} segments={demoSegments} dateFrom="Apr 1" dateTo="Apr 30" />
