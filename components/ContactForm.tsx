"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormData } from "@/lib/schemas";

const services = ["Refrigeração comercial", "Eletrodomésticos", "Manutenção preventiva", "Diagnóstico técnico"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setStatus("success");
      reset();
      return;
    }

    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-[28px] bg-white p-5 shadow-premium md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Nome
          <input className="rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-ice focus:bg-white" placeholder="Seu nome" {...register("name")} />
          {errors.name ? <span className="text-xs text-red-600">{errors.name.message}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          E-mail
          <input className="rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-ice focus:bg-white" placeholder="voce@email.com" {...register("email")} />
          {errors.email ? <span className="text-xs text-red-600">{errors.email.message}</span> : null}
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Telefone
          <input className="rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-ice focus:bg-white" placeholder="(67) 99999-9999" {...register("phone")} />
          {errors.phone ? <span className="text-xs text-red-600">{errors.phone.message}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Serviço
          <select className="rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-ice focus:bg-white" defaultValue="" {...register("service")}>
            <option value="" disabled>Selecione</option>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
          {errors.service ? <span className="text-xs text-red-600">{errors.service.message}</span> : null}
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Mensagem
        <textarea className="min-h-36 resize-y rounded-2xl border border-slate-200 bg-mist px-4 py-3 outline-none transition focus:border-ice focus:bg-white" placeholder="Conte o que aconteceu, tipo de equipamento e bairro." {...register("message")} />
        {errors.message ? <span className="text-xs text-red-600">{errors.message.message}</span> : null}
      </label>
      <button disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 font-bold text-white shadow-lg shadow-navy/20 transition hover:-translate-y-0.5 hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? "Enviando..." : "Enviar solicitação"}
        <Send size={18} />
      </button>
      {status === "success" ? <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Mensagem enviada com sucesso. Em breve entraremos em contato.</p> : null}
      {status === "error" ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Não foi possível enviar agora. Tente novamente ou chame pelo WhatsApp.</p> : null}
    </form>
  );
}