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
import {
  PaginationService,
  TManyAndCount,
} from '../../../shared/services/pagination';
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { PizzaEntity } from '../entities/pizza.entity';
import { CreatePizzaDto, UpdatePizzaDto } from '../validation/dto';
import { PaginatedPizzasRo } from '../validation/ro';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(PizzaEntity)
    private readonly pizzaRepo: Repository<PizzaEntity>,
    private readonly paginationService: PaginationService,
  ) {}

  getAll({ page, take }: PaginationArgsDto): Observable<PaginatedPizzasRo> {
    const skip = this.paginationService.countSkip(page, take);

    return from(
      this.pizzaRepo
        .createQueryBuilder('pizza')
        .leftJoinAndSelect('pizza.toppings', 'toppings')
        .skip(skip)
        .take(take)
        .getManyAndCount(),
    ).pipe(
      mergeMap<TManyAndCount<PizzaEntity>, Observable<PaginatedPizzasRo>>(
        queryResult =>
          of(
            this.paginationService.paginate({
              queryResult,
              page,
              take,
              skip,
            }),
          ),
      ),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

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
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }

  create(dto: CreatePizzaDto): Observable<PizzaEntity> {
    const { toppings, ...pizza } = dto;

    return from(
      this.pizzaRepo
        .createQueryBuilder()
        .insert()
        .into(PizzaEntity)
        .values([pizza])
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<InsertResult, Observable<PizzaEntity>>(
        ({ identifiers, raw }) => {
          from(
            this.pizzaRepo
              .createQueryBuilder()
              .relation(PizzaEntity, 'toppings')
              .of(identifiers[0])
              .add(toppings),
          );

          return this.get(raw[0].id);
        },
      ),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }

  delete(id: string): Observable<PizzaEntity> {
    return from(
      this.pizzaRepo
        .createQueryBuilder('pizza')
        .delete()
        .from(PizzaEntity)
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<DeleteResult, Observable<PizzaEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }

  update(id: string, dto: UpdatePizzaDto): Observable<PizzaEntity> {
    const { toppings, ...pizza } = dto;

    return from(
      this.pizzaRepo
        .createQueryBuilder()
        .update(PizzaEntity)
        .set({ ...pizza })
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<UpdateResult, Observable<PizzaEntity>>(({ raw }) => {
        from(
          this.pizzaRepo
            .createQueryBuilder()
            .relation(PizzaEntity, 'toppings')
            .of(raw[0])
            .add(toppings),
        );

        return this.get(raw[0].id);
      }),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }
}
