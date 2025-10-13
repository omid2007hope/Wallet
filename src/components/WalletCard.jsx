// src/components/home/WalletCard.jsx
const fmt = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
});

export default function WalletCard({ name, balance }) {
  return (
    <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3">
      <div className="text-sm text-neutral-400">{name}</div>
      <div className="mt-1 text-lg font-semibold">{fmt.format(balance)}</div>
    </div>
  );
}
