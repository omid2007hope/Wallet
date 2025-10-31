"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
  UtensilsCrossed,
  House,
  GraduationCap,
  Plane,
  Dumbbell,
  Hospital,
  ShoppingCart,
  Gamepad2,
} from "lucide-react";
import { useState } from "react";

export default function AddMenu(props) {
  // 1) Keep the *component* + bg color in config (NOT JSX)
  const iconList1 = [
    { id: "UtensilsCrossed", Icon: UtensilsCrossed, bg: "bg-orange-300" },
    { id: "House", Icon: House, bg: "bg-red-900" },
    { id: "GraduationCap", Icon: GraduationCap, bg: "bg-blue-300" },
    { id: "Plane", Icon: Plane, bg: "bg-green-300" },
  ];
  const iconList2 = [
    { id: "Dumbbell", Icon: Dumbbell, bg: "bg-purple-300" },
    { id: "Hospital", Icon: Hospital, bg: "bg-pink-300" },
    { id: "ShoppingCart", Icon: ShoppingCart, bg: "bg-red-300" },
    { id: "Gamepad2", Icon: Gamepad2, bg: "bg-yellow-300" },
  ];

  // 2) Selected icon state (default to the first one)
  const [selected, setSelected] = useState(iconList1[0]);

  // 3) Reusable renderer for a grid row
  const Row = ({ items }) => (
    <div className="gap-2 flex flex-row justify-center items-center">
      {items.map(({ id, Icon, bg }) => {
        const isActive = selected?.id === id;
        return (
          <div
            key={id}
            className="w-full h-full py-0 p-1.5 md:py-6 lg:y-6 my flex flex-row justify-evenly items-center"
          >
            <button
              onClick={() => setSelected({ id, Icon, bg })}
              className={`w-full h-full rounded-full flex flex-row justify-around items-center border-3 border-black transition
                          ${isActive ? "ring-4 ring-white/40" : "ring-0"}`}
              aria-label={id}
            >
              <div
                className={`rounded-full ${bg} border-3 border-black p-2 md:p-6 lg:p-6`}
              >
                <Icon size={30} strokeWidth={2.2} />
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );

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

        <div className="fixed bottom-16 md:bottom-0 lg:bottom-0 top-0 md:top-95 lg:top-95 left-0 inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#0B1220] rounded-3xl">
                {/* Header: LEFT PREVIEW ICON + INPUT */}
                <div className="w-full flex flex-row justify-around items-center border-b-1 border-white rounded-md py-2.5 md:py-6">
                  {/* The preview uses the currently selected icon */}
                  <div
                    className={`rounded-full ${selected.bg} border-3 border-black p-3`}
                  >
                    <selected.Icon size={28} strokeWidth={2.2} />
                  </div>

                  <input
                    placeholder="Value"
                    type="text"
                    className="w-1/2 py-0.5 md:py-1.5 pl-2 mr-2 bg-green-50 border-3 border-green-300 rounded-md"
                  />
                </div>

                {/* Pickers */}
                <Row items={iconList1} />
                <Row items={iconList2} />

                {/* Actions */}
                <div className="w-full flex flex-row justify-evenly items-center border-t-1 border-white rounded-md py-2.5 md:py-6">
                  <button className="px-8 py-1.5 bg-green-500 hover:bg-green-500/80 active:bg-green-500/50 rounded-md">
                    Add
                  </button>
                  <button
                    className="px-6 py-1.5 bg-red-500 hover:bg-red-500/80 active:bg-red-500/50 rounded-md"
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
