import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { ClassType } from 'type-graphql';

export function AbstractPaginatedList<T>(TItem: ClassType<T>) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field(_type => [TItem])
    data: T[];

    @Field()
    @ApiProperty()
    total: number;

    @Field()
    @ApiProperty()
    perPage: number;

    @Field()
    @ApiProperty()
    currentPage: number;

    @Field()
    @ApiProperty()
    lastPage: number;

    @Field()
    @ApiProperty()
    from: number;

    @Field()
    @ApiProperty()
    to: number;
  }

  return PaginatedResponseClass;
}
