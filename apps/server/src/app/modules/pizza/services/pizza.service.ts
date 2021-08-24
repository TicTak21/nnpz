import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ToppingEntity } from '../../topping/entities/topping.entity';
import { PizzaEntity } from '../entities/pizza.entity';

@Injectable()
export class PizzaService {
  getAll(): Observable<PizzaEntity[]> {
    return of([]);
  }

  get(id: string): Observable<PizzaEntity> {
    return of({
      id,
      name: 'default',
      toppings: [
        { name: 'olives', price: 2 } as ToppingEntity,
        { name: 'bacon', price: 8 } as ToppingEntity,
      ],
    } as PizzaEntity);
  }
}
