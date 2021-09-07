import { InputType } from '@nestjs/graphql';
import { CreateToppingDto } from './create-topping.dto';

@InputType()
export class UpdateToppingDto extends CreateToppingDto {}
