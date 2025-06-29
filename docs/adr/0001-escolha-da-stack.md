# ADR 0001: Escolha da Stack Tecnológica

## Status
Aceita ✅

## Contexto
Precisamos de uma stack moderna, com excelente suporte a SEO, performance, segurança, e escalabilidade para criar um site institucional responsivo e leve.

## Decisão
Optamos por utilizar:

- **Frontend**: Next.js + React + TypeScript
- **Estilo**: Tailwind CSS
- **Backend de captura de leads**: API Routes do Next.js
- **Banco de dados**: Supabase (PostgreSQL gerenciado)

## Justificativa

- **Next.js** oferece SSR, SSG e excelente suporte para SEO.
- **Tailwind** reduz tempo de produção de UI responsiva.
- **Supabase** fornece backend serverless, banco e autenticação prontos para uso.
- Evita sobrecarga de DevOps e reduz TTM (time-to-market).

## Consequências
- Facilidade de manutenção por devs que conhecem React.
- Dependência da Vercel (ou similar) para deploy SSR.
