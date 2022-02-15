import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThemeSwitchComponent } from './header-theme-switch.component';

describe('HeaderThemeSwitchComponent', () => {
  let component: HeaderThemeSwitchComponent;
  let fixture: ComponentFixture<HeaderThemeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderThemeSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
