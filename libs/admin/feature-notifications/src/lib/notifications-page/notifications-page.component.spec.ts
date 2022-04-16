import { LyCommonModule } from '@alyle/ui';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminFeatureNotificationsPageComponent } from './notifications-page.component';

describe('AdminFeatureNotificationsPageComponent', () => {
  let component: AdminFeatureNotificationsPageComponent;
  let fixture: ComponentFixture<AdminFeatureNotificationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureNotificationsPageComponent],
      imports: [BaseThemeModule, LyCommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureNotificationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
