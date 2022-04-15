import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyIconModule } from '@alyle/ui/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '../../theme';
import { NnpzRegisterFormComponent } from './nnpz-register-form.component';

describe('NnpzRegisterFormComponent', () => {
  let component: NnpzRegisterFormComponent;
  let fixture: ComponentFixture<NnpzRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NnpzRegisterFormComponent],
      imports: [
        BaseThemeModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        LyIconModule,
        LyFieldModule,
        LyButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NnpzRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
