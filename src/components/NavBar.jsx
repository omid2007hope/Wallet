import { Home, Wallet, User } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import AddMenu from "./Home/AddMenu";

export default function FooterNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Map IDs to routes
  const toFromId = (id) => (id === "Home" ? "/" : `/${id}`);

  // Derive active tab from URL
  const active = pathname === "/" ? "Home" : pathname.slice(1); // e.g. "/Account" -> "Account"

  const navItems = [
    { name: "Home", icon: <Home size={20} />, id: "Home" },
    { name: "Wallet", icon: <Wallet size={20} />, id: "Wallet" },
    { name: "Account", icon: <User size={20} />, id: "Account" },
  ];

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 bg-[#0f172a]/80 backdrop-blur-md border border-gray-800 rounded-full shadow-lg px-4 py-2 flex items-center justify-between w-[90%] max-w-sm">
        {navItems.map((item) => {
          const to = toFromId(item.id);
          const isActive = item.id === active;

          return (
            <button
              key={item.id}
              onClick={() => navigate(to)}
              className={`flex items-center justify-center gap-2 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-white text-gray-900 px-5 py-2 font-semibold shadow-md"
                  : "text-gray-400 hover:text-white px-4 py-2"
              }`}
            >
              {item.icon}
              {isActive && <span className="text-sm">{item.name}</span>}
            </button>
          );
        })}
        <button
          className="rounded-full bg-green-500/80 border-5 border-green-950/80 pb-1.5 md:pb-1.5 lg:pb-1.5 pt-1.5 md:pt-1.5 lg:pt-1.5 px-5 md:px-5.5 lg:px-5.5 hover:bg-green-500/70 active:bg-green-500/100
        "
          onClick={() => setOpen(true)}
        >
          <div className="text-white text-4xl font-bold itmes-center">
            <CirclePlus size={20} />
          </div>
        </button>
        <AddMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
