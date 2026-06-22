import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/content";
import logoDark from "@/public/images/onestep-logo-trimmed.png";
import logoLight from "@/public/images/onestep-logo-light.png";

/**
 * Official OneStep Associates logo (wordmark + mark).
 * `dark`  – full-colour logo for light backgrounds (header).
 * `light` – charcoal wordmark recoloured to near-white for dark backgrounds (footer).
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const src = tone === "light" ? logoLight : logoDark;
  return (
    <Link
      href="/"
      aria-label={`${company.short} ホームへ`}
      className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src={src}
        alt={company.short}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
