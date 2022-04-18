import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiEntitiesCardComponent } from './entities-card.component';

describe('AdminUiEntitiesCardComponent', () => {
  let component: AdminUiEntitiesCardComponent;
  let fixture: ComponentFixture<AdminUiEntitiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiEntitiesCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiEntitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
