import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NnpzPizzaCardComponent } from './nnpz-pizza-card.component';

describe('NnpzPizzaCardComponent', () => {
  let component: NnpzPizzaCardComponent;
  let fixture: ComponentFixture<NnpzPizzaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NnpzPizzaCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NnpzPizzaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
