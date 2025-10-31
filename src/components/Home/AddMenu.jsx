"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";
import { Bold, UtensilsCrossed } from "lucide-react";
import { House } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Plane } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { Hospital } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Gamepad2 } from "lucide-react";

export default function AddMenu(props) {
  const iconList1 = [
    {
      icon: (
        <UtensilsCrossed className="ml-2 md:ml-0 lg:ml-0 size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-orange-300 hover:bg-orange-300/80 active:bg-orange-300/50" />
      ),
      id: "UtensilsCrossed",
    },
    {
      icon: (
        <House className="size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-red-900 hover:bg-red-900/80 active:bg-red-900/50" />
      ),
      id: "House",
    },
    {
      icon: (
        <GraduationCap className="size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-blue-300 hover:bg-blue-300/80 active:bg-blue-300/50" />
      ),
      id: "GraduationCap",
    },
    {
      icon: (
        <Plane className="mr-2 md:mr-0 lg:mr-0 size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-green-300 hover:bg-green-300/80 active:bg-green-300/50" />
      ),
      id: "Plane",
    },
  ];

  const iconList2 = [
    {
      icon: (
        <Dumbbell className="ml-2 md:ml-0 lg:ml-0  size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-purple-300 hover:bg-purple-300/80 active:bg-purple-300/50" />
      ),
      id: "Dumbbell",
    },
    {
      icon: (
        <Hospital className="size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-pink-300 hover:bg-pink-300/80 active:bg-pink-300/50" />
      ),
      id: "Hospital",
    },
    {
      icon: (
        <ShoppingCart className="size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-red-300 hover:bg-red-300/80 active:bg-red-300/50" />
      ),
      id: "ShoppingCart",
    },
    {
      icon: (
        <Gamepad2 className="mr-2 md:mr-0 lg:mr-0 size-18 md:size-21 lg:size-21 p-5 rounded-full border-3 border-black bg-yellow-300 hover:bg-yellow-300/80 active:bg-yellow-300/50" />
      ),
      id: "Gamepad2",
    },
  ];

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

        <div className="fixed bottom-16 md:bottom-0 lg:bottom-0 top-0 md:top-95 lg:top-95 left-0 md:left-0 lg:left-0 inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#0B1220] rounded-3xl boreder-3">
                <div className="w-full h-full flex flex-row justify-around items-center border-b-1 border-white rounded-md py-2.5 md:py-6 lg:py-6">
                  <div className="px-3.5 md:px-8 lg:px-8 py-2 md:py-6.5 lg:py-6.5 bg-white/80 border-3 border-green-300 rounded-full flex flex-row justify-center items-center ml-2 md:ml-5 lg:ml-5">
                    O
                  </div>
                  <input
                    placeholder="Value"
                    type="text"
                    className="w-1/2 py-0.5 md:py-1.5 lg:py-1.5 pl-2 mr-2 bg-green-50 border-3 border-green-300 rounded-md flex flex-row justiy-center items-center"
                  />
                </div>
                <div className="gap-2 flex flex-row justify-center items-center">
                  {iconList1.map((item) => {
                    return (
                      <>
                        <div className="w-full h-full px-0 p-3 md:pt-6 lg:pt-6 my flex flex-row justify-evenly items-center">
                          <button className="w-full h-full border-3 border-black rounded-full flex flex-row justify-around items-center">
                            {item.icon}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="gap-2 flex flex-row justify-center items-center">
                  {iconList2.map((item) => {
                    return (
                      <>
                        <div className="w-full h-full px-0 p-3 md:pt-6 lg:pt-6 my flex flex-row justify-evenly items-center">
                          <button className="w-full h-full border-3 border-black rounded-full flex flex-row justify-around items-center">
                            {item.icon}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="w-full h-full flex flex-row justify-evenly items-center border-t-1 border-white rounded-md py-2.5 md:py-6 lg:py-6">
                  <button className="px-8 md:px-8 lg:px-8 py-1.5 flex flex-row justify-center items-center bg-green-500 hover:bg-green-500/80 active:bg-green-500/50 rounded-md">
                    Add
                  </button>
                  <button
                    className="px-6 md:px-6 lg:px-6 py-1.5 flex flex-row justify-center items-center bg-red-500 hover:bg-red-500/80 active:bg-red-500/50 rounded-md"
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
