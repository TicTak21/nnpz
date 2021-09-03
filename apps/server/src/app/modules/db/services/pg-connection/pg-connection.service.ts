import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { PizzaEntity } from '../../../pizza/entities/pizza.entity';
import { ToppingEntity } from '../../../topping/entities/topping.entity';

@Injectable()
export class PgConnectionService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const port = this.configService.get<number>('POSTGRES_PORT');
    const host = this.configService.get<string>('POSTGRES_HOST');
    const username = this.configService.get<string>('POSTGRES_USER');
    const password = this.configService.get<string>('POSTGRES_PASSWORD');
    const database = this.configService.get<string>('POSTGRES_DB');
    const env = this.configService.get<string>('NODE_ENV');

    const entities = [PizzaEntity, ToppingEntity];

    return {
      type: 'postgres',
      port,
      host,
      username,
      password,
      database,
      entities,
      synchronize: env === 'development',
      retryAttempts: 3,
      logging: true,
    };
  }
}
