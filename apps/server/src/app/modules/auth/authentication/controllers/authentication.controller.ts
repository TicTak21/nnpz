import { Body, Controller, Param, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Observable, of, switchMap } from 'rxjs';
import { UserRo } from '../../../user/validation/ro';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { LoginDto, RegisterDto } from '../validation/dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login into accout with existing credentials' })
  login(
    @Body() credentials: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ): Observable<UserRo> {
    return this.authService.login(credentials).pipe(
      switchMap(([user, cookie]) => {
        res.setHeader('Set-Cookie', cookie);

        return of(user);
      }),
    );
  }

  @Post('logout/:id')
  @ApiOperation({ summary: 'Logout from account with id' })
  logout(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
  ): Observable<UserRo> {
    return this.authService.logout(id).pipe(
      switchMap(([user, cookie]) => {
        res.setHeader('Set-Cookie', cookie);

        return of(user);
      }),
    );
  }

  @Post('register')
  @ApiOperation({ summary: 'Register new account with given credentials' })
  register(
    @Body() credentials: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ): Observable<UserRo> {
    return this.authService.register(credentials).pipe(
      switchMap(([user, cookie]) => {
        res.setHeader('Set-Cookie', cookie);

        return of(user);
      }),
    );
  }
}
