import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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
import { InsertResult, Repository } from 'typeorm';
import { ToppingEntity } from '../entities/topping.entity';
import { CreateToppingDto } from '../validation/dto/create-topping.dto';

@Injectable()
export class ToppingService {
  constructor(
    @InjectRepository(ToppingEntity)
    private readonly toppingRepo: Repository<ToppingEntity>,
  ) {}

  getAll(): Observable<ToppingEntity[]> {
    return from(this.toppingRepo.createQueryBuilder('toppings').getMany());
  }

  get(id: string): Observable<ToppingEntity> {
    return from(
      this.toppingRepo
        .createQueryBuilder('topping')
        .where('topping.id = :id', { id })
        .getOne(),
    ).pipe(
      mergeMap(entity => (entity ? of(entity) : EMPTY)),
      throwIfEmpty(
        () => new NotFoundException(`${ToppingEntity.name} not found: #${id}`),
      ),
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
        if (err.code === '23505')
          return throwError(() => new ConflictException());

        return throwError(() => new InternalServerErrorException());
      }),
    );
  }
}
