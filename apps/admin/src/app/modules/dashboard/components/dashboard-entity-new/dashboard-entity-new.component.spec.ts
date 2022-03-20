import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEntityNewComponent } from './dashboard-entity-new.component';

describe('DashboardEntityNewComponent', () => {
  let component: DashboardEntityNewComponent;
  let fixture: ComponentFixture<DashboardEntityNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardEntityNewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEntityNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
