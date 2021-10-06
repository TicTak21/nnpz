import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: '/graphql',
      autoSchemaFile: join(process.cwd(), 'apps/server/schema.gql'),
      debug: false,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      installSubscriptionHandlers: true,
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class GqlModule {}
