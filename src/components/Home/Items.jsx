import { useState } from "react";

import { Trash2 } from "lucide-react";

export default function Items({
  title = "Food",
  date = "12.12.2025",
  x = <Trash2 size={20} />,
}) {
  const [icon, setIcon] = useState(x);
  return (
    <div className="w-full h-full flex flex-row justify-between items-center rounded-3xl">
      <div className="flex flex-row items-center pr-12 bg-[#0F1629] shadow-2xl rounded-2xl ring-1 ring-white/5">
        <div className="">{icon}</div>
      </div>
      <div className="flex flex-col items-center bg-[#0F1629] shadow-2xl rounded-2xl ring-1 ring-white/5">
        <div className="flex flex-row items-center py-2 pr-62">
          <p className="text-1xl font-bold rounded-md ml-2.5">{title}</p>
          <button className="bg-green-500/50 hover:bg-green-500/20 active:bg-green-400/50 text-green-400 border-1 border-green-400 rounded-md  px-0.5 ml-2.5 mr-2.5">
            Edit
          </button>
        </div>
        <div className="flex flex-row items-center py-2 pl-60">
          <p
            className="
          text-sm font-bold rounded-md"
          >
            {date}
          </p>
          <button className="bg-red-500/50 hover:bg-green-500/20 active:bg-red-400/50 text-red-400 border-1 border-red-400 rounded-md p-0.5 ml-2.5 mr-2.5">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
