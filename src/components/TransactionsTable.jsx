// src/components/home/TransactionsTable.jsx
const fmt = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
});

export default function TransactionsTable({ rows = [] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800">
      <table className="w-full text-sm">
        <thead className="bg-neutral-900/80 text-neutral-400">
          <tr>
            <Th>Date</Th>
            <Th>Description</Th>
            <Th className="text-right pr-4">Amount</Th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-800">
          {rows.map((r, idx) => (
            <tr key={idx} className="bg-neutral-900/40 hover:bg-neutral-900/70">
              <Td>{r.date}</Td>
              <Td>{r.desc}</Td>
              <Td className="text-right pr-4 font-medium">
                <span
                  className={
                    r.amount >= 0 ? "text-emerald-400" : "text-fuchsia-300"
                  }
                >
                  {r.amount >= 0 ? "+" : "-"}
                  {fmt.format(Math.abs(r.amount))}
                </span>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children, className = "" }) {
  return <th className={`py-2 px-3 text-left ${className}`}>{children}</th>;
}
function Td({ children, className = "" }) {
  return <td className={`py-2 px-3 ${className}`}>{children}</td>;
}
