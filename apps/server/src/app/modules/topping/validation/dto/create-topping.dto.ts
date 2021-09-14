import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

@InputType()
export class CreateToppingDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;
}
