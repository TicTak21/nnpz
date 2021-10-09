import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { OrderEntity } from '../entities/order.entity';
import { OrderService } from '../services/order.service';
import { CreateOrderDto, UpdateOrderDto } from '../validation/dto';
import { PaginatedOrdersRo } from '../validation/ro';

@Resolver((_of: OrderEntity) => OrderEntity)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(_returns => PaginatedOrdersRo)
  orders(
    @Args('pagination', { nullable: true }) pagination?: PaginationArgsDto,
  ): Observable<PaginatedOrdersRo> {
    return this.orderService.getAll(pagination);
  }

  @Query(_returns => OrderEntity, { nullable: true })
  order(@Args('id') id: string): Observable<OrderEntity> {
    return this.orderService.get(id);
  }

  @Mutation(_returns => OrderEntity)
  createOrder(@Args('order') dto: CreateOrderDto): Observable<OrderEntity> {
    return this.orderService.create(dto);
  }

  @Mutation(_returns => OrderEntity)
  deleteOrder(@Args('id') id: string): Observable<OrderEntity> {
    return this.orderService.delete(id);
  }

  @Mutation(_returns => OrderEntity)
  updateOrder(
    @Args('id') id: string,
    @Args('order') dto: UpdateOrderDto,
  ): Observable<OrderEntity> {
    return this.orderService.update(id, dto);
  }
}
