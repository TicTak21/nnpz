import { LyCommonModule } from '@alyle/ui';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminFeatureUsersPageComponent } from './users-page.component';

describe('AdminFeatureUsersPageComponent', () => {
  let component: AdminFeatureUsersPageComponent;
  let fixture: ComponentFixture<AdminFeatureUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureUsersPageComponent],
      imports: [BaseThemeModule, LyCommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
