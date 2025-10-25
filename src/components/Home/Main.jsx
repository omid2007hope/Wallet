import Balance from "./Balance";
import BalancePreview from "./BalancePreview";

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#0F1629] text-white">
      <div className="flex flex-col justify-center items-center border-1 rounded-3xl">
        <Balance />
        <BalancePreview />
      </div>
    </div>
  );
}
