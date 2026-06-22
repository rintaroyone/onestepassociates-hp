import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Centered max-width wrapper with responsive horizontal padding. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Small uppercase eyebrow label with an accent tick. */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "light" ? "text-accent-soft" : "text-accent"
      }`}
    >
      <span className="h-px w-6 bg-current" aria-hidden />
      {children}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

/** Primary call-to-action link styled as a button. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-brand text-white shadow-soft hover:bg-brand-dark hover:-translate-y-0.5",
    outline:
      "border border-line text-ink hover:border-brand hover:bg-brand hover:text-white",
    ghost: "text-ink hover:text-brand",
  } as const;

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      <ArrowRight />
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 ${className}`}
      aria-hidden
    >
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Section heading block: eyebrow + title + optional lead paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-5 font-serif text-3xl font-semibold leading-[1.3] tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            tone === "light" ? "text-white/70" : "text-ink-soft/80"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
