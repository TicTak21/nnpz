import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of, switchMap } from 'rxjs';
import { ErrorService } from '../../../../error/services/error.service';
import { AuthenticationService } from '../../services';

@Injectable()
export class HttpAuthGuard implements CanActivate {
  constructor(
    private readonly errorService: ErrorService,
    private readonly authService: AuthenticationService,
  ) {}

  canActivate(ctx: ExecutionContext): Observable<boolean> {
    if (ctx.getType() !== 'http') return;

    const http = ctx.switchToHttp();
    const req = http.getRequest<Request>();
    const authHeader = req.headers.authorization;

    console.log(req.headers);

    if (!authHeader) {
      throw new BadRequestException('Authorization header not found.');
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer') {
      throw new BadRequestException(
        `Authentication type 'Bearer' required. Found '${type}'`,
      );
    }

    return this.authService.validateToken(token).pipe(
      switchMap(validationResult => {
        if (!validationResult)
          throw new UnauthorizedException(validationResult);

        return of(true);
      }),
    );
  }
}
