import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { PizzaEntity } from '../../../pizza/entities/pizza.entity';
import { ToppingEntity } from '../../../topping/entities/topping.entity';

@Injectable()
export class PgConnectionService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const url = this.configService.get<string>('POSTGRES_URL');

    const entities = [PizzaEntity, ToppingEntity];

    return {
      type: 'postgres',
      url,
      entities,
      synchronize: false,
      retryAttempts: 3,
      logging: true,
    };
  }
}
