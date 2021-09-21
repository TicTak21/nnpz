import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { UserEntity } from '../../../user/entities/user.entity';
import { LoginDto, RegisterDto } from '../validation/dto';

@Injectable()
export class AuthenticationService {
  login(credentials: LoginDto): Observable<UserEntity> {
    return of({} as UserEntity);
  }

  logout(id: string): Observable<UserEntity> {
    return of({} as UserEntity);
  }

  register(credentials: RegisterDto): Observable<UserEntity> {
    return of({} as UserEntity);
  }
}
