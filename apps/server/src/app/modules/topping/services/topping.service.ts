import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ToppingEntity } from '../entities/topping.entity';

@Injectable()
export class ToppingService {
  constructor(
    @InjectRepository(ToppingEntity)
    private readonly pizzaRepo: Repository<ToppingEntity>,
  ) {}

  getAll(): Observable<ToppingEntity[]> {
    return from(this.pizzaRepo.find());
  }

  get(id: string): Observable<ToppingEntity> {
    return from(this.pizzaRepo.findOne({ id }));
  }
}
