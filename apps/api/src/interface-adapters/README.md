# Adaptadores de interface

Traduzem entre o mundo externo (HTTP, mensagens recebidas, etc.) e os casos de
uso em `libs/shared/src/domain/use-cases`. Aqui entram controllers, DTOs de
entrada/saída, validators e presenters — código que conhece NestJS/HTTP, mas
não conhece Redis/RabbitMQ diretamente (isso é responsabilidade da camada de
infraestrutura).

TODO: criar aqui os controllers e DTOs que expõem os casos de uso via HTTP (ou
outro protocolo). Pense em:

- O controller deve ser fino: validar entrada, chamar o caso de uso, mapear a
  saída — sem lógica de negócio aqui.
- Os DTOs de entrada/saída devem ser diferentes das entidades de domínio?
  Por quê isso importa para manter o núcleo isolado?
