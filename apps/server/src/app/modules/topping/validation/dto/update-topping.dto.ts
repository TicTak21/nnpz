import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

@InputType()
export class UpdateToppingDto {
  @Field()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;
}
