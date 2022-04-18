import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiDashboardEntityComponent } from './dashboard-entity.component';

describe('AdminUiDashboardEntityComponent', () => {
  let component: AdminUiDashboardEntityComponent;
  let fixture: ComponentFixture<AdminUiDashboardEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDashboardEntityComponent],
      imports: [BaseThemeModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDashboardEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
