import { EUserRole, IUserEntity } from '@nest-ng-pizza/types';
import {
  Field,
  ID,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
@ObjectType('User')
@InputType('UserInput')
export class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(_type => ID)
  id: string;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  email: string;

  @Column({ type: 'varchar' })
  @Field()
  password: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'now()',
  })
  @Field(_type => Date)
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'now()',
    onUpdate: 'now()',
  })
  @Field(_type => Date)
  updatedAt: string;

  @Column({ type: 'enum', enum: EUserRole, default: EUserRole.client })
  @Field(_type => EUserRole, { defaultValue: EUserRole.client })
  role: EUserRole;
}

registerEnumType(EUserRole, {
  name: 'EUserRole',
});
