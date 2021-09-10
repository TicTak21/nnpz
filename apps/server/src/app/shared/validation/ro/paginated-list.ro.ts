import { Field, ObjectType } from '@nestjs/graphql';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { ClassType } from 'type-graphql';
import { PaginationArgsDto } from '../dto';

export function AbstractPaginatedList<T>(TItem: ClassType<T>) {
  @ObjectType({ isAbstract: true })
  @ApiExtraModels(PaginationArgsDto)
  abstract class PaginatedResponseClass {
    @Field(_type => [TItem])
    @ApiProperty({ type: [TItem] })
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
