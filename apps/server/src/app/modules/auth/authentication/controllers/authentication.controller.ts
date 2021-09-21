import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserEntity } from '../../../user/entities/user.entity';
import { AuthenticationService } from '../services/authentication.service';
import { LoginDto, LogoutDto, RegisterDto } from '../validation/dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login into accout with existing credentials' })
  login(@Body() credentials: LoginDto): Observable<UserEntity> {
    return this.authService.login(credentials);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout from account with credentials' })
  logout(@Body() credentials: LogoutDto): Observable<UserEntity> {
    return this.authService.logout(credentials);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register new account with given credentials' })
  register(@Body() credentials: RegisterDto): Observable<UserEntity> {
    return this.authService.register(credentials);
  }
}
