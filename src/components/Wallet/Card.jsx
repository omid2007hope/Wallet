import React from "react";
import Chip from "../../assets/Images/Chip.png";
import Background from "../../assets/Images/Background.png";

export default function Card({
  brand = "Bank",
  number = "5678 8930 9800 2134",
  fullName = "Omid Teimory",
  expiry = "12/34",
}) {
  return (
    <div
      className="text-white/80 rounded-3xl bg-cover bg-center border-3 shadow-lg/80 shadow-black/80 border-black"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="w-full h-full flex flex-col justify-evenly items-center text-white/80 rounded-3xl">
        <div className="w-55 md:w-85 lg:w-85 flex flex-row justify-between items-center pb-0 md:pb-3 lg:pb-3 ">
          <img
            src={Chip}
            alt=""
            className="w-11.5 md:w-15 lg:w-15 h-8.5 md:h-11 lg:h-11 rounded-lg mt-3.5 md:mt-4 lg:mt-4"
          />
          <p className="text-2xl md:text-3xl lg:text-3xl font-bold">{brand}</p>
        </div>
        <div className="w-65 md:w-full lg:w-full flex flex-row justify-center items-center pt-8 md:pt-9 lg:pt-9 pb-8 md:pb-9 lg:pb-9 text-2xl md:text-3xl lg:text-3xl font-bold">
          {number}
        </div>
        <div className="w-55 md:w-85 lg:w-85 flex flex-row justify-between items-center pb-4.5 md:pb-7 lg:pb-7 pt-0 md:pt-4 lg:pt-4">
          <p className="text-sm md:text-lg lg:text-lg font-bold">***</p>
          <p className="text-sm md:text-lg lg:text-lg font-bold">{expiry}</p>
          <p className="text-sm md:text-lg lg:text-lg font-bold ">{fullName}</p>
        </div>
      </div>
    </div>
  );
}
