import { Module } from '@nestjs/common';
import { HashService } from '../../../shared/services/crypto/hash.service';
import { UserModule } from '../../user/user.module';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationResolver } from './resolvers/authentication.resolver';
import { AuthenticationService } from './services/authentication.service';

@Module({
  imports: [UserModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver, HashService],
})
export class AuthenticationModule {}
