import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { DashboardActiveUsersComponent } from './dashboard-active-users.component';

describe('DashboardActiveUsersComponent', () => {
  let component: DashboardActiveUsersComponent;
  let fixture: ComponentFixture<DashboardActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardActiveUsersComponent],
      imports: [BaseThemeModule, LyGridModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
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
