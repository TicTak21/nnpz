import { async, TestBed } from '@angular/core/testing';
import { AdminUtilI18nModule } from './admin-util-i18n.module';

describe('AdminUtilI18nModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminUtilI18nModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUtilI18nModule).toBeDefined();
  });
});
