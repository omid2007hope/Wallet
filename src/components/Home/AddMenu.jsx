"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function AddMenu() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#0B1220] rounded-3xl boreder-3">
                <div className="w-full h-full flex flex-row justify-between items-center">
                  <div className="w-full h-full bg-white/80 border-3 rounded-3xl flex flex-row justify-center items-center">
                    O
                  </div>
                  <input
                    type="text"
                    className="w-full h-full bg-white/80 border-3 rounded-3xl flex flex-row justify-center items-center"
                  />
                </div>
                <div className="w-full h-full flex flex-row justify-between items-center">
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    1
                  </button>
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    2
                  </button>
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    3
                  </button>
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    4
                  </button>
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    5
                  </button>
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    6
                  </button>
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    7
                  </button>
                  <button className="w-full h-full px-5 py-4.5 flex flex-row justify-around items-center bg-white rounded-full">
                    8
                  </button>
                </div>
                <div className="w-full h-full flex flex-row justify-evenly items-center">
                  <button className="w-full h-full flex flex-row justify-center items-center bg-green-500 rounded-3xl">
                    Add
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
