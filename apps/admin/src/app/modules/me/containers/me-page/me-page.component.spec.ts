import { LyCommonModule } from '@alyle/ui';
import { LyTabsModule } from '@alyle/ui/tabs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { MePageComponent } from './me-page.component';

describe('MePageComponent', () => {
  let component: MePageComponent;
  let fixture: ComponentFixture<MePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MePageComponent],
      imports: [BaseThemeModule, LyCommonModule, LyTabsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
