// TODO(cache): implementar um adapter que satisfaça `CachePort` usando um cliente Redis
// (ex.: ioredis). Este arquivo é o lugar certo para código que conhece Redis — a porta
// (`cache.port.ts`) não deve importar nada de Redis.
//
// Pontos para estudar e decidir (registre em um ADR se for uma decisão relevante):
// - Qual cliente Redis usar e por quê (ioredis vs node-redis).
// - Como lidar com erros de conexão/timeout sem derrubar a aplicação.
// - Serialização dos valores armazenados (JSON? Buffer?).
// - Estratégia de expiração/TTL e invalidação.
//
// import { CachePort } from './cache.port';
//
// export class RedisCacheAdapter implements CachePort {
//   // implementação aqui
// }
