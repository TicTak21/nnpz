import { LyCommonModule } from '@alyle/ui';
import { LyTypographyModule } from '@alyle/ui/typography';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminFeatureEntitiesNewPageComponent } from './entities-new-page.component';

describe('AdminFeatureEntitiesNewPageComponent', () => {
  let component: AdminFeatureEntitiesNewPageComponent;
  let fixture: ComponentFixture<AdminFeatureEntitiesNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureEntitiesNewPageComponent],
      imports: [BaseThemeModule, LyCommonModule, LyTypographyModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureEntitiesNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
