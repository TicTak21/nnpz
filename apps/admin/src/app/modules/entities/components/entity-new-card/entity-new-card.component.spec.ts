import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityNewCardComponent } from './entity-new-card.component';

describe('EntityNewCardComponent', () => {
  let component: EntityNewCardComponent;
  let fixture: ComponentFixture<EntityNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityNewCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
