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
import { ToppingEntity } from '../entities/topping.entity';
import { ToppingService } from '../services/topping.service';
import { CreateToppingDto, UpdateToppingDto } from '../validation/dto';
import { PaginatedToppingsRo } from '../validation/ro';

@Controller('toppings')
@UseInterceptors(CacheInterceptor)
@ApiTags('Topping')
export class ToppingController {
  constructor(private readonly toppingService: ToppingService) {}

  @Get()
  @ApiOperation({ summary: 'Get all toppings' })
  getAll(
    @Query() pagination: PaginationArgsDto,
  ): Observable<PaginatedToppingsRo> {
    return this.toppingService.getAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single topping by `id`' })
  get(@Param('id') id: string): Observable<ToppingEntity> {
    return this.toppingService.get(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create single topping' })
  create(@Body() dto: CreateToppingDto): Observable<ToppingEntity> {
    return this.toppingService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<ToppingEntity> {
    return this.toppingService.delete(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateToppingDto,
  ): Observable<ToppingEntity> {
    return this.toppingService.update(id, dto);
  }
}
