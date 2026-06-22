"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { ArrowRight } from "@/components/ui";
import { inquiryTypes } from "@/lib/content";

const initialState: ContactState = { status: "idle" };

const fieldBase =
  "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-ink-soft/40 focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-white p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/12">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
          送信が完了しました
        </h3>
        <p className="mt-3 text-sm leading-7 text-ink-soft/80">
          {state.message}
        </p>
      </div>
    );
  }

  const v = state.values;
  const err = state.errors ?? {};

  return (
    <form action={formAction} className="rounded-2xl border border-line bg-white p-7 sm:p-9" noValidate>
      {state.status === "error" && state.message && (
        <p className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {state.message}
        </p>
      )}

      {/* Honeypot field — visually hidden, not announced to users. */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">
            お名前 <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={v?.name}
            autoComplete="name"
            placeholder="山田 太郎"
            className={`${fieldBase} ${err.name ? "border-red-400" : "border-line"}`}
            aria-invalid={!!err.name}
          />
          {err.name && <p className="mt-1.5 text-xs text-red-500">{err.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-semibold text-ink">
            会社名
          </label>
          <input
            id="company"
            name="company"
            type="text"
            defaultValue={v?.company}
            autoComplete="organization"
            placeholder="株式会社サンプル"
            className={`${fieldBase} border-line`}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            メールアドレス <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={v?.email}
            autoComplete="email"
            placeholder="you@example.com"
            className={`${fieldBase} ${err.email ? "border-red-400" : "border-line"}`}
            aria-invalid={!!err.email}
          />
          {err.email && (
            <p className="mt-1.5 text-xs text-red-500">{err.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">
            電話番号
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            defaultValue={v?.phone}
            autoComplete="tel"
            placeholder="03-1234-5678"
            className={`${fieldBase} border-line`}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="inquiryType" className="text-sm font-semibold text-ink">
          お問い合わせ種別
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue={v?.inquiryType ?? ""}
          className={`${fieldBase} border-line appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%234e5358' stroke-width='1.6'%3E%3Cpath d='M6 8l4 4 4-4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">選択してください</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          お問い合わせ内容 <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={v?.message}
          placeholder="現在の課題や、ご相談されたい内容をご記入ください。"
          className={`${fieldBase} resize-y ${err.message ? "border-red-400" : "border-line"}`}
          aria-invalid={!!err.message}
        />
        {err.message && (
          <p className="mt-1.5 text-xs text-red-500">{err.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "送信中..." : "送信する"}
        {!pending && <ArrowRight />}
      </button>

      <p className="mt-4 text-xs leading-6 text-ink-soft/60">
        ご入力いただいた情報は、お問い合わせへの対応のみに利用します。
      </p>
    </form>
  );
}
