import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiSupportTitleComponent } from './support-title.component';

describe('AdminUiSupportTitleComponent', () => {
  let component: AdminUiSupportTitleComponent;
  let fixture: ComponentFixture<AdminUiSupportTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSupportTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiSupportTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
