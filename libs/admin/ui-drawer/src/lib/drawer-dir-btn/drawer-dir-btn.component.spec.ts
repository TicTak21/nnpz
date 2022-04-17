import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiDrawerDirBtnComponent } from './drawer-dir-btn.component';

describe('AdminUiDrawerDirBtnComponent', () => {
  let component: AdminUiDrawerDirBtnComponent;
  let fixture: ComponentFixture<AdminUiDrawerDirBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDrawerDirBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDrawerDirBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
