import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiSettingsTitleComponent } from './settings-title.component';

describe('AdminUiSettingsTitleComponent', () => {
  let component: AdminUiSettingsTitleComponent;
  let fixture: ComponentFixture<AdminUiSettingsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsTitleComponent],
      imports: [TranslocoTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiSettingsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
