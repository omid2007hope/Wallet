import Balance from "./Balance";
import Donut from "./Donut";

export default function BalancePreview() {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative overflow-hidden rounded-3xl bg-[#0F1629] shadow-2xl ring-1 ring-white/5 px-4 sm:px-4 md:px-20 lg:px-29 py-2 sm:py-2 md:py-20 lg:py-35 mx-2 sm:mx-2 md:mx-4 lg:mx-4 mb-4 sm:mb-4 md:mb-4 lg:mb-4">
        <div className="relative flex flex-col justify-center items-center z-10 ">
          <Donut />
        </div>
      </div>
    </div>
  );
}
