import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ThemeSwitchComponent } from './theme-switch.component';

fdescribe('ThemeSwitchComponent', () => {
  let component: ThemeSwitchComponent;
  let fixture: ComponentFixture<ThemeSwitchComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeSwitchComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
