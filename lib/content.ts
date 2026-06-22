// Centralized site content & company data for OneStep Associates.
// Keeping copy here makes it easy to review and update without touching layout code.

export const company = {
  name: "株式会社ワンステップ・アソシエイツ",
  nameEn: "OneStep Associates Inc.",
  short: "OneStep Associates",
  tagline: "ビジネス変革を、確かな一歩から。",
  established: "2009年2月19日",
  capital: "1,000,000円",
  representative: "宮良 哲",
  address: "千葉県浦安市高洲4-3-1-317",
  bank: "みずほ銀行",
  staff: "17名（パートナー企業・協力会社を含む）",
  email: "tetsu.miyara@os-assoc.com",
  phone: "090-1762-1290",
  hours: "平日 9:00 - 18:00",
  url: "https://www.onestep-associates.com",
} as const;

export const nav = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社について" },
  { href: "/services", label: "サービス" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

/** Options for the contact form's inquiry-type selector. */
export const inquiryTypes = [
  "ERP導入のご相談",
  "ITシステム導入のご相談",
  "業務改革・BPRのご相談",
  "PMO・プロジェクト支援のご相談",
  "協業・パートナーシップ",
  "その他",
] as const;

export type Service = {
  id: string;
  no: string;
  title: string;
  lead: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "erp",
    no: "01",
    title: "ERP導入コンサルティング",
    lead: "基幹システムを、業務に合わせて使いこなす。",
    description:
      "SAP・Oracle・intra-martをはじめとする主要ERPの導入を、構想策定から本稼働、定着まで一貫して支援します。会計・販売・生産・物流といった基幹業務を横断し、貴社の業務に本当に合う形へと落とし込みます。",
    points: [
      "現状業務の可視化と要件定義",
      "Fit&Gap分析と業務・システム設計",
      "テスト・移行・本稼働支援",
      "特定製品に偏らない中立的な製品選定",
    ],
  },
  {
    id: "it",
    no: "02",
    title: "ITシステム導入支援",
    lead: "構想から運用まで、止まらないシステムを。",
    description:
      "ERPに限らず、業務システム全般の企画・設計・開発・テスト・運用までを支援します。ベンダーと現場の間に立ち、要件のブレや認識の齟齬を防ぎながら、確実に動くしくみを形にします。",
    points: [
      "システム企画・RFP作成支援",
      "要件定義・基本設計のリード",
      "開発・テスト工程の品質管理",
      "稼働後の運用・改善サポート",
    ],
  },
  {
    id: "bpr",
    no: "03",
    title: "業務プロセス変革",
    lead: "システムの前に、業務そのものを見直す。",
    description:
      "システム導入を機に、業務プロセスそのものを再設計します。属人化やムダを洗い出し、標準化・効率化された業務へ。ツールの導入ではなく、現場が回る仕組みづくりにこだわります。",
    points: [
      "業務プロセスの可視化・課題抽出",
      "あるべき業務（To-Be）の設計",
      "標準化・効率化に向けた改善提案",
      "現場を巻き込んだ合意形成",
    ],
  },
  {
    id: "pmo",
    no: "04",
    title: "プロジェクトマネジメント / PMO支援",
    lead: "難しいプロジェクトを、前に進める。",
    description:
      "複数の関係者・ベンダーが絡む大規模プロジェクトを、計画・進捗・課題・品質の面から支えます。プロジェクトを俯瞰し、リスクが顕在化する前に手を打つ。確実な完遂までを伴走します。",
    points: [
      "プロジェクト計画・体制づくり",
      "進捗・課題・リスク管理",
      "ベンダー・関係者間の調整",
      "経営層への状況報告・意思決定支援",
    ],
  },
  {
    id: "change",
    no: "05",
    title: "チェンジマネジメント・定着化支援",
    lead: "導入して終わり、にしない。",
    description:
      "新しい仕組みは、現場に使われて初めて価値になります。教育・マニュアル整備・移行期のフォローを通じて、変化への不安をやわらげ、新しい業務の定着までを丁寧に支援します。",
    points: [
      "利用者向けトレーニングの設計・実施",
      "マニュアル・運用ルールの整備",
      "稼働直後の現場フォロー",
      "定着状況のモニタリングと改善",
    ],
  },
];

export type Reason = {
  title: string;
  body: string;
};

export const reasons: Reason[] = [
  {
    title: "提案書で終わらせない、実行力",
    body: "きれいな資料をつくることがゴールではありません。現場が実際に回るところまで責任を持って伴走するのが、私たちの仕事です。",
  },
  {
    title: "大手企業での豊富なERP実績",
    body: "国内外の大手企業で、会計・販売・生産・物流まで基幹業務を横断して支援してきた経験があります。難所の勘所を知っています。",
  },
  {
    title: "製品に偏らない、中立な立場",
    body: "特定のベンダーや製品に縛られません。SAP・Oracle・intra-martなど、貴社にとっての最適解をフラットに選定します。",
  },
  {
    title: "顔の見える、少数精鋭チーム",
    body: "経験豊富なシニアコンサルタントが直接担当します。窓口と実務担当が分かれた“伝言ゲーム”は起こりません。",
  },
];

export type Step = {
  no: string;
  title: string;
  body: string;
};

export const processSteps: Step[] = [
  {
    no: "01",
    title: "理解する",
    body: "現状の業務・課題・目指す姿をていねいに伺い、プロジェクトのゴールをすり合わせます。",
  },
  {
    no: "02",
    title: "設計する",
    body: "あるべき業務とシステムの全体像を描き、現実的な進め方に落とし込みます。",
  },
  {
    no: "03",
    title: "実行する",
    body: "設計・開発・テスト・移行を、品質と進捗を管理しながら確実に前に進めます。",
  },
  {
    no: "04",
    title: "定着させる",
    body: "教育とフォローを通じて、新しい仕組みを現場の“当たり前”にしていきます。",
  },
];

export const values = [
  {
    title: "実行にこだわる",
    body: "評論家ではなく、当事者として。手を動かし、現場とともにやり切ります。",
  },
  {
    title: "中立であること",
    body: "製品やベンダーの都合ではなく、お客様にとっての最善だけを判断基準にします。",
  },
  {
    title: "人を中心に考える",
    body: "システムを使うのは人です。現場の納得と無理のない変化を大切にします。",
  },
];
