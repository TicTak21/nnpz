import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeProfileComponent } from './me-profile.component';

describe('MeProfileComponent', () => {
  let component: MeProfileComponent;
  let fixture: ComponentFixture<MeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeProfileComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
