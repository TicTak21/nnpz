import { ObjectType } from '@nestjs/graphql';
import { ToppingEntity } from '@nnpz/server/app/modules/topping/entities/topping.entity';
import { AbstractPaginatedList } from '@nnpz/server/app/shared/validation/ro';

@ObjectType()
export class PaginatedToppingsRo extends AbstractPaginatedList(ToppingEntity) {}
