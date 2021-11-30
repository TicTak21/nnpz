import {
  CacheModuleOptions,
  CacheOptionsFactory,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';

@Injectable()
export class RedisCacheService implements CacheOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createCacheOptions(): CacheModuleOptions | Promise<CacheModuleOptions> {
    const port = this.configService.get<string>('REDIS_PORT');
    const host = this.configService.get<string>('REDIS_HOST');

    return {
      store: redisStore,
      max: 10,
      ttl: 3,
      host,
      port,
    };
  }
}
