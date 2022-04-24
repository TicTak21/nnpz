import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPageTitleComponent } from './sales-page-title.component';

describe('SalesPageTitleComponent', () => {
  let component: SalesPageTitleComponent;
  let fixture: ComponentFixture<SalesPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPageTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
