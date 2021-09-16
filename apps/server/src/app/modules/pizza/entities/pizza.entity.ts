import { EPizzaSize, IPizzaEntity } from '@nest-ng-pizza/types';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../../shared/entities';
import { ToppingEntity } from '../../topping/entities/topping.entity';

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
  toppings: ToppingEntity[];
}

registerEnumType(EPizzaSize, {
  name: 'EPizzaSize',
});
