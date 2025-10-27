import React from "react";

export default function AccountSettings() {
  return (
    <div className="min-h-screen w-full bg-[#0B1220] text-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        {/* PERSONAL INFO */}
        <section className="rounded-2xl border border-white/10 bg-[#0F1629] p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Section intro */}
            <div>
              <h2 className="text-lg font-semibold text-white">
                Personal Information
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Use a permanent address where you can receive mail.
              </p>
            </div>

            {/* Form */}
            <form className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First name */}
                <div>
                  <label
                    htmlFor="first"
                    className="block text-sm font-medium text-gray-300"
                  >
                    First name
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
                    Last name
                  </label>
                  <input
                    id="last"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Username with prefix */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <div className="mt-2 relative">
                    <input
                      id="username"
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-[#0B1220] pl-2.5 pr-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* CHANGE PASSWORD */}
        <section className="rounded-2xl border border-white/10 bg-[#0F1629] p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Change password
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Update your password associated with your account.
              </p>
            </div>

            <form className="lg:col-span-2">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="current-password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Current password
                  </label>
                  <input
                    id="current-password"
                    type="password"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="new-password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    New password
                  </label>
                  <input
                    id="new-password"
                    type="password"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Confirm password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* DELETE ACCOUNT */}
        <section className="rounded-2xl border border-white/10 bg-[#0F1629] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Delete account
              </h2>
              <p className="mt-2 text-sm text-gray-400 max-w-md">
                No longer want to use our service? You can delete your account
                here. This action is not reversible. All information related to
                this account will be deleted permanently.
              </p>
            </div>

            <div className="lg:col-span-2">
              <button
                type="button"
                className="inline-flex rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
