import { Module } from '@nestjs/common';

// TODO(messaging): expor um módulo NestJS que:
// - leia a configuração de conexão com RabbitMQ de variáveis de ambiente;
// - registre o adapter como provider, associado aos tokens/interfaces
//   `MessagePublisherPort` e `MessageConsumerPort`;
// - exporte esses providers para outros módulos da aplicação.

@Module({})
export class MessagingModule {}
