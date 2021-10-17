import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlContextType } from '@nestjs/graphql';
import { Request } from 'express';
import { Observable, of, switchMap } from 'rxjs';
import { IS_PUBLIC_KEY } from '../../../modules/auth/authentication/decorators';
import { ETokenType } from '../../../modules/auth/authentication/enums';
import { AuthenticationService } from '../../../modules/auth/authentication/services';
import {
  AuthHeaderNotFoundException,
  AuthTypeBearerRequired,
} from '../../../modules/error/exceptions';

@Injectable()
export class HttpAuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(ctx: ExecutionContext): Observable<boolean> {
    if (ctx.getType<GqlContextType>() !== 'http') return;

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);

    if (isPublic) return of(true);

    const http = ctx.switchToHttp();
    const req = http.getRequest<Request>();
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new AuthHeaderNotFoundException();

    const [type, token] = authHeader.split(' ');
    if (type !== ETokenType.Bearer) throw new AuthTypeBearerRequired();

    return this.authService.validateToken(token).pipe(
      switchMap(validationResult => {
        if (!validationResult)
          throw new UnauthorizedException(validationResult);

        return of(true);
      }),
    );
  }
}
