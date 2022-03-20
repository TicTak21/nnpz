import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityConfigDialogComponent } from './entity-config-dialog.component';

describe('EntityConfigDialogComponent', () => {
  let component: EntityConfigDialogComponent;
  let fixture: ComponentFixture<EntityConfigDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityConfigDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
