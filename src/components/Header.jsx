import { Bell } from "lucide-react";

export default function Header({
  userName = "Omid Teimory",
  avatarUrl = "https://placehold.co/32x32", // swap with your avatar
  onBellClick,
}) {
  return (
    <header className="w-full bg-[#111827] h-12 px-4 sm:px-6 flex items-center justify-between fixed z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        {/* simple squiggle logo to match your style */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-indigo-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M3 15c2-4 4-6 6-6s4 2 6 2 4-2 6-6" />
        </svg>
      </div>

      {/* Right: Notifications + Avatar + Name */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBellClick}
          className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        <div className="hidden sm:block h-6 w-px bg-white/10" />

        <div className="flex items-center gap-2">
          <img
            src={avatarUrl}
            alt={userName}
            className="h-8 w-8 rounded-full ring-1 ring-white/10"
          />
          <span className="hidden sm:block text-sm text-gray-200">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
}
