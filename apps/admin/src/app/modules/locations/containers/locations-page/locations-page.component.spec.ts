import { LyCommonModule } from '@alyle/ui';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { LocationsPageComponent } from './locations-page.component';

describe('LocationsPageComponent', () => {
  let component: LocationsPageComponent;
  let fixture: ComponentFixture<LocationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationsPageComponent],
      imports: [BaseThemeModule, LyCommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
