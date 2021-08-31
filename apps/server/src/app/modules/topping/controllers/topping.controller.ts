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
import { ToppingEntity } from '../entities/topping.entity';
import { ToppingService } from '../services/topping.service';
import { CreateToppingDto } from '../validation/dto/create-topping.dto';

@Controller('toppings')
@UseInterceptors(CacheInterceptor)
@ApiTags('Topping')
export class ToppingController {
  constructor(private readonly toppingService: ToppingService) {}

  @Get()
  @ApiOperation({ summary: 'Get all toppings' })
  getAll(): Observable<ToppingEntity[]> {
    return this.toppingService.getAll();
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
}
