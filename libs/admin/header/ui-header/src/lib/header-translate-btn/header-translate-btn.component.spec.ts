import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiHeaderTranslateBtnComponent } from './header-translate-btn.component';

describe('AdminUiHeaderTranslateBtnComponent', () => {
  let component: AdminUiHeaderTranslateBtnComponent;
  let fixture: ComponentFixture<AdminUiHeaderTranslateBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiHeaderTranslateBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiHeaderTranslateBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
