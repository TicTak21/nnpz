import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiDrawerLayoutBtnComponent } from './drawer-layout-btn.component';

describe('AdminUiDrawerLayoutBtnComponent', () => {
  let component: AdminUiDrawerLayoutBtnComponent;
  let fixture: ComponentFixture<AdminUiDrawerLayoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDrawerLayoutBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDrawerLayoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
