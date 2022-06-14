import { TestBed } from '@angular/core/testing';
import { AdminUiThemeModule } from './admin-theme-ui-theme.module';

describe('AdminUiThemeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiThemeModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiThemeModule).toBeDefined();
  });
});
