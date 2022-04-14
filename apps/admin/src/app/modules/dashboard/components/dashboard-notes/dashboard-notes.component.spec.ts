import { LyCommonModule } from '@alyle/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { DashboardNotesComponent } from './dashboard-notes.component';

describe('DashboardNotesComponent', () => {
  let component: DashboardNotesComponent;
  let fixture: ComponentFixture<DashboardNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNotesComponent],
      imports: [BaseThemeModule, LyCommonModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
