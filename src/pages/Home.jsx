// src/pages/Home.jsx
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import WalletCard from "../components/WalletCard.jsx";
import IncomeExpenseBars from "../components/IncomeExpenseBars.jsx";
import CategoryDonut from "../components/CategoryDonut.jsx";
import TransactionsTable from "../components/TransactionsTable.jsx";
import BudgetCard from "../components/BudgetCard.jsx";

export default function Home() {
  // --- demo data (replace with real state later) ---
  const month = "April 2024";
  const wallets = [
    { id: "w1", name: "Main Account", balance: 5200 },
    { id: "w2", name: "Savings", balance: 2650 },
  ];
  const totals = {
    totalBalance: 7850,
    income: 3200,
    expense: 2400,
  };
  const categories = [
    { name: "Housing", value: 40, color: "#8b5cf6" },
    { name: "Food", value: 25, color: "#22d3ee" },
    { name: "Transport", value: 15, color: "#14b8a6" },
    { name: "Other", value: 20, color: "#71717a" },
  ];
  const txs = [
    { date: "Apr. 15", desc: "Rent", amount: -1200 },
    { date: "Apr. 13", desc: "Groceries", amount: -150 },
    { date: "Apr. 10", desc: "Salary", amount: 3000 },
    { date: "Apr. 09", desc: "Transportation", amount: -45 },
    { date: "Apr. 05", desc: "Dining", amount: -60 },
  ];
  const budgets = [
    { category: "Housing", spent: 1200, limit: 1500, color: "#14b8a6" },
    { category: "Food", spent: 500, limit: 600, color: "#8b5cf6" },
    { category: "Transportation", spent: 150, limit: 300, color: "#22d3ee" },
    { category: "Entertainment", spent: 250, limit: 300, color: "#10b981" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <PageHeader month={month} title="Finance App — Wallet & Budget" />

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-4">
              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Total Balance" value={totals.totalBalance} />
                <div className="space-y-4">
                  {wallets.map((w) => (
                    <WalletCard key={w.id} name={w.name} balance={w.balance} />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6">
                <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
                  <h3 className="text-sm text-neutral-400 mb-3">
                    Income vs. Expenses
                  </h3>
                  <IncomeExpenseBars
                    income={totals.income}
                    expense={totals.expense}
                  />
                </div>

                <div className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
                  <h3 className="text-sm text-neutral-400 mb-3">
                    Spending by Category
                  </h3>
                  <CategoryDonut data={categories} />
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-4">
              <h2 className="text-xl font-semibold mb-2">Transactions</h2>
              <div className="flex gap-2 mb-4">
                <FilterBadge label="All Wallets" />
                <FilterBadge label="All Types" />
                <FilterBadge label="All Categories" />
              </div>
              <TransactionsTable rows={txs} />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-4">
              <h2 className="text-xl font-semibold mb-4">Budgets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {budgets.map((b) => (
                  <BudgetCard key={b.category} {...b} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm text-neutral-300">
      {label}
      <svg width="12" height="12" viewBox="0 0 24 24" className="opacity-60">
        <path fill="currentColor" d="M7 10l5 5 5-5z" />
      </svg>
    </span>
  );
}
