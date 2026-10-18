/**
 * Porta (interface) para consumo de mensagens/eventos.
 *
 * TODO(messaging): definir a assinatura do(s) método(s) de consumo/inscrição. Pense em:
 * - Como registrar um handler para um tipo de mensagem/evento sem acoplar ao RabbitMQ?
 * - O que fazer em caso de falha no processamento (retry? dead-letter? ambos?).
 * - Processamento deve ser idempotente — como isso afeta a interface e os casos de uso?
 */
export interface MessageConsumerPort {
  // TODO(messaging): declarar método aqui, ex.: subscribe(topic: string, handler: ...): void;
}
