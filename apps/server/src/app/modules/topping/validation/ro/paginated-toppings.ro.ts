import { ObjectType } from '@nestjs/graphql';
import { AbstractPaginatedList } from '../../../../shared/validation/ro';
import { ToppingEntity } from '../../entities/topping.entity';

@ObjectType()
export class PaginatedToppingsRo extends AbstractPaginatedList(ToppingEntity) {}
