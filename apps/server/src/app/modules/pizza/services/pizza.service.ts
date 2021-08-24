import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { PizzaEntity } from '../entities/pizza.entity';

@Injectable()
export class PizzaService {
  getAll(): Observable<PizzaEntity[]> {
    return of([]);
  }

  get(id: string): Observable<PizzaEntity> {
    return of({ id, name: 'default' } as PizzaEntity);
  }
}
