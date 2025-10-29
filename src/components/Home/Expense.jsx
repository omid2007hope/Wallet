import React, { useState } from "react";
import Balance from "../Wallet/Balance";
import AddMenu from "./AddMenu";

export default function Expense() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-cols justify-center bg-[#0B1220] text-gray-200">
      <div className="py-14 sm:py-14 md:py-14 lg:py-14 px-0 sm:px-0 md:px-0 lg:px-0">
        <div className="rounded-2xl border border-white/10 bg-[#0F1629] mb-2">
          <div className="text-3xl font-bold">
            <Balance />
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0F1629] p-10 m-2"></div>
        </div>
      </div>
      <div className="fixed top-127 sm:top-127 md:top-237.5 lg:top-238.5 left-70 sm:left-70 md:left-160 lg:left-277 z-50">
        <button
          className="rounded-full bg-green-500/80 border-5 border-green-950/80 pb-4.5 sm:pb-4.5 md:pb-2.5 lg:pb-2.5 pt-2.5 sm:pt-2.5 md:pt-0.5 lg:pt-0.5 px-5.5 sm:px-5.5 md:px-7 lg:px-7 hover:bg-green-500/70 active:bg-green-500/100
        "
          onClick={() => setOpen(true)}
        >
          <div className="text-white text-4xl font-bold">+</div>
        </button>
      </div>
      <AddMenu open={open} setOpen={setOpen} />
    </div>
  );
}
