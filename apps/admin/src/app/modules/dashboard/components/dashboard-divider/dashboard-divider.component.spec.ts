import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDividerComponent } from './dashboard-divider.component';

describe('DashboardDividerComponent', () => {
  let component: DashboardDividerComponent;
  let fixture: ComponentFixture<DashboardDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
