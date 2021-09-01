import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter<T extends HttpException = HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    if (host.getType() !== 'http') return null;

    const filterName = this.constructor.name;

    const ctx: HttpArgumentsHost = host.switchToHttp();
    const { url, method }: Request = ctx.getRequest<Request>();
    const res: Response = ctx.getResponse<Response>();
    const status = exception.getStatus ? exception.getStatus() : 404;

    const errorResponse = {
      code: status,
      timestamp: new Date().toISOString(),
      path: url,
      method: method,
      message: exception.message,
    };

    Logger.error(`${method} ${url}`, JSON.stringify(errorResponse), filterName);

    res.status(status).json(errorResponse);
  }
}
