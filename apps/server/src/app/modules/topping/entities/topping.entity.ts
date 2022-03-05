import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@nnpz/server/app/shared/entities';
import { IToppingEntity } from '@nnpz/types';
import { Column, Entity } from 'typeorm';

@Entity('topping')
@ObjectType('Topping')
@InputType('ToppingInput')
export class ToppingEntity extends BaseEntity implements IToppingEntity {
  @Column('varchar', { unique: true })
  @Field()
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  @Field({ defaultValue: 0 })
  price: number;
}
