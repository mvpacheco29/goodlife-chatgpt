# Plano de Desenvolvimento - Site Institucional para Corretora de Seguros

## 🎯 Objetivo

Criar um site institucional moderno, leve, responsivo, seguro e altamente otimizado para SEO, baseado no modelo visual da [Youse](https://www.youse.com.br/). O site promoverá os serviços de **seguro de vida**, **seguro viagem** e **plano odontológico**, com foco em captação de leads, integração com redes sociais, e ferramentas de marketing digital como Google Ads e Meta Ads.

---

## ⚙️ Tecnologias

- **Frontend:** Next.js (TypeScript), Tailwind CSS
- **Backend (lead capture):** Next.js API Routes ou Supabase
- **Banco de Dados:** Supabase (PostgreSQL)
- **Formulários:** React Hook Form + Zod
- **Integrações:** WhatsApp Business, Instagram, Google Analytics, GTM, Facebook Pixel
- **Segurança:** OWASP, NIST, CISA
- **Performance:** Otimização com Lighthouse e PageSpeed Insights

---

## 🗂️ Estrutura Inicial do Projeto

### Tarefa 1: Criar o projeto com Next.js + TypeScript
```bash
npx create-next-app@latest corretora-seguros --typescript
cd corretora-seguros
````

### Tarefa 2: Instalar e configurar Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Tarefa 3: Criar estrutura de diretórios

```text
/components        → Componentes reutilizáveis
/pages             → Páginas do site (Home, Produtos, Contato)
/pages/api         → Rota de captação de leads
/public            → Imagens estáticas
/styles            → Estilos globais
/utils             → Validações, helpers
```

---

## 🔧 Etapas de Desenvolvimento e Tarefas

### 🔹 1. Layout Base e Responsividade

* [ ] Criar componente `<Header />` com menu responsivo (hambúrguer)
* [ ] Criar componente `<Footer />` com dados da corretora, links úteis e redes sociais
* [ ] Criar layout base com `<Layout>` (Header, children, Footer)
* [ ] Definir esquema de cores e tipografia
* [ ] Implementar responsividade Mobile-First com Tailwind

---

### 🔹 2. Páginas Institucionais

* [ ] `/`: Página inicial com resumo dos serviços
* [ ] `/seguro-de-vida`: Detalhes do seguro de vida
* [ ] `/seguro-viagem`: Detalhes do seguro viagem
* [ ] `/plano-odontologico`: Detalhes do plano odontológico
* [ ] `/ajuda`: Perguntas frequentes (FAQ)
* [ ] `/contato`: Formulário de contato e canais de atendimento
* [ ] `/obrigado`: Página de confirmação após envio de lead

---

### 🔹 3. Formulário de Lead

* [ ] Criar componente `<LeadForm />`
* [ ] Campos: nome, telefone, e-mail, tipo de interesse
* [ ] Validação com React Hook Form + Zod
* [ ] Submit via `/api/lead` (ver etapa 5)
* [ ] Exibir mensagens de sucesso e erro
* [ ] Redirecionar para página de “Obrigado”

---

### 🔹 4. Integrações com Marketing e Redes Sociais

* [ ] Adicionar botão flutuante de WhatsApp Business
* [ ] Linkar perfil do Instagram com tracking UTM
* [ ] Integrar **Google Analytics 4** via Google Tag Manager
* [ ] Integrar **Facebook Pixel** via GTM
* [ ] Adicionar tags de conversão do **Google Ads**
* [ ] Adicionar metadados para compartilhamento social (Open Graph, Twitter Card)

---

### 🔹 5. Backend - API de Captura de Leads

* [ ] Criar arquivo `/pages/api/lead.ts`
* [ ] Validar dados com Zod
* [ ] Sanitizar entradas (proteção XSS/Injection)
* [ ] Adicionar Rate Limiting (ex: IP + User-Agent)
* [ ] Armazenar lead no Supabase (ou enviar via email)
* [ ] Logar erros com fallback (ex: Sentry)

---

### 🔹 6. Banco de Dados (Supabase)

* [ ] Criar projeto Supabase e banco PostgreSQL
* [ ] Criar tabela `leads` com campos: nome, telefone, email, interesse, data
* [ ] Criar chave de API para inserção de dados no Supabase
* [ ] Proteger a API com política de autenticação via chave de serviço ou RLS

---

### 🔹 7. SEO e Otimização para Marketing Digital

* [ ] Criar `next-sitemap.js` para gerar `sitemap.xml` automaticamente
* [ ] Criar `robots.txt`
* [ ] Adicionar título, descrição e palavras-chave em cada página com `next/head`
* [ ] Adicionar metatags Open Graph e Twitter Card
* [ ] Criar markup estruturado (Schema.org) com JSON-LD
* [ ] Otimizar imagens com `next/image` e formatos WebP

---

### 🔹 8. Segurança (OWASP / NIST / CISA)

* [ ] Forçar HTTPS (via vercel.json ou host)
* [ ] Implementar headers de segurança:

  * `Strict-Transport-Security`
  * `X-Content-Type-Options`
  * `Content-Security-Policy`
  * `X-Frame-Options`
* [ ] Validar e sanitizar entradas de formulário
* [ ] Adicionar reCAPTCHA v3 invisível para proteger contra bots
* [ ] Aplicar princípio de menor privilégio no acesso ao banco de dados

---

### 🔹 9. Performance e Core Web Vitals

* [ ] Usar `next/image` com imagens otimizadas e lazy loading
* [ ] Usar fontes com `next/font` para carregamento eficiente
* [ ] Fazer code splitting com `dynamic import`
* [ ] Testar no Google Lighthouse e PageSpeed Insights
* [ ] Corrigir métricas como:

  * LCP (Largest Contentful Paint)
  * CLS (Cumulative Layout Shift)
  * TBT (Total Blocking Time)

---

### 🔹 10. Deploy e Monitoramento

* [ ] Configurar domínio na Hostinger ou Vercel
* [ ] Adicionar fallback 404 e página offline (PWA opcional)
* [ ] Validar integração do GTM, GA4 e Pixel no ambiente de produção
* [ ] Habilitar monitoramento de erros com Sentry ou LogRocket
* [ ] Validar HTTPS, headers e CSP no ambiente final

---

## ✅ Checklist Final

* [ ] Responsivo em todos os dispositivos
* [ ] Integrações com WhatsApp e Instagram funcionando
* [ ] Formulário de lead funcional com envio e salvamento
* [ ] Integração com GTM, GA, Facebook Pixel e Ads
* [ ] SEO otimizado com sitemap, metatags e conteúdo estruturado
* [ ] Página testada com Lighthouse com nota ≥ 90
* [ ] Segurança validada segundo OWASP, NIST e CISA