import React from "react";
import MyPhoto from "../../assets/Images/MyPhoto.jpg";
export default function Balance() {
  return (
    <div className="bg-red-500 flex flex-row mb-25 p-15 rounded-lg">
      <img src={MyPhoto} alt="" className=" size-50 rounded-4xl" />
      <div className="bg-black flex flex-col justify-evenly rounded-lg">
        <p className="text-xs text-gray-400">AVAILABLE BALANCE</p>
        <p className="text-2xl font-bold">$100.50</p>
      </div>
    </div>
  );
}
