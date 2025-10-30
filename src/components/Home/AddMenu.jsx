"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

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

        <div className="fixed bottom-14 md:bottom-0 lg:bottom-0 top-0 md:top-95 lg:top-100 left-0 md:left-0 lg:left-60 inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#0B1220] rounded-3xl boreder-3">
                <div className="w-full h-full flex flex-row justify-between items-center border-b-1 border-white rounded-md py-2.5 md:py-6 lg:py-6">
                  <div className="px-5.5 md:px-8 lg:px-8 py-4 md:py-6.5 lg:py-6.5 bg-white/80 border-3 border-green-300 rounded-full flex flex-row justify-center items-center ml-5 md:ml-5 lg:ml-5">
                    O
                  </div>
                  <input
                    type="text"
                    className="px-5 md:px-22 lg:px-22 py-0.5 md:py-1.5 lg:py-1.5 mr-5 bg-green-50 border-3 border-green-300 rounded-md flex flex-row justiy-center items-center"
                  />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <div className="w-full h-full gap-6 px-5 py-3 md:py-5 lg:py-5 my flex flex-row justify-evenly items-center">
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      1
                    </button>
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      2
                    </button>
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      3
                    </button>
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      4
                    </button>
                  </div>
                  <div className="w-full h-full gap-6 px-5 py-3 md:py-5 lg:py-5 my flex flex-row justify-evenly items-center">
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      5
                    </button>
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      6
                    </button>
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      7
                    </button>
                    <button className="px-5.5 md:px-8 lg:px-8 py-3.5 md:py-6 lg:py-6 flex flex-row justify-around items-center bg-white border-3 border-green-200 rounded-full">
                      8
                    </button>
                  </div>
                </div>
                <div className="w-full h-full flex flex-row justify-evenly items-center border-t-1 border-white rounded-md py-2.5 md:py-6 lg:py-6">
                  <button className="px-35 md:px-55 lg:px-55 py-1.5 flex flex-row justify-center items-center bg-green-500 rounded-md">
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
