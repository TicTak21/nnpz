import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { cwd } from 'process';
import { AppController } from './controllers/app.controller';
import { DbModule } from './modules/db/db.module';
import { GqlModule } from './modules/gql/gql.module';
import { PizzaModule } from './modules/pizza/pizza.module';
import { ToppingModule } from './modules/topping/topping.module';
import { UserModule } from './modules/user/user.module';
import { globalFilters } from './shared/filters';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${cwd()}/config/dev/.env`,
      isGlobal: true,
    }),
    ServeStaticModule.forRoot(),
    DbModule,
    GqlModule,
    PizzaModule,
    ToppingModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [...globalFilters],
})
export class AppModule {}
