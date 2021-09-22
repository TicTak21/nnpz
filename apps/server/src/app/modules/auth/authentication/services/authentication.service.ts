import { EUserRole } from '@nest-ng-pizza/types';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { HashService } from '../../../../shared/services/crypto/hash.service';
import { UserEntity } from '../../../user/entities/user.entity';
import { UserService } from '../../../user/services/user.service';
import { LoginDto, LogoutDto, RegisterDto } from '../validation/dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly hashService: HashService,
  ) {}

  login(credentials: LoginDto): Observable<UserEntity> {
    return of({} as UserEntity);
  }

  logout(credentials: LogoutDto): Observable<UserEntity> {
    return of({} as UserEntity);
  }

  register({ email, password }: RegisterDto): Observable<UserEntity> {
    const passwordHash = this.hashService.hash(password);

    return this.userService.create({
      email,
      password: passwordHash,
      role: EUserRole.client,
    });
  }
}
