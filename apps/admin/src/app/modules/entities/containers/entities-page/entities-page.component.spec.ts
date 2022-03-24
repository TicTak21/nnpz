import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntitiesPageComponent } from './entities-page.component';

describe('EntitiesPageComponent', () => {
  let component: EntitiesPageComponent;
  let fixture: ComponentFixture<EntitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntitiesPageComponent],
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
