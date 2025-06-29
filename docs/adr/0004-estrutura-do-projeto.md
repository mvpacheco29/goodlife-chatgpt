# ADR 0004: Organização da Estrutura do Projeto

## Status
Aceita ✅

## Contexto
O projeto precisa ser organizado, escalável e fácil de manter por múltiplos desenvolvedores.

## Decisão

Usaremos a seguinte estrutura:

```
/pages
/components
/styles
/utils
/public
/docs
```

## Justificativa

- Separação clara entre camadas de UI, utilitários e lógica
- Facilita leitura e onboarding
- Segue padrão amplamente adotado em projetos Next.js

## Consequências

- Baixa curva de aprendizado para novos devs
- Fácil escalabilidade para novos módulos e rotas
