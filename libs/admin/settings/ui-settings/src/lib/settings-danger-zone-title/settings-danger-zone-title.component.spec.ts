import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiSettingsDangerZoneTitleComponent } from './settings-danger-zone-title.component';

describe('AdminUiSettingsDangerZoneTitleComponent', () => {
  let component: AdminUiSettingsDangerZoneTitleComponent;
  let fixture: ComponentFixture<AdminUiSettingsDangerZoneTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsDangerZoneTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiSettingsDangerZoneTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
