"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";
import { Bold, UtensilsCrossed, X } from "lucide-react";
import { House } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Plane } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { Hospital } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { useState } from "react";

export default function AddMenu(props) {
  const iconList1 = [
    {
      icon: (
        <UtensilsCrossed className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-orange-300 hover:bg-orange-300/80 active:bg-orange-300/50" />
      ),
      id: "UtensilsCrossed",
    },
    {
      icon: (
        <House className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-red-900 hover:bg-red-900/80 active:bg-red-900/50" />
      ),
      id: "House",
    },
    {
      icon: (
        <GraduationCap className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-blue-300 hover:bg-blue-300/80 active:bg-blue-300/50" />
      ),
      id: "GraduationCap",
    },
    {
      icon: (
        <Plane className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-green-300 hover:bg-green-300/80 active:bg-green-300/50" />
      ),
      id: "Plane",
    },
  ];

  const iconList2 = [
    {
      icon: (
        <Dumbbell className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-purple-300 hover:bg-purple-300/80 active:bg-purple-300/50" />
      ),
      id: "Dumbbell",
    },
    {
      icon: (
        <Hospital className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-pink-300 hover:bg-pink-300/80 active:bg-pink-300/50" />
      ),
      id: "Hospital",
    },
    {
      icon: (
        <ShoppingCart className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-red-300 hover:bg-red-300/80 active:bg-red-300/50" />
      ),
      id: "ShoppingCart",
    },
    {
      icon: (
        <Gamepad2 className="size-19.5 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-yellow-300 hover:bg-yellow-300/80 active:bg-yellow-300/50" />
      ),
      id: "Gamepad2",
    },
  ];

  const [icon, setIcon] = useState(iconList1[0].icon);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.setOpen}
        className="relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed bottom-16 md:bottom-0 lg:bottom-0 top-0 md:top-50 lg:top-52.5 left-0 md:left-0 lg:left-0 inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#0B1220]">
                <div className="w-full flex flex-row justify-between items-center border-b-1 border-blue-950 shadow-lg shadow-blue-950 rounded-md py-2 md:py-4.5 lg:py-4.5">
                  <div className="ml-12 md:ml-22 lg:ml-22">{icon}</div>
                  <input
                    placeholder="Value"
                    type="text"
                    className="w-38.5 md:w-52 lg:w-52 py-1.5 md:py-2.5 lg:py-2.5 pl-2.5 mr-1.5 md:mr-5.5 lg:mr-5.5 border-3 border-balck rounded-md flex flex-row justiy-center items-center bg-blue-50 "
                  />
                </div>
                <div className="gap-0 md:gap-10 lg:gap-10 flex flex-row justify-center items-center">
                  {iconList1.map((item) => {
                    return (
                      <>
                        <div className="px-0 p-3 md:pt-6 lg:pt-6 my flex flex-row justify-evenly items-center">
                          <button
                            onClick={() => setIcon(item.icon)}
                            className="border-3 border-black rounded-full flex flex-row justify-around items-center"
                          >
                            {item.icon}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="gap-0 md:gap-10 lg:gap-10 flex flex-row justify-center items-center">
                  {iconList2.map((item) => {
                    return (
                      <>
                        <div className="px-0 p-3 md:pt-6 lg:pt-6 my flex flex-row justify-evenly items-center">
                          <button
                            onClick={() => setIcon(item.icon)}
                            className="border-3 border-black rounded-full flex flex-row justify-around items-center"
                          >
                            {item.icon}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="w-full h-full flex flex-row justify-evenly items-center border-t-1 border-blue-950 shadow-lg shadow-blue-950 rounded-md py-2.5 md:py-6 lg:py-6">
                  <button className="px-12 md:px-15 lg:px-15 py-1.5 flex flex-row justify-center items-center bg-green-500 hover:bg-green-500/80 active:bg-green-500/50 rounded-md border-3">
                    Add
                  </button>
                  <button
                    className="px-10 md:px-13 lg:px-13 py-1.5 flex flex-row justify-center items-center bg-red-500 hover:bg-red-500/80 active:bg-red-500/50 rounded-md border-3"
                    onClick={() => props.setOpen(false)}
                  >
                    Discard
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
