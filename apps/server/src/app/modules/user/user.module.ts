import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheService } from '../../shared/services/cache';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './entities/user.entity';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';

@Module({
  imports: [
    CacheModule.registerAsync({ useClass: RedisCacheService }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
