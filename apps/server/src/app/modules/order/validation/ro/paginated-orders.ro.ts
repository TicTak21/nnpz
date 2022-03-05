import { ObjectType } from '@nestjs/graphql';
import { OrderEntity } from '@nnpz/server/app/modules/order/entities/order.entity';
import { AbstractPaginatedList } from '@nnpz/server/app/shared/validation/ro';

@ObjectType()
export class PaginatedOrdersRo extends AbstractPaginatedList(OrderEntity) {}
