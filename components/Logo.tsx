import Link from "next/link";
import FlameIcon from "./FlameIcon";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <FlameIcon
        size={32}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="leading-none">
        <span className="block font-heading text-xl font-bold tracking-wider text-electric">
          FIRELITE
        </span>
        {!compact && (
          <span className="block font-heading text-[0.6rem] font-semibold tracking-[0.35em] text-fire">
            COMPUTERS
          </span>
        )}
      </span>
    </Link>
  );
}
