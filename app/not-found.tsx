import Link from "next/link";
import FlameIcon from "@/components/FlameIcon";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center text-center">
      <FlameIcon size={64} />
      <h1 className="mt-4 font-heading text-5xl font-bold text-white">404</h1>
      <p className="mt-3 text-white/60">
        This page powered down. Let&apos;s get you back on track.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back Home
      </Link>
    </div>
  );
}
