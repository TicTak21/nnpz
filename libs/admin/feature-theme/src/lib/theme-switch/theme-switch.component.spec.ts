import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AdminUiThemeSwitchComponent } from './theme-switch.component';

fdescribe('AdminUiThemeSwitchComponent', () => {
  let component: AdminUiThemeSwitchComponent;
  let fixture: ComponentFixture<AdminUiThemeSwitchComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiThemeSwitchComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
