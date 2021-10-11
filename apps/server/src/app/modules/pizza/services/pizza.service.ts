import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  catchError,
  EMPTY,
  from,
  mergeMap,
  Observable,
  of,
  throwIfEmpty,
} from 'rxjs';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { handleError } from '../../../shared/error';
import { PaginationService, TManyAndCount } from '../../../shared/services';
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
        .orderBy('pizza.createdAt')
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
      catchError(err => handleError(err)),
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
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
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
      catchError(err => handleError(err)),
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
      mergeMap<DeleteResult, Observable<PizzaEntity>>(({ raw: [entity] }) =>
        entity ? of(entity) : EMPTY,
      ),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }

  update(id: string, dto: UpdatePizzaDto): Observable<PizzaEntity> {
    const { toppings, ...pizza } = dto;

    return from(
      this.pizzaRepo
        .createQueryBuilder()
        .update<UpdatePizzaDto>(PizzaEntity)
        .set({ ...pizza })
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<UpdateResult, Observable<PizzaEntity>>(({ raw: [entity] }) => {
        from(
          this.pizzaRepo
            .createQueryBuilder()
            .relation(PizzaEntity, 'toppings')
            .of(entity)
            .add(toppings),
        );

        return this.get(entity.id);
      }),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }
}
