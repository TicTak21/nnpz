import { LyCommonModule } from '@alyle/ui';
import { LyTypographyModule } from '@alyle/ui/typography';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { EntityNewPageComponent } from './entity-new-page.component';

describe('EntityNewPageComponent', () => {
  let component: EntityNewPageComponent;
  let fixture: ComponentFixture<EntityNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityNewPageComponent],
      imports: [BaseThemeModule, LyCommonModule, LyTypographyModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
