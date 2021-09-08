import { HttpStatus, Injectable } from '@nestjs/common';
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
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { ErrorHandler, errorHandlers } from '../../../shared/error';
import { PaginationDto } from '../../../shared/validation/dto';
import { ToppingEntity } from '../entities/topping.entity';
import { CreateToppingDto, UpdateToppingDto } from '../validation/dto';
import { PaginatedListRo } from '../validation/ro/paginated-list.ro';

@Injectable()
export class ToppingService {
  constructor(
    @InjectRepository(ToppingEntity)
    private readonly toppingRepo: Repository<ToppingEntity>,
  ) {}

  getAll({ page, take }: PaginationDto): Observable<PaginatedListRo> {
    const skip = (page - 1) * take;

    return from(
      this.toppingRepo
        .createQueryBuilder()
        .skip(skip)
        .take(take)
        .getManyAndCount(),
    ).pipe(
      mergeMap(([entities, count]) => {
        return of({
          total: count,
          perPage: take,
          currentPage: page,
          lastPage: Math.ceil(count / take),
          from: skip,
          to: skip + entities.length,
          data: entities,
        });
      }),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

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
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

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
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<InsertResult, Observable<ToppingEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

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
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }

  update(id: string, dto: UpdateToppingDto): Observable<ToppingEntity> {
    return from(
      this.toppingRepo
        .createQueryBuilder()
        .update(ToppingEntity)
        .set({ ...dto })
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<UpdateResult, Observable<ToppingEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }
}
