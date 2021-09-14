import { EPizzaSize, IPizzaEntity } from '@nest-ng-pizza/types';
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
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ToppingEntity } from '../../topping/entities/topping.entity';

@Entity({ name: 'pizza' })
@ObjectType('Pizza')
@InputType('PizzaInput')
export class PizzaEntity implements IPizzaEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(_type => ID)
  id: string;

  @Column('varchar', { unique: true })
  @Field()
  name: string;

  @Column({ type: 'enum', enum: EPizzaSize, default: EPizzaSize.small })
  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  size: EPizzaSize;

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
