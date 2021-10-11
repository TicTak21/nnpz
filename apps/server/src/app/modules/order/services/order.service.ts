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
import { OrderEntity } from '../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../validation/dto';
import { PaginatedOrdersRo } from '../validation/ro';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
    private readonly paginationService: PaginationService,
  ) {}

  getAll({ page, take }: PaginationArgsDto): Observable<PaginatedOrdersRo> {
    const skip = this.paginationService.countSkip(page, take);

    return from(
      this.orderRepo
        .createQueryBuilder('order')
        .orderBy('order.createdAt')
        .skip(skip)
        .take(take)
        .getManyAndCount(),
    ).pipe(
      mergeMap<TManyAndCount<OrderEntity>, Observable<PaginatedOrdersRo>>(
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

  get(id: string): Observable<OrderEntity> {
    return from(
      this.orderRepo
        .createQueryBuilder('order')
        .where('order.id = :id', { id })
        .getOne(),
    ).pipe(
      mergeMap(entity => (entity ? of(entity) : EMPTY)),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }

  create(dto: CreateOrderDto): Observable<OrderEntity> {
    return from(
      this.orderRepo
        .createQueryBuilder()
        .insert()
        .into(OrderEntity)
        .values([dto])
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<InsertResult, Observable<OrderEntity>>(res => of(res.raw[0])),
      catchError(err => handleError(err)),
    );
  }

  delete(id: string): Observable<OrderEntity> {
    return from(
      this.orderRepo
        .createQueryBuilder()
        .delete()
        .from(OrderEntity)
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<DeleteResult, Observable<OrderEntity>>(({ raw: [entity] }) =>
        entity ? of(entity) : EMPTY,
      ),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }

  update(id: string, dto: UpdateOrderDto): Observable<OrderEntity> {
    return from(
      this.orderRepo
        .createQueryBuilder()
        .update<UpdateOrderDto>(OrderEntity)
        .set({ ...dto })
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<UpdateResult, Observable<OrderEntity>>(({ raw: [entity] }) =>
        entity ? of(entity) : EMPTY,
      ),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }
}
