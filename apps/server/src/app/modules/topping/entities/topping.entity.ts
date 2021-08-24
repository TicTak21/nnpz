import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType('Topping')
@InputType('ToppingInput')
export class ToppingEntity {
  @Field(_type => ID)
  @ApiProperty()
  id: string;

  @Field()
  @ApiProperty()
  name: string;

  @Field({ defaultValue: 0 })
  @ApiProperty()
  price: number;
}
