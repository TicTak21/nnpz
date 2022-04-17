import { LyDrawerModule } from '@alyle/ui/drawer';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminFeatureDrawerComponent } from './drawer.component';

describe('AdminFeatureDrawerComponent', () => {
  let component: AdminFeatureDrawerComponent;
  let fixture: ComponentFixture<AdminFeatureDrawerComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureDrawerComponent],
      imports: [BaseThemeModule, LyDrawerModule],
      providers: [provideMockStore({})],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
