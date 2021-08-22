import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PizzaModule } from '../pizza/pizza.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [PizzaModule],
      installSubscriptionHandlers: true,
      path: '/graphql',
      context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: 'schema.gql',
      debug: false,
    }),
  ],
})
export class GqlModule {}
