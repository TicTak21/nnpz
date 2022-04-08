import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { DashboardDividerComponent } from './dashboard-divider.component';

describe('DashboardDividerComponent', () => {
  let component: DashboardDividerComponent;
  let fixture: ComponentFixture<DashboardDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDividerComponent],
      imports: [BaseThemeModule, LyCommonModule, LyGridModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
