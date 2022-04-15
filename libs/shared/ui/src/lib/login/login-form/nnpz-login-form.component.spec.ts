import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';
import { LyIconModule } from '@alyle/ui/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '../../theme';
import { NnpzLoginFormComponent } from './nnpz-login-form.component';

describe('NnpzLoginFormComponent', () => {
  let component: NnpzLoginFormComponent;
  let fixture: ComponentFixture<NnpzLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NnpzLoginFormComponent],
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
    fixture = TestBed.createComponent(NnpzLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
