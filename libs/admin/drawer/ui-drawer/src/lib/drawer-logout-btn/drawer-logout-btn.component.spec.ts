import { LyButtonModule } from '@alyle/ui/button';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiDrawerLogoutBtnComponent } from './drawer-logout-btn.component';

describe('AdminUiDrawerLogoutBtnComponent', () => {
  let component: AdminUiDrawerLogoutBtnComponent;
  let fixture: ComponentFixture<AdminUiDrawerLogoutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDrawerLogoutBtnComponent],
      imports: [BaseThemeModule, LyButtonModule, TranslocoTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDrawerLogoutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
