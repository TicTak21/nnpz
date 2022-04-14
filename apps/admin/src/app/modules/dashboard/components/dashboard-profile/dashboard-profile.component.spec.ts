import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { DashboardProfileComponent } from './dashboard-profile.component';

describe('DashboardProfileComponent', () => {
  let component: DashboardProfileComponent;
  let fixture: ComponentFixture<DashboardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardProfileComponent],
      imports: [BaseThemeModule, LyCommonModule, LyGridModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
