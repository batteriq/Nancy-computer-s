const deals = [
  'HP EliteBook Core i5 — KES 10,000',
  'Dell Latitude i7 — KES 25,500',
  '24" Monitor — KES 8,000',
  'Lenovo ThinkPad i5 — KES 18,000',
  "Wireless Keyboard & Mouse — KES 1,800",
  'HP All-in-One Desktop — KES 32,000',
  "Student Deals Available 🎓",
  "Nationwide Delivery Across Kenya 🚚",
];

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-electric/20 bg-navy-light py-3">
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap pr-8">
        {deals.concat(deals).map((deal, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-heading text-sm font-semibold uppercase tracking-wide text-white/90"
          >
            <span className="text-fire">🔥</span>
            {deal}
          </span>
        ))}
      </div>
    </div>
  );
}
