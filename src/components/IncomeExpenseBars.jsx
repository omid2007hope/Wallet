// src/components/home/IncomeExpenseBars.jsx
export default function IncomeExpenseBars({ income = 0, expense = 0 }) {
  const max = Math.max(income, expense, 1);
  const incomePct = Math.round((income / max) * 100);
  const expensePct = Math.round((expense / max) * 100);

  return (
    <div className="space-y-4">
      <Bar
        label="Income"
        percent={incomePct}
        value={income}
        barClass="bg-emerald-500/80"
      />
      <Bar
        label="Expense"
        percent={expensePct}
        value={expense}
        barClass="bg-fuchsia-500/80"
      />
    </div>
  );
}

function Bar({ label, percent, value, barClass }) {
  const fmt = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
  });
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-neutral-300">{label}</span>
        <span className="text-neutral-400">{fmt.format(value)}</span>
      </div>
      <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
        <div
          className={`h-full ${barClass}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
