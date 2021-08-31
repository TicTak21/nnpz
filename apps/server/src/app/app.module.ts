import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { cwd } from 'process';
import { AppController } from './controllers/app.controller';
import { DbModule } from './modules/db/db.module';
import { GqlModule } from './modules/gql/gql.module';
import { PizzaModule } from './modules/pizza/pizza.module';
import { ToppingModule } from './modules/topping/topping.module';
import { GqlExceptionFilter } from './shared/filters/gql/gql-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${cwd()}/config/.env`,
      isGlobal: true,
    }),
    DbModule,
    GqlModule,
    PizzaModule,
    ToppingModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_FILTER, useClass: GqlExceptionFilter }],
})
export class AppModule {}
