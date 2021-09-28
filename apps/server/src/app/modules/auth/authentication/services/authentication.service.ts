import { EUserRole } from '@nest-ng-pizza/types';
import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  catchError,
  from,
  mergeMap,
  Observable,
  of,
  switchMap,
  throwError,
} from 'rxjs';
import { ErrorHandler, errorHandlers } from '../../../../shared/error';
import { CryptoService } from '../../../../shared/services/crypto/crypto.service';
import { UserEntity } from '../../../user/entities/user.entity';
import { UserService } from '../../../user/services/user.service';
import { UserRo } from '../../../user/validation/ro';
import { LoginDto, LogoutDto, RegisterDto } from '../validation/dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
  ) {}

  login({ email, password }: LoginDto): Observable<UserRo> {
    return this.userService.getByEmail(email).pipe(
      mergeMap(user =>
        this.cryptoService.compare(password, user.password).pipe(
          mergeMap(validPass =>
            validPass
              ? this.signUser(user)
              : throwError(() => ({ code: HttpStatus.BAD_REQUEST })),
          ),
          catchError(err => {
            const errorHandler: ErrorHandler =
              errorHandlers[err.code] ||
              errorHandlers[HttpStatus.INTERNAL_SERVER_ERROR];
            return throwError(errorHandler);
          }),
        ),
      ),
    );
  }

  logout(credentials: LogoutDto): Observable<UserRo> {
    return of({} as UserRo);
  }

  register({ email, password }: RegisterDto): Observable<UserRo> {
    return this.cryptoService.hash(password).pipe(
      switchMap(passwordHash =>
        this.userService.create({
          email,
          password: passwordHash,
          role: EUserRole.client,
        }),
      ),
    );
  }

  private signUser(user: UserEntity): Observable<UserRo> {
    const { id, role } = user;
    const payload = { id, role };

    return from(this.jwtService.signAsync(payload)).pipe(
      switchMap(accessToken =>
        this.userService.update(id, { ...user, accessToken }),
      ),
    );
  }
}
