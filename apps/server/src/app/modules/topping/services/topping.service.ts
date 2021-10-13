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
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { ErrorService } from '../../error/services/error.service';
import { PaginationService } from '../../pagination/services/pagination.service';
import { TManyAndCount } from '../../pagination/types';
import { ToppingEntity } from '../entities/topping.entity';
import { CreateToppingDto, UpdateToppingDto } from '../validation/dto';
import { PaginatedToppingsRo } from '../validation/ro';

@Injectable()
export class ToppingService {
  constructor(
    @InjectRepository(ToppingEntity)
    private readonly toppingRepo: Repository<ToppingEntity>,
    private readonly paginationService: PaginationService,
    private readonly errorService: ErrorService,
  ) {}

  getAll({ page, take }: PaginationArgsDto): Observable<PaginatedToppingsRo> {
    const skip = this.paginationService.countSkip(page, take);

    return from(
      this.toppingRepo
        .createQueryBuilder('topping')
        .orderBy('topping.createdAt')
        .skip(skip)
        .take(take)
        .getManyAndCount(),
    ).pipe(
      mergeMap<TManyAndCount<ToppingEntity>, Observable<PaginatedToppingsRo>>(
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
      catchError(err => this.errorService.handle(err)),
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
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => this.errorService.handle(err)),
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
      catchError(err => this.errorService.handle(err)),
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
      mergeMap<DeleteResult, Observable<ToppingEntity>>(({ raw: [entity] }) =>
        entity ? of(entity) : EMPTY,
      ),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => this.errorService.handle(err)),
    );
  }

  update(id: string, dto: UpdateToppingDto): Observable<ToppingEntity> {
    return from(
      this.toppingRepo
        .createQueryBuilder()
        .update<UpdateToppingDto>(ToppingEntity)
        .set({ ...dto })
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<UpdateResult, Observable<ToppingEntity>>(({ raw: [entity] }) =>
        entity ? of(entity) : EMPTY,
      ),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => this.errorService.handle(err)),
    );
  }
}
