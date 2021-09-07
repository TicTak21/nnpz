import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { PizzaEntity } from '../entities/pizza.entity';
import { PizzaService } from '../services/pizza.service';
import { CreatePizzaDto } from '../validation/dto/create-pizza.dto';
import { UpdatePizzaDto } from '../validation/dto/update-pizza.dto';

@Resolver((_of: PizzaEntity) => PizzaEntity)
export class PizzaResolver {
  constructor(private readonly pizzaService: PizzaService) {}

  @Query(_returns => [PizzaEntity])
  pizzas(): Observable<PizzaEntity[]> {
    return this.pizzaService.getAll();
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
