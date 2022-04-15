import { async, TestBed } from '@angular/core/testing';
import { AdminUiSupportModule } from './admin-ui-support.module';

describe('AdminUiSupportModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiSupportModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiSupportModule).toBeDefined();
  });
});
