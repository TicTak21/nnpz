import { async, TestBed } from '@angular/core/testing';
import { AdminFeatureSettingsModule } from './admin-feature-settings.module';

describe('AdminFeatureSettingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminFeatureSettingsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminFeatureSettingsModule).toBeDefined();
  });
});
