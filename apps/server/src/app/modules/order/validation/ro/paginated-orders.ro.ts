import { ObjectType } from '@nestjs/graphql';
import { AbstractPaginatedList } from '../../../../shared/validation/ro';
import { OrderEntity } from '../../entities/order.entity';

@ObjectType()
export class PaginatedOrdersRo extends AbstractPaginatedList(OrderEntity) {}
