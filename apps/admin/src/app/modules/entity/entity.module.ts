import { LyButtonModule } from '@alyle/ui/button';
import { LyCardModule } from '@alyle/ui/card';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTooltipModule } from '@alyle/ui/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import { EntityPageComponent } from './containers/entity-page/entity-page.component';
import { EntityRoutingModule } from './entity-routing.module';

@NgModule({
  declarations: [EntityPageComponent, EntityCardComponent],
  imports: [
    CommonModule,
    EntityRoutingModule,
    LyButtonModule,
    LyCardModule,
    LyIconModule,
    LyGridModule,
    LyTooltipModule,
    DragDropModule,
  ],
})
export class EntityModule {}
