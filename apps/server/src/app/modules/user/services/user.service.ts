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
import { HashService } from '../../../shared/services/crypto/hash.service';
import {
  PaginationService,
  TManyAndCount,
} from '../../../shared/services/pagination';
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../validation/dto';
import { PaginatedUsersRo } from '../validation/ro';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly hashService: HashService,
    private readonly paginationService: PaginationService,
  ) {}

  getAll({ page, take }: PaginationArgsDto): Observable<PaginatedUsersRo> {
    const skip = this.paginationService.countSkip(page, take);

    return from(
      this.userRepo
        .createQueryBuilder('user')
        .skip(skip)
        .take(take)
        .getManyAndCount(),
    ).pipe(
      mergeMap<TManyAndCount<UserEntity>, Observable<PaginatedUsersRo>>(
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

    const passwordHash = this.hashService.hash(password);

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

    const passwordHash = this.hashService.hash(password);

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
