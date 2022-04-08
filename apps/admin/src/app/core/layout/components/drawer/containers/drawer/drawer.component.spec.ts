import { LyDrawerModule } from '@alyle/ui/drawer';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { DrawerComponent } from './drawer.component';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerComponent],
      imports: [BaseThemeModule, LyDrawerModule],
      providers: [provideMockStore({})],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
