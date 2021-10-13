import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheModule } from '../cache/redis/redis-cache.module';
import { ErrorModule } from '../error/error.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ToppingController } from './controllers/topping.controller';
import { ToppingEntity } from './entities/topping.entity';
import { ToppingResolver } from './resolvers/topping.resolver';
import { ToppingService } from './services/topping.service';

@Module({
  imports: [
    RedisCacheModule,
    TypeOrmModule.forFeature([ToppingEntity]),
    ErrorModule,
    PaginationModule,
  ],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingResolver],
})
export class ToppingModule {}
