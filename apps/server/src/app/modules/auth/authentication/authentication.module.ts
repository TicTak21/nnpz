import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CryptoService } from '../../../shared/services';
import { ErrorModule } from '../../error/error.module';
import { UserModule } from '../../user/user.module';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationResolver } from './resolvers/authentication.resolver';
import { AuthenticationService, JwtConnectionService } from './services';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useClass: JwtConnectionService,
    }),
    ErrorModule,
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver, CryptoService],
})
export class AuthenticationModule {}
