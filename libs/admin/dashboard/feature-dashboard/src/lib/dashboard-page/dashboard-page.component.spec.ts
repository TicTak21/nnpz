import { LyGridModule } from '@alyle/ui/grid';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminFeatureDashboardPageComponent } from './dashboard-page.component';

describe('AdminFeatureDashboardPageComponent', () => {
  let component: AdminFeatureDashboardPageComponent;
  let fixture: ComponentFixture<AdminFeatureDashboardPageComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureDashboardPageComponent],
      imports: [LyGridModule, BaseThemeModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
