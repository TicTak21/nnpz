import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationService } from '../../shared/services';
import { OrderController } from './controllers/order.controller';
import { OrderEntity } from './entities/order.entity';
import { OrderResolver } from './resolvers/order.resolver';
import { OrderService } from './services/order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  controllers: [OrderController],
  providers: [OrderService, OrderResolver, PaginationService],
})
export class OrderModule {}
