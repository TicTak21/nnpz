import { LyCommonModule, LY_THEME_GLOBAL_VARIABLES } from '@alyle/ui';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { CustomGlobalVariables } from '../../../../core/theme/config';
import { SettingsPageComponent } from './settings-page.component';

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsPageComponent],
      imports: [BaseThemeModule, LyGridModule, LyDividerModule, LyCommonModule],
      providers: [
        { provide: LY_THEME_GLOBAL_VARIABLES, useClass: CustomGlobalVariables },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
