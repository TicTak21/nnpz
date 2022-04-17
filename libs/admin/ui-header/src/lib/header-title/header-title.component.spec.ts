import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUiHeaderTitleComponent } from './header-title.component';

describe('AdminUiHeaderTitleComponent', () => {
  let component: AdminUiHeaderTitleComponent;
  let fixture: ComponentFixture<AdminUiHeaderTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiHeaderTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
