import React from "react";
import MyPhoto from "../../assets/Images/MyPhoto.jpg";
export default function Balance() {
  return (
    <div className="w-108 flex flex-row justify-between relative overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
      <img
        src={MyPhoto}
        alt=""
        className="size-30 rounded-4xl border-1 mt-6 ml-10"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center p-4">
          <p className="text-3xl text-white font-bold">Omid Teimory</p>
        </div>
        <div className="flex flex-col justify-center p-4 mt-5 mr-22">
          <p className="text-xs text-gray-400">AVAILABLE BALANCE</p>
          <p className="text-2xl font-bold">$100.50</p>
        </div>
      </div>
    </div>
  );
}
