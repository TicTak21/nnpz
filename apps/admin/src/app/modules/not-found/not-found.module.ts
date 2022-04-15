import { LyButtonModule } from '@alyle/ui/button';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminUiNotFoundModule } from '@nnpz/admin/ui-not-found';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    LyTypographyModule,
    LyButtonModule,
    RouterModule,
    AdminUiNotFoundModule,
  ],
})
export class NotFoundModule {}
