import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [NotFoundComponent, NotFoundPageComponent],
  imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
