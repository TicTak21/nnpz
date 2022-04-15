import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTerminateSessionsComponent } from './settings-terminate-sessions.component';

describe('SettingsTerminateSessionsComponent', () => {
  let component: SettingsTerminateSessionsComponent;
  let fixture: ComponentFixture<SettingsTerminateSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsTerminateSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTerminateSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
