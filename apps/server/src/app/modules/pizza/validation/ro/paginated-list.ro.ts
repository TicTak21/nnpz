import { ObjectType } from '@nestjs/graphql';
import { AbstractPaginatedList } from '../../../../shared/validation/ro';
import { PizzaEntity } from '../../entities/pizza.entity';

@ObjectType()
export class PaginatedListRo extends AbstractPaginatedList(PizzaEntity) {}
