import { BaseEntity } from '../../../shared/entities';
import { ToppingEntity } from './topping.entity';

describe('ToppingEntity', () => {
  let entity: ToppingEntity;

  beforeEach(() => {
    entity = new ToppingEntity();
  });

  it('should create the entity', () => {
    expect(entity).toBeTruthy();
  });

  it('should be instance of BaseEntity', () => {
    expect(entity).toBeInstanceOf(BaseEntity);
  });
});
