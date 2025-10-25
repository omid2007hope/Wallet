import Balance from "./Balance";
import BalancePreview from "./BalancePreview";

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#0F1629] text-white">
      <div className="flex flex-col justify-center items-center relative overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
        <Balance />
        <BalancePreview />
      </div>
    </div>
  );
}
