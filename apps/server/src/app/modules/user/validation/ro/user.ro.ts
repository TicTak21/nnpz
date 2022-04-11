import { InputType, OmitType } from '@nestjs/graphql';
import { UserEntity } from '../../entities/user.entity';

@InputType()
export class UserRo extends OmitType(UserEntity, ['password'] as const) {}
