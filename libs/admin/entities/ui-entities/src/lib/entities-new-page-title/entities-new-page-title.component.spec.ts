import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { AdminUiEntitiesNewPageTitleComponent } from './entities-new-page-title.component';

describe('AdminUiEntitiesNewPageTitleComponent', () => {
  let component: AdminUiEntitiesNewPageTitleComponent;
  let fixture: ComponentFixture<AdminUiEntitiesNewPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiEntitiesNewPageTitleComponent],
      imports: [TranslocoTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiEntitiesNewPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
