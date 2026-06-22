import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.short}`,
  },
  description:
    "OneStep Associatesは、ERP導入・ITシステム導入から業務改革までを支援する実行型コンサルティングファームです。会計・販売・生産・物流まで、基幹業務を横断した豊富な実績で、構想から定着までやり切ります。",
  keywords: [
    "ERP導入",
    "コンサルティング",
    "SAP",
    "Oracle",
    "intra-mart",
    "業務改革",
    "PMO",
    "システム導入支援",
    "OneStep Associates",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: company.short,
    title: `${company.name} | ${company.tagline}`,
    description:
      "ERP導入・IT導入から業務改革まで。構想だけで終わらせず、現場が回るところまでやり切る実行型コンサルティング。",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.nameEn,
  url: company.url,
  email: company.email,
  telephone: company.phone,
  foundingDate: "2009-02-19",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "千葉県",
    addressLocality: "浦安市",
    streetAddress: "高洲4-3-1-317",
  },
  description:
    "ERP導入・ITシステム導入支援、業務プロセス変革、PMO、チェンジマネジメントを手がける実行型コンサルティングファーム。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
