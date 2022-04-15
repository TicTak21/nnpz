import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AdminFeauterNotFoundPageComponent } from './not-found-page.component';

describe('AdminFeauterNotFoundPageComponent', () => {
  let component: AdminFeauterNotFoundPageComponent;
  let fixture: ComponentFixture<AdminFeauterNotFoundPageComponent>;
  let _store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeauterNotFoundPageComponent],
      providers: [provideMockStore({})],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    _store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeauterNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
