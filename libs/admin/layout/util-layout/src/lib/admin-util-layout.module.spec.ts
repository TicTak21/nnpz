import { TestBed } from '@angular/core/testing';
import { AdminUtilLayoutModule } from './admin-util-layout.module';

describe('AdminUtilLayoutModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminUtilLayoutModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminUtilLayoutModule).toBeDefined();
  });
});
