import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeRoutingModule } from './me-routing.module';
import { MePageComponent } from './containers/me-page/me-page.component';

@NgModule({
  declarations: [MePageComponent],
  imports: [CommonModule, MeRoutingModule],
})
export class MeModule {}
