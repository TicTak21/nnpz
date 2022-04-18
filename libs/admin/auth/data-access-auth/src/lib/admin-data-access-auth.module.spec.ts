import { async, TestBed } from '@angular/core/testing';
import { AdminDataAccessAuthModule } from './admin-data-access-auth.module';

describe('AdminDataAccessAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessAuthModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminDataAccessAuthModule).toBeDefined();
  });
});
