# backend-playground

Monorepo de estudos para praticar engenharia de software em backend, usando
NestJS/TypeScript como base. O objetivo **não** é ter um produto funcionando
de ponta a ponta rapidamente, e sim implementar, com as próprias mãos,
conceitos como cache, mensageria, testes automatizados, Docker e Clean
Architecture/SOLID — entendendo o porquê de cada decisão.

Por isso, este repositório contém apenas:

- estrutura de pastas e organização em camadas (Clean Architecture);
- configuração de ferramentas (Docker Compose, TypeScript, ESLint/Prettier,
  Jest, Nest CLI em modo monorepo);
- boilerplate mínimo (módulos e `main.ts`);
- comentários `TODO` explicando o que precisa ser implementado e por quê —
  sem a implementação pronta.

## Estrutura

```
backend-playground/
├── apps/
│   └── api/                        # aplicação NestJS principal
│       └── src/
│           ├── interface-adapters/ # controllers, DTOs (TODO)
│           ├── infrastructure/     # wiring de frameworks/infra (TODO)
│           ├── app.module.ts
│           └── main.ts
├── libs/
│   ├── cache/                      # porta + adapter de cache sobre Redis (TODO)
│   ├── messaging/                  # porta + adapter de mensageria sobre RabbitMQ (TODO)
│   └── shared/                     # entidades de domínio e casos de uso (TODO)
├── docker-compose.yml              # Redis, RabbitMQ e Postgres
└── docs/
    └── decisions/
        └── template.md             # template de ADR (Architecture Decision Record)
```

O núcleo de domínio (`libs/shared/src/domain`) não deve importar nada de
`@nestjs/*`, `ioredis`, `amqplib` ou qualquer outra biblioteca externa — essa
é a regra de dependência da Clean Architecture que este projeto pratica.

## Como rodar (manualmente)

Este repositório não instala dependências nem executa nada automaticamente.
Para rodar você mesmo:

```bash
npm install
```

```bash
docker compose up -d
```

```bash
npm run start:dev
```

```bash
npm run test
```

## Roadmap de aprendizado

Ordem sugerida para implementar os módulos. Cada etapa foca em um objetivo de
aprendizado — a implementação em si é por sua conta.

1. **Fundamentos de Clean Architecture/SOLID** — modelar as primeiras
   entidades de domínio e um caso de uso simples em `libs/shared`, sem
   nenhuma dependência de framework, e entender por que isso facilita testar
   e trocar infraestrutura depois.
2. **Testes automatizados** — escrever testes unitários para os casos de uso
   usando fakes/stubs no lugar de infraestrutura real, e entender a
   diferença entre teste unitário, de integração e e2e.
3. **Cache (Redis)** — implementar a porta e o adapter em `libs/cache`,
   entendendo quando cache ajuda (e quando esconde problemas), estratégias de
   invalidação e TTL.
4. **Mensageria (RabbitMQ)** — implementar publisher/consumer em
   `libs/messaging`, entendendo comunicação assíncrona, idempotência e
   tratamento de falhas (retry, dead-letter).
5. **Docker** — evoluir o `docker-compose.yml` e, eventualmente, dockerizar a
   própria aplicação, entendendo a diferença entre ambiente de
   desenvolvimento e de produção.
6. **Documentação de decisões arquiteturais (ADR)** — à medida que for
   tomando decisões não triviais nas etapas acima, registrá-las em
   `docs/decisions/` usando o template, praticando como comunicar o
   *porquê* de uma decisão, não só o *o quê*.
