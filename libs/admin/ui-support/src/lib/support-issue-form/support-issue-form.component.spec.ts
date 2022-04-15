import { LyFieldModule } from '@alyle/ui/field';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { SupportIssueFormComponent } from './support-issue-form.component';

describe('SupportIssueFormComponent', () => {
  let component: SupportIssueFormComponent;
  let fixture: ComponentFixture<SupportIssueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportIssueFormComponent],
      imports: [BaseThemeModule, LyFieldModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportIssueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
