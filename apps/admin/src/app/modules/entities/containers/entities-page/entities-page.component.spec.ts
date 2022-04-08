import { LyGridModule } from '@alyle/ui/grid';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/ui';
import { EntitiesPageComponent } from './entities-page.component';

describe('EntitiesPageComponent', () => {
  let component: EntitiesPageComponent;
  let fixture: ComponentFixture<EntitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntitiesPageComponent],
      imports: [BaseThemeModule, LyGridModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
