import { LyGridModule } from '@alyle/ui/grid';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      imports: [LyGridModule, BaseThemeModule],
      providers: [provideMockStore({})],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
