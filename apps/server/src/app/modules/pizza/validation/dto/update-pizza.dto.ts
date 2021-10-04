import { InputType, PartialType } from '@nestjs/graphql';
import { CreatePizzaDto } from './create-pizza.dto';

@InputType()
export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {}
