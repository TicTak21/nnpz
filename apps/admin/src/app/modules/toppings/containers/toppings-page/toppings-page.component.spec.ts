import { LyCommonModule } from '@alyle/ui';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { ToppingsPageComponent } from './toppings-page.component';

describe('ToppingsPageComponent', () => {
  let component: ToppingsPageComponent;
  let fixture: ComponentFixture<ToppingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToppingsPageComponent],
      imports: [BaseThemeModule, LyCommonModule],
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
