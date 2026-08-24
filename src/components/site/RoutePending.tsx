/** Skeleton shown while a route resolves, so navigation never flashes blank. */
export function RoutePending() {
  return (
    <div className="container-page py-12" role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">Loading page…</span>
      <div className="h-3 w-24 animate-pulse rounded-full bg-muted" />
      <div className="mt-4 h-10 w-2/3 animate-pulse rounded-lg bg-muted sm:w-1/2" />
      <div className="mt-3 h-4 w-full max-w-xl animate-pulse rounded bg-muted" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="surface-card overflow-hidden">
            <div className="aspect-square w-full animate-pulse bg-muted" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
              <div className="h-9 w-full animate-pulse rounded-lg bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
