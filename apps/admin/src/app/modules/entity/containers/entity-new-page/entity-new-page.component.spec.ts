import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityNewPageComponent } from './entity-new-page.component';

describe('EntityNewPageComponent', () => {
  let component: EntityNewPageComponent;
  let fixture: ComponentFixture<EntityNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
