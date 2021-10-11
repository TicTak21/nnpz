import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { classToClass } from 'class-transformer';
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
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../validation/dto';
import { PaginatedUsersRo, UserRo } from '../validation/ro';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly paginationService: PaginationService,
  ) {}

  getAll({ page, take }: PaginationArgsDto): Observable<PaginatedUsersRo> {
    const skip = this.paginationService.countSkip(page, take);

    return from(
      this.userRepo
        .createQueryBuilder('user')
        .orderBy('user.createdAt')
        .skip(skip)
        .take(take)
        .getManyAndCount(),
    ).pipe(
      mergeMap<TManyAndCount<UserRo>, Observable<PaginatedUsersRo>>(
        queryResult => {
          const [entities, count] = queryResult;

          const hidratedEntities = entities.map(entity =>
            classToClass<UserRo>(entity),
          );

          return of(
            this.paginationService.paginate({
              queryResult: [hidratedEntities, count],
              page,
              take,
              skip,
            }),
          );
        },
      ),
      catchError(err => handleError(err)),
    );
  }

  getById(id: string): Observable<UserRo> {
    return from(
      this.userRepo
        .createQueryBuilder('user')
        .where('user.id = :id', { id })
        .getOne(),
    ).pipe(
      mergeMap(entity => (entity ? of(classToClass<UserRo>(entity)) : EMPTY)),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }

  getByEmail(email: string): Observable<UserEntity> {
    return from(
      this.userRepo
        .createQueryBuilder('user')
        .where('user.email = :email', { email })
        .getOne(),
    ).pipe(
      mergeMap(entity => (entity ? of(entity) : EMPTY)),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }

  create(dto: CreateUserDto): Observable<UserRo> {
    return from(
      this.userRepo
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values([dto])
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<InsertResult, Observable<UserRo>>(({ raw: [entity] }) =>
        of(classToClass<UserRo>(entity)),
      ),
      catchError(err => handleError(err)),
    );
  }

  delete(id: string): Observable<UserRo> {
    return from(
      this.userRepo
        .createQueryBuilder('user')
        .delete()
        .from(UserEntity)
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<DeleteResult, Observable<UserRo>>(({ raw: [entity] }) =>
        entity ? of(classToClass<UserRo>(entity)) : EMPTY,
      ),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }

  update(id: string, dto: UpdateUserDto): Observable<UserRo> {
    return from(
      this.userRepo
        .createQueryBuilder()
        .update<UpdateUserDto>(UserEntity)
        .set({ ...dto })
        .where('id = :id', { id })
        .returning('*')
        .execute(),
    ).pipe(
      mergeMap<UpdateResult, Observable<UserRo>>(({ raw: [entity] }) =>
        entity ? of(classToClass<UserRo>(entity)) : EMPTY,
      ),
      throwIfEmpty(() => ({ code: HttpStatus.NOT_FOUND })),
      catchError(err => handleError(err)),
    );
  }
}
