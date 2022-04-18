import { async, TestBed } from '@angular/core/testing';
import { AdminDataAccessRouterModule } from './admin-data-access-router.module';

describe('AdminDataAccessRouterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminDataAccessRouterModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminDataAccessRouterModule).toBeDefined();
  });
});
