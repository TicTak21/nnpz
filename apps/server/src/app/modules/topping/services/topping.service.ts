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
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { ErrorHandler, errorHandlers } from '../../../shared/error';
import { ToppingEntity } from '../entities/topping.entity';
import { CreateToppingDto } from '../validation/dto/create-topping.dto';

@Injectable()
export class ToppingService {
  constructor(
    @InjectRepository(ToppingEntity)
    private readonly toppingRepo: Repository<ToppingEntity>,
  ) {}

  getAll(): Observable<ToppingEntity[]> {
    return from(this.toppingRepo.createQueryBuilder().getMany()).pipe(
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] || errorHandlers['500'];

        return throwError(errorHandler);
      }),
    );
  }

  get(id: string): Observable<ToppingEntity> {
    return from(
      this.toppingRepo
        .createQueryBuilder('topping')
        .where('topping.id = :id', { id })
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

  create(dto: CreateToppingDto): Observable<ToppingEntity> {
    return from(
      this.toppingRepo
        .createQueryBuilder()
        .insert()
        .into(ToppingEntity)
        .values([dto])
        .returning(['id', ...Object.keys(dto)])
        .execute(),
    ).pipe(
      mergeMap<InsertResult, Observable<ToppingEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] || errorHandlers['500'];

        return throwError(errorHandler);
      }),
    );
  }

  delete(id: string): Observable<ToppingEntity> {
    return from(
      this.toppingRepo
        .createQueryBuilder()
        .delete()
        .from(ToppingEntity)
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<DeleteResult, Observable<ToppingEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] || errorHandlers['500'];

        return throwError(errorHandler);
      }),
    );
  }
}
