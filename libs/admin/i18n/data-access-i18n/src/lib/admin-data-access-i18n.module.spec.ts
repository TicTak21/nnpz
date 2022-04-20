import { async, TestBed } from '@angular/core/testing';
import { AdminDataAccessI18nModule } from './admin-data-access-i18n.module';

describe('AdminDataAccessI18nModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessI18nModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminDataAccessI18nModule).toBeDefined();
  });
});
