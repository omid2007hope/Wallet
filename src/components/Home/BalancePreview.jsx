import Balance from "./Balance";
import Donut from "./Donut";

export default function BalancePreview() {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5">
        <div className="relative flex flex-col justify-center items-center p-4 z-10">
          <Balance />
          <Donut />
        </div>
      </div>
    </div>
  );
}
