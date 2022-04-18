import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiReportTitleComponent } from './report-title.component';

describe('AdminUiReportTitleComponent', () => {
  let component: AdminUiReportTitleComponent;
  let fixture: ComponentFixture<AdminUiReportTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiReportTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiReportTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
