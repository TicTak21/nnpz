import { InputType, OmitType } from '@nestjs/graphql';
import { UserEntity } from '@nnpz/server/app/modules/user/entities/user.entity';

@InputType()
export class UserRo extends OmitType(UserEntity, ['password'] as const) {}
