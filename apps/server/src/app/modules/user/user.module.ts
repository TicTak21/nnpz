import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorModule } from '../error/error.module';
import { PaginationModule } from '../pagination/pagination.module';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './entities/user.entity';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ErrorModule,
    PaginationModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
