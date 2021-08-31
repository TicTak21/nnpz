import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { cwd } from 'process';
import { AppController } from './controllers/app.controller';
import { DbModule } from './modules/db/db.module';
import { GqlModule } from './modules/gql/gql.module';
import { PizzaModule } from './modules/pizza/pizza.module';
import { ToppingModule } from './modules/topping/topping.module';
import { globalFilters } from './shared/filters';

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
  providers: [...globalFilters],
})
export class AppModule {}
