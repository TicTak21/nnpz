import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from '../../shared/services/cache';
import { PizzaController } from './controllers/pizza.controller';
import { PizzaResolver } from './resolvers/pizza.resolver';
import { PizzaService } from './services/pizza.service';

@Module({
  imports: [CacheModule.registerAsync({ useClass: RedisCacheService })],
  controllers: [PizzaController],
  providers: [PizzaService, PizzaResolver],
})
export class PizzaModule {}
