# Entidades de domínio

Camada mais interna da Clean Architecture: regras de negócio e invariantes que
não dependem de nada — nem de NestJS, nem de Redis, nem de RabbitMQ, nem de um
banco de dados.

TODO: criar aqui as classes/tipos que representam os conceitos centrais do
domínio que você escolher modelar neste playground. Pergunte-se, para cada
entidade:

- Quais invariantes ela deve garantir por construção (não deixe estado
  inválido existir)?
- Ela precisa de identidade (id) ou é um Value Object (comparado por valor)?
- Esta classe realmente não precisa importar nada de `@nestjs/*`,
  `ioredis`, `amqplib` etc.? Se precisar, é sinal de que a lógica pertence a
  outra camada.
