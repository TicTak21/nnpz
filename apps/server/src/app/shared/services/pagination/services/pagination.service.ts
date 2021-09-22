import { Injectable } from '@nestjs/common';
import { IPaginationConfig } from '../interfaces';

@Injectable()
export class PaginationService {
  paginate<Entity>(config: IPaginationConfig<Entity>) {
    const {
      queryResult: [entities, count],
      page,
      skip,
      take,
    } = config;

    return {
      total: count,
      perPage: take,
      currentPage: page,
      lastPage: Math.ceil(count / take),
      from: skip,
      to: skip + entities.length,
      data: entities,
    };
  }

  countSkip(page: number, take: number) {
    return (page - 1) * take;
  }
}
