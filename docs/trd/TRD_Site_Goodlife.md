# 📘 TRD — Technical Reference Document  
## Projeto: Site Institucional - Corretora de Seguros GoodLife

---

## 📄 Sumário

- [1. Visão Geral](#1-visão-geral)
- [2. Stack Tecnológica](#2-stack-tecnológica)
- [3. Arquitetura da Solução](#3-arquitetura-da-solução)
- [4. Estrutura do Projeto](#4-estrutura-do-projeto)
- [5. Componentes Técnicos](#5-componentes-técnicos)
- [6. Integrações e Serviços Externos](#6-integrações-e-serviços-externos)
- [7. Banco de Dados e Estrutura de Leads](#7-banco-de-dados-e-estrutura-de-leads)
- [8. Requisitos de Segurança](#8-requisitos-de-segurança)
- [9. Monitoramento e Observabilidade](#9-monitoramento-e-observabilidade)
- [10. DevOps e Deploy](#10-devops-e-deploy)
- [11. Performance e SEO](#11-performance-e-seo)

---

## 1. Visão Geral

Este TRD documenta as decisões técnicas do desenvolvimento de um site institucional responsivo, seguro e com alta performance para uma corretora de seguros. O site promove **seguro de vida**, **seguro viagem** e **plano odontológico**, com foco em **captação de leads** e **marketing digital**.

---

## 2. Stack Tecnológica

### 🧩 Frontend

| Tecnologia     | Motivo                                                         |
|----------------|----------------------------------------------------------------|
| Next.js        | SSR + SSG, otimizado para SEO, rotas dinâmicas e integração fácil |
| React (v18+)   | Componentização e controle de estado com hooks modernos        |
| TypeScript     | Tipagem estática e segurança em tempo de desenvolvimento       |
| Tailwind CSS   | Estilização rápida, responsiva e leve                          |

### ⚙️ Backend

| Tecnologia          | Motivo                                                         |
|---------------------|----------------------------------------------------------------|
| Next.js API Routes  | Backend serverless integrado para formulários de lead          |
| Supabase (PostgreSQL)| BaaS com banco seguro e escalável para persistência de leads |

---

## 3. Arquitetura da Solução

```

\[Browser]
|
\[Next.js SSR/SSG]
|
\[API Routes /api/lead] ------> \[Supabase DB]
|
\[GTM, Analytics, Ads, Facebook Pixel]

````

- **Arquitetura JAMstack + Serverless**
- **Leads captados via formulário → API Route → Supabase**
- **Static + Server Rendering para páginas com SEO**
- Integrações assíncronas com ferramentas de marketing

---

## 4. Estrutura do Projeto

```text
/pages
  ├── index.tsx                  → Home
  ├── seguro-de-vida.tsx
  ├── seguro-viagem.tsx
  ├── plano-odontologico.tsx
  ├── contato.tsx
  ├── ajuda.tsx
  ├── obrigado.tsx
  └── api/lead.ts                → Captura de leads

/components
  ├── Header.tsx
  ├── Footer.tsx
  ├── LeadForm.tsx
  ├── CardProduto.tsx
  └── ButtonWhatsApp.tsx

/styles/
  └── globals.css

/utils/
  ├── validators.ts              → Zod schemas
  └── api.ts                     → Supabase client helper
````

---

## 5. Componentes Técnicos

### Formulário de Lead

* Campos: nome, telefone, email, tipo de interesse
* Validação: React Hook Form + Zod
* Sanitização de entrada e proteção contra bots
* reCAPTCHA v3 (invisível)
* Feedbacks visuais em tempo real (toast ou inline)

### Responsividade

* Tailwind Mobile-First (`sm:`, `md:`, `lg:`)
* Menu hambúrguer para navegação em dispositivos móveis

---

## 6. Integrações e Serviços Externos

| Serviço            | Finalidade                                       |
| ------------------ | ------------------------------------------------ |
| WhatsApp Button    | Canal direto com corretora                       |
| Instagram Link     | Link rastreável com UTM                          |
| Google Analytics 4 | Métricas de navegação e comportamento do usuário |
| Google Tag Manager | Gerenciamento centralizado de scripts            |
| Facebook Pixel     | Rastreamento e remarketing com Meta Ads          |
| Google Ads Tag     | Conversões e campanhas de tráfego pago           |
| Supabase           | Backend para persistência de leads               |
| Sentry (opcional)  | Monitoramento de erros em produção               |

---

## 7. Banco de Dados e Estrutura de Leads

### Plataforma

* **Supabase** com **PostgreSQL**

### Tabela: `leads`

| Campo       | Tipo      | Descrição                           |
| ----------- | --------- | ----------------------------------- |
| id          | UUID      | Identificador único                 |
| nome        | varchar   | Nome do interessado                 |
| telefone    | varchar   | Telefone com DDD                    |
| email       | varchar   | E-mail válido                       |
| interesse   | enum      | \['vida', 'viagem', 'odontologico'] |
| created\_at | timestamp | Data/hora do envio                  |
| ip\_origem  | varchar   | IP do visitante                     |

---

## 8. Requisitos de Segurança

* Forçar HTTPS (via Vercel ou configuração de host)
* **OWASP:**

  * Sanitização de inputs
  * Validação server-side
  * Rate limiting no endpoint `/api/lead`
* **HTTP Headers:**

  * `Content-Security-Policy`
  * `Strict-Transport-Security`
  * `X-Content-Type-Options`
  * `X-Frame-Options`
* **CISA/NIST:**

  * Atualizações constantes de dependências
  * Uso de tokens ou RLS (Row-Level Security) no Supabase
  * Uso de reCAPTCHA para mitigação de automações

---

## 9. Monitoramento e Observabilidade

| Item                     | Ferramenta                |
| ------------------------ | ------------------------- |
| Métricas Web             | Google Lighthouse / PSI   |
| Usuários e Comportamento | Google Analytics + Hotjar |
| Rastreamento de eventos  | Google Tag Manager        |
| Erros de produção        | Sentry (ou LogRocket)     |

---

## 10. DevOps e Deploy

| Item            | Ferramenta                                  |
| --------------- | ------------------------------------------- |
| Hospedagem      | Vercel ou Hostinger                         |
| CI/CD           | GitHub Actions + Preview Vercel             |
| SSL/TLS         | Automático via Vercel                       |
| Ambiente `.env` | Variáveis: Supabase, reCAPTCHA, APIs de Ads |

---

## 11. Performance e SEO

### Otimizações de Performance

* Imagens em WebP com `next/image`
* Lazy loading de imagens e componentes pesados
* Uso de `next/font` para carregar apenas o necessário
* Code splitting via `dynamic import`

### Otimizações SEO

* `next/head` com:

  * title, description, canonical, og\:image
* Sitemap e robots.txt
* JSON-LD (Schema.org) para produtos/serviços
* Acessibilidade (WCAG): uso de aria-labels, alt text, foco

---

## ✅ Considerações Finais

* Todo código deve seguir Clean Code, SOLID e boas práticas de acessibilidade.
* SEO, performance e segurança são pilares do MVP.
* O projeto é extensível para CMS futuro e integrações mais complexas.

---