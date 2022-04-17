import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderMenuBtnComponent } from './header-menu-btn.component';

describe('HeaderMenuBtnComponent', () => {
  let component: HeaderMenuBtnComponent;
  let fixture: ComponentFixture<HeaderMenuBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMenuBtnComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
