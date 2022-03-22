import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerLogoutBtnComponent } from './drawer-logout-btn.component';

describe('DrawerLogoutBtnComponent', () => {
  let component: DrawerLogoutBtnComponent;
  let fixture: ComponentFixture<DrawerLogoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerLogoutBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerLogoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
