/**
 * Porta (interface) de cache, no espírito de Clean Architecture: os casos de uso
 * dependem apenas deste contrato, nunca de um cliente Redis diretamente.
 *
 * TODO(cache): definir a assinatura dos métodos que os casos de uso vão precisar
 * (ex.: get, set, delete, TTL, invalidação por padrão/tag). Pense em:
 * - Qual granularidade de chave/valor faz sentido para os casos de uso do projeto?
 * - Como representar TTL (segundos? Duration? sempre obrigatório?).
 * - O que a porta deve expor para permitir testar casos de uso com um fake em memória,
 *   sem precisar de um Redis real.
 */
export interface CachePort {
  // TODO(cache): declarar métodos aqui, ex.: get<T>(key: string): Promise<T | null>;
}
