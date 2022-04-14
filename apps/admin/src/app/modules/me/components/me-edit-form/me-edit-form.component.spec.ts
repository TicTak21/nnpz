import { LyFieldModule } from '@alyle/ui/field';
import { LyTypographyModule } from '@alyle/ui/typography';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { MeEditFormComponent } from './me-edit-form.component';

describe('MeEditFormComponent', () => {
  let component: MeEditFormComponent;
  let fixture: ComponentFixture<MeEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeEditFormComponent],
      imports: [
        BaseThemeModule,
        LyFieldModule,
        LyTypographyModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
