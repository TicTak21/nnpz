import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiSettingsMuteNotificationsComponent } from './settings-mute-notifications.component';

describe('AdminUiSettingsMuteNotificationsComponent', () => {
  let component: AdminUiSettingsMuteNotificationsComponent;
  let fixture: ComponentFixture<AdminUiSettingsMuteNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsMuteNotificationsComponent],
      imports: [BaseThemeModule, LyCheckboxModule, TranslocoTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      AdminUiSettingsMuteNotificationsComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
