import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheModule } from '../cache/redis/redis-cache.module';
import { ErrorModule } from '../error/error.module';
import { PaginationModule } from '../pagination/pagination.module';
import { PizzaController } from './controllers/pizza.controller';
import { PizzaEntity } from './entities/pizza.entity';
import { PizzaResolver } from './resolvers/pizza.resolver';
import { PizzaService } from './services/pizza.service';

@Module({
  imports: [
    RedisCacheModule,
    TypeOrmModule.forFeature([PizzaEntity]),
    ErrorModule,
    PaginationModule,
  ],
  controllers: [PizzaController],
  providers: [PizzaService, PizzaResolver],
})
export class PizzaModule {}
