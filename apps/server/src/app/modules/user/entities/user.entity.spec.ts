import { BaseEntity } from '@nnpz/server/app/shared/entities';
import { UserEntity } from './user.entity';

describe('UserEntity', () => {
  let entity: UserEntity;

  beforeEach(() => {
    entity = new UserEntity();
  });

  it('should create the entity', () => {
    expect(entity).toBeTruthy();
  });

  it('should be instance of BaseEntity', () => {
    expect(entity).toBeInstanceOf(BaseEntity);
  });
});
