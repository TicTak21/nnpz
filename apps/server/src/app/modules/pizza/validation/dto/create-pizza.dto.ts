import { Field, InputType } from '@nestjs/graphql';
import { EPizzaSize } from '@nnpz/types';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

@InputType()
export class CreatePizzaDto {
  @Field()
  name: string;

  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  size: EPizzaSize;

  @Field({ defaultValue: 0 })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  image: string;

  @Field(_type => [String], { defaultValue: [] })
  toppings: string[];
}
