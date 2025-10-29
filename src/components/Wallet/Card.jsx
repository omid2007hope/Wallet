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
        <div className="w-full flex flex-row justify-evenly items-center pb-0 md:pb-5 lg:pb-5 ">
          <img
            src={Chip}
            alt=""
            className="w-11.5 md:w-15 lg:w-15 h-8.5 md:h-11 lg:h-11 rounded-lg mr-31 md:mr-55 lg:mr-55 mt-3.5 md:mt-6 lg:mt-6"
          />
          <p className="text-2xl md:text-3xl lg:text-3xl font-bold mt-2 md:mt-4 lg:mt-4">
            {brand}
          </p>
        </div>
        <div className="w-full flex flex-row justify-evenly items-center pt-8  md:pt-8 lg:pt-8 pb-8 md:pb-8 lg:pb-8 text-2xl md:text-3xl lg:text-3xl font-bold mx-2 md:mx-0 lg:mx-0 ">
          <div className="flex flex-row justify-evenly items-center">
            <p className="px-1 md:px-2.5 lg:px-2.5">{number}</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-evenly items-center pb-4.5 md:pb-7 lg:pb-7 pt-0 md:pt-8 lg:pt-8 ">
          <p className="text-sm md:text-1xl lg:text-1xl font-bold ">***</p>
          <p className="text-sm md:text-1xl lg:text-1xl font-bold px-7 md:px-18 lg:px-18 ">
            {expiry}
          </p>
          <p className="text-sm md:text-1xl lg:text-1xl font-bold ">
            {fullName}
          </p>
        </div>
      </div>
    </div>
  );
}
