import { IBaseEntity } from '@nest-ng-pizza/types';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType({ isAbstract: true })
export abstract class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(_type => ID)
  id: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'now()',
  })
  @Field(_type => Date)
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'now()',
    onUpdate: 'now()',
  })
  @Field(_type => Date)
  updatedAt: Date;
}
