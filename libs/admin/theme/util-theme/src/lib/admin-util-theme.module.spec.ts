import { TestBed } from '@angular/core/testing';
import { AdminUtilThemeModule } from './admin-util-theme.module';

describe('AdminUtilThemeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUtilThemeModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUtilThemeModule).toBeDefined();
  });
});
