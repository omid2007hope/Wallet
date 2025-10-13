// src/components/home/BudgetCard.jsx
const fmt = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
});

export default function BudgetCard({
  category,
  spent,
  limit,
  color = "#14b8a6",
}) {
  const pct = Math.min(100, Math.round((spent / (limit || 1)) * 100));

  return (
    <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
      <div className="text-neutral-200 font-medium">{category}</div>
      <div className="mt-1 text-sm text-neutral-400">
        {fmt.format(spent)}{" "}
        <span className="opacity-60">/ {fmt.format(limit)}</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-neutral-800 overflow-hidden">
        <div
          className="h-full"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <div className="mt-2 text-xs text-neutral-400">{pct}%</div>
    </div>
  );
}
