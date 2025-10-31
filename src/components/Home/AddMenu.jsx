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
                <div className="w-full h-full gap-2 flex flex-col justify-center items-center">
                  <div className="w-full h-full px-0 p-3 md:pt-6 lg:pt-6 my flex flex-row justify-evenly items-center">
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-orange-400 hover:bg-orange-400/80 active:bg-orange-400/50  border-3 border-black rounded-full">
                      <UtensilsCrossed size={20} />
                    </button>
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-red-900 hover:bg-red-900/80 active:bg-red-900/50  border-3 border-black rounded-full">
                      <House size={20} />
                    </button>
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-blue-400 hover:bg-blue-400/80 active:bg-blue-400/50  border-3 border-black rounded-full">
                      <GraduationCap size={20} />
                    </button>
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-green-400 hover:bg-green-400/80 active:bg-green-400/50  border-3 border-black rounded-full">
                      <Plane size={20} />
                    </button>
                  </div>
                  <div className="w-full h-full px-0 pb-3 md:pb-6 lg:pb-6 my flex flex-row justify-evenly items-center">
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-purple-400 hover:bg-purple-400/80 active:bg-purple-400/50  border-3 border-black rounded-full">
                      <Dumbbell size={20} />
                    </button>
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-pink-400 hover:bg-pink-400/80 active:bg-repink-400/50  border-3 border-black rounded-full">
                      <Hospital size={20} />
                    </button>
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-red-400 hover:bg-red-400/80 active:bg-red-400/50  border-3 border-black rounded-full">
                      <ShoppingCart size={20} />
                    </button>
                    <button className="px-3.5 md:px-6 lg:px-6 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-yellow-400 hover:bg-yellow-400/80 active:bg-yellow-400/50  border-3 border-black rounded-full">
                      <Gamepad2 size={20} />
                    </button>
                  </div>
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
