import {
  LyHammerGestureConfig,
  LyTheme2,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
} from '@alyle/ui';
import { MinimaDark, MinimaLight } from '@alyle/ui/themes/minima';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StoreModule,
        EffectsModule,
      ],
      providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
        StyleRenderer,
        LyTheme2,
        { provide: LY_THEME_NAME, useValue: 'minima-dark' },
        { provide: LY_THEME, useClass: MinimaLight, multi: true },
        { provide: LY_THEME, useClass: MinimaDark, multi: true },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
