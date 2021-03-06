import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiMeEditTabTitleComponent } from './me-edit-tab-title.component';

describe('AdminUiMeEditTabTitleComponent', () => {
  let component: AdminUiMeEditTabTitleComponent;
  let fixture: ComponentFixture<AdminUiMeEditTabTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiMeEditTabTitleComponent],
      imports: [TranslocoTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiMeEditTabTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
