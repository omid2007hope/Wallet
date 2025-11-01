import Card from "../Wallet/Card";

import { Trash2 } from "lucide-react";

export default function Items() {
  return (
    <div className="flex flex-row justify-between items-center rounded-3xl">
      <div className="flex flex-col justify-center items-center">
        {/* <Card /> */}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-around items-center py-5 px-20 bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
          <p className="text-2xl font-bold border-1 border-white/20 rounded-md py-1 px-2">
            Food
          </p>
          <button className="text-lg font-bold text-green-500 bg-green-500/50 py-0.5 px-1 rounded-md border-1 border-green-500 ">
            Edit
          </button>
        </div>
        <div className="w-full flex flex-row justify-around items-center py-5 px-20 bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
          <span className="text-white/50">Date</span>
          <p className="">12.12.2025</p>
          <button className="bg-red-500/50 text-red-400 border-1 border-red-400 rounded-md py-0.5 px-0.5">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
