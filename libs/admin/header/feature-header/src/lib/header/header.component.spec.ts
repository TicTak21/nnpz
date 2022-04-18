import { LyToolbarModule } from '@alyle/ui/toolbar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminFeatureHeaderComponent } from './header.component';

describe('AdminFeatureHeaderComponent', () => {
  let component: AdminFeatureHeaderComponent;
  let fixture: ComponentFixture<AdminFeatureHeaderComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureHeaderComponent],
      imports: [BaseThemeModule, LyToolbarModule],
      providers: [provideMockStore({})],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeatureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
