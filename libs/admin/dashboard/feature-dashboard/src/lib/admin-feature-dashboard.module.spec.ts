import { TestBed } from '@angular/core/testing';
import { AdminFeatureDashboardModule } from './admin-feature-dashboard.module';

describe('AdminFeatureDashboardModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureDashboardModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureDashboardModule).toBeDefined();
  });
});
