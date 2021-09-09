import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { PaginationDto } from '../../../shared/validation/dto';
import { PizzaEntity } from '../entities/pizza.entity';
import { PizzaService } from '../services/pizza.service';
import { CreatePizzaDto, UpdatePizzaDto } from '../validation/dto';
import { PaginatedPizzasRo } from '../validation/ro';

@Resolver((_of: PizzaEntity) => PizzaEntity)
export class PizzaResolver {
  constructor(private readonly pizzaService: PizzaService) {}

  @Query(_returns => PaginatedPizzasRo)
  pizzas(
    @Args('pagination', { nullable: true }) pagination?: PaginationDto,
  ): Observable<PaginatedPizzasRo> {
    return this.pizzaService.getAll(pagination);
  }

  @Query(_returns => PizzaEntity, { nullable: true })
  pizza(@Args('id') id: string): Observable<PizzaEntity> {
    return this.pizzaService.get(id);
  }

  @Mutation(_type => PizzaEntity)
  createPizza(@Args('pizza') dto: CreatePizzaDto): Observable<PizzaEntity> {
    return this.pizzaService.create(dto);
  }

  @Mutation(_type => PizzaEntity)
  deletePizza(@Args('id') id: string): Observable<PizzaEntity> {
    return this.pizzaService.delete(id);
  }

  @Mutation(_type => PizzaEntity)
  updatePizza(
    @Args('id') id: string,
    @Args('pizza') dto: UpdatePizzaDto,
  ): Observable<PizzaEntity> {
    return this.pizzaService.update(id, dto);
  }
}
