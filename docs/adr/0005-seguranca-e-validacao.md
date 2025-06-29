# ADR 0005: Estratégia de Segurança e Validação

## Status
Aceita ✅

## Contexto
O site lida com dados sensíveis de leads e deve estar protegido contra ataques comuns da web.

## Decisão

- Validação client-side: React Hook Form + Zod
- Validação server-side: Zod + sanitização de dados
- Proteções ativas:
  - reCAPTCHA v3
  - Headers de segurança (CSP, HSTS, etc.)
  - Rate limiting no endpoint `/api/lead`

## Justificativa

- OWASP recomenda validação e sanitização em todas as camadas
- Uso de reCAPTCHA reduz SPAM e abusos automatizados
- Headers protegem contra XSS e ataques clickjacking

## Consequências

- Mais código na API para validações
- Monitoramento necessário para alertas de abuso
