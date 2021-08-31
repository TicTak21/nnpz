import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { GqlContextType } from '@nestjs/graphql';

@Catch()
export class GqlExceptionFilter<T extends HttpException = HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    if (host.getType<GqlContextType>() !== 'graphql') return null;

    const filterName = this.constructor.name;

    const secondArg = host.getArgByIndex(2);
    const thirdArg = host.getArgByIndex(3);

    const queryType = thirdArg.path.typename;

    const query = secondArg.req.body.query;
    const status = exception.getStatus ? exception.getStatus() : 404;

    const errorResponse = {
      code: status,
      timestamp: new Date().toISOString(),
      queryType,
      query,
      message: exception.message,
    };

    Logger.error(queryType, JSON.stringify(errorResponse, null, 2), filterName);
  }
}
