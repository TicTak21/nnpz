import { TestBed } from '@angular/core/testing';
import { AdminFeatureLayoutModule } from './admin-feature-layout.module';

describe('AdminFeatureLayoutModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureLayoutModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureLayoutModule).toBeDefined();
  });
});
