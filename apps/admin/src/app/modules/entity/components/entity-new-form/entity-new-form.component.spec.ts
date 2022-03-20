import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityNewFormComponent } from './entity-new-form.component';

describe('EntityNewFormComponent', () => {
  let component: EntityNewFormComponent;
  let fixture: ComponentFixture<EntityNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityNewFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
