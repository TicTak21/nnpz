import { LyButtonModule } from '@alyle/ui/button';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundHomeBtnComponent } from './components/not-found-home-btn/not-found-home-btn.component';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';
import { NotFoundTitleComponent } from './components/not-found-title/not-found-title.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    NotFoundRouteComponent,
    NotFoundTitleComponent,
    NotFoundHomeBtnComponent,
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    LyTypographyModule,
    LyButtonModule,
    RouterModule,
  ],
})
export class NotFoundModule {}
