import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingPageComponent } from './topping-page.component';

describe('ToppingPageComponent', () => {
  let component: ToppingPageComponent;
  let fixture: ComponentFixture<ToppingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToppingPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
