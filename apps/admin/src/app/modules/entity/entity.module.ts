import { LyOverlayModule } from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyCardModule } from '@alyle/ui/card';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyDialogModule } from '@alyle/ui/dialog';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTooltipModule } from '@alyle/ui/tooltip';
import { LyTypographyModule } from '@alyle/ui/typography';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { EntityConfigDialogComponent } from './components/entity-config-dialog/entity-config-dialog.component';
import { EntityNewFormComponent } from './components/entity-new-form/entity-new-form.component';
import { EntityNewPageComponent } from './containers/entity-new-page/entity-new-page.component';
import { EntityPageComponent } from './containers/entity-page/entity-page.component';
import { EntityRoutingModule } from './entity-routing.module';

@NgModule({
  declarations: [
    EntityPageComponent,
    EntityCardComponent,
    EntityNewPageComponent,
    EntityNewFormComponent,
    EntityConfigDialogComponent,
  ],
  imports: [
    CommonModule,
    EntityRoutingModule,
    LyButtonModule,
    LyCardModule,
    LyIconModule,
    LyGridModule,
    LyTooltipModule,
    DragDropModule,
    LyFieldModule,
    LyTypographyModule,
    ReactiveFormsModule,
    LyOverlayModule,
    LyDialogModule,
    LyCheckboxModule,
  ],
})
export class EntityModule {}
