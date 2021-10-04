import { InputType, PartialType } from '@nestjs/graphql';
import { CreateToppingDto } from './create-topping.dto';

@InputType()
export class UpdateToppingDto extends PartialType(CreateToppingDto) {}
