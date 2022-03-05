import { ObjectType } from '@nestjs/graphql';
import { UserEntity } from '@nnpz/server/app/modules/user/entities/user.entity';
import { AbstractPaginatedList } from '@nnpz/server/app/shared/validation/ro';
import { UserRo } from './user.ro';

@ObjectType()
export class PaginatedUsersRo extends AbstractPaginatedList<UserRo>(
  UserEntity,
) {}
