import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureSalesModule } from './admin-feature-sales.module';

describe('AdminFeatureSalesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureSalesModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureSalesModule).toBeDefined();
  });
});
