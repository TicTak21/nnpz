import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Field()
  @ApiProperty()
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Field()
  @ApiProperty()
  take?: number = 10;
}
