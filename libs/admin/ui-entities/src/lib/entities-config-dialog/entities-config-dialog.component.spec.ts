import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyDialogModule, LyDialogRef } from '@alyle/ui/dialog';
import { LyFieldModule } from '@alyle/ui/field';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { AdminUiEntitiesConfigDialogComponent } from './entities-config-dialog.component';

describe('AdminUiEntitiesConfigDialogComponent', () => {
  let component: AdminUiEntitiesConfigDialogComponent;
  let fixture: ComponentFixture<AdminUiEntitiesConfigDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUiEntitiesConfigDialogComponent],
      imports: [
        BaseThemeModule,
        LyDialogModule,
        LyFieldModule,
        ReactiveFormsModule,
        LyCheckboxModule,
      ],
      providers: [
        {
          provide: LyDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUiEntitiesConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
