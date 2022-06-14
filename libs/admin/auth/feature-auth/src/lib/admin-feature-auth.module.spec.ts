import { TestBed } from '@angular/core/testing';
import { AdminFeatureAuthModule } from './admin-feature-auth.module';

describe('AdminFeatureAuthModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureAuthModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureAuthModule).toBeDefined();
  });
});
