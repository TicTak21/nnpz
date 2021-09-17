import { BaseEntity } from '../../../shared/entities';

describe('BaseEntity', () => {
  class MockEntity extends BaseEntity {}

  let entity: MockEntity;

  beforeEach(() => {
    entity = new MockEntity();
  });

  it('should create the entity', () => {
    expect(entity).toBeTruthy();
  });

  it('should be instance of BaseEntity', () => {
    expect(entity).toBeInstanceOf(BaseEntity);
  });
});
