import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTitleComponent } from './support-title.component';

describe('SupportTitleComponent', () => {
  let component: SupportTitleComponent;
  let fixture: ComponentFixture<SupportTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
