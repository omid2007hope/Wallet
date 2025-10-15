/* eslint-disable react-refresh/only-export-components */
import React from "react";

export default function Analytic() {
  return (
    <div className="w-full h-100 mt-5 rounded-2xl bg-[#0F1629] shadow-[0_8px_40px_rgba(0,0,0,0.45)] p-4 text-xs text-gray-300">
      {/* Chart */}
      <div className="mt-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent px-3 pb-3 pt-5 ring-1 ring-white/5">
        <div className="relative w-full flex h-75 items-end justify-between gap-2">
          <Bar
            label="Jan"
            height="28%"
            gradient="from-cyan-300/80 via-cyan-400/50 to-cyan-300/10"
          />
          <Bar
            label="Feb"
            height="45%"
            gradient="from-pink-300/80 via-pink-400/50 to-pink-300/10"
          />
          <Bar
            label="Mar"
            height="63%"
            gradient="from-teal-300/80 via-emerald-400/50 to-emerald-300/10"
          />
          <Bar
            label="Apr"
            height="90%"
            gradient="from-fuchsia-300/90 via-pink-400/70 to-rose-300/10"
            active
            tooltip="$4.38"
          />
          <Bar
            label="May"
            height="52%"
            gradient="from-amber-200/80 via-amber-300/60 to-amber-200/10"
          />
          <Bar
            label="Jun"
            height="65%"
            gradient="from-orange-200/80 via-orange-300/60 to-orange-200/10"
          />
          <Bar
            label="July"
            height="70%"
            gradient="from-yellow-200/80 via-yellow-300/60 to-yellow-200/10"
          />
        </div>
      </div>
    </div>
  );
}

function Bar({ label, height, gradient, active = false, tooltip }) {
  return (
    <div className="flex w-8 flex-col items-center">
      <div className="relative flex h-40 w-full items-end justify-center">
        {active && tooltip && (
          <div className="absolute -top-6 z-10 rounded-md bg-[#1B2130] px-2 py-0.5 text-[10px] font-semibold text-white shadow-[0_8px_16px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
            {tooltip}
            <div className="absolute left-1/2 top-full -mt-[2px] h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1B2130] ring-1 ring-white/10" />
          </div>
        )}

        <div
          className={`relative w-[14px] overflow-hidden rounded-full ring-1 ring-white/10 bg-gradient-to-b ${gradient} ${
            active
              ? "shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_10px_24px_rgba(236,72,153,0.35)]"
              : "shadow-[0_2px_10px_rgba(0,0,0,0.35),0_8px_24px_rgba(0,0,0,0.25)]"
          }`}
          style={{ height }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-white/10" />
        </div>
      </div>

      <span
        className={`mt-2 text-[10px] ${
          active ? "text-white" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
