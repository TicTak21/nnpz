import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuBtnComponent } from './header-menu-btn.component';

describe('HeaderMenuBtnComponent', () => {
  let component: HeaderMenuBtnComponent;
  let fixture: ComponentFixture<HeaderMenuBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuBtnComponent ]
    })
    .compileComponents();
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
