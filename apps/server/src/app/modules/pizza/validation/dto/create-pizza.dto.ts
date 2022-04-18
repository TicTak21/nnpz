import { Field, InputType } from '@nestjs/graphql';
import { EPizzaSize } from '@nnpz/shared/util';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

@InputType()
export class CreatePizzaDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  @IsNotEmpty()
  @IsEnum(EPizzaSize)
  size: EPizzaSize;

  @Field({ defaultValue: 0 })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  image?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  slug?: string;

  @Field({ defaultValue: 0 })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  itemsSold: number;

  @Field(_type => [String], { defaultValue: [] })
  @IsOptional()
  @IsString({ each: true })
  toppings?: string[];
}
