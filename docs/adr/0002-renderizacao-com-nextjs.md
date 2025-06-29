# ADR 0002: Estratégia de Renderização com Next.js

## Status
Aceita ✅

## Contexto
Precisamos balancear SEO, performance e custo de hospedagem para servir conteúdo estático e dinâmico.

## Decisão
Usaremos uma abordagem híbrida:

- **SSG (Static Site Generation)** para páginas institucionais (`/`, `/ajuda`, `/produtos`)
- **SSR (Server Side Rendering)** apenas se necessário para futuras páginas dinâmicas ou personalizadas

## Justificativa

- SSG maximiza velocidade e pontuação em Core Web Vitals
- SSR é reservado para possíveis futuras personalizações
- Reduz custo em comparação a SSR completo

## Consequências
- Necessidade de automação de deploy para regenerar páginas SSG
- Redução drástica no TTFB para páginas institucionais
