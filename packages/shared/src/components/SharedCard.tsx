export function SharedCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-lg">
      <h3 className="mb-3 text-lg font-bold tracking-tight text-indigo-900">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-indigo-700">{children}</div>
    </div>
  );
}
