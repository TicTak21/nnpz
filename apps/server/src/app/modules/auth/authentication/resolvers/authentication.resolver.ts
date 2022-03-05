import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserEntity } from '@nnpz/server/app/modules/user/entities/user.entity';
import { UserRo } from '@nnpz/server/app/modules/user/validation/ro';
import { Observable, of, switchMap } from 'rxjs';
import { Public } from '../decorators';
import { GqlContext } from '../interfaces';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { LoginDto, RegisterDto } from '../validation/dto';

@Resolver((_of: AuthenticationService) => AuthenticationService)
export class AuthenticationResolver {
  constructor(private readonly authService: AuthenticationService) {}

  @Mutation(_returns => UserEntity)
  @Public()
  login(
    @Args('credentials') credentials: LoginDto,
    @Context() ctx?: GqlContext,
  ): Observable<UserRo> {
    return this.authService.login(credentials).pipe(
      switchMap(([user, cookie]) => {
        ctx.res.setHeader('Set-Cookie', cookie);

        return of(user);
      }),
    );
  }

  @Mutation(_returns => UserEntity)
  logout(
    @Args('id') id: string,
    @Context() ctx?: GqlContext,
  ): Observable<UserRo> {
    return this.authService.logout(id).pipe(
      switchMap(([user, cookie]) => {
        ctx.res.setHeader('Set-Cookie', cookie);

        return of(user);
      }),
    );
  }

  @Public()
  @Mutation(_returns => UserEntity)
  register(
    @Args('credentials') credentials: RegisterDto,
    @Context() ctx?: GqlContext,
  ): Observable<UserRo> {
    return this.authService.register(credentials).pipe(
      switchMap(([user, cookie]) => {
        ctx.res.setHeader('Set-Cookie', cookie);

        return of(user);
      }),
    );
  }
}
