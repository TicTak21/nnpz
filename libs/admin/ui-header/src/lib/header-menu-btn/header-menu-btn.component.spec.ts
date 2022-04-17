import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiHeaderMenuBtnComponent } from './header-menu-btn.component';

describe('AdminUiHeaderMenuBtnComponent', () => {
  let component: AdminUiHeaderMenuBtnComponent;
  let fixture: ComponentFixture<AdminUiHeaderMenuBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiHeaderMenuBtnComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiHeaderMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
