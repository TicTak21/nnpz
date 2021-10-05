import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UserEntity } from '../../../user/entities/user.entity';
import { UserRo } from '../../../user/validation/ro';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { LoginDto, RegisterDto } from '../validation/dto';

@Resolver((_of: AuthenticationService) => AuthenticationService)
export class AuthenticationResolver {
  constructor(private readonly authService: AuthenticationService) {}

  @Mutation(_returns => UserEntity)
  login(@Args('credentials') credentials: LoginDto): Observable<UserRo> {
    return this.authService.login(credentials);
  }

  @Mutation(_returns => UserEntity)
  logout(@Args('id') id: string): Observable<UserRo> {
    return this.authService.logout(id);
  }

  @Mutation(_returns => UserEntity)
  register(@Args('credentials') credentials: RegisterDto): Observable<UserRo> {
    return this.authService.register(credentials);
  }
}
