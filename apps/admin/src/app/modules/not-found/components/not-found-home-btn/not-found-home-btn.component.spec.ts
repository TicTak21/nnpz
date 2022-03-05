import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundHomeBtnComponent } from './not-found-home-btn.component';

describe('NotFoundHomeBtnComponent', () => {
  let component: NotFoundHomeBtnComponent;
  let fixture: ComponentFixture<NotFoundHomeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundHomeBtnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundHomeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
