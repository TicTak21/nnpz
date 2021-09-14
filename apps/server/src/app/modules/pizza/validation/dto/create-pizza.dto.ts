import { EPizzaSize } from '@nest-ng-pizza/types';
import { Field, InputType } from '@nestjs/graphql';
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

  @Field(_type => [String], { defaultValue: [] })
  toppings: string[];
}
