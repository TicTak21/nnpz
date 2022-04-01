import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotesComponent } from './dashboard-notes.component';

describe('DashboardNotesComponent', () => {
  let component: DashboardNotesComponent;
  let fixture: ComponentFixture<DashboardNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
