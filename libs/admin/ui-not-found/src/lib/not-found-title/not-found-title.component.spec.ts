import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiNotFoundTitleComponent } from './not-found-title.component';

describe('AdminUiNotFoundTitleComponent', () => {
  let component: AdminUiNotFoundTitleComponent;
  let fixture: ComponentFixture<AdminUiNotFoundTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiNotFoundTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiNotFoundTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
