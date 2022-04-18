import { LyCardModule } from '@alyle/ui/card';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiEntitiesNewCardComponent } from './entities-new-card.component';

describe('AdminUiEntitiesNewCardComponent', () => {
  let component: AdminUiEntitiesNewCardComponent;
  let fixture: ComponentFixture<AdminUiEntitiesNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiEntitiesNewCardComponent],
      imports: [BaseThemeModule, LyCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiEntitiesNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
