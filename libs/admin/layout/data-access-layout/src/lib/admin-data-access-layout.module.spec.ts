import { TestBed } from '@angular/core/testing';
import { AdminDataAccessLayoutModule } from './admin-data-access-layout.module';

describe('AdminDataAccessLayoutModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessLayoutModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminDataAccessLayoutModule).toBeDefined();
  });
});
