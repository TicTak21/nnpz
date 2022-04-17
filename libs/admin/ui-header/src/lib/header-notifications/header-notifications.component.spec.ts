import { LyBadgeModule } from '@alyle/ui/badge';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiHeaderNotificationsComponent } from './header-notifications.component';

describe('AdminUiHeaderNotificationsComponent', () => {
  let component: AdminUiHeaderNotificationsComponent;
  let fixture: ComponentFixture<AdminUiHeaderNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiHeaderNotificationsComponent],
      imports: [BaseThemeModule, LyBadgeModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiHeaderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
