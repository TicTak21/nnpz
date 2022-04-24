import { LyDialogModule, LyDialogRef } from '@alyle/ui/dialog';
import { LyFieldModule } from '@alyle/ui/field';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiEntitiesNewFormComponent } from './entities-new-form.component';

describe('AdminUiEntitiesNewFormComponent', () => {
  let component: AdminUiEntitiesNewFormComponent;
  let fixture: ComponentFixture<AdminUiEntitiesNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiEntitiesNewFormComponent],
      imports: [
        BaseThemeModule,
        LyDialogModule,
        LyFieldModule,
        ReactiveFormsModule,
        TranslocoTestingModule,
      ],
      providers: [{ provide: LyDialogRef, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiEntitiesNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
