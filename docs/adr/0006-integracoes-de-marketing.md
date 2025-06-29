# ADR 0006: Integrações com Ferramentas de Marketing Digital

## Status
Aceita ✅

## Contexto
É essencial para a corretora mensurar resultados de campanhas e remarketing.

## Decisão

- Adotar o **Google Tag Manager** como orquestrador de scripts
- Integrar os seguintes serviços:
  - Google Analytics 4
  - Google Ads (Conversões)
  - Facebook Pixel (Meta Ads)

## Justificativa

- Centralização da gestão via GTM facilita ajustes
- Compatibilidade com tráfego pago e remarketing
- Otimização de eventos personalizados (ex: envio de formulário)

## Consequências

- Tags devem ser corretamente versionadas e auditadas
- Requer testes em ambientes de produção e staging
