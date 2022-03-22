import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerDirBtnComponent } from './drawer-dir-btn.component';

describe('DrawerDirBtnComponent', () => {
  let component: DrawerDirBtnComponent;
  let fixture: ComponentFixture<DrawerDirBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerDirBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerDirBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
