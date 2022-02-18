import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActiveOrdersComponent } from './dashboard-active-orders.component';

describe('DashboardActiveOrdersComponent', () => {
  let component: DashboardActiveOrdersComponent;
  let fixture: ComponentFixture<DashboardActiveOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardActiveOrdersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActiveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
