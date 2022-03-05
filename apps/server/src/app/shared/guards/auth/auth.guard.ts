import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { IS_PUBLIC_KEY } from '@nnpz/server/app/modules/auth/authentication/decorators';
import { ETokenType } from '@nnpz/server/app/modules/auth/authentication/enums';
import { AuthenticationService } from '@nnpz/server/app/modules/auth/authentication/services';
import {
  AuthHeaderNotFoundException,
  AuthTypeBearerRequired,
} from '@nnpz/server/app/modules/error/exceptions';
import { Request } from 'express';
import { Observable, of, switchMap } from 'rxjs';

type TCtxHandler = (ctx: ExecutionContext) => Observable<boolean>;
type TCtxType = Partial<Record<GqlContextType, TCtxHandler>> & {
  default: TCtxHandler;
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authService: AuthenticationService,
  ) {}

  private readonly ctxTypeReducer: TCtxType = {
    http: (ctx: ExecutionContext) => this.handleHttp(ctx),
    graphql: (ctx: ExecutionContext) => this.handleGql(ctx),
    default: (ctx: ExecutionContext) => this.handleHttp(ctx),
  };

  canActivate(ctx: ExecutionContext): Observable<boolean> {
    const ctxType = ctx.getType<GqlContextType>();
    const ctxHandler: TCtxHandler =
      this.ctxTypeReducer[ctxType] || this.ctxTypeReducer['default'];

    return ctxHandler(ctx);
  }

  private handleHttp(ctx: ExecutionContext): Observable<boolean> {
    if (this.isPublic(ctx)) return of(true);

    const http = ctx.switchToHttp();
    const req = http.getRequest<Request>();

    const authHeader = req.headers.authorization;
    if (!authHeader) throw new AuthHeaderNotFoundException();

    const [type, token] = authHeader.split(' ');
    if (type !== ETokenType.Bearer) throw new AuthTypeBearerRequired();

    return this.validate(token);
  }

  private handleGql(ctx: ExecutionContext): Observable<boolean> {
    if (this.isPublic(ctx)) return of(true);

    const gql = GqlExecutionContext.create(ctx).getContext();
    const req = gql.req;

    const authHeader = req.headers.authorization;
    if (!authHeader) throw new AuthHeaderNotFoundException();

    const [type, token] = authHeader.split(' ');
    if (type !== ETokenType.Bearer) throw new AuthTypeBearerRequired();

    return this.validate(token);
  }

  private validate(token: string) {
    return this.authService.validateToken(token).pipe(
      switchMap(validationResult => {
        if (!validationResult)
          throw new UnauthorizedException(validationResult);

        return of(true);
      }),
    );
  }

  private isPublic(ctx: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);

    return isPublic;
  }
}
