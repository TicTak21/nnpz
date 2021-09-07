import { ArgumentsHost, Catch } from '@nestjs/common';
import {
  GqlContextType,
  GqlExceptionFilter as NestGqlExceptionFilter,
} from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';

@Catch()
export class GqlExceptionFilter implements NestGqlExceptionFilter {
  catch(exception: ApolloError, host: ArgumentsHost) {
    if (host.getType<GqlContextType>() !== 'graphql') return;
  }
}
