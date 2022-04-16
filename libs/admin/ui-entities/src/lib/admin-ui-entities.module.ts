import { LyButtonModule } from '@alyle/ui/button';
import { LyCardModule } from '@alyle/ui/card';
import { LyDialogModule } from '@alyle/ui/dialog';
import { LyFieldModule } from '@alyle/ui/field';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminUiEntitiesCardComponent } from './entities-card/entities-card.component';
import { AdminUiEntitiesConfigDialogComponent } from './entities-config-dialog/entities-config-dialog.component';
import { AdminUiEntitiesNewCardComponent } from './entities-new-card/entities-new-card.component';
import { AdminUiEntitiesNewFormComponent } from './entities-new-form/entities-new-form.component';

const COMPONENTS = [
  AdminUiEntitiesCardComponent,
  AdminUiEntitiesConfigDialogComponent,
  AdminUiEntitiesNewCardComponent,
  AdminUiEntitiesNewFormComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LyCardModule,
    LyIconModule,
    LyButtonModule,
    LyTypographyModule,
    LyFieldModule,
    LyDialogModule,
  ],
  exports: [COMPONENTS],
})
export class AdminUiEntitiesModule {}
