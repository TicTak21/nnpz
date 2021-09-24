import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheService } from '../../shared/services/cache';
import { PaginationService } from '../../shared/services/pagination';
import { ToppingController } from './controllers/topping.controller';
import { ToppingEntity } from './entities/topping.entity';
import { ToppingResolver } from './resolvers/topping.resolver';
import { ToppingService } from './services/topping.service';

@Module({
  imports: [
    CacheModule.registerAsync({ useClass: RedisCacheService }),
    TypeOrmModule.forFeature([ToppingEntity]),
  ],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingResolver, PaginationService],
})
export class ToppingModule {}
