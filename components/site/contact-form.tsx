"use client";

import { useState, useTransition } from "react";

import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-content";

const labels = {
  uz: {
    name: "Ism",
    email: "Email",
    company: "Kompaniya",
    message: "Xabar",
    submit: "Xabar yuborish",
    success: "Xabar tayyorlandi. Email ilovangiz ochiladi.",
    error: "Iltimos, barcha kerakli maydonlarni to'ldiring."
  },
  ru: {
    name: "Имя",
    email: "Email",
    company: "Компания",
    message: "Сообщение",
    submit: "Отправить сообщение",
    success: "Сообщение подготовлено. Откроется ваше почтовое приложение.",
    error: "Пожалуйста, заполните обязательные поля."
  },
  en: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "Message",
    submit: "Send Message",
    success: "Your message is prepared. Your mail app will open.",
    error: "Please fill in all required fields."
  }
} satisfies Record<Locale, Record<string, string>>;

export function ContactForm({ locale }: { locale: Locale }) {
  const text = labels[locale];
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const company = String(formData.get("company") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !message) {
          setStatus("error");
          return;
        }

        const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
        const body = encodeURIComponent(
          [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "-"}`, "", message].join("\n")
        );

        startTransition(() => {
          window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
          setStatus("success");
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          placeholder={text.name}
          className="rounded-2xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-accent/60"
        />
        <input
          name="email"
          type="email"
          placeholder={text.email}
          className="rounded-2xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-accent/60"
        />
      </div>
      <input
        name="company"
        placeholder={text.company}
        className="w-full rounded-2xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-accent/60"
      />
      <textarea
        name="message"
        rows={5}
        placeholder={text.message}
        className="w-full rounded-2xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-accent/60"
      />
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {text.submit}
      </button>
      {status ? (
        <p className={`text-sm ${status === "success" ? "text-accent" : "text-red-300"}`}>
          {status === "success" ? text.success : text.error}
        </p>
      ) : null}
    </form>
  );
}
