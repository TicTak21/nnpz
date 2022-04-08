import { LyCommonModule } from '@alyle/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { DashboardSalesAmountChartComponent } from './dashboard-sales-amount-chart.component';

describe('DashboardSalesAmountChartComponent', () => {
  let component: DashboardSalesAmountChartComponent;
  let fixture: ComponentFixture<DashboardSalesAmountChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardSalesAmountChartComponent],
      imports: [BaseThemeModule, LyCommonModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSalesAmountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
