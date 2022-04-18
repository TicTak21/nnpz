import { LyButtonModule } from '@alyle/ui/button';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiNotFoundHomeBtnComponent } from './not-found-home-btn/not-found-home-btn.component';
import { AdminUiNotFoundRouteComponent } from './not-found-route/not-found-route.component';
import { AdminUiNotFoundTitleComponent } from './not-found-title/not-found-title.component';

const COMPONENTS = [
  AdminUiNotFoundHomeBtnComponent,
  AdminUiNotFoundRouteComponent,
  AdminUiNotFoundTitleComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, LyTypographyModule, LyButtonModule, RouterModule],
  exports: [COMPONENTS],
})
export class AdminUiNotFoundModule {}
