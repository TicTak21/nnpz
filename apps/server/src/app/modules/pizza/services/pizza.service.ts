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
import { PizzaEntity } from '../entities/pizza.entity';
import { CreatePizzaDto } from '../validation/dto/create-pizza.dto';
import { UpdatePizzaDto } from '../validation/dto/update-pizza.dto';

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
    const deletedEntity = this.get(id);

    return from(
      this.pizzaRepo
        .createQueryBuilder('pizza')
        .delete()
        .from(PizzaEntity)
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<DeleteResult, Observable<PizzaEntity>>(() => deletedEntity),
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
