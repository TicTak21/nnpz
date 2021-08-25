import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { EPizzaSize } from '@shared';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ToppingEntity } from '../../topping/entities/topping.entity';

@Entity({ name: 'pizzas' })
@ObjectType('Pizza')
@InputType('PizzaInput')
export class PizzaEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(_type => ID)
  @ApiProperty()
  id: string;

  @Column('varchar')
  @Field()
  @ApiProperty()
  name: string;

  @Column({ type: 'enum', enum: EPizzaSize, default: EPizzaSize.small })
  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  @ApiProperty()
  size: EPizzaSize;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  @Field({ defaultValue: 0 })
  @ApiProperty()
  price: number;

  @ManyToMany(_type => ToppingEntity, { eager: true, nullable: true })
  @JoinTable({ name: 'pizza_toppings' })
  @Field(_type => [ToppingEntity], { nullable: true, defaultValue: null })
  @ApiProperty()
  toppings: ToppingEntity[];
}

registerEnumType(EPizzaSize, {
  name: 'EPizzaSize',
});
