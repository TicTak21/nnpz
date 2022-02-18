import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSalesAmountChartComponent } from './dashboard-sales-amount-chart.component';

describe('DashboardSalesAmountChartComponent', () => {
  let component: DashboardSalesAmountChartComponent;
  let fixture: ComponentFixture<DashboardSalesAmountChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardSalesAmountChartComponent],
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
