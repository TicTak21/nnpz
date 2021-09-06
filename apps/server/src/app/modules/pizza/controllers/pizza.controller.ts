import {
  Body,
  CacheInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { PizzaEntity } from '../entities/pizza.entity';
import { PizzaService } from '../services/pizza.service';
import { CreatePizzaDto } from '../validation/dto/create-pizza.dto';

@Controller('pizzas')
@UseInterceptors(CacheInterceptor)
@ApiTags('Pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pizzas' })
  getAll(): Observable<PizzaEntity[]> {
    return this.pizzaService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single pizza by `id`' })
  get(@Param('id') id: string): Observable<PizzaEntity> {
    return this.pizzaService.get(id);
  }

  @Post()
  create(@Body() dto: CreatePizzaDto): Observable<PizzaEntity> {
    return this.pizzaService.create(dto);
  }
}
