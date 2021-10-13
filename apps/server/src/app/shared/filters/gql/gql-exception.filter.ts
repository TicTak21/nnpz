import { Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { GqlArgumentsHost, GqlContextType } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';

@Catch()
export class GqlExceptionFilter implements ExceptionFilter {
  catch(exception: ApolloError, host: GqlArgumentsHost) {
    if (host.getType<GqlContextType>() !== 'graphql') return;

    const {
      path: { key, typename },
    } = host.getArgByIndex(3);
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      code: status,
      timestamp: new Date().toISOString(),
      typename,
      message: exception.message,
      path: key,
    };

    const filterName = this.constructor.name;

    Logger.error(`${typename}`, JSON.stringify(errorResponse), filterName);
  }
}
