import { TestBed } from '@angular/core/testing';
import { AdminFeatureOrdersModule } from './admin-feature-orders.module';

describe('AdminFeatureOrdersModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureOrdersModule],
    }).compileComponents();
  });

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureOrdersModule).toBeDefined();
  });
});
