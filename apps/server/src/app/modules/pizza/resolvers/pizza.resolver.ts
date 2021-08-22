import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { PizzaEntity } from '../entities/pizza.entity';
import { PizzaService } from '../services/pizza.service';

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
}
