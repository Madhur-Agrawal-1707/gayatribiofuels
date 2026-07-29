export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-mist-50">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        <p className="text-sm text-ink-700/60">Loading…</p>
      </div>
    </div>
  );
}
