import { BaseEntity } from '../../../shared/entities';
import { PizzaEntity } from './pizza.entity';

describe('PizzaEntity', () => {
  let entity: PizzaEntity;

  beforeEach(() => {
    entity = new PizzaEntity();
  });

  it('should create the entity', () => {
    expect(entity).toBeTruthy();
  });

  it('should be instance of BaseEntity', () => {
    expect(entity).toBeInstanceOf(BaseEntity);
  });
});
