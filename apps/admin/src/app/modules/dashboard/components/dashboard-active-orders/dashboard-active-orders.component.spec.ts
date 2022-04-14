import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { DashboardActiveOrdersComponent } from './dashboard-active-orders.component';

describe('DashboardActiveOrdersComponent', () => {
  let component: DashboardActiveOrdersComponent;
  let fixture: ComponentFixture<DashboardActiveOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardActiveOrdersComponent],
      imports: [BaseThemeModule, LyGridModule],
      schemas: [NO_ERRORS_SCHEMA],
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
