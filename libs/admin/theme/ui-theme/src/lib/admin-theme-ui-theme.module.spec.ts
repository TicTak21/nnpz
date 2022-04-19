import { async, TestBed } from '@angular/core/testing';
import { AdminThemeUiThemeModule } from './admin-theme-ui-theme.module';

describe('AdminThemeUiThemeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminThemeUiThemeModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminThemeUiThemeModule).toBeDefined();
  });
});
