import Donut from "../components/Home/Donut";
import Balance from "../components/Home/Balance";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0A0E1A] text-white flex items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="relative  w-full overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5 p-50 mb-5">
          {/* Decorative top wave */}
          <div className="absolute -top-24 left-1/2 h-64 w-[140%] -translate-x-1/2 rounded-b-[50%] bg-gradient-to-br from-[#1a2450] via-[#0F1629] to-transparent opacity-80" />

          {/* Balance Widget */}
          <div className="relative flex flex-col justify-center items-center z-10">
            <Balance />
            <Donut />
          </div>
        </div>
      </div>
    </div>
  );
}
