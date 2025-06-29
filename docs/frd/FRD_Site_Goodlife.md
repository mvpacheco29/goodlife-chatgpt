# 📄 FRD — Functional Requirements Document  
## Projeto: Site Institucional - Corretora de Seguros GoodLife

---

## 🧭 Visão Geral

Este documento descreve os requisitos funcionais do site institucional da corretora de seguros GoodLife, cujo objetivo é apresentar os serviços (seguro de vida, seguro viagem e plano odontológico), promover engajamento por meio de canais digitais (WhatsApp, Instagram) e capturar leads de potenciais clientes.

---

## 🧩 Escopo Funcional

O site deve:

- Ser acessível por qualquer navegador moderno (Chrome, Safari, Firefox, Edge)
- Funcionar em dispositivos mobile, tablet e desktop
- Oferecer navegação clara entre páginas
- Permitir o preenchimento e envio de formulário de interesse
- Integrar com ferramentas de marketing e redes sociais
- Otimizar o SEO para mecanismos de busca
- Coletar, armazenar e proteger informações de leads

---

## 🗂️ Módulos Funcionais

---

### 1. Página Inicial (`/`)

**Descrição:**  
Página de apresentação da corretora e seus produtos, com chamadas para ação.

**Funcionalidades:**

- Banner institucional com CTA
- Cards dos produtos (vida, viagem, odontológico)
- Botão de contato (WhatsApp)
- Rodapé com informações da empresa

**Critérios de aceitação:**

- [ ] A página carrega em até 2 segundos
- [ ] Os produtos estão destacados com botões “Saiba mais”
- [ ] Existe um botão flutuante de WhatsApp visível em todas as resoluções

---

### 2. Página de Produtos (`/seguro-de-vida`, `/seguro-viagem`, `/plano-odontologico`)

**Descrição:**  
Página explicando cada tipo de produto com benefícios, exemplos e chamada para ação.

**Funcionalidades:**

- Conteúdo explicativo otimizado para SEO
- Galeria ou imagem ilustrativa
- Botão para abrir formulário de interesse

**Critérios de aceitação:**

- [ ] O conteúdo é escaneável e responsivo
- [ ] Existe uma chamada para conversão visível (ex: botão “Quero saber mais”)
- [ ] Página segue boas práticas de acessibilidade

---

### 3. Página de Contato (`/contato`)

**Descrição:**  
Exibe canais de atendimento e permite que o usuário entre em contato via formulário.

**Funcionalidades:**

- Dados de contato (telefone, e-mail, endereço)
- Formulário de lead (nome, telefone, e-mail, tipo de seguro)
- Integração com Supabase via API
- Redirecionamento para página de agradecimento

**Critérios de aceitação:**

- [ ] Formulário envia dados com validação client e server-side
- [ ] Campos obrigatórios validados corretamente
- [ ] Sucesso redireciona para página `/obrigado`
- [ ] Spam é bloqueado com reCAPTCHA v3

---

### 4. Página de Ajuda (`/ajuda`)

**Descrição:**  
Página de FAQ com perguntas frequentes e respostas simples.

**Funcionalidades:**

- Acordeões com perguntas e respostas
- Filtro por categoria de produto (vida, viagem, odontológico)

**Critérios de aceitação:**

- [ ] A página deve conter pelo menos 5 perguntas por produto
- [ ] Permitir navegação simples por mobile

---

### 5. Integrações com Redes Sociais

**Descrição:**  
Links rastreáveis e elementos clicáveis que direcionam o usuário para canais sociais da corretora.

**Funcionalidades:**

- Botão flutuante de WhatsApp (via GetButton ou customizado)
- Link para Instagram com UTM para rastreio de campanhas
- Compartilhamento via API Web Share (em mobile)

**Critérios de aceitação:**

- [ ] WhatsApp abre com mensagem automática no app ou web
- [ ] Instagram abre em nova aba com link rastreado
- [ ] Botões aparecem corretamente em dispositivos móveis

---

### 6. Ferramentas de Marketing Digital

**Descrição:**  
Scripts e tags inseridos para monitoramento e campanhas.

**Funcionalidades:**

- Inclusão de tags via Google Tag Manager:
  - Google Analytics 4
  - Facebook Pixel
  - Google Ads Tag
- Eventos de conversão no envio do formulário

**Critérios de aceitação:**

- [ ] Tags são carregadas via GTM
- [ ] Eventos de conversão disparam corretamente
- [ ] Nenhum bloqueio de cookie impede carregamento funcional

---

### 7. SEO e Estrutura de Busca

**Descrição:**  
Ajustes no código e conteúdo para maximizar a indexação e posicionamento nos mecanismos de busca.

**Funcionalidades:**

- Metatags dinâmicas por página
- Sitemap.xml e robots.txt
- JSON-LD para Schema.org (Produto ou Serviço)
- Canonical tags
- Título e descrição únicos por página

**Critérios de aceitação:**

- [ ] Todas as páginas têm `<title>` e `<meta description>` otimizadas
- [ ] Sitemap acessível em `/sitemap.xml`
- [ ] Robots.txt permite acesso ao Googlebot
- [ ] Score ≥ 90 no Lighthouse para SEO

---

### 8. Responsividade e Acessibilidade

**Descrição:**  
Garantia de que o conteúdo será exibido corretamente em todos os dispositivos.

**Funcionalidades:**

- Menu responsivo com hambúrguer no mobile
- Tipografia e espaçamento legíveis
- Navegação com teclado
- Alt em imagens

**Critérios de aceitação:**

- [ ] Compatível com resoluções entre 320px e 1920px
- [ ] Navegável com teclado (sem mouse)
- [ ] Imagens com `alt` descritivo
- [ ] WCAG 2.1 - AA no mínimo

---

### 9. Página de Obrigado (`/obrigado`)

**Descrição:**  
Confirmação visual para o usuário após envio do formulário.

**Funcionalidades:**

- Mensagem personalizada
- Agradecimento e confirmação
- Call-to-action para voltar ao site

**Critérios de aceitação:**

- [ ] Página acessada apenas após envio bem-sucedido
- [ ] Texto claro e amigável

---

## ✅ Critérios Gerais de Aceitação

| Item                             | Requisito mínimo |
|----------------------------------|------------------|
| Performance (Lighthouse)         | ≥ 90             |
| SEO (estrutura e metadados)      | Correto por página |
| Mobile Responsiveness            | Totalmente adaptado |
| Integrações de marketing         | Funcionais via GTM |
| Segurança (inputs, headers)      | Proteções OWASP ativas |
| Leads captados                   | Armazenados e validados |
| Conteúdo acessível               | WCAG 2.1 - AA    |

---

## 📌 Exclusões (Fora do escopo do MVP)

- Login/Autenticação de usuários
- Painel administrativo
- Integração com APIs de seguradoras externas
- Compra direta de seguros pelo site

---

## 📎 Dependências

- Conta Supabase configurada com tabela `leads`
- Conta Google Tag Manager com contêiner GTM ativo
- Conta Meta Ads e Pixel configurado
- Domínio configurado com HTTPS via Hostinger ou Vercel

---

## 🧑‍🤝‍🧑 Responsáveis

| Requisito               | Responsável       |
|-------------------------|-------------------|
| Implementação técnica   | Time de engenharia |
| Conteúdo institucional  | Time de marketing |
| Aprovação final         | Product Owner     |

---

## 🧾 Aprovado por

- [ ] Product Owner
- [ ] Tech Lead
- [ ] Stakeholders

---
