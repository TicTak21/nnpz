import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureToppingsModule } from './admin-feature-toppings.module';

describe('AdminFeatureToppingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureToppingsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureToppingsModule).toBeDefined();
  });
});
