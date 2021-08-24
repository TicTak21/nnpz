import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { EPizzaSize } from '@shared';
import { ToppingEntity } from '../../topping/entities/topping.entity';

@ObjectType('Pizza')
@InputType('PizzaInput')
export class PizzaEntity {
  @Field(_type => ID)
  @ApiProperty()
  id: string;

  @Field()
  @ApiProperty()
  name: string;

  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  @ApiProperty()
  size: EPizzaSize;

  @Field({ defaultValue: 0 })
  @ApiProperty()
  price: number;

  @Field(_type => [ToppingEntity], { nullable: true, defaultValue: null })
  @ApiProperty()
  toppings: ToppingEntity[];
}

registerEnumType(EPizzaSize, {
  name: 'EPizzaSize',
});
