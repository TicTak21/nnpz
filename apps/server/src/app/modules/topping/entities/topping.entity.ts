import { IToppingEntity } from '@nest-ng-pizza/types';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('topping')
@ObjectType('Topping')
@InputType('ToppingInput')
export class ToppingEntity implements IToppingEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(_type => ID)
  id: string;

  @Column('varchar', { unique: true })
  @Field()
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  @Field({ defaultValue: 0 })
  price: number;

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
}
