import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiSettingsNotificationsTitleComponent } from './settings-notifications-title.component';

describe('AdminUiSettingsNotificationsTitleComponent', () => {
  let component: AdminUiSettingsNotificationsTitleComponent;
  let fixture: ComponentFixture<AdminUiSettingsNotificationsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsNotificationsTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      AdminUiSettingsNotificationsTitleComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
