export function SharedAlert({ message }: { message: string }) {
  return (
    <div className="rounded-lg border-2 border-amber-500 bg-amber-50 p-4 text-amber-900 shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">⚠</span>
        <p className="text-sm font-semibold">{message}</p>
      </div>
    </div>
  );
}
