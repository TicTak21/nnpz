import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('topping')
@ObjectType('Topping')
@InputType('ToppingInput')
export class ToppingEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(_type => ID)
  @ApiProperty()
  id: string;

  @Column('varchar', { unique: true })
  @Field()
  @ApiProperty()
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  @Field({ defaultValue: 0 })
  @ApiProperty()
  price: number;
}
