import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { ClassType } from 'type-graphql';

export function AbstractPaginatedList<T>(TItem: ClassType<T>) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field(_type => [TItem])
    @ApiProperty({ type: [TItem] })
    data: T[];

    @Field()
    total: number;

    @Field()
    perPage: number;

    @Field()
    currentPage: number;

    @Field()
    lastPage: number;

    @Field()
    from: number;

    @Field()
    to: number;
  }

  return PaginatedResponseClass;
}
