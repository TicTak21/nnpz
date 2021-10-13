import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from './services/redis-cache.service';

@Module({
  imports: [CacheModule.registerAsync({ useClass: RedisCacheService })],
  exports: [CacheModule],
})
export class RedisCacheModule {}
