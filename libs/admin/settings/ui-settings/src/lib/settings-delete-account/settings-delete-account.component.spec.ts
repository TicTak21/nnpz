import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiSettingsDeleteAccountComponent } from './settings-delete-account.component';

describe('AdminUiSettingsDeleteAccountComponent', () => {
  let component: AdminUiSettingsDeleteAccountComponent;
  let fixture: ComponentFixture<AdminUiSettingsDeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsDeleteAccountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiSettingsDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
