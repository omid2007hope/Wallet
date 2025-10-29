import React from "react";
import Balance from "./Balance";

export default function Manage() {
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
    </div>
  );
}
