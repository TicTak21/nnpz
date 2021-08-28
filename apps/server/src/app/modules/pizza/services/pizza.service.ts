import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EMPTY, from, mergeMap, Observable, of, throwIfEmpty } from 'rxjs';
import { Repository } from 'typeorm';
import { PizzaEntity } from '../entities/pizza.entity';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(PizzaEntity)
    private readonly pizzaRepo: Repository<PizzaEntity>,
  ) {}

  getAll(): Observable<PizzaEntity[]> {
    return from(this.pizzaRepo.createQueryBuilder('pizzas').getMany());
  }

  get(id: string): Observable<PizzaEntity> {
    return from(
      this.pizzaRepo
        .createQueryBuilder('pizza')
        .where('pizza.id = :id', { id })
        .getOne(),
    ).pipe(
      mergeMap(entity => (entity ? of(entity) : EMPTY)),
      throwIfEmpty(
        () => new NotFoundException(`${PizzaEntity.name} not found: #${id}`),
      ),
    );
  }
}
