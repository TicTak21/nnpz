import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiDashboardEntityNewComponent } from './dashboard-entity-new.component';

describe('AdminUiDashboardEntityNewComponent', () => {
  let component: AdminUiDashboardEntityNewComponent;
  let fixture: ComponentFixture<AdminUiDashboardEntityNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiDashboardEntityNewComponent],
      imports: [BaseThemeModule, LyCommonModule, LyGridModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiDashboardEntityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
