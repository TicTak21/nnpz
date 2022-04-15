import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiNotFoundHomeBtnComponent } from './not-found-home-btn.component';

describe('AdminUiNotFoundHomeBtnComponent', () => {
  let component: AdminUiNotFoundHomeBtnComponent;
  let fixture: ComponentFixture<AdminUiNotFoundHomeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiNotFoundHomeBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiNotFoundHomeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
