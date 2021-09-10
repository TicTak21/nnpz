import {
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { PizzaEntity } from '../entities/pizza.entity';
import { PizzaService } from '../services/pizza.service';
import { CreatePizzaDto, UpdatePizzaDto } from '../validation/dto';
import { PaginatedPizzasRo } from '../validation/ro';

@Controller('pizzas')
@UseInterceptors(CacheInterceptor)
@ApiTags('Pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pizzas' })
  getAll(
    @Query() pagination?: PaginationArgsDto,
  ): Observable<PaginatedPizzasRo> {
    return this.pizzaService.getAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single pizza by `id`' })
  get(@Param('id') id: string): Observable<PizzaEntity> {
    return this.pizzaService.get(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create single pizza' })
  create(@Body() dto: CreatePizzaDto): Observable<PizzaEntity> {
    return this.pizzaService.create(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete single pizza by `id`' })
  delete(@Param('id') id: string): Observable<PizzaEntity> {
    return this.pizzaService.delete(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update single pizza by `id`' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePizzaDto,
  ): Observable<PizzaEntity> {
    return this.pizzaService.update(id, dto);
  }
}
