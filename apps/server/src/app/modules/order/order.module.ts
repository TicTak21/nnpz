import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorModule } from '../error/error.module';
import { PaginationModule } from '../pagination/pagination.module';
import { OrderController } from './controllers/order.controller';
import { OrderEntity } from './entities/order.entity';
import { OrderResolver } from './resolvers/order.resolver';
import { OrderService } from './services/order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity]),
    ErrorModule,
    PaginationModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderResolver],
})
export class OrderModule {}
