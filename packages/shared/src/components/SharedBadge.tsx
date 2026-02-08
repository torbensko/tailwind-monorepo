export function SharedBadge({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "success" | "danger";
}) {
  const variantClasses = {
    default: "bg-sky-100 text-sky-800 ring-sky-300",
    success: "bg-emerald-100 text-emerald-800 ring-emerald-300",
    danger: "bg-rose-100 text-rose-800 ring-rose-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
