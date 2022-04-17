import { LyCommonModule } from '@alyle/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiDashboardSalesAmountChartComponent } from './dashboard-sales-amount-chart.component';

describe('AdminUiDashboardSalesAmountChartComponent', () => {
  let component: AdminUiDashboardSalesAmountChartComponent;
  let fixture: ComponentFixture<AdminUiDashboardSalesAmountChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDashboardSalesAmountChartComponent],
      imports: [BaseThemeModule, LyCommonModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      AdminUiDashboardSalesAmountChartComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
