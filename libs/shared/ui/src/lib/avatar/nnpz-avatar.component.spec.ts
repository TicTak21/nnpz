import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyIconModule } from '@alyle/ui/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseThemeModule } from '../theme';
import { NnpzAvatarComponent } from './nnpz-avatar.component';

describe('NnpzAvatarComponent', () => {
  let component: NnpzAvatarComponent;
  let fixture: ComponentFixture<NnpzAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NnpzAvatarComponent],
      imports: [
        BaseThemeModule,
        HttpClientTestingModule,
        RouterTestingModule,
        LyAvatarModule,
        LyIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NnpzAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
