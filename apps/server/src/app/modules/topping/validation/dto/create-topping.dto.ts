import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNotEmpty, IsString, Min } from 'class-validator';

@InputType()
export class CreateToppingDto {
  @Field()
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @ApiProperty()
  @IsNotEmpty()
  @IsDecimal({ decimal_digits: '1,2' })
  @Min(0)
  price: number;
}
