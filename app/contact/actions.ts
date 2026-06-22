"use server";

import { Resend } from "resend";
import { company } from "@/lib/content";

export type ContactValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: ContactValues;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server Action for the contact form.
 *
 * Validation runs on the server so it works without JavaScript. Delivery is
 * handled by `sendInquiry()` (Resend). Secrets stay server-side — nothing here
 * is exposed to the client bundle.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const companyName = String(formData.get("company") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const inquiryType = String(formData.get("inquiryType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot — bots fill hidden fields; humans don't.
  const trap = String(formData.get("website") ?? "");

  const values: ContactValues = {
    name,
    email,
    company: companyName,
    phone,
    inquiryType,
    message,
  };
  const errors: ContactState["errors"] = {};

  if (!name) errors.name = "お名前を入力してください。";
  if (!email) errors.email = "メールアドレスを入力してください。";
  else if (!EMAIL_RE.test(email))
    errors.email = "メールアドレスの形式をご確認ください。";
  if (!message) errors.message = "お問い合わせ内容を入力してください。";
  else if (message.length < 10)
    errors.message = "もう少し詳しくご記入ください（10文字以上）。";

  if (trap) {
    // Silently treat spam as success.
    return { status: "success", message: "送信が完了しました。" };
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "入力内容をご確認ください。",
      errors,
      values,
    };
  }

  try {
    await sendInquiry(values);
  } catch (err) {
    console.error("[contact] failed to send inquiry:", err);
    return {
      status: "error",
      message:
        "送信中に問題が発生しました。お手数ですが、時間をおいて再度お試しいただくか、お電話・メールにて直接お問い合わせください。",
      values,
    };
  }

  return {
    status: "success",
    message:
      "お問い合わせありがとうございます。担当者より2営業日以内にご連絡いたします。",
  };
}

/**
 * Deliver the inquiry by email via Resend.
 * Throws on misconfiguration or any delivery failure so the caller can show a
 * user-friendly error message.
 */
async function sendInquiry(values: ContactValues): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  // CONTACT_TO_EMAIL may hold one or more comma-separated recipients.
  const to = (process.env.CONTACT_TO_EMAIL ?? "")
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);

  if (!apiKey || to.length === 0 || !from) {
    throw new Error(
      "Missing email configuration: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.",
    );
  }

  const resend = new Resend(apiKey);

  const inquiryType = values.inquiryType || "未選択";
  const text = [
    "OneStep Associates のお問い合わせフォームに新しい送信がありました。",
    "",
    "■ お問い合わせ種別",
    inquiryType,
    "",
    "■ お名前",
    values.name,
    "",
    "■ 会社名",
    values.company || "（未入力）",
    "",
    "■ メールアドレス",
    values.email,
    "",
    "■ 電話番号",
    values.phone || "（未入力）",
    "",
    "■ お問い合わせ内容",
    values.message,
    "",
    "----------------------------------------",
    `このメールは ${company.name} のお問い合わせフォームから自動送信されました。`,
    "そのまま返信すると、送信者のメールアドレス宛に届きます。",
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: values.email,
    subject: `【お問い合わせ】${inquiryType} - ${values.name}様`,
    text,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
