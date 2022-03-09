import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NnpzRegisterFormComponent } from './nnpz-register-form.component';

describe('NnpzRegisterFormComponent', () => {
  let component: NnpzRegisterFormComponent;
  let fixture: ComponentFixture<NnpzRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NnpzRegisterFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NnpzRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
