import { TManyAndCount } from '../types';

export interface IPaginationConfig<Entity> {
  queryResult: TManyAndCount<Entity>;
  page: number;
  skip: number;
  take: number;
}
