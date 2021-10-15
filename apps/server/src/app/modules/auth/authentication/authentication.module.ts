import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CryptoModule } from '../../crypto/crypto.module';
import { ErrorModule } from '../../error/error.module';
import { UserModule } from '../../user/user.module';
import { AuthenticationController } from './controllers/authentication.controller';
import { guards } from './guards';
import { AuthenticationResolver } from './resolvers/authentication.resolver';
import { AuthenticationService, JwtConnectionService } from './services';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useClass: JwtConnectionService,
    }),
    ErrorModule,
    CryptoModule,
  ],
  controllers: [AuthenticationController],
  providers: [...guards, AuthenticationService, AuthenticationResolver],
  exports: [...guards],
})
export class AuthenticationModule {}
