import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { LyTypographyModule } from '@alyle/ui/typography';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiEntitiesModule } from '@nnpz/admin/ui-entities';
import { AdminFeatureEntitiesPageComponent } from './entities-page/entities-page.component';
import { AdminFeatureEntitiesNewPageComponent } from './entity-new-page/entities-new-page.component';

@NgModule({
  declarations: [
    AdminFeatureEntitiesPageComponent,
    AdminFeatureEntitiesNewPageComponent,
  ],
  imports: [
    CommonModule,
    AdminUiEntitiesModule,
    LyTypographyModule,
    LyGridModule,
    LyCommonModule,
    DragDropModule,
    RouterModule.forChild([
      { path: '', component: AdminFeatureEntitiesPageComponent },
      { path: 'new', component: AdminFeatureEntitiesNewPageComponent },
    ]),
  ],
})
export class AdminFeatureEntitiesModule {}
