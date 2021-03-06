import { LyCommonModule, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomGlobalVariables } from '@nnpz/admin/util-theme';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiSettingsPageComponent } from './settings-page.component';

describe('AdminUiSettingsPageComponent', () => {
  let component: AdminUiSettingsPageComponent;
  let fixture: ComponentFixture<AdminUiSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiSettingsPageComponent],
      imports: [BaseThemeModule, LyGridModule, LyDividerModule, LyCommonModule],
      providers: [
        { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
