import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { SupportPageComponent } from './support-page.component';

describe('SupportPageComponent', () => {
  let component: SupportPageComponent;
  let fixture: ComponentFixture<SupportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportPageComponent],
      imports: [BaseThemeModule, LyCommonModule, LyGridModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
