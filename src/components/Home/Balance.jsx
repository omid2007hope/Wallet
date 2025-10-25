import React from "react";
import MyPhoto from "../../assets/Images/MyPhoto.jpg";
export default function Balance() {
  return (
    <div className="px-0 sm:px-0 md:px-3 lg:px-3 py-0 sm:py-0 md:py-2 lg:py-2 mx-2 sm:mx-2 md:mx-4 lg:mx-4 my-4 sm:my-4 md:my-4 lg:my-4 flex flex justify-between items-center relative overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
      <img src={MyPhoto} alt="" className="w-40 rounded-4xl lg:mr-10" />
      <div className="flex flex-col justify-center items-center md:pl-10 lg:pr-10 md:pr-0 lg:pl-10">
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
