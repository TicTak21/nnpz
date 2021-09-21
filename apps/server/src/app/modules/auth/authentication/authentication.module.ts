import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationResolver } from './resolvers/authentication.resolver';
import { AuthenticationService } from './services/authentication.service';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver],
})
export class AuthenticationModule {}
