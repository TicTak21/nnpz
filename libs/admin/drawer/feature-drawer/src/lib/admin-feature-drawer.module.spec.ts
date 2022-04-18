import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureDrawerModule } from './admin-feature-drawer.module';

describe('AdminFeatureDrawerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureDrawerModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureDrawerModule).toBeDefined();
  });
});
