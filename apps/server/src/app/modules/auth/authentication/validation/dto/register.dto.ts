import { Field, InputType } from '@nestjs/graphql';
import { IRegisterDto } from '@nnpz/shared/util';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class RegisterDto implements IRegisterDto {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;
}
