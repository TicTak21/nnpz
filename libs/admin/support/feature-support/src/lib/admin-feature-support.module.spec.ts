import { TestBed } from '@angular/core/testing';
import { AdminFeatureSupportModule } from './admin-feature-support.module';

describe('AdminFeatureSupportModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureSupportModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureSupportModule).toBeDefined();
  });
});
