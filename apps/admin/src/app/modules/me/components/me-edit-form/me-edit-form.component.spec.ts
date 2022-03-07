import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeEditFormComponent } from './me-edit-form.component';

describe('MeEditFormComponent', () => {
  let component: MeEditFormComponent;
  let fixture: ComponentFixture<MeEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeEditFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
