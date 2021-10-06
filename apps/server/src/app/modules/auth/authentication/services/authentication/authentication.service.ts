import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EUserRole } from '@nnpz/types';
import {
  catchError,
  forkJoin,
  from,
  Observable,
  of,
  switchMap,
  throwError,
  withLatestFrom,
} from 'rxjs';
import { ErrorHandler, errorHandlers } from '../../../../../shared/error';
import { CryptoService } from '../../../../../shared/services';
import { UserEntity } from '../../../../user/entities/user.entity';
import { UserService } from '../../../../user/services/user.service';
import { UserRo } from '../../../../user/validation/ro';
import { ITokenPayload } from '../../interfaces';
import { LoginDto, RegisterDto } from '../../validation/dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {}

  login({ email, password }: LoginDto): Observable<UserRo> {
    const userByEmail$ = this.userService.getByEmail(email);

    return userByEmail$.pipe(
      switchMap(user => this.cryptoService.compare(password, user.password)),
      withLatestFrom(userByEmail$),
      switchMap(([validPass, user]) =>
        validPass
          ? this.updateAccessToken(user)
          : throwError(() => ({ code: HttpStatus.BAD_REQUEST })),
      ),
      catchError(err => {
        const errorHandler: ErrorHandler =
          errorHandlers[err.code] ||
          errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];
        return throwError(errorHandler);
      }),
    );
  }

  logout(id: string): Observable<[UserRo, string]> {
    const user$ = this.removeAccessToken(id);
    const cookie$ = this.getLogoutCookie();

    return forkJoin([user$, cookie$]);
  }

  register({ email, password }: RegisterDto): Observable<UserRo> {
    const passwordHash$ = this.cryptoService.hash(password);

    return passwordHash$.pipe(
      switchMap(passwordHash =>
        this.userService.create({
          email,
          password: passwordHash,
          role: EUserRole.client,
        }),
      ),
      withLatestFrom(passwordHash$),
      switchMap(([user, passwordHash]) =>
        this.updateAccessToken({ ...user, password: passwordHash }),
      ),
    );
  }

  private updateAccessToken(user: UserEntity): Observable<UserRo> {
    const { id, role, email } = user;
    const payload: ITokenPayload = { id, role, email };

    return this.signAccessToken(payload).pipe(
      switchMap(accessToken =>
        this.userService.update(id, { ...user, accessToken }),
      ),
    );
  }

  private removeAccessToken(id: string): Observable<UserRo> {
    return this.userService.update(id, { accessToken: null });
  }

  private signAccessToken(payload: ITokenPayload): Observable<string> {
    return from(this.jwtService.signAsync(payload));
  }

  private getLogoutCookie(): Observable<string> {
    return of('Authentication=; HttpOnly; Path=/; Max-Age=0');
  }
}