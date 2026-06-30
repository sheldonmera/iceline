import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/schemas";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const payload = contactSchema.parse(await request.json());
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_EMAIL, SMTP_FROM_NAME, CONTACT_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
      return NextResponse.json({ message: "Configuração SMTP incompleta." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const fromEmail = SMTP_FROM_EMAIL || SMTP_USER;
    const fromName = SMTP_FROM_NAME || "IceLine Site";

    const safe = {
      name: escapeHtml(payload.name),
      email: escapeHtml(payload.email),
      phone: escapeHtml(payload.phone),
      service: escapeHtml(payload.service),
      message: escapeHtml(payload.message).replace(/\n/g, "<br />")
    };

    await transporter.sendMail({
      from: `${fromName} - ${payload.name} <${fromEmail}>`,
      to: CONTACT_EMAIL,
      replyTo: `${payload.name} <${payload.email}>`,
      subject: `Novo contato - ${payload.service}`,
      text: `Nome: ${payload.name}\nE-mail: ${payload.email}\nTelefone: ${payload.phone}\nServiço: ${payload.service}\n\nMensagem:\n${payload.message}`,
      html: `
        <h2>Novo contato pelo site IceLine</h2>
        <p><strong>Nome:</strong> ${safe.name}</p>
        <p><strong>E-mail:</strong> ${safe.email}</p>
        <p><strong>Telefone:</strong> ${safe.phone}</p>
        <p><strong>Serviço:</strong> ${safe.service}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${safe.message}</p>
      `
    });

    return NextResponse.json({ message: "Mensagem enviada." });
  } catch {
    return NextResponse.json({ message: "Dados inválidos." }, { status: 400 });
  }
}