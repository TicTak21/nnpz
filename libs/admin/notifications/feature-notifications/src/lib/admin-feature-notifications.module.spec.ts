import { TestBed } from '@angular/core/testing';
import { AdminFeatureNotificationsModule } from './admin-feature-notifications.module';

describe('AdminFeatureNotificationsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureNotificationsModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureNotificationsModule).toBeDefined();
  });
});
