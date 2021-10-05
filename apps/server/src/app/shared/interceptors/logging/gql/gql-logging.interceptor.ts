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
export class GqlLoggingInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    if (ctx.getType<GqlContextType>() !== 'graphql') return next.handle();

    const {
      path: { key, typename },
    } = ctx.getArgByIndex(3);

    const log = `${typename}: ${key}`;
    const logCtx = ctx.getClass().name;

    return next.handle().pipe(tap(() => Logger.log(log, logCtx)));
  }
}
