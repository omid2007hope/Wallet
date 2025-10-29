import React from "react";
import Chip from "../../assets/Images/Chip.png";

export default function Card() {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center bg-[#0B1220] text-white rounded-3xl">
      <div className="w-full flex flex-row justify-evenly items-center pt-4 pb-5">
        <img src={Chip} alt="" className="w-14 rounded-2xl mr-55" />
        <p className="text-3xl font-bold">Bank</p>
      </div>
      <div className="w-full flex flex-row justify-evenly items-center pt-8 pb-8 text-3xl font-bold">
        <div className="flex flex-row justify-evenly items-center">
          <p className="px-2.5">2134</p>
          <p className="px-2.5">5678</p>
          <p className="px-2.5">8930</p>
          <p className="px-2.5">9800</p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-evenly items-center pb-7 pt-8">
        <p className="text-1xl font-bold ">***</p>
        <p className="text-1xl font-bold px-18">12/30</p>
        <p className="text-1xl font-bold ">Omid Teimory</p>
      </div>
    </div>
  );
}
