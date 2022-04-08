import { LyDialogModule, LyDialogRef } from '@alyle/ui/dialog';
import { LyFieldModule } from '@alyle/ui/field';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '@nnpz/ui';
import { EntityNewFormComponent } from './entity-new-form.component';

describe('EntityNewFormComponent', () => {
  let component: EntityNewFormComponent;
  let fixture: ComponentFixture<EntityNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityNewFormComponent],
      imports: [
        BaseThemeModule,
        LyDialogModule,
        LyFieldModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: LyDialogRef, useValue: {} }],
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
