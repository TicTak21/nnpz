import { async, TestBed } from '@angular/core/testing';
import { AdminUiMeModule } from './admin-ui-me.module';

describe('AdminUiMeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiMeModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiMeModule).toBeDefined();
  });
});
