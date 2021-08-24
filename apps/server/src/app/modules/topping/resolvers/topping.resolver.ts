import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { ToppingEntity } from '../entities/topping.entity';
import { ToppingService } from '../services/topping.service';

@Resolver((_of: ToppingEntity) => ToppingEntity)
export class ToppingResolver {
  constructor(private readonly toppingService: ToppingService) {}

  @Query(_returns => [ToppingEntity])
  toppings(): Observable<ToppingEntity[]> {
    return this.toppingService.getAll();
  }

  @Query(_returns => ToppingEntity, { nullable: true })
  topping(@Args('id') id: string): Observable<ToppingEntity> {
    return this.toppingService.get(id);
  }
}
