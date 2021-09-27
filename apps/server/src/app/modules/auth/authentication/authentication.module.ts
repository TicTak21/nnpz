import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CryptoService } from '../../../shared/services/crypto/crypto.service';
import { UserModule } from '../../user/user.module';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationResolver } from './resolvers/authentication.resolver';
import { AuthenticationService } from './services/authentication.service';
import { JwtConnectionService } from './services/jwt-connection.service';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useClass: JwtConnectionService,
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver, CryptoService],
})
export class AuthenticationModule {}
