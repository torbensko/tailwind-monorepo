export function LocalStats() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "Users", value: "1,234", color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
        { label: "Revenue", value: "$56k", color: "text-lime-600 bg-lime-50 border-lime-200" },
        { label: "Growth", value: "+12%", color: "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200" },
      ].map((stat) => (
        <div
          key={stat.label}
          className={`rounded-xl border p-4 text-center ${stat.color}`}
        >
          <p className="text-2xl font-extrabold">{stat.value}</p>
          <p className="mt-1 text-xs uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
