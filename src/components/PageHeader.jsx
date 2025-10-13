// src/components/home/PageHeader.jsx
export default function PageHeader({ title, month }) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-lg md:text-2xl font-semibold tracking-tight">
        {title}
      </h1>
      <button className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm">
        {month}
        <span className="ml-2 opacity-60">›</span>
      </button>
    </header>
  );
}
