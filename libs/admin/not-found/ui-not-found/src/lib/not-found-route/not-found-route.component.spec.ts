import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiNotFoundRouteComponent } from './not-found-route.component';

describe('AdminUiNotFoundRouteComponent', () => {
  let component: AdminUiNotFoundRouteComponent;
  let fixture: ComponentFixture<AdminUiNotFoundRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiNotFoundRouteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiNotFoundRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
