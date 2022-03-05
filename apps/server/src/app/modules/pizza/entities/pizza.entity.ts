import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { ToppingEntity } from '@nnpz/server/app/modules/topping/entities/topping.entity';
import { BaseEntity } from '@nnpz/server/app/shared/entities';
import { EPizzaSize, IPizzaEntity } from '@nnpz/types';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity({ name: 'pizza' })
@ObjectType('Pizza')
@InputType('PizzaInput')
export class PizzaEntity extends BaseEntity implements IPizzaEntity {
  @Column('varchar', { unique: true })
  @Field()
  name: string;

  @Column({ type: 'enum', enum: EPizzaSize, default: EPizzaSize.small })
  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  size: EPizzaSize;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  @Field({ defaultValue: 0 })
  price: number;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  image?: string;

  @Column({ type: 'varchar', nullable: true })
  @Field({ nullable: true })
  slug?: string;

  @Column({ type: 'int', nullable: false })
  @Field({ defaultValue: 0 })
  itemsSold: number;

  @ManyToMany(_type => ToppingEntity, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  @JoinTable({
    name: 'pizza_topping_junction',
    joinColumn: {
      name: 'pizza_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: { name: 'topping_id', referencedColumnName: 'id' },
  })
  @Field(_type => [ToppingEntity], { nullable: true, defaultValue: null })
  toppings?: ToppingEntity[];
}

registerEnumType(EPizzaSize, {
  name: 'EPizzaSize',
});
