import { useState } from "react";
import { Home, BarChart2, Wallet, User } from "lucide-react";

export default function FooterNav() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", icon: <Home size={20} />, id: "Home" },
    { name: "Stats", icon: <BarChart2 size={20} />, id: "Stats" },
    { name: "Wallet", icon: <Wallet size={20} />, id: "Wallet" },
    { name: "Account", icon: <User size={20} />, id: "Account" },
  ];

  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#0f172a]/80 backdrop-blur-md border border-gray-800 rounded-full shadow-lg px-4 py-2 flex items-center justify-between w-[90%] max-w-sm">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex items-center justify-center gap-2 rounded-full transition-all duration-200 ${
            active === item.id
              ? "bg-white text-gray-900 px-5 py-2 font-semibold shadow-md"
              : "text-gray-400 hover:text-white px-4 py-2"
          }`}
        >
          {item.icon}
          {active === item.id && <span className="text-sm">{item.name}</span>}
        </button>
      ))}
    </footer>
  );
}
