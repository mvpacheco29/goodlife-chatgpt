# ADR 0003: Armazenamento de Leads com Supabase

## Status
Aceita ✅

## Contexto
Precisamos persistir leads com segurança, auditabilidade e baixa complexidade de integração.

## Decisão
Utilizar o **Supabase** como backend de dados (PostgreSQL), com políticas RLS e integração via API REST.

## Justificativa

- Banco gerenciado com PostgreSQL confiável
- Facilidade de setup e baixo custo inicial
- Integração simples com API via token
- Suporte a auditoria, filtros, backups

## Consequências
- Precisamos manter tokens seguros e controlar quotas
- Liberação de IPs ou uso de políticas públicas com validação
