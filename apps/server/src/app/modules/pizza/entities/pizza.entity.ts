import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

// TODO: move to the shared libs/shared/interfaces
enum EPizzaSize {
  small = 'sm',
  medium = 'md',
  large = 'lg',
}

@ObjectType('Pizza')
@InputType('PizzaInput')
export class PizzaEntity {
  @Field(_type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ defaultValue: EPizzaSize.small })
  size: EPizzaSize;

  @Field({ defaultValue: 0 })
  price: number;
}
