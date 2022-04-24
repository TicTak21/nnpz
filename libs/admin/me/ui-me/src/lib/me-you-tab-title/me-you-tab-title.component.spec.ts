import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiMeYouTabTitleComponent } from './me-you-tab-title.component';

describe('AdminUiMeYouTabTitleComponent', () => {
  let component: AdminUiMeYouTabTitleComponent;
  let fixture: ComponentFixture<AdminUiMeYouTabTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiMeYouTabTitleComponent],
      imports: [TranslocoTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiMeYouTabTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
