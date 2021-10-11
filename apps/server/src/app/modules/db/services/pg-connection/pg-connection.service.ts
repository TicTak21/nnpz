import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class PgConnectionService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const url = this.configService.get<string>('POSTGRES_URL');

    return {
      type: 'postgres',
      url,
      synchronize: false,
      retryAttempts: 3,
      logging: true,
      autoLoadEntities: true,
      maxQueryExecutionTime: 1000,
    };
  }
}
