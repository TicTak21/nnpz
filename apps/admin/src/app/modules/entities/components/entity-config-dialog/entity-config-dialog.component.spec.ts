import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyDialogModule, LyDialogRef } from '@alyle/ui/dialog';
import { LyFieldModule } from '@alyle/ui/field';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseThemeModule } from '@nnpz/shared/ui';
import { EntityConfigDialogComponent } from './entity-config-dialog.component';

describe('EntityConfigDialogComponent', () => {
  let component: EntityConfigDialogComponent;
  let fixture: ComponentFixture<EntityConfigDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntityConfigDialogComponent],
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
    fixture = TestBed.createComponent(EntityConfigDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
