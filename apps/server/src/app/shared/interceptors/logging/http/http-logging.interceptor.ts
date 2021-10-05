import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { GqlContextType } from '@nestjs/graphql';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    if (ctx.getType<GqlContextType>() !== 'http') return next.handle();

    const { url, method }: Request = ctx.switchToHttp().getRequest();

    const log = `${method}: ${url}`;
    const logCtx = ctx.getClass().name;

    return next.handle().pipe(tap(() => Logger.log(log, logCtx)));
  }
}
