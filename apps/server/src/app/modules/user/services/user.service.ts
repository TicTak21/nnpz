import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pbkdf2Sync, randomBytes } from 'crypto';
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
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../validation/dto';
import { PaginatedUsersRo } from '../validation/ro';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  getAll({ page, take }: PaginationArgsDto): Observable<PaginatedUsersRo> {
    const skip = (page - 1) * take;

    return from(
      this.userRepo
        .createQueryBuilder('user')
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

  get(id: string): Observable<UserEntity> {
    return from(
      this.userRepo
        .createQueryBuilder('user')
        .where('user.id = :id', { id })
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

  create(dto: CreateUserDto): Observable<UserEntity> {
    const { password } = dto;

    // === TODO: move to separate service/module ===
    const salt = randomBytes(16).toString('hex');

    const passwordHash = pbkdf2Sync(
      password,
      salt,
      1000,
      64,
      'sha512',
    ).toString('hex');
    // === TODO: ===

    return from(
      this.userRepo
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values([{ ...dto, password: passwordHash }])
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<InsertResult, Observable<UserEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }

  delete(id: string): Observable<UserEntity> {
    return from(
      this.userRepo
        .createQueryBuilder('user')
        .delete()
        .from(UserEntity)
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<DeleteResult, Observable<UserEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }

  update(id: string, dto: UpdateUserDto): Observable<UserEntity> {
    const { password } = dto;

    // === TODO: move to separate service/module ===
    const salt = randomBytes(16).toString('hex');

    const passwordHash = pbkdf2Sync(
      password,
      salt,
      1000,
      64,
      'sha512',
    ).toString('hex');
    // === TODO: ===

    return from(
      this.userRepo
        .createQueryBuilder()
        .update(UserEntity)
        .set({ ...dto, password: passwordHash })
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<UpdateResult, Observable<UserEntity>>(res => of(res.raw[0])),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];

        return throwError(errorHandler);
      }),
    );
  }
}
