import React from "react";
import MyPhoto from "../../assets/Images/MyPhoto.jpg";
export default function Balance() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-white">
      {/* Omid */}
      <div className="bg-[#0F1629] w-full  rounded-2xl p-6 w-80 flex flex-col items-center space-y-4">
        <img src={MyPhoto} alt="Omid" className="w-16 h-16 rounded-full" />
        <h2 className="text-lg font-semibold">Omid</h2>
        <div className="bg-[#1F2937] rounded-xl p-4 w-full flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400">AVAILABLE BALANCE</p>
            <p className="text-2xl font-bold">$100.50</p>
          </div>
          <div className="w-12 h-8 bg-indigo-500 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
