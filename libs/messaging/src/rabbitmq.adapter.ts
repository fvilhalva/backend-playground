// TODO(messaging): implementar adapters que satisfaçam `MessagePublisherPort` e
// `MessageConsumerPort` usando um cliente RabbitMQ (ex.: amqplib ou amqp-connection-manager).
// Este arquivo é o lugar certo para código que conhece RabbitMQ — as portas não devem.
//
// Pontos para estudar e decidir (registre em um ADR se for uma decisão relevante):
// - Exchange/queue topology: direct, topic ou fanout? Por quê?
// - Como lidar com reconexão e perda de conexão com o broker.
// - Estratégia de retry e dead-letter queue para mensagens com falha de processamento.
// - Serialização do payload (JSON? outro formato?).
//
// import { MessagePublisherPort } from './message-publisher.port';
// import { MessageConsumerPort } from './message-consumer.port';
//
// export class RabbitMqAdapter implements MessagePublisherPort, MessageConsumerPort {
//   // implementação aqui
// }
