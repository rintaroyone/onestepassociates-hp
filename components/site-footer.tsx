import Link from "next/link";
import { company, nav, services } from "@/lib/content";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              ERP導入・IT導入から業務改革まで。構想だけで終わらせず、現場が回るところまでやり切る実行型コンサルティング。
            </p>
            <p className="mt-6 text-sm text-white/50">{company.name}</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              サイトマップ
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              サービス
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-white/70 transition-colors hover:text-accent-soft"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {company.established.slice(0, 4)}–2026 {company.nameEn}. All rights
            reserved.
          </p>
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-accent-soft"
            >
              {company.email}
            </a>
            <a
              href={`tel:${company.phone.replace(/-/g, "")}`}
              className="transition-colors hover:text-accent-soft"
            >
              {company.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
