import { LyCommonModule } from '@alyle/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiDashboardNotesComponent } from './dashboard-notes.component';

describe('AdminUiDashboardNotesComponent', () => {
  let component: AdminUiDashboardNotesComponent;
  let fixture: ComponentFixture<AdminUiDashboardNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDashboardNotesComponent],
      imports: [BaseThemeModule, LyCommonModule, TranslocoTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDashboardNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
