// src/components/home/CategoryDonut.jsx
// Pure CSS donut using conic-gradient, with legend.
export default function CategoryDonut({ data = [] }) {
  const total = data.reduce((a, b) => a + b.value, 0) || 1;

  // Build conic-gradient stops
  let acc = 0;
  const stops = data
    .map((d) => {
      const from = acc;
      acc += (d.value / total) * 360;
      return `${d.color} ${from}deg ${acc}deg`;
    })
    .join(", ");

  return (
    <div className="flex items-center gap-6">
      <div
        className="w-36 h-36 rounded-full relative"
        style={{ background: `conic-gradient(${stops})` }}
        aria-label="category donut"
      >
        <div className="absolute inset-4 rounded-full bg-neutral-900 border border-neutral-800" />
      </div>

      <ul className="space-y-2">
        {data.map((d) => (
          <li key={d.name} className="flex items-center gap-2 text-sm">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ background: d.color }}
            />
            <span className="text-neutral-300">{d.name}</span>
            <span className="ml-2 text-neutral-400">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
