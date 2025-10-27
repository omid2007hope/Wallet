import React from "react";
import Balance from "../Home/Balance";

export default function Manage() {
  return (
    <div className="w-screen h-screen flex flex-cols justify-center bg-[#0B1220] text-gray-200">
      <div className="py-14 sm:py-14 md:py-14 lg:py-14 px-0 sm:px-0 md:px-0 lg:px-0">
        {/* PERSONAL INFO */}
        <section className="rounded-2xl border border-white/10 bg-[#0F1629] p-6 sm:p-8 mb-8">
          <div className="flex flex-row items-center justify-around gap-8">
            <form className="flex flex-row items-center justify-around gap-4 ">
              <div className="flex flex-row items-center justify-around gap-4">
                {/* First name */}
                <div>
                  <label
                    htmlFor="first"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Total budget
                  </label>
                  <input
                    id="first"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    placeholder=""
                  />
                </div>

                {/* Last name */}
                <div>
                  <label
                    htmlFor="last"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Monthly Goal
                  </label>
                  <input
                    id="last"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8">
            <Balance />
          </div>
        </section>
      </div>
    </div>
  );
}
