import { LyBadgeModule } from '@alyle/ui/badge';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { HeaderNotificationsComponent } from './header-notifications.component';

describe('HeaderNotificationsComponent', () => {
  let component: HeaderNotificationsComponent;
  let fixture: ComponentFixture<HeaderNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderNotificationsComponent],
      imports: [BaseThemeModule, LyBadgeModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
