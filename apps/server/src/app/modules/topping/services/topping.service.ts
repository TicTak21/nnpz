import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ToppingEntity } from '../entities/topping.entity';

@Injectable()
export class ToppingService {
  getAll(): Observable<ToppingEntity[]> {
    return of([]);
  }

  get(id: string): Observable<ToppingEntity> {
    return of({ id, name: 'default' } as ToppingEntity);
  }
}
