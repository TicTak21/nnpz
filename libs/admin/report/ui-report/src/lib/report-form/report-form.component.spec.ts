import { LyFieldModule } from '@alyle/ui/field';
import { LySliderModule } from '@alyle/ui/slider';
import { LyTypographyModule } from '@alyle/ui/typography';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiReportFormComponent } from './report-form.component';

describe('AdminUiReportFormComponent', () => {
  let component: AdminUiReportFormComponent;
  let fixture: ComponentFixture<AdminUiReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiReportFormComponent],
      imports: [
        BaseThemeModule,
        LyFieldModule,
        LyTypographyModule,
        LySliderModule,
        ReactiveFormsModule,
        TranslocoTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
