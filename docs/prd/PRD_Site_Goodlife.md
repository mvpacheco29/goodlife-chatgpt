# 🧾 PRD — Site Institucional para Corretora de Seguros GoodLife

## 🗂️ Visão Geral

**Nome do Projeto:** Site Institucional - Corretora de Seguros Goodlife  
**Objetivo:** Criar um site moderno, responsivo, seguro e altamente otimizado para SEO, com foco em apresentar os produtos da corretora (seguro de vida, seguro viagem e plano odontológico), captar leads qualificados e suportar estratégias de marketing digital com alta performance e segurança.

---

## 🎯 Objetivos do Produto

- **Apresentar os produtos** da corretora com design profissional e responsivo.
- **Captar leads** de potenciais clientes com formulários intuitivos e seguros.
- **Integrar com redes sociais**, especialmente WhatsApp e Instagram.
- **Otimizar para SEO** com foco em performance e boas práticas do Google.
- **Preparar a base para campanhas de tráfego pago** (Google Ads, Meta Ads).
- **Garantir segurança da aplicação** com práticas da OWASP, NIST e CISA.
- **Obter pontuações elevadas** no Google Lighthouse e Core Web Vitals.

---

## 📦 Escopo Funcional

### 1. Páginas do Site

| Página                   | Descrição                                                                 |
|--------------------------|---------------------------------------------------------------------------|
| `/`                      | Página inicial com visão geral dos produtos e chamada para ação          |
| `/seguro-de-vida`        | Explicação detalhada sobre o seguro de vida                              |
| `/seguro-viagem`         | Explicação detalhada sobre o seguro viagem                               |
| `/plano-odontologico`    | Explicação detalhada sobre o plano odontológico                          |
| `/ajuda`                 | Perguntas frequentes (FAQ)                                               |
| `/contato`               | Formulário de contato, dados e canais de atendimento                     |
| `/obrigado`              | Página de agradecimento após envio do formulário                         |
| 404                      | Página de erro customizada                                               |

---

### 2. Funcionalidades Principais

#### 📋 Captação de Leads

- Formulário com campos: nome, telefone, e-mail, tipo de seguro de interesse
- Validação client-side e server-side
- Armazenamento no banco (Supabase)
- Redirecionamento para página de agradecimento

#### 📲 Integrações

- Botão flutuante de WhatsApp Business
- Link rastreável para perfil do Instagram
- Integração com:
  - Google Analytics 4
  - Google Tag Manager
  - Facebook Pixel (Meta Ads)
  - Google Ads (Conversão/Remarketing)

#### 🔍 SEO e Performance

- Metatags dinâmicas (`title`, `description`, `canonical`)
- Open Graph e Twitter Card para compartilhamento
- Sitemap.xml e robots.txt
- JSON-LD com dados estruturados (Schema.org)
- Imagens otimizadas com `next/image`
- Lighthouse score ≥ 90 em todos os pilares

#### 🔐 Segurança

- Proteções contra XSS, CSRF, SQLi
- Rate limiting e reCAPTCHA no formulário
- Headers de segurança HTTP:
  - `Content-Security-Policy`
  - `Strict-Transport-Security`
  - `X-Frame-Options`, etc.
- Validação e sanitização de entradas
- HTTPS obrigatório (TLS 1.2+)

---

## 🧱 Requisitos Técnicos

### Frontend

- **Next.js** (React + SSR + SSG)
- **TypeScript**
- **Tailwind CSS** para estilização responsiva
- **React Hook Form + Zod** para validação de formulários

### Backend

- **Next.js API Routes** (ou Supabase Functions)
- Integração com **Supabase** (PostgreSQL) para persistência de leads
- Middleware de validação, segurança e logging

### Integrações e Ferramentas

- Google Analytics 4 (via GTM)
- Google Tag Manager
- Facebook Pixel
- Google Ads Tag
- Sentry (monitoramento de erros)

---

## 📊 Métricas de Sucesso

| Métrica                             | Meta                            |
|------------------------------------|---------------------------------|
| Lighthouse Performance             | ≥ 90                            |
| Core Web Vitals                    | LCP < 2.5s, CLS < 0.1           |
| Leads captados por semana          | Definido pela equipe de negócio|
| Bounce rate                        | < 50%                           |
| SEO Score (Ahrefs/SEMrush)        | Alta indexabilidade, baixa toxicidade |
| Tempo médio de carregamento        | < 2s                            |

---

## 📆 Cronograma Sugerido (MVP)

| Etapa                        | Duração estimada |
|-----------------------------|------------------|
| Setup inicial do projeto    | 1 dia            |
| Layout base e responsividade| 2 dias           |
| Desenvolvimento das páginas | 3 dias           |
| Formulário e backend lead   | 2 dias           |
| Integrações e SEO           | 2 dias           |
| Testes e validações finais  | 1 dia            |
| Deploy e monitoramento      | 1 dia            |
| **Total estimado**          | **12 dias úteis**|

---

## ⚠️ Fora de Escopo (MVP)

- CMS para gestão de conteúdo
- Login de usuários ou painel administrativo
- Integração com APIs de cotação em tempo real
- Pagamentos online (venda direta pelo site)

---

## 🧑‍💻 Equipe Envolvida

| Papel                      | Responsável |
|---------------------------|-------------|
| Product Owner             | [A definir] |
| UX/UI Designer            | [A definir] |
| Desenvolvedor Frontend    | [A definir] |
| Desenvolvedor Backend     | [A definir] |
| Especialista em SEO       | [A definir] |
| QA/Testes                 | [A definir] |

---

## 📁 Anexos e Referências

- Site de referência: [https://www.youse.com.br](https://www.youse.com.br)
- Guia OWASP: [https://owasp.org/Top10](https://owasp.org/Top10)
- CISA Best Practices: [https://www.cisa.gov](https://www.cisa.gov)
- NIST Guidelines: [https://www.nist.gov/cyberframework](https://www.nist.gov/cyberframework)

---

## ✅ Aprovação

- [ ] Aprovado por Product Owner
- [ ] Aprovado por Equipe Técnica
- [ ] Aprovado por Stakeholders

---
