import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, SectionHeading, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Blob } from "@/components/visuals";
import { services, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "ERP導入コンサルティング、ITシステム導入支援、業務プロセス変革、PMO支援、チェンジマネジメント・定着化支援。構想から定着まで一貫して支援します。",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-cream pt-20 pb-16 sm:pt-24">
        <div className="absolute inset-0 bg-dotgrid opacity-40" aria-hidden />
        <Blob className="-left-28 -top-20 h-[380px] w-[380px] bg-brand-light/15" />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] select-none lg:block"
          aria-hidden
        >
          <Image
            src="/images/generated/services-process.png"
            alt=""
            fill
            sizes="56vw"
            className="object-cover object-left opacity-50 [mask-image:linear-gradient(to_right,transparent,#000_48%,#000_92%,transparent)]"
          />
        </div>
        <Container className="relative">
          <Reveal>
            <Eyebrow>サービス</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.3] tracking-tight text-ink sm:text-5xl">
              構想から定着まで、
              <br className="hidden sm:block" />
              切れ目なく支援する。
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft/80 sm:text-lg">
              ERP・IT導入を軸に、業務改革とプロジェクト推進をワンチームで。それぞれの工程を“点”ではなく“線”でつなぎ、成果に届くまで伴走します。
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Service detail list */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="space-y-5">
            {services.map((s) => (
              <Reveal as="article" key={s.id}>
                <div
                  id={s.id}
                  className="scroll-mt-28 rounded-3xl border border-line bg-cream p-8 sm:p-10 lg:p-12"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                      <div className="flex items-baseline gap-4">
                        <span className="font-serif text-4xl font-semibold text-accent/40">
                          {s.no}
                        </span>
                        <h2 className="font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                          {s.title}
                        </h2>
                      </div>
                      <p className="mt-5 text-lg font-medium leading-8 text-brand">
                        {s.lead}
                      </p>
                    </div>
                    <div className="lg:col-span-7">
                      <p className="text-base leading-8 text-ink-soft/85">
                        {s.description}
                      </p>
                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-3 rounded-xl bg-white px-4 py-3"
                          >
                            <svg
                              viewBox="0 0 20 20"
                              className="mt-0.5 h-5 w-5 flex-none text-accent"
                              fill="none"
                              aria-hidden
                            >
                              <path
                                d="M5 10.5l3 3 7-7.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm leading-6 text-ink-soft">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="進め方"
              title="4つのステップで、確実に。"
              lead="一気に変えようとしない。理解し、設計し、実行し、定着させる——その順序を大切にします。"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-line bg-white p-7">
                  <span className="font-serif text-4xl font-semibold text-accent/30">
                    {step.no}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-soft/80">
                    {step.body}
                  </p>
                  {i < processSteps.length - 1 && (
                    <span
                      className="absolute right-5 top-9 hidden text-line lg:block"
                      aria-hidden
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                        <path
                          d="M9 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                どのサービスが合うか、一緒に考えます。
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                課題が曖昧な段階でも大丈夫。整理からお手伝いします。
              </p>
            </div>
            <ButtonLink href="/contact">相談してみる</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
