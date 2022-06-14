import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiSettingsNotificationsTitleComponent } from './settings-notifications-title.component';

describe('AdminUiSettingsNotificationsTitleComponent', () => {
  let component: AdminUiSettingsNotificationsTitleComponent;
  let fixture: ComponentFixture<AdminUiSettingsNotificationsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsNotificationsTitleComponent],
      imports: [TranslocoTestingModule],
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
