import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiNotificationsPageTitleComponent } from './notifications-page-title.component';

describe('AdminUiNotificationsPageTitleComponent', () => {
  let component: AdminUiNotificationsPageTitleComponent;
  let fixture: ComponentFixture<AdminUiNotificationsPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiNotificationsPageTitleComponent],
      imports: [TranslocoTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiNotificationsPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
