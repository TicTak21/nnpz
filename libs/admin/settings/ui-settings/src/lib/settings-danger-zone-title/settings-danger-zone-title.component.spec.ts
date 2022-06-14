import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiSettingsDangerZoneTitleComponent } from './settings-danger-zone-title.component';

describe('AdminUiSettingsDangerZoneTitleComponent', () => {
  let component: AdminUiSettingsDangerZoneTitleComponent;
  let fixture: ComponentFixture<AdminUiSettingsDangerZoneTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsDangerZoneTitleComponent],
      imports: [TranslocoTestingModule],
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
