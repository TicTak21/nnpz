import { ObjectType } from '@nestjs/graphql';
import { AbstractPaginatedList } from '../../../../shared/validation/ro';
import { UserEntity } from '../../entities/user.entity';
import { UserRo } from './user.ro';

@ObjectType()
export class PaginatedUsersRo extends AbstractPaginatedList<UserRo>(
  UserEntity,
) {}
