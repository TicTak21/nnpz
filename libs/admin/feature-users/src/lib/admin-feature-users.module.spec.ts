import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureUsersModule } from './admin-feature-users.module';

describe('AdminFeatureUsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureUsersModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureUsersModule).toBeDefined();
  });
});
