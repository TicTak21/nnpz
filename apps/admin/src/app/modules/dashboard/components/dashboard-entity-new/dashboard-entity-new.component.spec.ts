import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { DashboardEntityNewComponent } from './dashboard-entity-new.component';

describe('DashboardEntityNewComponent', () => {
  let component: DashboardEntityNewComponent;
  let fixture: ComponentFixture<DashboardEntityNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEntityNewComponent],
      imports: [BaseThemeModule, LyCommonModule, LyGridModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEntityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
