import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from '../../shared/services/cache';
import { ToppingController } from './controllers/topping.controller';
import { ToppingResolver } from './resolvers/topping.resolver';
import { ToppingService } from './services/topping.service';

@Module({
  imports: [CacheModule.registerAsync({ useClass: RedisCacheService })],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingResolver],
})
export class ToppingModule {}
