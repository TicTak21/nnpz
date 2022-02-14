import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardTopFivePizzasComponent } from './dashboard-top-five-pizzas.component';

describe('DashboardTopFivePizzasComponent', () => {
  let component: DashboardTopFivePizzasComponent;
  let fixture: ComponentFixture<DashboardTopFivePizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTopFivePizzasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopFivePizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
