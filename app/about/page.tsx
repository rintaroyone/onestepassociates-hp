import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { NetworkGraphic, Blob } from "@/components/visuals";
import { company, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "会社について",
  description:
    "OneStep Associatesの理念・価値観・働き方、そして会社概要をご紹介します。「ワンステップ先へ」をともに踏み出す、実行型コンサルティングファーム。",
};

const profile: { label: string; value: string }[] = [
  { label: "会社名", value: company.name },
  { label: "英文名", value: company.nameEn },
  { label: "設立", value: company.established },
  { label: "代表者", value: company.representative },
  { label: "資本金", value: company.capital },
  { label: "所在地", value: company.address },
  { label: "体制", value: company.staff },
  { label: "取引銀行", value: company.bank },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-cream pt-20 pb-16 sm:pt-24">
        <div className="absolute inset-0 bg-dotgrid opacity-40" aria-hidden />
        <Blob className="-right-28 -top-20 h-[380px] w-[380px] bg-accent-soft/40" />
        <Container className="relative">
          <Reveal>
            <Eyebrow>会社について</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1.3] tracking-tight text-ink sm:text-5xl">
              一歩先の景色を、
              <br className="hidden sm:block" />
              お客様とともに。
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft/80 sm:text-lg">
              社名の「ワンステップ・アソシエイツ」には、お客様のビジネスを“ワンステップ先”へ進める伴走者でありたい、という想いを込めています。
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="理念"
                  title="やり切ることが、信頼になる。"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={120}>
                <p className="text-lg leading-9 text-ink-soft">
                  コンサルティングの価値は、立派な提案書ではなく、現場が変わったという事実にあると考えています。
                </p>
                <p className="mt-6 text-base leading-8 text-ink-soft/80">
                  だからこそ私たちは、戦略を語るだけの存在ではなく、手を動かし、現場に入り込み、最後までやり切る当事者であろうとしています。難所こそ逃げずに向き合う。その積み重ねが、お客様との長い信頼関係につながってきました。
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="大切にしていること"
              title="OneStepの3つの価値観"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
                  <span className="font-serif text-3xl font-semibold text-accent/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-soft/80">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Working style */}
      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <Reveal>
                <SectionHeading
                  eyebrow="働き方・チーム"
                  title="少数精鋭で、顔が見える。"
                  lead="窓口だけ立派で、実務は別の人——そんな“伝言ゲーム”は起こしません。"
                />
                <ul className="mt-8 space-y-5">
                  {[
                    {
                      t: "シニアが直接担当",
                      d: "経験豊富なコンサルタントが、提案から実行まで一貫して関わります。",
                    },
                    {
                      t: "現場に入り込む",
                      d: "会議室だけでなく、業務の現場に立って課題の本質をとらえます。",
                    },
                    {
                      t: "知見を残す",
                      d: "支援が終わっても回り続けるよう、ノウハウをお客様の組織に引き継ぎます。",
                    },
                  ].map((item) => (
                    <li key={item.t} className="flex gap-4">
                      <span className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-accent" />
                      <div>
                        <p className="font-bold text-ink">{item.t}</p>
                        <p className="mt-1 text-sm leading-7 text-ink-soft/80">
                          {item.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <Reveal delay={120}>
                <div className="rounded-3xl border border-line bg-cream p-10">
                  <NetworkGraphic className="mx-auto w-full max-w-md" />
                  <p className="mt-6 text-center text-sm leading-7 text-ink-soft/70">
                    お客様・現場・ベンダーをつなぐハブとして、
                    <br className="hidden sm:block" />
                    プロジェクト全体を前に進めます。
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Company profile */}
      <section className="bg-cream py-24 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="会社概要" title="Company Profile" />
          </Reveal>
          <Reveal delay={100}>
            <dl className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
              {profile.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-1 px-7 py-5 sm:flex-row sm:gap-8 ${
                    i !== profile.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <dt className="w-40 flex-none text-sm font-semibold text-ink-soft/70">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-medium text-ink sm:text-base">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                OneStepと、はじめの一歩を。
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                小さなご相談からでも、お気軽にお問い合わせください。
              </p>
            </div>
            <ButtonLink href="/contact">お問い合わせ</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
