import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UserEntity } from '../../../user/entities/user.entity';
import { LoginDto, LogoutDto, RegisterDto } from '../validation/dto';

@Injectable()
export class AuthenticationService {
  login(credentials: LoginDto): Observable<UserEntity> {
    return of({} as UserEntity);
  }

  logout(credentials: LogoutDto): Observable<UserEntity> {
    return of({} as UserEntity);
  }

  register(credentials: RegisterDto): Observable<UserEntity> {
    return of({} as UserEntity);
  }
}
