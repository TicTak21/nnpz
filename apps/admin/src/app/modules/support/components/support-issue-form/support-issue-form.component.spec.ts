import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportIssueFormComponent } from './support-issue-form.component';

describe('SupportIssueFormComponent', () => {
  let component: SupportIssueFormComponent;
  let fixture: ComponentFixture<SupportIssueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportIssueFormComponent],
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
