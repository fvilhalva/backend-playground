# Casos de uso

Orquestram as regras de negócio das entidades para realizar uma ação
completa (ex.: "criar pedido", "invalidar cache de produto"). Dependem apenas
de entidades e de *portas* (interfaces, como `CachePort` em `libs/cache` ou
`MessagePublisherPort` em `libs/messaging`) — nunca de uma implementação
concreta de Redis, RabbitMQ, Nest ou de um ORM.

TODO: implementar aqui os casos de uso do projeto. Para cada caso de uso,
pense em:

- Qual é a entrada e a saída (input/output) dele, em termos independentes de
  HTTP/framework?
- Quais portas (interfaces) ele precisa receber por injeção de dependência
  para funcionar?
- Como você testaria este caso de uso isoladamente, usando fakes/stubs das
  portas, sem precisar de Redis/RabbitMQ/Postgres reais?
