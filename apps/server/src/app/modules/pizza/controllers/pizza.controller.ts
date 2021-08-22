import { Controller, Get, Param } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { PizzaEntity } from '../entities/pizza.entity';
import { PizzaService } from '../services/pizza.service';

@Controller('pizza')
@ApiTags('Pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  @ApiProperty({ description: 'Get all pizzas' })
  getAll(): Observable<PizzaEntity[]> {
    return this.pizzaService.getAll();
  }

  @Get(':id')
  @ApiProperty({ description: 'Get a single pizza by `id`' })
  get(@Param('id') id: string): Observable<PizzaEntity> {
    return this.pizzaService.get(id);
  }
}
