import { LyCommonModule } from '@alyle/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { ReportPageComponent } from './report-page.component';

describe('ReportPageComponent', () => {
  let component: ReportPageComponent;
  let fixture: ComponentFixture<ReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportPageComponent],
      imports: [BaseThemeModule, LyCommonModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
