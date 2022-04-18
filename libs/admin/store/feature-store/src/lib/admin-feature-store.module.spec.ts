import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureStoreModule } from './admin-feature-store.module';

describe('AdminFeatureStoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureStoreModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureStoreModule).toBeDefined();
  });
});
