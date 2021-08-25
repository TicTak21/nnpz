import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { PizzaEntity } from '../entities/pizza.entity';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(PizzaEntity)
    private readonly pizzaRepo: Repository<PizzaEntity>,
  ) {}

  getAll(): Observable<PizzaEntity[]> {
    return from(this.pizzaRepo.find());
  }

  get(id: string): Observable<PizzaEntity> {
    return from(this.pizzaRepo.findOne({ id }));
  }
}
