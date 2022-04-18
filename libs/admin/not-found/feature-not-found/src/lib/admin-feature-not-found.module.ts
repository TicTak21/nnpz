import { LyCommonModule } from '@alyle/ui';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDataAccessRouterModule } from '@nnpz/admin/data-access-router';
import { AdminUiNotFoundModule } from '@nnpz/admin/ui-not-found';
import { AdminFeauterNotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [AdminFeauterNotFoundPageComponent],
  imports: [
    LyCommonModule,
    AdminDataAccessRouterModule,
    AdminUiNotFoundModule,
    RouterModule.forChild([
      { path: '', component: AdminFeauterNotFoundPageComponent },
    ]),
  ],
})
export class AdminFeatureNotFoundModule {}
