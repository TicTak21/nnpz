import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { ToppingEntity } from '../entities/topping.entity';
import { ToppingService } from '../services/topping.service';
import { CreateToppingDto, UpdateToppingDto } from '../validation/dto';
import { PaginatedToppingsRo } from '../validation/ro';

@Resolver((_of: ToppingEntity) => ToppingEntity)
export class ToppingResolver {
  constructor(private readonly toppingService: ToppingService) {}

  @Query(_returns => PaginatedToppingsRo)
  toppings(
    @Args('pagination', { nullable: true }) pagination?: PaginationArgsDto,
  ): Observable<PaginatedToppingsRo> {
    return this.toppingService.getAll(pagination);
  }

  @Query(_returns => ToppingEntity, { nullable: true })
  topping(@Args('id') id: string): Observable<ToppingEntity> {
    return this.toppingService.get(id);
  }

  @Mutation(_returns => ToppingEntity)
  createTopping(
    @Args('topping') dto: CreateToppingDto,
  ): Observable<ToppingEntity> {
    return this.toppingService.create(dto);
  }

  @Mutation(_returns => ToppingEntity)
  deleteTopping(@Args('id') id: string): Observable<ToppingEntity> {
    return this.toppingService.delete(id);
  }

  @Mutation(_returns => ToppingEntity)
  updateTopping(
    @Args('id') id: string,
    @Args('topping') dto: UpdateToppingDto,
  ): Observable<ToppingEntity> {
    return this.toppingService.update(id, dto);
  }
}
