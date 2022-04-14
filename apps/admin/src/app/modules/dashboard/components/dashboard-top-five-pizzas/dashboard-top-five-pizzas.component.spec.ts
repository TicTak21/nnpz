import { LyCommonModule } from '@alyle/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { DashboardTopFivePizzasComponent } from './dashboard-top-five-pizzas.component';

describe('DashboardTopFivePizzasComponent', () => {
  let component: DashboardTopFivePizzasComponent;
  let fixture: ComponentFixture<DashboardTopFivePizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTopFivePizzasComponent],
      imports: [BaseThemeModule, LyCommonModule],
      schemas: [NO_ERRORS_SCHEMA],
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
