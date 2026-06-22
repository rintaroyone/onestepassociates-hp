import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Blob } from "@/components/visuals";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "ERP導入・IT導入・業務改革のご相談はこちら。構想段階のご相談から進行中プロジェクトのお悩みまで、お気軽にお問い合わせください。",
};

const contactItems = [
  {
    label: "メール",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: (
      <path
        d="M3 7l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "電話",
    value: company.phone,
    href: `tel:${company.phone.replace(/-/g, "")}`,
    icon: (
      <path
        d="M5 4h3l1.5 5-2 1.5a11 11 0 005 5L14 13l5 1.5V18a2 2 0 01-2 2A14 14 0 014 6a2 2 0 011-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    label: "受付時間",
    value: company.hours,
    href: null,
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path
          d="M12 8v4l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    label: "所在地",
    value: company.address,
    href: null,
    icon: (
      <>
        <path
          d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-cream pt-20 pb-16 sm:pt-24">
        <div className="absolute inset-0 bg-dotgrid opacity-40" aria-hidden />
        <Blob className="-right-28 -top-20 h-[360px] w-[360px] bg-accent-soft/40" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>お問い合わせ</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.3] tracking-tight text-ink sm:text-5xl">
              まずは、お話を
              <br className="hidden sm:block" />
              聞かせてください。
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft/80 sm:text-lg">
              ERP導入の構想段階でも、進行中プロジェクトのお悩みでも構いません。内容が固まっていなくても大丈夫です。最初の一歩を、一緒に考えます。
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Form + info */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: contact details */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-ink">
                  連絡先
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft/80">
                  フォームのほか、メール・お電話でも承っています。
                </p>

                <ul className="mt-8 space-y-3">
                  {contactItems.map((item) => {
                    const inner = (
                      <div className="flex items-start gap-4 rounded-2xl border border-line bg-cream px-5 py-4 transition-colors hover:border-accent/40">
                        <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white text-brand">
                          <svg viewBox="0 0 24 24" className="h-5 w-5">
                            {item.icon}
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft/60">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-ink">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a href={item.href} className="block">
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 rounded-2xl bg-ink p-7 text-white">
                  <h3 className="font-serif text-lg font-semibold">
                    法人のお客様へ
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    導入支援・PMO・業務改革に関するご相談、協業・パートナーシップのお問い合わせも歓迎しています。担当者より2営業日以内にご連絡いたします。
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
