import { TestBed } from '@angular/core/testing';
import { AdminFeatureMeModule } from './admin-feature-me.module';

describe('AdminFeatureMeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureMeModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureMeModule).toBeDefined();
  });
});
