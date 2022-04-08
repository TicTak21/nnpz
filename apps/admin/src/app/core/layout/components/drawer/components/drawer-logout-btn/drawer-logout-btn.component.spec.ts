import { LyButtonModule } from '@alyle/ui/button';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { DrawerLogoutBtnComponent } from './drawer-logout-btn.component';

describe('DrawerLogoutBtnComponent', () => {
  let component: DrawerLogoutBtnComponent;
  let fixture: ComponentFixture<DrawerLogoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerLogoutBtnComponent],
      imports: [BaseThemeModule, LyButtonModule],
      schemas: [NO_ERRORS_SCHEMA],
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
