import { TestBed } from '@angular/core/testing';
import { AdminUiSettingsModule } from './admin-ui-settings.module';

describe('AdminUiSettingsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiSettingsModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiSettingsModule).toBeDefined();
  });
});
