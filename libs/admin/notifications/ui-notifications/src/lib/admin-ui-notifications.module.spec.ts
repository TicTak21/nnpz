import { TestBed } from '@angular/core/testing';
import { AdminUiNotificationsModule } from './admin-ui-notifications.module';

describe('AdminUiNotificationsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiNotificationsModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiNotificationsModule).toBeDefined();
  });
});
