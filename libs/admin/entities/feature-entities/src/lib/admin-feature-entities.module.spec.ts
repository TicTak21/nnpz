import { TestBed } from '@angular/core/testing';
import { AdminFeatureEntitiesModule } from './admin-feature-entities.module';

describe('AdminFeatureEntitiesModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureEntitiesModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureEntitiesModule).toBeDefined();
  });
});
