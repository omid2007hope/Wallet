import { Home, Wallet, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FooterNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    <footer className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 bg-[#0f172a]/80 backdrop-blur-md border border-gray-800 rounded-full shadow-lg px-4 py-2 flex items-center justify-between w-[90%] max-w-sm">
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
    </footer>
  );
}
