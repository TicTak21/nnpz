import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureI18nModule } from './admin-feature-i18n.module';

describe('AdminFeatureI18nModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureI18nModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureI18nModule).toBeDefined();
  });
});
