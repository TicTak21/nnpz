import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UserEntity } from '../../../user/entities/user.entity';
import { AuthenticationService } from '../services/authentication.service';
import { LoginDto, LogoutDto, RegisterDto } from '../validation/dto';

@Resolver((_of: AuthenticationService) => AuthenticationService)
export class AuthenticationResolver {
  constructor(private readonly authService: AuthenticationService) {}

  @Mutation(_returns => UserEntity)
  login(@Args('credentials') credentials: LoginDto): Observable<UserEntity> {
    return this.authService.login(credentials);
  }

  @Mutation(_returns => UserEntity)
  logout(@Args('credentials') credentials: LogoutDto): Observable<UserEntity> {
    return this.authService.logout(credentials);
  }

  @Mutation(_returns => UserEntity)
  register(
    @Args('credentials') credentials: RegisterDto,
  ): Observable<UserEntity> {
    return this.authService.register(credentials);
  }
}
