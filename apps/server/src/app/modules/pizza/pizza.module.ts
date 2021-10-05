import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationService, RedisCacheService } from '../../shared/services';
import { PizzaController } from './controllers/pizza.controller';
import { PizzaEntity } from './entities/pizza.entity';
import { PizzaResolver } from './resolvers/pizza.resolver';
import { PizzaService } from './services/pizza.service';

@Module({
  imports: [
    CacheModule.registerAsync({ useClass: RedisCacheService }),
    TypeOrmModule.forFeature([PizzaEntity]),
  ],
  controllers: [PizzaController],
  providers: [PizzaService, PizzaResolver, PaginationService],
})
export class PizzaModule {}
