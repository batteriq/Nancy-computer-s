const deals = [
  "HP EliteBook Core i5 - KES 10,000",
  "Dell Latitude i7 - KES 25,500",
  '24" Monitor - KES 8,000',
  "Lenovo ThinkPad i5 - KES 18,000",
  "Wireless Keyboard & Mouse - KES 1,800",
  "HP All-in-One Desktop - KES 32,000",
  "Student Deals Available",
  "Nationwide Delivery Across Kenya",
];

export default function Marquee() {
  // Duplicate the list so the -50% scroll loops seamlessly with no gap.
  const loop = [...deals, ...deals];

  return (
    <div className="relative flex overflow-hidden border-y border-electric/20 bg-navy-light py-3">
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {loop.map((deal, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-heading text-sm font-semibold uppercase tracking-wide text-electric [text-shadow:0_0_10px_rgba(0,212,255,0.5)]">
              {deal}
            </span>
            <span className="text-electric/30" aria-hidden="true">
              |
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
