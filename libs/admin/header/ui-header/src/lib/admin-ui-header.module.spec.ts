import { TestBed } from '@angular/core/testing';
import { AdminUiHeaderModule } from './admin-ui-header.module';

describe('AdminUiHeaderModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUiHeaderModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUiHeaderModule).toBeDefined();
  });
});
