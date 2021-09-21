import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UserEntity } from '../../../user/entities/user.entity';
import { AuthenticationService } from '../services/authentication.service';
import { LoginDto, RegisterDto } from '../validation/dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login into accout with existing credentials' })
  login(@Body() credentials: LoginDto): Observable<UserEntity> {
    return this.authService.login(credentials);
  }

  @Post('logout/:id')
  @ApiOperation({ summary: 'Logout from existing account' })
  logout(@Param('id') id: string): Observable<UserEntity> {
    return this.authService.logout(id);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register new account with given credentials' })
  register(@Body() credentials: RegisterDto): Observable<UserEntity> {
    return this.authService.register(credentials);
  }
}
