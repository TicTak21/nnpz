import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class PaginationArgsDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Field()
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @Field()
  take?: number = 10;
}
