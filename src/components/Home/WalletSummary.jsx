import React from "react";

export default function WalletSummary() {
  return (
    <div className="min-h-screen w-full bg-[#0A0E1A] text-white flex items-start justify-center p-6 md:p-10 pb-20 sm:pb-0 lg:pb-0 pt-14 sm:pt-0 lg:pt-0">
      <div className="w-full max-w-xl mt-0 sm:mt-0 xl:mt-40 ">
        <div className="relative overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
          {/* Decorative top wave */}
          <div className="absolute -top-24 left-1/2 h-64 w-[140%] -translate-x-1/2 rounded-b-[50%] bg-gradient-to-br from-[#1a2450] via-[#0F1629] to-transparent opacity-80" />

          {/* Balance Widget */}
          <div className="relative z-10 flex flex-col items-center gap-4 p-8 md:p-10">
            <div className="relative h-64 w-64 flex items-center justify-center">
              {/* background subtle gradient aura */}
              <div className="absolute inset-0 rounded-full blur-[90px] opacity-60 bg-[conic-gradient(from_180deg_at_50%_50%,#FF8A00_0%,#FFC960_15%,#60FF9F_35%,#55F0FF_60%,#8A5BFF_85%,#FF8A00_100%)]" />

              {/* Main bold colored ring with rounded ends */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <linearGradient
                    id="grad-full"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FF8A00" />
                    <stop offset="25%" stopColor="#FFC960" />
                    <stop offset="50%" stopColor="#60FF9F" />
                    <stop offset="75%" stopColor="#55F0FF" />
                    <stop offset="100%" stopColor="#8A5BFF" />
                  </linearGradient>
                  <filter
                    id="glow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
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
                  <circle
                    cx="100"
                    cy="100"
                    r="76"
                    fill="none"
                    stroke="url(#grad-full)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="75 25" // controls visible portion
                    strokeDashoffset="0"
                    filter="url(#glow)"
                  />
                </g>
              </svg>

              {/* inner dark center */}
              <div className="absolute inset-[26px] rounded-full bg-[#0F1629]" />

              {/* Center text */}
              <div className="relative text-center space-y-2">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-emerald-400/30">
                  +8.6%
                </span>
                <div className="text-4xl font-bold">$5,643.50</div>
                <div className="text-sm text-white/60">USD</div>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="z-10 mt-2 px-4 pb-6 md:px-6 md:pb-8">
            <h3 className="mb-4 text-lg font-semibold text-white/90">
              My transactions
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-black text-lg font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-medium">Amazon</div>
                    <div className="text-xs text-white/60">May 24, 2022</div>
                  </div>
                </div>
                <div className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10">
                  -$103.56
                </div>
              </li>

              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-black text-lg font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-medium">McDonalds</div>
                    <div className="text-xs text-white/60">May 12, 2022</div>
                  </div>
                </div>
                <div className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10">
                  -$34.78
                </div>
              </li>

              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/7">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-black text-lg font-bold">
                    
                  </div>
                  <div>
                    <div className="font-medium">Apple</div>
                    <div className="text-xs text-white/60">May 8, 2022</div>
                  </div>
                </div>
                <div className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10">
                  -$1,000.97
                </div>
              </li>
            </ul>

            <div className="mt-6 flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
