import { Module } from '@nestjs/common';

// TODO(cache): expor um módulo NestJS (ex.: `CacheModule.register(options)` ou
// `forRootAsync`) que:
// - leia a configuração de conexão com Redis (host, porta, senha, etc.) de variáveis
//   de ambiente;
// - registre o `RedisCacheAdapter` como provider, associado ao token/interface `CachePort`;
// - exporte esse provider para que outros módulos da aplicação possam injetá-lo.
//
// Pense em como isso ficaria testável: a aplicação deve poder trocar o adapter real
// por um fake em testes sem mudar os casos de uso.

@Module({})
export class CacheModule {}
