import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { DashboardEntityComponent } from './dashboard-entity.component';

describe('DashboardEntityComponent', () => {
  let component: DashboardEntityComponent;
  let fixture: ComponentFixture<DashboardEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEntityComponent],
      imports: [BaseThemeModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
