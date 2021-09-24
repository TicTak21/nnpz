import { Module } from '@nestjs/common';
import { CryptoService } from '../../../shared/services/crypto/crypto.service';
import { UserModule } from '../../user/user.module';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationResolver } from './resolvers/authentication.resolver';
import { AuthenticationService } from './services/authentication.service';

@Module({
  imports: [UserModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver, CryptoService],
})
export class AuthenticationModule {}
