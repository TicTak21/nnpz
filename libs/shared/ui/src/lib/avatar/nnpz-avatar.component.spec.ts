import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NnpzAvatarComponent } from './nnpz-avatar.component';

describe('NnpzAvatarComponent', () => {
  let component: NnpzAvatarComponent;
  let fixture: ComponentFixture<NnpzAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NnpzAvatarComponent],
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
