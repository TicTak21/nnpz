import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '@nnpz/server/app/shared/entities';
import { IOrderEntity } from '@nnpz/types';
import { Column, Entity } from 'typeorm';

@Entity('order')
@ObjectType('Order')
@InputType('OrderInput')
export class OrderEntity extends BaseEntity implements IOrderEntity {
  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  @Field({ defaultValue: 0 })
  total: number;

  @Column({ type: 'boolean', default: false })
  @Field({ defaultValue: false })
  complete: boolean;
}
