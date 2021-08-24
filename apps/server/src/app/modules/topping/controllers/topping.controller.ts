import { CacheInterceptor, Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { ToppingEntity } from '../entities/topping.entity';
import { ToppingService } from '../services/topping.service';

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
}
