import React from "react";

// PURE TAILWIND MARKUP — no functions, no external libs.
// You handle data, state, and events. This is just the UI shell.
export default function WalletSummary() {
  return (
    <div className="min-h-screen w-full bg-[#0A0E1A] text-white flex items-start justify-center p-6 md:p-10 pb-20 sm:pb-0 lg:pb-0 ">
      <div className="w-full max-w-xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
          {/* Decorative top wave */}
          <div className="absolute -top-24 left-1/2 h-64 w-[140%] -translate-x-1/2 rounded-b-[50%] bg-gradient-to-br from-[#1a2450] via-[#0F1629] to-transparent opacity-80" />

          {/* Balance Widget */}
          <div className="relative z-10 flex flex-col items-center gap-4 p-8 md:p-10">
            <div className="relative h-64 w-64">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-60 bg-[conic-gradient(at_50%_50%,#55F0FF,#60FF9F,#FFC960,#FF8A00,#FF8A00)]" />

              {/* Neon ring (segments via conic-gradient) */}
              <div className="relative h-full w-full rounded-full bg-[conic-gradient(#55F0FF_0_140deg,#8A5BFF_140deg_185deg,#60FF9F_185deg_265deg,#FFC960_265deg_330deg,#FF8A00_330deg_360deg)]">
                {/* base ring thickness by cutting a hole */}
                <div className="absolute inset-[18px] rounded-full bg-[#0F1629]" />

                {/* inner subtle rings */}
                <div className="pointer-events-none absolute inset-[6px] rounded-full ring-2 ring-black/30" />
                <div className="pointer-events-none absolute inset-[30px] rounded-full ring-2 ring-black/20" />

                {/* Center value */}
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div className="space-y-1">
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-emerald-400/30">
                      {/* +X.X% */}
                      <span data-bind="growth">+8.6%</span>
                    </span>
                    <div className="text-4xl font-semibold tracking-tight tabular-nums">
                      <span data-bind="balance">5,643.50</span>
                    </div>
                    <div className="text-sm text-white/60">
                      <span data-bind="currency">USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="z-10 mt-2 px-4 pb-6 md:px-6 md:pb-8">
            <h3 className="mb-4 text-lg font-semibold text-white/90">
              My transactions
            </h3>
            <ul className="space-y-3">
              {/* ONE ITEM — duplicate as needed and bind your data */}
              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/7">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-full bg-white text-black text-lg font-bold"
                    data-bind="logo"
                  >
                    A
                  </div>
                  <div>
                    <div className="font-medium" data-bind="title">
                      Amazon
                    </div>
                    <div className="text-xs text-white/60" data-bind="date">
                      May 24, 2022
                    </div>
                  </div>
                </div>
                <div
                  className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10"
                  data-bind="amount"
                >
                  -$103.56
                </div>
              </li>

              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/7">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-full bg-white text-black text-lg font-bold"
                    data-bind="logo"
                  >
                    M
                  </div>
                  <div>
                    <div className="font-medium" data-bind="title">
                      McDonalds
                    </div>
                    <div className="text-xs text-white/60" data-bind="date">
                      May 12, 2022
                    </div>
                  </div>
                </div>
                <div
                  className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10"
                  data-bind="amount"
                >
                  -$34.78
                </div>
              </li>

              <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/7">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-full bg-white text-black text-lg font-bold"
                    data-bind="logo"
                  >
                    
                  </div>
                  <div>
                    <div className="font-medium" data-bind="title">
                      Apple
                    </div>
                    <div className="text-xs text-white/60" data-bind="date">
                      May 8, 2022
                    </div>
                  </div>
                </div>
                <div
                  className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10"
                  data-bind="amount"
                >
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
