// src/components/home/StatCard.jsx
const fmt = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
});

export default function StatCard({ label, value }) {
  return (
    <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
      <div className="text-sm text-neutral-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{fmt.format(value)}</div>
    </div>
  );
}
