import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserRo } from '../../../user/validation/ro';
import { AuthenticationService } from '../services/authentication.service';
import { LoginDto, RegisterDto } from '../validation/dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login into accout with existing credentials' })
  login(@Body() credentials: LoginDto): Observable<UserRo> {
    return this.authService.login(credentials);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout from account with id' })
  logout(@Param() id: string): Observable<UserRo> {
    return this.authService.logout(id);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register new account with given credentials' })
  register(@Body() credentials: RegisterDto): Observable<UserRo> {
    return this.authService.register(credentials);
  }
}
