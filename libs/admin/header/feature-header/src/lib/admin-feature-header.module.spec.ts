import { TestBed } from '@angular/core/testing';
import { AdminFeatureHeaderModule } from './admin-feature-header.module';

describe('AdminFeatureHeaderModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureHeaderModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureHeaderModule).toBeDefined();
  });
});
