import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsNumber, Min } from 'class-validator';

@InputType()
export class CreateOrderDto {
  @Field()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  total: number;

  @Field()
  @IsNotEmpty()
  @IsBoolean()
  complete: boolean;
}
