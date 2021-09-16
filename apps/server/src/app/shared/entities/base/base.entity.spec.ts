import { BaseEntity } from '../../../shared/entities';

describe('BaseEntity', () => {
  let entity: BaseEntity;

  beforeEach(() => {
    class MockEntity extends BaseEntity {}

    entity = new MockEntity();
  });

  it('should create the entity', () => {
    expect(entity).toBeTruthy();
  });

  it('should be instance of BaseEntity', () => {
    expect(entity).toBeInstanceOf(BaseEntity);
  });
});
