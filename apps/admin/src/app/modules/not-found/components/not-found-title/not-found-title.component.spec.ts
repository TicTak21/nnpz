import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundTitleComponent } from './not-found-title.component';

describe('NotFoundTitleComponent', () => {
  let component: NotFoundTitleComponent;
  let fixture: ComponentFixture<NotFoundTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
