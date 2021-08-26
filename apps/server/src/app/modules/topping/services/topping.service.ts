import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EMPTY, from, mergeMap, Observable, of, throwIfEmpty } from 'rxjs';
import { Repository } from 'typeorm';
import { ToppingEntity } from '../entities/topping.entity';

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
      this.toppingRepo.createQueryBuilder('topping').where('topping.id = :id', { id }).getOne(),
    ).pipe(
      mergeMap(entity => (entity ? of(entity) : EMPTY)),
      throwIfEmpty(() => new NotFoundException(`${ToppingEntity.name} not found: #${id}`)),
    );
  }
}
