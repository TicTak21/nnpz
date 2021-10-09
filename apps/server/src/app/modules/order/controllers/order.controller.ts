import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { PaginationArgsDto } from '../../../shared/validation/dto';
import { OrderEntity } from '../entities/order.entity';
import { OrderService } from '../services/order.service';
import { CreateOrderDto, UpdateOrderDto } from '../validation/dto';
import { PaginatedOrdersRo } from '../validation/ro';

@Controller('order')
@ApiTags('Order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  getAll(
    @Query() pagination: PaginationArgsDto,
  ): Observable<PaginatedOrdersRo> {
    return this.orderService.getAll(pagination);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single order by `id`' })
  get(@Param('id') id: string): Observable<OrderEntity> {
    return this.orderService.get(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create single order' })
  create(@Body() dto: CreateOrderDto): Observable<OrderEntity> {
    return this.orderService.create(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete single order by `id`' })
  delete(@Param('id') id: string): Observable<OrderEntity> {
    return this.orderService.delete(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update single order by `id`' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateOrderDto,
  ): Observable<OrderEntity> {
    return this.orderService.update(id, dto);
  }
}
