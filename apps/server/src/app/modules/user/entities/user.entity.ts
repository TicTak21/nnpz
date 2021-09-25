import { EUserRole, IUserEntity } from '@nest-ng-pizza/types';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/entities';

@Entity({ name: 'user' })
@ObjectType('User')
@InputType('UserInput')
export class UserEntity extends BaseEntity implements IUserEntity {
  @Column({ type: 'varchar', length: 100 })
  @Field()
  email: string;

  @Column({ type: 'varchar' })
  @Field()
  password: string;

  @Column({ type: 'enum', enum: EUserRole, default: EUserRole.client })
  @Field(_type => EUserRole, { defaultValue: EUserRole.client })
  role: EUserRole;

  @Column({ type: 'varchar', nullable: true })
  @Field({ nullable: true })
  token: string;
}

registerEnumType(EUserRole, {
  name: 'EUserRole',
});
