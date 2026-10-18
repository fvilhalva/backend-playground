import { Module } from '@nestjs/common';

// TODO(cache): quando a lib `cache` tiver um módulo exportável (ex.: CacheModule.forRoot(...)),
// importe-o aqui para disponibilizar o cache para o restante da aplicação.

// TODO(messaging): quando a lib `messaging` tiver um módulo exportável (ex.: MessagingModule.forRoot(...)),
// importe-o aqui para disponibilizar publishers/consumers para o restante da aplicação.

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
