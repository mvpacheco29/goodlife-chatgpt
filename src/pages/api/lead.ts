import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN || "",
  tracesSampleRate: 1.0,
});

const leadSchema = z.object({
  nome: z.string().min(2),
  telefone: z.string().min(8),
  email: z.string().email(),
  interesse: z.enum(["seguro-de-vida", "seguro-viagem", "plano-odontologico"]),
});

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Rate limiting simples em memória (apenas para exemplo, use Redis em produção)
const rateLimitMap = new Map<string, { count: number; last: number }>();
const RATE_LIMIT = 5; // 5 requisições
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto

function sanitize(input: string) {
  return input.replace(/[<>"'\\]/g, "");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  // Verificação do reCAPTCHA v3
  const recaptchaToken = req.body.recaptchaToken;
  if (!recaptchaToken) {
    return res.status(400).json({ error: "reCAPTCHA não enviado" });
  }
  try {
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res
        .status(400)
        .json({ error: "Falha na verificação do reCAPTCHA" });
    }
  } catch (e) {
    return res.status(500).json({ error: "Erro ao verificar reCAPTCHA" });
  }

  // Proteção: Rate limiting por IP
  const ip =
    req.headers["x-forwarded-for"]?.toString() ||
    req.socket.remoteAddress ||
    "";
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, last: now };
  if (now - entry.last > RATE_LIMIT_WINDOW) {
    entry.count = 0;
    entry.last = now;
  }
  entry.count++;
  rateLimitMap.set(ip, entry);
  if (entry.count > RATE_LIMIT) {
    return res
      .status(429)
      .json({ error: "Muitas requisições, tente novamente mais tarde." });
  }

  // Validação e sanitização
  const parse = leadSchema.safeParse(req.body);
  if (!parse.success) {
    return res
      .status(400)
      .json({ error: "Dados inválidos", details: parse.error.errors });
  }
  const { nome, telefone, email, interesse } = parse.data;
  const safeNome = sanitize(nome);
  const safeTelefone = sanitize(telefone);
  const safeEmail = sanitize(email);
  const safeInteresse = sanitize(interesse);

  try {
    const { error } = await supabase.from("leads").insert([
      {
        nome: safeNome,
        telefone: safeTelefone,
        email: safeEmail,
        interesse: safeInteresse,
        data: new Date().toISOString(),
      },
    ]);
    if (error) throw error;
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    Sentry.captureException(e);
    return res
      .status(500)
      .json({ error: "Erro ao salvar lead", details: e.message });
  }
}
