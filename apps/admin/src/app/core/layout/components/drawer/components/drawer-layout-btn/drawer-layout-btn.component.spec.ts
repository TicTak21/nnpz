import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerLayoutBtnComponent } from './drawer-layout-btn.component';

describe('DrawerLayoutBtnComponent', () => {
  let component: DrawerLayoutBtnComponent;
  let fixture: ComponentFixture<DrawerLayoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerLayoutBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerLayoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
