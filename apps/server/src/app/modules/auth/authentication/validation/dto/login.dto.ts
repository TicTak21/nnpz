import { Field, InputType } from '@nestjs/graphql';
import { ILoginDto } from '@nnpz/types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginDto implements ILoginDto {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;
}
