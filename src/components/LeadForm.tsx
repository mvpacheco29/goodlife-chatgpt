import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const leadSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  telefone: z.string().min(8, "Telefone obrigatório"),
  email: z.string().email("E-mail inválido"),
  interesse: z.enum(["seguro-de-vida", "seguro-viagem", "plano-odontologico"], {
    errorMap: () => ({ message: "Selecione o tipo de interesse" }),
  }),
});

type LeadFormData = z.infer<typeof leadSchema>;

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const LeadForm: React.FC = () => {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  async function onSubmit(data: LeadFormData) {
    setStatus("idle");
    try {
      // Executa o reCAPTCHA v3
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "lead",
      });
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });
      if (res.ok) {
        setStatus("success");
        router.push("/obrigado");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  React.useEffect(() => {
    if (!window.grecaptcha && RECAPTCHA_SITE_KEY) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded-lg shadow max-w-xl mx-auto"
    >
      <input
        {...register("nome")}
        type="text"
        placeholder="Nome"
        className="w-full border rounded px-3 py-2"
      />
      {errors.nome && (
        <span className="text-red-600 text-sm">{errors.nome.message}</span>
      )}
      <input
        {...register("telefone")}
        type="tel"
        placeholder="Telefone"
        className="w-full border rounded px-3 py-2"
      />
      {errors.telefone && (
        <span className="text-red-600 text-sm">{errors.telefone.message}</span>
      )}
      <input
        {...register("email")}
        type="email"
        placeholder="E-mail"
        className="w-full border rounded px-3 py-2"
      />
      {errors.email && (
        <span className="text-red-600 text-sm">{errors.email.message}</span>
      )}
      <select
        {...register("interesse")}
        className="w-full border rounded px-3 py-2"
      >
        <option value="">Tipo de interesse</option>
        <option value="seguro-de-vida">Seguro de Vida</option>
        <option value="seguro-viagem">Seguro Viagem</option>
        <option value="plano-odontologico">Plano Odontológico</option>
      </select>
      {errors.interesse && (
        <span className="text-red-600 text-sm">{errors.interesse.message}</span>
      )}
      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800 transition disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      {status === "error" && (
        <div className="text-red-600 text-sm">
          Erro ao enviar. Tente novamente.
        </div>
      )}
    </form>
  );
};

export default dynamic(() => Promise.resolve(LeadForm), { ssr: false });
