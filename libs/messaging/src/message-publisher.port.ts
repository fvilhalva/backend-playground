/**
 * Porta (interface) para publicação de mensagens/eventos. Os casos de uso dependem
 * apenas deste contrato, nunca de um cliente RabbitMQ diretamente.
 *
 * TODO(messaging): definir a assinatura do(s) método(s) de publicação. Pense em:
 * - O que é uma "mensagem" aqui? Um tipo genérico? Um envelope com metadados
 *   (ex.: id, timestamp, tipo do evento) além do payload?
 * - A publicação deve ser fire-and-forget ou retornar confirmação (ack)?
 * - Como representar o destino (exchange/routing key, ou um conceito mais abstrato
 *   como "tópico"/"evento")?
 */
export interface MessagePublisherPort {
  // TODO(messaging): declarar método aqui, ex.: publish(event: DomainEvent): Promise<void>;
}
