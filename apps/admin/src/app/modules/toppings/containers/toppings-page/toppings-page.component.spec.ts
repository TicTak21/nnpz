import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingsPageComponent } from './toppings-page.component';

describe('ToppingsPageComponent', () => {
  let component: ToppingsPageComponent;
  let fixture: ComponentFixture<ToppingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToppingsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
