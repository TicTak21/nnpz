import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql';
import { EPizzaSize } from '@shared';

@ObjectType('Pizza')
@InputType('PizzaInput')
export class PizzaEntity {
  @Field(_type => ID)
  id: string;

  @Field()
  name: string;

  @Field(_type => EPizzaSize, { defaultValue: EPizzaSize.small })
  size: EPizzaSize;

  @Field({ defaultValue: 0 })
  price: number;
}

registerEnumType(EPizzaSize, {
  name: 'EPizzaSize',
});
