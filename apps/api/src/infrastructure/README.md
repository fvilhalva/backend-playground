# Infraestrutura / frameworks

Camada mais externa: wiring concreto de frameworks e bibliotecas — módulos do
Nest que configuram e registram os adapters de `libs/cache` e
`libs/messaging`, configuração de banco de dados (Postgres), variáveis de
ambiente, etc.

TODO: conforme for implementando `libs/cache` e `libs/messaging`, crie aqui
(ou em `app.module.ts`) o wiring que:

- lê configuração de ambiente (host/porta/credenciais de Redis, RabbitMQ,
  Postgres);
- registra os adapters concretos como providers associados às portas
  (interfaces) que os casos de uso esperam;
- isola qualquer detalhe de infraestrutura para que o restante da aplicação
  dependa apenas de interfaces.
