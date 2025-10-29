import React from "react";
import Chip from "../../assets/Images/Chip.png";

export default function Card() {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center bg-[#0B1220] text-white ronded-3xl">
      <div className="flex flex-row justify-evenly items-center">
        <div className="">
          <img src={Chip} alt="" className="" />
        </div>
        <p className="">Bank</p>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <p className="">2134 5678 8930 9800</p>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <p className="">***</p>
        <p className="">12/30</p>
        <p className="">Omid Teimory</p>
      </div>
    </div>
  );
}
