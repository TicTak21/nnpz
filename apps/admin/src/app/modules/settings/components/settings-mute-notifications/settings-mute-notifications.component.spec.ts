import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsMuteNotificationsComponent } from './settings-mute-notifications.component';

describe('SettingsMuteNotificationsComponent', () => {
  let component: SettingsMuteNotificationsComponent;
  let fixture: ComponentFixture<SettingsMuteNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsMuteNotificationsComponent],
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
