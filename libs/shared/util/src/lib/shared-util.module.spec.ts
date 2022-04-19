import { async, TestBed } from '@angular/core/testing';
import { SharedUtilModule } from './shared-util.module';

describe('SharedUtilModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedUtilModule).toBeDefined();
  });
});
