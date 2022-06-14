import { TestBed } from '@angular/core/testing';
import { AdminDataAccessThemeModule } from './admin-data-access-theme.module';

describe('AdminDataAccessThemeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessThemeModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminDataAccessThemeModule).toBeDefined();
  });
});
