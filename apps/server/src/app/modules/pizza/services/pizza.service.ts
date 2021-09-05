import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  catchError,
  EMPTY,
  from,
  mergeMap,
  Observable,
  of,
  throwError,
  throwIfEmpty,
} from 'rxjs';
import { Repository } from 'typeorm';
import { ErrorHandler, errorHandlers } from '../../../shared/error';
import { PizzaEntity } from '../entities/pizza.entity';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(PizzaEntity)
    private readonly pizzaRepo: Repository<PizzaEntity>,
  ) {}

  getAll(): Observable<PizzaEntity[]> {
    return from(
      this.pizzaRepo
        .createQueryBuilder('pizza')
        .leftJoinAndSelect('pizza.toppings', 'toppings')
        .getMany(),
    ).pipe(
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] || errorHandlers['500'];

        return throwError(errorHandler);
      }),
    );
  }

  get(id: string): Observable<PizzaEntity> {
    return from(
      this.pizzaRepo
        .createQueryBuilder('pizza')
        .leftJoinAndSelect('pizza.toppings', 'toppings')
        .where('pizza.id = :id', { id })
        .getOne(),
    ).pipe(
      mergeMap(entity => (entity ? of(entity) : EMPTY)),
      throwIfEmpty(() => ({ code: '404' })),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] || errorHandlers['500'];

        return throwError(errorHandler);
      }),
    );
  }
}
