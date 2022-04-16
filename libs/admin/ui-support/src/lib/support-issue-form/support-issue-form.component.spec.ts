import { LyFieldModule } from '@alyle/ui/field';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiSupportIssueFormComponent } from './support-issue-form.component';

describe('AdminUiSupportIssueFormComponent', () => {
  let component: AdminUiSupportIssueFormComponent;
  let fixture: ComponentFixture<AdminUiSupportIssueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSupportIssueFormComponent],
      imports: [BaseThemeModule, LyFieldModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiSupportIssueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
