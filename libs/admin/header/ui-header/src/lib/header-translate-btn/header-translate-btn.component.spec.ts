import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTranslateBtnComponent } from './header-translate-btn.component';

describe('HeaderTranslateBtnComponent', () => {
  let component: HeaderTranslateBtnComponent;
  let fixture: ComponentFixture<HeaderTranslateBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTranslateBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTranslateBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
