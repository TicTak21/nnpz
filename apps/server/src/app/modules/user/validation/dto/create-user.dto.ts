import { Field, InputType } from '@nestjs/graphql';
import { EUserRole } from '@nnpz/shared/types';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;

  @Field()
  @IsOptional()
  @IsString()
  accessToken?: string;

  @Field(_type => EUserRole, { defaultValue: EUserRole.client })
  @IsNotEmpty()
  @IsString()
  @IsEnum(EUserRole)
  role: EUserRole;
}
