import { ObjectType } from '@nestjs/graphql';
import { AbstractPaginatedList } from '../../../../shared/validation/ro';
import { UserEntity } from '../../entities/user.entity';

@ObjectType()
export class PaginatedUsersRo extends AbstractPaginatedList(UserEntity) {}
