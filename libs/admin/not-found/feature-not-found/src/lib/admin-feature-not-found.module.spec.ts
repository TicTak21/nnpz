import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureNotFoundModule } from './admin-feature-not-found.module';

describe('AdminFeatureNotFoundModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureNotFoundModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureNotFoundModule).toBeDefined();
  });
});
