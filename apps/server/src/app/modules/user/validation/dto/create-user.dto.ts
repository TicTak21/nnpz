import { EUserRole } from '@nest-ng-pizza/types';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

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

  @Field(_type => EUserRole, { defaultValue: EUserRole.client })
  @IsNotEmpty()
  @IsString()
  @IsEnum(EUserRole)
  role: EUserRole;
}
