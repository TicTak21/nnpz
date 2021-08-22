import { Module } from '@nestjs/common';
import { PizzaController } from './controllers/pizza.controller';
import { PizzaResolver } from './resolvers/pizza.resolver';
import { PizzaService } from './services/pizza.service';

@Module({
  controllers: [PizzaController],
  providers: [PizzaService, PizzaResolver],
})
export class PizzaModule {}
