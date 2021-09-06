import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { EPizzaSize } from '@shared';

@InputType()
export class CreatePizzaDto {
  @Field()
  @ApiProperty()
  name: string;

  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  @ApiProperty()
  size: EPizzaSize;

  @Field({ defaultValue: 0 })
  @ApiProperty()
  price: number;

  @Field(_type => [String], { defaultValue: [] })
  @ApiProperty()
  toppings: string[];
}
