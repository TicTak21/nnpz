import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiSettingsTerminateSessionsComponent } from './settings-terminate-sessions.component';

describe('AdminUiSettingsTerminateSessionsComponent', () => {
  let component: AdminUiSettingsTerminateSessionsComponent;
  let fixture: ComponentFixture<AdminUiSettingsTerminateSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsTerminateSessionsComponent],
      imports: [TranslocoTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      AdminUiSettingsTerminateSessionsComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
