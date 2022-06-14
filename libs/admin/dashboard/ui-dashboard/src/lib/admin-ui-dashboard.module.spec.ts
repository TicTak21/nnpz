import { TestBed } from '@angular/core/testing';
import { AdminUiDashboardModule } from './admin-ui-dashboard.module';

describe('AdminUiDashboardModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiDashboardModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiDashboardModule).toBeDefined();
  });
});
