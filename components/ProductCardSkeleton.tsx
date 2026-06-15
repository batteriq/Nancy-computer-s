// Pulsing placeholder shown while the shop grid "loads".
export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-light">
      <div className="skeleton aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="skeleton h-5 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
        <div className="skeleton mt-2 h-7 w-1/3 rounded" />
        <div className="mt-3 flex gap-2">
          <div className="skeleton h-8 flex-1 rounded-full" />
          <div className="skeleton h-8 flex-1 rounded-full" />
        </div>
      </div>
    </div>
  );
}
