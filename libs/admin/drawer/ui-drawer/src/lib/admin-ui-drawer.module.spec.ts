import { TestBed } from '@angular/core/testing';
import { AdminUiDrawerModule } from './admin-ui-drawer.module';

describe('AdminUiDrawerModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiDrawerModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiDrawerModule).toBeDefined();
  });
});
