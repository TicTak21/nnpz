import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiDashboardActiveUsersComponent } from './dashboard-active-users.component';

describe('AdminUiDashboardActiveUsersComponent', () => {
  let component: AdminUiDashboardActiveUsersComponent;
  let fixture: ComponentFixture<AdminUiDashboardActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDashboardActiveUsersComponent],
      imports: [BaseThemeModule, LyGridModule, TranslocoTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDashboardActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
