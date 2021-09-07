import { InputType } from '@nestjs/graphql';
import { CreatePizzaDto } from './create-pizza.dto';

@InputType()
export class UpdatePizzaDto extends CreatePizzaDto {}
