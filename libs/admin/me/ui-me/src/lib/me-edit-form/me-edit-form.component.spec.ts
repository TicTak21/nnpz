import { LyFieldModule } from '@alyle/ui/field';
import { LyTypographyModule } from '@alyle/ui/typography';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiMeEditFormComponent } from './me-edit-form.component';

describe('AdminUiMeEditFormComponent', () => {
  let component: AdminUiMeEditFormComponent;
  let fixture: ComponentFixture<AdminUiMeEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiMeEditFormComponent],
      imports: [
        BaseThemeModule,
        LyFieldModule,
        LyTypographyModule,
        ReactiveFormsModule,
        TranslocoTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiMeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
