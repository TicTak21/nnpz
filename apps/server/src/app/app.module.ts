import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { cwd } from 'process';
import { AppController } from './controllers/app.controller';
import { GqlModule } from './modules/gql/gql.module';
import { PizzaModule } from './modules/pizza/pizza.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${cwd()}/config/.env`, isGlobal: true }),
    PizzaModule,
    GqlModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
