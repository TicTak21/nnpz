import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheService } from '../../shared/services';
import { ErrorModule } from '../error/error.module';
import { PaginationModule } from '../pagination/pagination.module';
import { ToppingController } from './controllers/topping.controller';
import { ToppingEntity } from './entities/topping.entity';
import { ToppingResolver } from './resolvers/topping.resolver';
import { ToppingService } from './services/topping.service';

@Module({
  imports: [
    CacheModule.registerAsync({ useClass: RedisCacheService }),
    TypeOrmModule.forFeature([ToppingEntity]),
    ErrorModule,
    PaginationModule,
  ],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingResolver],
})
export class ToppingModule {}
