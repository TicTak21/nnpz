import { TestBed } from '@angular/core/testing';
import { AdminFeatureThemeModule } from './admin-feature-theme.module';

describe('AdminFeatureThemeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureThemeModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureThemeModule).toBeDefined();
  });
});
