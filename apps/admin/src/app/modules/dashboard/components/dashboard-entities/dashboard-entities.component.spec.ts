import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEntitiesComponent } from './dashboard-entities.component';

describe('DashboardEntitiesComponent', () => {
  let component: DashboardEntitiesComponent;
  let fixture: ComponentFixture<DashboardEntitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEntitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
