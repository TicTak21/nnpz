import { ObjectType } from '@nestjs/graphql';
import { PizzaEntity } from '@nnpz/server/app/modules/pizza/entities/pizza.entity';
import { AbstractPaginatedList } from '@nnpz/server/app/shared/validation/ro';

@ObjectType()
export class PaginatedPizzasRo extends AbstractPaginatedList(PizzaEntity) {}
