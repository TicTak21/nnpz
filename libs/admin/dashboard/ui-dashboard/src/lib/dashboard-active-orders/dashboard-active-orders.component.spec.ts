import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiDashboardActiveOrdersComponent } from './dashboard-active-orders.component';

describe('AdminUiDashboardActiveOrdersComponent', () => {
  let component: AdminUiDashboardActiveOrdersComponent;
  let fixture: ComponentFixture<AdminUiDashboardActiveOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDashboardActiveOrdersComponent],
      imports: [BaseThemeModule, LyGridModule, TranslocoTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDashboardActiveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
