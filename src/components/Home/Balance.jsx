import React from "react";
import MyPhoto from "../../assets/Images/MyPhoto.jpg";
export default function Balance() {
  return (
    <div className="bg-white p-10 rounded-lg w-full flex justify-between items-center text-white">
      <img src={MyPhoto} alt="" className=" w-35 h-35 rounded-4xl ml-0" />
      <div>
        <div className="flex flex-col justify-evenly bg-black rounded-lg p-5 w-60 ">
          <p className="text-xs text-gray-400">AVAILABLE BALANCE</p>
          <p className="text-2xl font-bold">$100.50</p>
          <div className="w-12 h-8 bg-indigo-500 rounded-md mt-5"></div>
        </div>
      </div>
    </div>
  );
}
