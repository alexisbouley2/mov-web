import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  showBackButton?: boolean;
  backHref?: string;
}

export default function Header({
  showBackButton = false,
  backHref = "/",
}: HeaderProps) {
  return (
    <div className="w-full relative flex items-center justify-between px-2 sm:px-4 pt-1 sm:pt-2">
      {/* Top Left: About or Back Button */}
      {showBackButton ? (
        <Link
          href={backHref}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 font-medium text-xs sm:text-sm flex items-center gap-1"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          Back
        </Link>
      ) : (
        <Link
          href="/about"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 font-medium text-xs sm:text-sm"
        >
          About
        </Link>
      )}

      {/* Top Right: Privacy/Contact */}
      <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
        <Link href="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <span className="text-gray-500 hidden sm:inline">•</span>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>
      {/* Spacer for height */}
      <div className="h-8 sm:h-10 w-full" />
    </div>
  );
}
