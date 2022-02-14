import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardActiveUsersComponent } from './dashboard-active-users.component';

describe('DashboardActiveUsersComponent', () => {
  let component: DashboardActiveUsersComponent;
  let fixture: ComponentFixture<DashboardActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardActiveUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
