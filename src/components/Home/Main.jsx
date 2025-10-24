import BudgetPreview from "./BudgetPreview";
import Balance from "./Balance";

export default function Main() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#0F1629] text-white">
      <Balance />
      <BudgetPreview />
    </div>
  );
}
