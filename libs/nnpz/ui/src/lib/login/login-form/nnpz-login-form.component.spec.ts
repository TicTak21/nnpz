import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NnpzLoginFormComponent } from './nnpz-login-form.component';

describe('NnpzLoginFormComponent', () => {
  let component: NnpzLoginFormComponent;
  let fixture: ComponentFixture<NnpzLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NnpzLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NnpzLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
