import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeDeleteComponent } from './me-delete.component';

describe('MeDeleteComponent', () => {
  let component: MeDeleteComponent;
  let fixture: ComponentFixture<MeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeDeleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
