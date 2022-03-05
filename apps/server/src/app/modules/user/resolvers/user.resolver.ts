import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginationArgsDto } from '@nnpz/server/app/shared/validation/dto';
import { Observable } from 'rxjs';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '../validation/dto';
import { PaginatedUsersRo, UserRo } from '../validation/ro';

@Resolver((_of: UserEntity) => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(_returns => PaginatedUsersRo)
  users(
    @Args('pagination', { nullable: true }) pagination?: PaginationArgsDto,
  ): Observable<PaginatedUsersRo> {
    return this.userService.getAll(pagination);
  }

  @Query(_returns => UserEntity, { nullable: true })
  user(@Args('id') id: string): Observable<UserRo> {
    return this.userService.getById(id);
  }

  @Mutation(_type => UserEntity)
  createUser(@Args('user') dto: CreateUserDto): Observable<UserRo> {
    return this.userService.create(dto);
  }

  @Mutation(_type => UserEntity)
  deleteUser(@Args('id') id: string): Observable<UserRo> {
    return this.userService.delete(id);
  }

  @Mutation(_type => UserEntity)
  updateUser(
    @Args('id') id: string,
    @Args('user') dto: UpdateUserDto,
  ): Observable<UserRo> {
    return this.userService.update(id, dto);
  }
}
