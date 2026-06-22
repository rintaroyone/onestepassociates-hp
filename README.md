# OneStep Associates — Corporate Website

株式会社ワンステップ・アソシエイツ（OneStep Associates）のコーポレートサイト。
ERP導入・ITシステム導入から業務改革までを支援する実行型コンサルティングファームの公式サイトです。

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** / **TypeScript**
- **Tailwind CSS v4** (`@theme` トークン方式)
- Fonts: Noto Sans JP / Noto Serif JP (`next/font`)
- Deploy target: **Vercel**

## Pages

| Route | 内容 |
| --- | --- |
| `/` | ホーム（ヒーロー / 会社紹介 / サービス概要 / 選ばれる理由 / CTA） |
| `/about` | 理念・価値観・働き方・会社概要 |
| `/services` | 5サービスの詳細 + 進め方ステップ |
| `/contact` | お問い合わせフォーム（Server Action 検証付き）+ 連絡先 |

## Project Structure

```
app/
  layout.tsx          # フォント / メタデータ / JSON-LD / ヘッダー・フッター
  page.tsx            # ホーム
  about|services|contact/page.tsx
  contact/actions.ts  # お問い合わせ用 Server Action（検証 + 送信フック）
  opengraph-image.tsx # OG画像（動的生成）
  icon.svg            # ファビコン
  sitemap.ts / robots.ts
components/            # ヘッダー・フッター・UIプリミティブ・ビジュアル
lib/content.ts        # サイト全体のコピー・会社データを集約
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド
npm run lint
```

## お問い合わせの配信設定（Resend）

お問い合わせフォームは [Resend](https://resend.com) でメール配信します。
配信ロジックは `app/contact/actions.ts` の `sendInquiry()` に集約されています
（バリデーション・成功表示・ハニーポットによるスパム対策は実装済み）。
APIキー等のシークレットは Server Action 内でのみ参照され、フロントエンドには一切露出しません。

### 1. パッケージのインストール

```bash
npm install resend
```

### 2. 環境変数の設定（ローカル）

`.env.example` を `.env.local` にコピーして値を設定します。

```bash
cp .env.example .env.local
```

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=contact@example.com
CONTACT_FROM_EMAIL=OneStep Associates <noreply@your-verified-domain.com>
```

| 変数 | 用途 |
| --- | --- |
| `RESEND_API_KEY` | Resend の API キー（[ダッシュボード](https://resend.com/api-keys)で発行） |
| `CONTACT_TO_EMAIL` | 問い合わせの送信先。**カンマ区切りで複数指定可能** |
| `CONTACT_FROM_EMAIL` | 送信元アドレス。Resend で**ドメイン認証済み**である必要があります |

#### 複数の宛先に送信する

`CONTACT_TO_EMAIL` はカンマ区切りで複数のメールアドレスを設定できます。
各アドレスは前後の空白がトリムされ、空の値は無視されます。
1件のみ指定した場合はこれまでどおり単一宛先として動作します。

```bash
# 複数の宛先（全員に届きます）
CONTACT_TO_EMAIL=tetsu.miyara@os-assoc.com,rintaro.yone@os-assoc.com
```

> `.env.local` は `.gitignore` 済みです。シークレットはコミットしないでください。
> メールの **Reply-To** は送信者が入力したメールアドレスが自動設定されるため、
> 受信メールにそのまま返信できます。

### 3. Vercel への環境変数設定

Vercel ダッシュボード → 対象プロジェクト → **Settings → Environment Variables** で、
上記3つの変数（`RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`）を
**Production / Preview / Development** の必要な環境に追加します。
追加後は再デプロイすると反映されます。

CLI を使う場合:

```bash
vercel env add RESEND_API_KEY
vercel env add CONTACT_TO_EMAIL
vercel env add CONTACT_FROM_EMAIL
```

### 4. Resend のドメイン認証

`CONTACT_FROM_EMAIL` の送信元ドメインは、Resend での認証が必須です。

1. Resend ダッシュボード → **Domains → Add Domain** で送信元ドメインを追加
2. 表示される **SPF / DKIM**（必要に応じて DMARC）の DNS レコードを
   ドメインの DNS に登録
3. ステータスが **Verified** になれば、そのドメインのアドレスから送信可能

> 認証前は配信に失敗します。その場合フォームは日本語のエラーメッセージを表示し、
> 詳細はサーバーログに出力されます。テスト用途では Resend の
> `onboarding@resend.dev` を `CONTACT_FROM_EMAIL` に使うこともできます。

## Content / Data

会社情報・サービス内容・コピーは `lib/content.ts` に集約しています。
文言や会社概要の更新は基本的にこのファイルのみで完結します。
