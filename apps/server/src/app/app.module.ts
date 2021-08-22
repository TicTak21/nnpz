import { Module } from '@nestjs/common';
import { GqlModule } from './modules/gql/gql.module';
import { PizzaModule } from './modules/pizza/pizza.module';

@Module({
  imports: [PizzaModule, GqlModule],
})
export class AppModule {}
