import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow, ButtonLink, SectionHeading, ArrowRight } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { NetworkGraphic, Blob } from "@/components/visuals";
import { services, reasons, company } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden bg-cream">
        <Blob className="-right-32 -top-24 h-[460px] w-[460px] bg-accent-soft/40" />
        <Blob className="-left-40 top-40 h-[420px] w-[420px] bg-brand-light/10" />
        <div className="absolute inset-0 bg-dotgrid opacity-[0.5]" aria-hidden />

        <Container className="relative">
          <div className="grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>ERP / IT導入コンサルティング</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.25] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  変革を、
                  <br className="hidden sm:block" />
                  <span className="text-brand">現場で動かす。</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-xl text-base leading-8 text-ink-soft/80 sm:text-lg">
                  ERP導入から業務改革まで。OneStep
                  Associatesは、構想だけでなく「実際に動くしくみ」までやり切る、実行にこだわるコンサルティングパートナーです。
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href="/contact">無料で相談する</ButtonLink>
                  <ButtonLink href="/services" variant="outline">
                    サービスを見る
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <div className="pointer-events-none lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative mx-auto -my-4 max-w-md sm:max-w-lg lg:my-0 lg:max-w-none">
                  <Image
                    src="/images/generated/hero-transformation.png"
                    alt="ネットワークから段階的なステップへと立ち上がる、業務変革と実行を象徴する抽象ビジュアル"
                    width={2048}
                    height={1152}
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    loading="eager"
                    fetchPriority="high"
                    className="h-auto w-full select-none [-webkit-mask-composite:source-in] [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent),linear-gradient(to_right,transparent,#000_26%,#000_100%)]"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* trust strip */}
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line/70 sm:grid-cols-4">
              {[
                { k: "2009", v: "創業" },
                { k: "ERP", v: "SAP / Oracle / intra-mart" },
                { k: "横断", v: "会計・販売・生産・物流" },
                { k: "中立", v: "製品に依存しない選定" },
              ].map((item) => (
                <div key={item.k} className="bg-cream px-6 py-6">
                  <p className="font-serif text-2xl font-semibold text-ink">
                    {item.k}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-ink-soft/70">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────────────────────── Intro ───────────────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>私たちについて</Eyebrow>
                <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.35] tracking-tight text-ink sm:text-4xl">
                  「ワンステップ先へ」を、
                  <br />
                  ともに踏み出す。
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <p className="text-lg leading-9 text-ink-soft">
                  システムは、入れることがゴールではありません。現場で使われ、業務が回り、成果につながって初めて意味があります。
                </p>
                <p className="mt-6 text-base leading-8 text-ink-soft/80">
                  私たちは、大手企業での豊富なERP導入経験をもとに、構想策定から本稼働、そして定着までを一気通貫で支援します。提案書で終わらせず、お客様の現場に入り込み、当事者として変革をやり切る。それがOneStep
                  Associatesの仕事です。
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-accent"
                >
                  会社についてもっと知る
                  <ArrowRight />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Services ───────────────────────── */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="サービス"
              title="導入から定着まで、一貫して支える。"
              lead="ERP・IT導入を軸に、業務改革とプロジェクト推進をワンチームで支援します。"
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="article" key={s.id} delay={(i % 3) * 80}>
                <Link
                  href={`/services#${s.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
                >
                  <span className="font-serif text-sm font-semibold text-accent">
                    {s.no}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft/80">
                    {s.lead}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-accent">
                    詳しく見る
                    <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal as="article" delay={160}>
              <Link
                href="/services"
                className="flex h-full flex-col justify-center rounded-2xl bg-ink p-7 text-white transition-colors hover:bg-brand"
              >
                <p className="font-serif text-lg font-semibold">
                  すべてのサービス
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  進め方や対応領域の詳細はこちら。
                </p>
                <ArrowRight className="mt-5 text-accent-soft" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Why OneStep ───────────────────────── */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="選ばれる理由"
                  title="なぜ、OneStepなのか。"
                  lead="規模の大きさではなく、やり切る力で選ばれてきました。"
                />
                <div className="mt-10 hidden lg:block">
                  <NetworkGraphic className="w-full max-w-sm" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {reasons.map((r, i) => (
                  <Reveal key={r.title} delay={(i % 2) * 100}>
                    <div className="h-full rounded-2xl border border-line bg-cream p-7">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/12 font-serif text-sm font-bold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-5 text-base font-bold text-ink">
                        {r.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ink-soft/80">
                        {r.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
        <Blob className="-right-20 -top-24 h-[380px] w-[380px] bg-accent/25" />
        <Blob className="-bottom-32 left-0 h-[360px] w-[360px] bg-brand-light/30" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow tone="light">お問い合わせ</Eyebrow>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.35] tracking-tight text-white sm:text-4xl">
                その変革、机上で止めない。
                <br />
                まずは話を聞かせてください。
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                ERP導入の構想段階でも、進行中のプロジェクトのお悩みでも構いません。状況に合わせて、最初の一歩をご提案します。
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="/contact">相談してみる</ButtonLink>
                <a
                  href={`tel:${company.phone.replace(/-/g, "")}`}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-accent-soft"
                >
                  お電話: {company.phone}（{company.hours}）
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
