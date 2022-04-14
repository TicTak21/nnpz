import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { SettingsMuteNotificationsComponent } from './settings-mute-notifications.component';

describe('SettingsMuteNotificationsComponent', () => {
  let component: SettingsMuteNotificationsComponent;
  let fixture: ComponentFixture<SettingsMuteNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsMuteNotificationsComponent],
      imports: [BaseThemeModule, LyCheckboxModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMuteNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
